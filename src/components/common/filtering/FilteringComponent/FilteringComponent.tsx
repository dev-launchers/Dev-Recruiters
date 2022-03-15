import { useEffect, useState } from "react";
import styled from "styled-components";
import { EnumToArray } from "../../../../utils/enumToArray";
import CheckboxDropdown from "../../CheckboxDropdown";
import { ProjectParams } from "../project";
import { PlatformType, PositionLevel } from "../projectEnums";
import ProjectsList from "../ProjectsList";
import useProjects from "../useProject";

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
            nameProperty={"name"}
            valueProperty={"name"}
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
            nameProperty={"name"}
            valueProperty={"name"}
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
                <button>X</button>
              </ChipsListItem>
            ))}
          {projectParams.platform &&
            projectParams.platform.map((item, index) => (
              <ChipsListItem
                onClick={() => handleRemovePlatform(item)}
                key={`platform${index + 1}`}
              >
                <p>{item}</p>
                <button>x</button>
              </ChipsListItem>
            ))}
          {projectParams.level &&
            projectParams.level.map((item, index) => (
              <ChipsListItem
                onClick={() => handleRemoveLevel(item)}
                key={`level${index + 1}`}
              >
                <p>{item}</p>
                <button>x</button>
              </ChipsListItem>
            ))}

          {projectParams.commitment &&
            projectParams.commitment.map((item, index) => (
              <ChipsListItem
                key={`commitment${index + 1}`}
                onClick={() => handleRemoveCommitment(item)}
              >
                <p>{item}</p>
                <button>x</button>
              </ChipsListItem>
            ))}
        </ChipsList>
      </FiltersWrapper>
      <ProjectsList projects={projects} projectsLoaded={projectsLoaded} />
    </Wrapper>
  );
}

const FiltersWrapper = styled.div`
  padding-left: 2rem;
`;

const FilterTitle = styled.p`
  font-size: 26px;
  color: #fff;
  padding-bottom: 20px;
  padding-left: 1.5rem;
  margin: 0;
`;

const Wrapper = styled.div`
  padding-left: 0;
  padding-bottom: 6.25rem;
`;

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 0rem 0;
  display: flex;
  flex-direction: row;
  justify-content: start;
  column-gap: 1.5rem;
  width: 100%;
`;

const ChipsList = styled.ul`
  padding-left: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 20px;
`;

const ChipsListItem = styled.li`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  background-color: #9399a0;
  font-size: 1rem;
  padding: 8px 24px;
  padding-right: 0;
  border-radius: 20px;
  width: full;

  &:hover {
    filter: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04))
      drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1));
  }

  & p {
    padding: 0;
    margin: 0;
    width: 100%;
  }

  & button {
    background-color: transparent;
    border: none;
    padding-right: 1rem;
  }
`;
