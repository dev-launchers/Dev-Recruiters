import { useCallback, useEffect, useState } from "react";
import agent from "../../../utils/agent";
import { Project, ProjectLite, ProjectParams } from "./project";

export default function useProjects() {
  const [projects, setProjects] = useState<ProjectLite[]>([]);
  const [projectsLoaded, setProjectsLoaded] = useState(false);
  const [projectsLoading, setProjectsLoading] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState<ProjectLite[]>([]);
  const [positions, setPositions] = useState<string[]>([]);
  const [positionsLoaded, setPositionsLoaded] = useState(false);
  const [commitments, setCommitments] = useState<string[]>([]);
  const [commitmentsLoaded, setCommitmentsLoaded] = useState(false);

  const SetProjectParams = (value: ProjectParams) => {
    setFilteredProjects(FilterProjects(projects, value));
  };

  /**
   * Request the projects from the API
   */
  const fetchProjects = useCallback(async () => {
    try {
      const result: Project[] = await agent.Projects.list();
      if (result.length > 0) {
        const list = result.map((item: Project) => ({
          id: item.id,
          slug: item.slug,
          catchPhrase: item.catchPhrase,
          title: item.title,
          description: item.description,
          commitmentLevel: item.commitmentLevel,
          openPositions: item.openPositions,
        }));
        setProjects(list);
        setFilteredProjects(list);
        setProjectsLoaded(true);
        fetchPositions(result);
        fetchCommitments(result);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setProjectsLoading(false);
    }
  }, []);

  /**
   * Extract the Open Positions from the projects entities
   */
  function fetchPositions(projects: Project[]) {
    if (projects.length <= 0) return;
    const items = projects
      .flatMap((p) => p.openPositions.map((po) => po.title))
      .sort();
    const distinct = Array.from(new Set(items));
    setPositions(distinct);
    setPositionsLoaded(true);
  }

  /**
   * Extract the Commitment levels from the projects entities
   */
  function fetchCommitments(projects: Project[]) {
    if (projects.length <= 0) return;
    const items = projects
      .filter((p) => p.commitmentLevel)
      .map((p) => p.commitmentLevel)
      .sort();
    const distinct = Array.from(new Set(items));
    setCommitments(distinct);
    setCommitmentsLoaded(true);
  }

  /**
   * Load projects automatically at the first use
   */
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

/**
 * Filters projects
 * @param projects the initial list of projects received from the API
 * @param params  contains the filtering criteria
 * @param params.level:string[] filter projects by level (unavailable)
 * @param params.position:string[] filter projects by open positions (available)
 * @param params.commitment:string[] filter projects by commitment level (available)
 * @param params.platform:string[] filter projects by platform (unavailable)
 * @returns project[] a filtered list;
 */
export function FilterProjects(projects: ProjectLite[], params: ProjectParams) {
  if (projects.length > 0 && params) {
    let list: ProjectLite[] = [...projects];

    // Levels must be filtered before positions

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
    }

    if (params.commitment && params.commitment.length > 0) {
      list = list.filter((project) =>
        params.commitment.includes(project.commitmentLevel)
      );
    }

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
