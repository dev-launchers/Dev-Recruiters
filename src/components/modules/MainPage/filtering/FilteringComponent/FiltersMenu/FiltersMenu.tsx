import CheckboxList from '@components/common/CheckboxList';
import Collapsible from '@components/common/Collapsible';
import { EnumToArray } from '@utils/enumToArray';
import { SkillLevel } from 'src/models/level';
import { Opportunity } from 'src/models/opportunity';
import { ProjectParams } from 'src/models/projectFilters';
import styled from 'styled-components';
import { ProjectType } from '../../projectEnums';
import useProjects from '../../useProject';

interface Props {
  isVisible: boolean;
  opportunities: Opportunity[];
  projectParams: ProjectParams;
  handlePlatformChange: (value: any) => void;
  handleOpportunityChange: (value: any) => void;
  handleLevelChange: (value: any) => void;
  onClose: () => void;
}

const InitialParams = {
  projectType: [],
  opportunity: [],
  level: [],
  maxCommit: 0,
  searchTerm: '',
};

export default function FiltersMenu({
  isVisible,
  opportunities = [],
  projectParams,
  handleLevelChange,
  handleOpportunityChange,
  handlePlatformChange,
  onClose,
}: Props) {
  return (
    <FilterMenu visible={isVisible}>
      <Container>
        <Header>
          <ResetButton>Reset</ResetButton>
          <p>Filters</p>
          <CloseButton onClick={onClose}>
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
          <Collapsible title='Positions'>
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

        <FilterButton>Apply Filters</FilterButton>
      </Container>
    </FilterMenu>
  );
}

const FilterMenu = styled.div<{ visible: boolean }>`
  font-family: ${({ theme }) => theme.fonts.normal};
  position: fixed;
  top: 0;
  left: 0;
  transform: translateX(${(props) => (props.visible ? '0' : '-100%')});
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.White};
  background: ${({ theme }) => theme.colors.Black};
  z-index: 10;
  transition: all 300ms ease-in-out;
  overflow-y: auto;
  overflow-x: hidden;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.SonicSilver};

  & p {
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 29px;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.NEUTRAL_2};
    padding: 0;
    margin: 0;
  }
`;

const ResetButton = styled.button`
  font-family: ${({ theme }) => theme.fonts.normal};
  font-size: 16px;
  background: transparent;
  color: ${({ theme }) => theme.colors.LightGray};
  border: none;
`;

const CloseButton = styled.button`
  background: ${({ theme }) => theme.colors.Gray};
  border: none;
  border-radius: 10px;
  height: 40px;
  width: 40px;
`;

const CloseIcon = styled.svg`
  color: ${({ theme }) => theme.colors.White};
  height: 100%;
  width: 100%;
`;

const Section = styled.div`
  padding: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.SonicSilver};
`;

const SectionTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.normal};
  font-style: normal;
  font-weight: 700;
  font-size: 21.2644px;
  line-height: 29px;
  text-transform: capitalize;
  margin: 0;
  padding: 0;
  margin-bottom: 15px;
`;

const FilterButton = styled.button`
  width: 90%;
  background: ${({ theme }) => theme.colors.Gray};
  border: none;
  border-radius: 10px;
  padding: 10px;
  margin: 10px auto;
  margin-top: auto;

  font-family: ${({ theme }) => theme.fonts.normal};
  font-style: normal;
  font-weight: 700;
  font-size: 21.2644px;
  line-height: 29px;
  text-transform: capitalize;
`;
