import { useCallback, useEffect, useState } from 'react';
import { Project } from '../../../../../models/project';
import { ProjectType } from '../projectEnums';
import ProjectsList from '../ProjectsList';
import useProjects from '../useProject';
import { EnumToArray } from '@utils/enumToArray';
import CheckboxDropdown from '@components/common/CheckboxDropdown';
import {
  Wrapper,
  FiltersWrapper,
  SectionTitle,
  Container,
  ChipsList,
  ChipsListItem,
  DropDownContainer,
  Section,
} from './StyledFilteringComponent';
import { Opportunity } from '../../../../../models/opportunity';
import { SkillLevel } from '../../../../../models/level';
import SearchComponent from '../SearchComponent';
import MultiRangeSlider from '@components/common/MultiRangeSlider';

interface Props {
  projects: Project[];
  opportunities: Opportunity[];
}

export default function FilteringComponent({ projects, opportunities }: Props) {
  const [commitment, setCommitment] = useState({ min: 0, max: 0 });
  const [commitmentsLoaded, setCommitmentsLoaded] = useState(false);
  const {
    filteredProjects,
    projectsLoaded,
    opportunitiesLoaded,
    projectParams,
    fetchOpportunities,
    handlePlatformChange,
    handleRemovePlatform,
    handleOpportunityChange,
    handleRemoveOpportunity,
    handleLevelChange,
    handleRemoveLevel,
    handleCommitmentChange,
    handleSearchTermChange,
    fetchProjects,
  } = useProjects();

  useEffect(() => {
    if (projects && !projectsLoaded) {
      fetchProjects(projects);
    }
  }, [projects, fetchProjects, projectsLoaded]);

  const getCommitments = useCallback((opportunities: Opportunity[]) => {
    const commitments = opportunities.map((o) => o.commitmentHoursPerWeek);
    if (commitments && commitments.length > 0) {
      const min = Math.min(...commitments);
      const max = Math.max(...commitments);
      setCommitment({ min, max });
      setCommitmentsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (opportunities && !opportunitiesLoaded) {
      fetchOpportunities(opportunities);
      getCommitments(opportunities);
    }
  }, [opportunities, fetchOpportunities, opportunitiesLoaded, getCommitments]);

  return (
    <Wrapper>
      <FiltersWrapper>
        <Container>
          <Section>
            <SectionTitle>Filters</SectionTitle>
            <DropDownContainer>
              <CheckboxDropdown
                title='Platform or Independent'
                keyProperty={'name'}
                items={EnumToArray(ProjectType)}
                onChange={handlePlatformChange}
                selectedItems={projectParams.projectType}
              />
              {opportunitiesLoaded && (
                <CheckboxDropdown
                  title='Positions'
                  keyProperty={'title'}
                  items={opportunities}
                  onChange={handleOpportunityChange}
                  selectedItems={projectParams.opportunity}
                />
              )}

              <CheckboxDropdown
                title='Level'
                keyProperty={'name'}
                items={EnumToArray(SkillLevel)}
                onChange={handleLevelChange}
                selectedItems={projectParams.level}
              />
            </DropDownContainer>
          </Section>

          <Section Mobile={true}>
            <SectionTitle Mobile={true}>Time Commitment</SectionTitle>

            {commitmentsLoaded && (
              <MultiRangeSlider
                min={commitment.min ?? 0}
                max={commitment.max ?? 10}
                onChange={handleCommitmentChange}
              />
            )}
          </Section>

          <Section>
            <SectionTitle>Search</SectionTitle>
            <SearchComponent
              value={projectParams.searchTerm}
              onChange={handleSearchTermChange}
            />
          </Section>
        </Container>

        <ChipsList>
          {projectParams.opportunity &&
            projectParams.opportunity.map((item, index) => (
              <ChipsListItem
                onClick={() => handleRemoveOpportunity(item)}
                key={`position${index + 1}`}
              >
                <p>{item}</p>
                <button type='button'>x</button>
              </ChipsListItem>
            ))}
          {projectParams.projectType &&
            projectParams.projectType.map((item, index) => (
              <ChipsListItem
                onClick={() => handleRemovePlatform(item)}
                key={`platform${index + 1}`}
              >
                <p>{item}</p>
                <button type='button'>x</button>
              </ChipsListItem>
            ))}
          {projectParams.level &&
            projectParams.level.map((item, index) => (
              <ChipsListItem
                onClick={() => handleRemoveLevel(SkillLevel[item])}
                key={`level${index + 1}`}
              >
                <p>{item}</p>
                <button type='button'>x</button>
              </ChipsListItem>
            ))}
        </ChipsList>
      </FiltersWrapper>

      {projectsLoaded && (
        <ProjectsList
          projects={filteredProjects}
          projectsLoaded={projectsLoaded}
        />
      )}
    </Wrapper>
  );
}
