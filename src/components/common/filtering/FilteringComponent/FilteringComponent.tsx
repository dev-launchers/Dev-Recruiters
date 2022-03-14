import { useEffect, useState } from "react";
import styled from "styled-components";
import { EnumToArray } from "../../../../utils/enumToArray";
import CheckboxDropdown from "../../CheckboxDropdown";
import { PlatformType, PositionLevel } from "../projectEnums";
import ProjectsList from "../ProjectsList";
import useProjects, { ProjectParams } from "../useProject";

export default function FilteringComponent() {
  const [projectParams, setProjectParams] = useState<ProjectParams>({
    platform: null,
    position: null,
    level: null,
    commitment: null,
  });
  const {
    filteredProjects: projects,
    projectsLoading,
    commitments,
    commitmentsLoaded,
    positions,
    positionsLoaded,
    SetProjectParams: setParams,
  } = useProjects();

  const handlePlatformChange = (value: string[]) => {
    setProjectParams({ ...projectParams, platform: value });
  };

  const handlePositionChange = (value: string[]) => {
    setProjectParams({ ...projectParams, position: value });
  };

  const handleLevelChange = (value: string[]) => {
    setProjectParams({ ...projectParams, level: value });
  };

  const handleCommitmentChange = (value: string[]) => {
    setProjectParams({ ...projectParams, commitment: value });
  };

  useEffect(() => {
    setParams(projectParams);
  }, [projectParams]);

  return (
    <Wrapper>
      <Container>
        <CheckboxDropdown
          title="Platform"
          nameProperty={"name"}
          valueProperty={"name"}
          items={EnumToArray(PlatformType)}
          onChange={handlePlatformChange}
        />
        {positionsLoaded && (
          <CheckboxDropdown
            title="Positions"
            items={positions}
            onChange={handlePositionChange}
          />
        )}

        <CheckboxDropdown
          title="Level"
          nameProperty={"name"}
          valueProperty={"name"}
          items={EnumToArray(PositionLevel)}
          onChange={handleLevelChange}
        />

        {commitmentsLoaded && (
          <CheckboxDropdown
            title="Commitment"
            items={commitments}
            onChange={handleCommitmentChange}
          />
        )}
      </Container>

      {!projectsLoading ? <ProjectsList projects={projects} /> : <p>loading</p>}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #454d58;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
`;

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 4rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  column-gap: 1rem;
  width: 100%;
`;
