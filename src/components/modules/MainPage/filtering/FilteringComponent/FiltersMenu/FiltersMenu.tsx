import CheckboxList from '@components/common/CheckboxList';
import Collapsible from '@components/common/Collapsible';
import { EnumToArray } from '@utils/enumToArray';
import { SkillLevel } from 'src/models/level';
import { Opportunity } from 'src/models/opportunity';
import { ProjectParams } from 'src/models/projectFilters';
import { ProjectType } from '../../projectEnums';
import {
  CloseButton,
  CloseIcon,
  Container,
  FilterButton,
  FilterMenu,
  Header,
  ResetButton,
  Section,
  SectionTitle,
} from './StyledFilterMenu';

interface Props {
  isVisible: boolean;
  opportunities: Opportunity[];
  projectParams: ProjectParams;
  handlePlatformChange: (value: any) => void;
  handleOpportunityChange: (value: any) => void;
  handleLevelChange: (value: any) => void;
  resetFilters: () => void;
  onClose: () => void;
}

export default function FiltersMenu({
  isVisible,
  opportunities = [],
  projectParams,
  handleLevelChange,
  handleOpportunityChange,
  handlePlatformChange,
  resetFilters,
  onClose,
}: Props) {
  const handleClose = () => {
    resetFilters();
    onClose();
  };
  return (
    <FilterMenu visible={isVisible}>
      <Container>
        <Header>
          <ResetButton onClick={resetFilters}>Reset</ResetButton>
          <p>Filters</p>
          <CloseButton onClick={handleClose}>
            <CloseIcon
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </CloseIcon>
          </CloseButton>
        </Header>

        <Section>
          <SectionTitle>Level</SectionTitle>
          <CheckboxList
            title='Level'
            keyProperty={'name'}
            items={EnumToArray(SkillLevel)}
            onChange={handleLevelChange}
            selectedItems={projectParams.level}
          />
          {/* <List>
            {EnumToArray(SkillLevel).map((opportunity, index) => (
              <ListItem key={index}>
                <CheckboxContainer>
                  <Checkbox type='checkbox' name='' id='' />
                  <CheckMark className='checkmark' />
                  {opportunity.name}
                </CheckboxContainer>
              </ListItem>
            ))}
          </List> */}
        </Section>

        <Section>
          <SectionTitle>Platform or Independent</SectionTitle>
          <CheckboxList
            title='Platform or Independent'
            keyProperty={'name'}
            items={EnumToArray(ProjectType)}
            onChange={handlePlatformChange}
            selectedItems={projectParams.projectType}
          />
          {/* <List>
            {EnumToArray(ProjectType).map((opportunity, index) => (
              <ListItem key={index}>
                <CheckboxContainer>
                  <Checkbox type='checkbox' name='' id='' />
                  <CheckMark className='checkmark' />
                  {opportunity.name}
                </CheckboxContainer>
              </ListItem>
            ))}
          </List> */}
        </Section>

        <Section>
          <Collapsible title='Positions' transparent>
            <CheckboxList
              title='Positions'
              keyProperty={'title'}
              items={opportunities}
              onChange={handleOpportunityChange}
              selectedItems={projectParams.opportunity}
            />
            {/* <List>
              {opportunities.map((opportunity, index) => (
                <ListItem key={index}>
                  <CheckboxContainer>
                    <Checkbox type='checkbox' name='' id='' />
                    <CheckMark className='checkmark' />
                    {opportunity.title}
                  </CheckboxContainer>
                </ListItem>
              ))}
            </List> */}
          </Collapsible>
          {/* <SectionTitle>Position</SectionTitle>
          <List>
            {opportunities.map((opportunity, index) => (
              <ListItem key={index}>
                <CheckboxContainer>
                  <Checkbox type='checkbox' name='' id='' />
                  <CheckMark className='checkmark' />
                  {opportunity.title}
                </CheckboxContainer>
              </ListItem>
            ))}
          </List> */}
        </Section>

        <FilterButton onClick={onClose}>Apply Filters</FilterButton>
      </Container>
    </FilterMenu>
  );
}
