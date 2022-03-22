import { useEffect, useState } from "react";
import { EnumToArray } from "../../../../../utils/enumToArray";
import CheckboxDropdown from "../../../../common/CheckboxDropdown";
import { ProjectParams } from "../project";
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

export default function FilteringComponent() {
  const [projectParams, setProjectParams] = useState<ProjectParams>({
    platform: [],
    position: [],
    level: [],
    commitment: [],
  });
  const {
    filteredProjects: projects,
    projectsLoaded,
    commitments,
    commitmentsLoaded,
    positions,
    positionsLoaded,
    SetProjectParams: setParams,
  } = useProjects();

  const handlePlatformChange = (value: string[]) => {
    setProjectParams({ ...projectParams, platform: value });
  };

  const handleRemovePlatform = (value: string) => {
    const platform = projectParams.platform.filter((p) => p !== value);
    setProjectParams({ ...projectParams, platform });
  };

  const handlePositionChange = (value: string[]) => {
    setProjectParams({ ...projectParams, position: value });
  };

  const handleRemovePosition = (value: string) => {
    const position = projectParams.position.filter((p) => p !== value);
    setProjectParams({ ...projectParams, position });
  };

  const handleLevelChange = (value: string[]) => {
    setProjectParams({ ...projectParams, level: value });
  };

  const handleRemoveLevel = (value: string) => {
    const level = projectParams.level.filter((p) => p !== value);
    setProjectParams({ ...projectParams, level });
  };

  const handleCommitmentChange = (value: string[]) => {
    setProjectParams({ ...projectParams, commitment: value });
  };

  const handleRemoveCommitment = (value: string) => {
    const commitment = projectParams.commitment.filter((p) => p !== value);
    setProjectParams({ ...projectParams, commitment });
  };

  useEffect(() => {
    setParams(projectParams);
  }, [projectParams]);

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
      <ProjectsList projects={projects} projectsLoaded={projectsLoaded} />
    </Wrapper>
  );
}
