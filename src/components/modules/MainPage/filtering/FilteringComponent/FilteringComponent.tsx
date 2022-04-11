import { useEffect, useState } from 'react';
import { EnumToArray } from '../../../../../utils/enumToArray';
import CheckboxDropdown from '../../../../common/CheckboxDropdown';
import { Project } from '../../../../../models/project';
import { ProjectType } from '../projectEnums';
import ProjectsList from '../ProjectsList';
import useProjects from '../useProject';
import {
  Wrapper,
  FiltersWrapper,
  FilterTitle,
  Container,
  ChipsList,
  ChipsListItem,
} from './StyledFilteringComponent';
import { Opportunity } from '../../../../../models/opportunity';
import { SkillLevel } from '../../../../../models/level';
import MultiRangeDropDown from '../../../../common/MultiRangeDropdown';

interface Props {
  projects: Project[];
  opportunities: Opportunity[];
}

export default function FilteringComponent({ projects, opportunities }: Props) {
  const [commitment, setCommitment] = useState({ min: 0, max: 1 });
  const {
    filteredProjects,
    projectsLoaded,
    commitmentsLoaded,
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
    fetchProjects,
  } = useProjects();

  useEffect(() => {
    if (projects && !projectsLoaded) {
      fetchProjects(projects);
    }
  }, [projects, fetchProjects, projectsLoaded]);

  const getCommitments = (opportunities: Opportunity[]) => {
    const commitments = opportunities.map((o) => o.commitmentHoursPerWeek);
    if (commitments && commitments.length > 0) {
      const min = Math.min(...commitments);
      const max = Math.max(...commitments);
      setCommitment({ min, max });
    }
  };

  useEffect(() => {
    if (opportunities && !opportunitiesLoaded) {
      fetchOpportunities(opportunities);
      getCommitments(opportunities);
    }
  }, [opportunities, fetchOpportunities, opportunitiesLoaded, getCommitments]);

  return (
    <Wrapper>
      <FiltersWrapper>
        <FilterTitle>Filters</FilterTitle>
        <Container>
          <CheckboxDropdown
            title='Type'
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

          {commitmentsLoaded && (
            <MultiRangeDropDown
              title='Commitment'
              min={commitment.min ?? 0}
              max={commitment.max ?? 0}
              onChange={handleCommitmentChange}
            />
          )}
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

          {/* {projectParams.commitment &&
            projectParams.commitment.map((item, index) => (
              <ChipsListItem
                key={`commitment${index + 1}`}
                onClick={() => handleRemoveCommitment(item)}
              >
                <p>{item}</p>
                <button type='button'>x</button>
              </ChipsListItem>
            ))} */}
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
