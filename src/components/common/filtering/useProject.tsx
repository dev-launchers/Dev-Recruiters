import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Project } from "./project";

const projectsApiPath = "https://api.devlaunchers.org/projects";

export default function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [projectsLoaded, setProjectsLoaded] = useState(false);
  const [projectsLoading, setProjectsLoading] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [positions, setPositions] = useState<string[]>([]);
  const [positionsLoaded, setPositionsLoaded] = useState(false);
  const [commitments, setCommitments] = useState<string[]>([]);
  const [commitmentsLoaded, setCommitmentsLoaded] = useState(false);

  const SetProjectParams = (value: ProjectParams) => {
    console.log(value);
    setFilteredProjects(FilterProjects(projects, value));
  };

  const fetchProjects = useCallback(async () => {
    try {
      const { data }: { data: Project[] } = await axios.get(projectsApiPath);
      setProjects(data);
      setFilteredProjects(data);
      setProjectsLoaded(true);
      fetchPositions(data);
      fetchCommitments(data);
    } catch (error) {
      console.log(error);
    } finally {
      setProjectsLoading(false);
    }
  }, []);

  function fetchPositions(projects: Project[]) {
    const items = projects
      .flatMap((p) => p.openPositions.map((po) => po.title))
      .sort();
    const distinct = Array.from(new Set(items));
    setPositions(distinct);
    setPositionsLoaded(true);
  }

  function fetchCommitments(projects: Project[]) {
    const items = projects
      .filter((p) => p.commitmentLevel)
      .map((p) => p.commitmentLevel)
      .sort();
    const distinct = Array.from(new Set(items));
    setCommitments(distinct);
    setCommitmentsLoaded(true);
  }

  useEffect(() => {
    if (!projectsLoaded) {
      setProjectsLoading(true);
      fetchProjects();
    }
  }, [projectsLoaded]);

  return {
    filteredProjects,
    projectsLoaded,
    projectsLoading,
    positions,
    positionsLoaded,
    commitments,
    commitmentsLoaded,
    SetProjectParams,
  };
}

export interface ProjectParams {
  platform: string[] | null;
  position: string[] | null;
  level: string[] | null;
  commitment: string[] | null;
}

export function FilterProjects(projects: Project[], params: ProjectParams) {
  if (projects.length > 0 && params) {
    let list: Project[] = [...projects];

    // No way to filter level (inexistent property)

    // if (params.level && params.level.length > 0) {
    //   params.level.forEach((level) => {
    //     list = list.filter((project) => {
    //       return project.positions.some(
    //         (p) => p.level === PositionLevel[level]
    //       );
    //     });
    //   });
    // }

    if (params.position && params.position.length > 0) {
      list = list.filter((project) =>
        project.openPositions.some((op) => params.position.includes(op.title))
      );
      console.log(list);
    }

    if (params.commitment && params.commitment.length > 0) {
      list = list.filter((project) =>
        params.commitment.includes(project.commitmentLevel)
      );
      console.log(list);
    }

    // No way to filter platform (inexistent property)

    // if (params.platform && params.platform.length > 0) {
    //   list = list.filter((project) =>
    //     params.platform.forEach(
    //       (platform) =>
    //         PlatformType[project.platform] === PlatformType[platform]
    //     )
    //   );
    // }

    return list;
  }
}

// export function getAxiosParams(projectParams: ProjectParams) {
//   const params = new URLSearchParams();
//   params.append("pageNumber", projectParams.pageNumber.toString());
//   params.append("pageSize", projectParams.pageSize.toString());
//   if (projectParams.position && projectParams.position.length > 0) {
//     params.append("position", projectParams.position.toString());
//   }
//   if (projectParams.platform && projectParams.platform.length > 0) {
//     params.append("platform", projectParams.platform.toString());
//   }

//   if (projectParams.level && projectParams.level.length > 0) {
//     params.append("level", projectParams.level.toString());
//   }

//   if (projectParams.commitment && projectParams.commitment.length > 0) {
//     params.append("commitment", projectParams.commitment.toString());
//   }
//   return params;
// }
