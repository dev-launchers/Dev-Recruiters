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
  CommitmentSection,
  FilterMenuButton,
} from './StyledFilteringComponent';
import { Opportunity } from '../../../../../models/opportunity';
import { SkillLevel } from '../../../../../models/level';
import SearchComponent from '../SearchComponent';
import Slider from '@components/common/Slider';
import FiltersMenu from './FiltersMenu';
import styled from 'styled-components';

export interface FilteringComponentProps {
  projects: Project[];
  opportunities: Opportunity[];
}

export default function FilteringComponent({
  projects,
  opportunities,
}: FilteringComponentProps) {
  const [commitment, setCommitment] = useState({ min: 0, max: 0 });
  const [Mobile, setMobile] = useState(false);
  const [visible, setVisible] = useState(false);
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
    resetFilters,
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

      //setCommitmentsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (opportunities && !opportunitiesLoaded) {
      fetchOpportunities(opportunities);
      getCommitments(opportunities);
    }
  }, [opportunities, fetchOpportunities, opportunitiesLoaded, getCommitments]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isMobile = window.matchMedia('(max-width: 768px)').matches;
      setMobile(isMobile);
    }
  }, []);

  return (
    <Wrapper>
      <FiltersWrapper>
        <Container>
          {!Mobile ? (
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
          ) : (
            <>
              <FiltersMenu
                resetFilters={resetFilters}
                projectParams={projectParams}
                handleLevelChange={handleLevelChange}
                handleOpportunityChange={handleOpportunityChange}
                handlePlatformChange={handlePlatformChange}
                opportunities={opportunities}
                isVisible={visible}
                onClose={() => setVisible(false)}
              />
            </>
          )}

          {commitment.max > 0 && (
            <CommitmentSection>
              <SectionTitle Mobile={true}>Time Commitment</SectionTitle>
              <Slider
                min={commitment.min ?? 0}
                max={commitment.max > commitment.min ? commitment.max : 10}
                onChange={(value) =>
                  handleCommitmentChange({ min: 1, max: value })
                }
                prefix='hrs'
                initialValue={commitment.max}
              />
            </CommitmentSection>
          )}
          <FilterMenuButton onClick={() => setVisible(true)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
              />
            </svg>
            Filters
          </FilterMenuButton>
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
