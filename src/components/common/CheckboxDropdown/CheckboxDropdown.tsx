import { MutableRefObject, useEffect, useRef, useState } from "react";
import Checkbox from "../Checkbox";
import {
  Wrapper,
  Toggle,
  Icon,
  ListContainer,
  List,
  ListItem,
  Title,
} from "./StyledCheckboxDropdown";

/**
 * Takes an array of object/string and return selected items
 * @param title the dropdown list label
 * @param items  array string/object  (object => must provide nameProperty, valueProperty is optional)
 * @param keyProperty  the value to display as checkbox label
 * @param valueProperty  the return value of checkbox
 * Ex {prop1, prop2, prop3} => (key=prop1, value= prop3) => {prop1, prop3}
 * @param onChange return an array of checked items
 * @returns (key, value) => Value , (ket, !value) => key, (!key,!value) => item
 */

interface Props {
  title: string;
  keyProperty?: any | undefined;
  valueProperty?: any | undefined;
  items: any[];
  selectedItems?: any[];
  onChange: (value: any) => void;
}

export default function CheckboxDropdown({
  title,
  items,
  keyProperty,
  valueProperty,
  selectedItems = [],
  onChange,
}: Props) {
  const node = useRef(null);
  const [addedItems, setAddedItems] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleOnSelectItem = (value: any) => {
    let items = [...addedItems];
    var item = keyProperty
      ? valueProperty
        ? value[valueProperty]
        : value[keyProperty]
      : value;
    if (items.includes(item)) {
      items = items.filter((i) => i !== item);
    } else {
      items = [...items, item];
    }
    setAddedItems(items);
    onChange(items);
  };

  const isChecked = (value: any) => {
    const item = keyProperty
      ? valueProperty
        ? value[valueProperty]
        : value[keyProperty]
      : value;

    return selectedItems
      ? selectedItems.some((i) => i === item)
      : addedItems.some((i) => i === item);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  useOutsideClick(node, handleCloseMenu);

  return (
    <Wrapper ref={node}>
      <Toggle type="button" onClick={() => setIsOpen((prev) => !prev)}>
        <Title>{title}</Title>
        <Icon viewBox="0 0 24 24" height={24} width={24}>
          <polyline
            points={isOpen ? "6 15 12 9 18 15" : "6 9 12 15 18 9"}
            stroke="black"
          ></polyline>
        </Icon>
      </Toggle>

      <ListContainer isOpen={isOpen}>
        <List>
          {items.map((item, index) => (
            <ListItem key={index} value={item} checked={isChecked(item)}>
              <Checkbox
                label={keyProperty ? item[keyProperty] : item}
                id={`${title}${item}${index}`}
                checked={isChecked(item)}
                onChange={() => handleOnSelectItem(item)}
                checkedBg="#C3C0C0"
              />
            </ListItem>
          ))}
        </List>
      </ListContainer>
    </Wrapper>
  );
}

/**
 * Check of outside clicks
 * @param callback a callback function to execute when an outside click is detected
 */

function useOutsideClick(ref: MutableRefObject<any>, callback: () => void) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback, ref]);
}
