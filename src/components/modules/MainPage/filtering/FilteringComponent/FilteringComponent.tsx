import { useEffect, useState } from "react";
import { EnumToArray } from "@utils/enumToArray";
import CheckboxDropdown from "@components/common/CheckboxDropdown";
import { Project } from "../project";
import { PlatformType, PositionLevel } from "../projectEnums";
import ProjectsList from "../ProjectsList";
import useProjects from "../useProject";
import {
  Wrapper,
  FiltersWrapper,
  FilterTitle,
  Container,
  ChipsList,
  ChipsListItem,
} from "./StyledFilteringComponent";

interface Props {
  projects: Project[];
}

export default function FilteringComponent({ projects }: Props) {
  const {
    filteredProjects,
    projectsLoaded,
    commitments,
    commitmentsLoaded,
    positions,
    positionsLoaded,
    projectParams,
    handlePlatformChange,
    handleRemovePlatform,
    handlePositionChange,
    handleRemovePosition,
    handleLevelChange,
    handleRemoveLevel,
    handleCommitmentChange,
    handleRemoveCommitment,
    fetchProjects,
  } = useProjects();

  useEffect(() => {
    if (projects && !projectsLoaded) {
      fetchProjects(projects);
    }
  }, [projects, fetchProjects, projectsLoaded]);

  return (
    <Wrapper>
      <FiltersWrapper>
        <FilterTitle>Filters</FilterTitle>
        <Container>
          <CheckboxDropdown
            title="Platform"
            keyProperty={"name"}
            items={EnumToArray(PlatformType)}
            onChange={handlePlatformChange}
            selectedItems={projectParams.platform}
          />
          {positionsLoaded && (
            <CheckboxDropdown
              title="Positions"
              items={positions}
              onChange={handlePositionChange}
              selectedItems={projectParams.position}
            />
          )}

          <CheckboxDropdown
            title="Level"
            keyProperty={"name"}
            items={EnumToArray(PositionLevel)}
            onChange={handleLevelChange}
            selectedItems={projectParams.level}
          />

          {commitmentsLoaded && (
            <CheckboxDropdown
              title="Commitment"
              items={commitments}
              onChange={handleCommitmentChange}
              selectedItems={projectParams.commitment}
            />
          )}
        </Container>

        <ChipsList>
          {projectParams.position &&
            projectParams.position.map((item, index) => (
              <ChipsListItem
                onClick={() => handleRemovePosition(item)}
                key={`position${index + 1}`}
              >
                <p>{item}</p>
                <button type="button">x</button>
              </ChipsListItem>
            ))}
          {projectParams.platform &&
            projectParams.platform.map((item, index) => (
              <ChipsListItem
                onClick={() => handleRemovePlatform(item)}
                key={`platform${index + 1}`}
              >
                <p>{item}</p>
                <button type="button">x</button>
              </ChipsListItem>
            ))}
          {projectParams.level &&
            projectParams.level.map((item, index) => (
              <ChipsListItem
                onClick={() => handleRemoveLevel(item)}
                key={`level${index + 1}`}
              >
                <p>{item}</p>
                <button type="button">x</button>
              </ChipsListItem>
            ))}

          {projectParams.commitment &&
            projectParams.commitment.map((item, index) => (
              <ChipsListItem
                key={`commitment${index + 1}`}
                onClick={() => handleRemoveCommitment(item)}
              >
                <p>{item}</p>
                <button type="button">x</button>
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
