import { useState } from 'react';
import { SkillLevel } from '../../../../models/level';
import { Opportunity } from '../../../../models/opportunity';
import { Project, ProjectLite } from '../../../../models/project';
import { ProjectParams } from '../../../../models/projectFilters';

export default function useProjects() {
  const [projects, setProjects] = useState<ProjectLite[]>([]);
  const [projectsLoaded, setProjectsLoaded] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState<ProjectLite[]>([]);
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [opportunitiesLoaded, setOpportunitiesLoaded] = useState(false);
  const [projectParams, setProjectParams] = useState<ProjectParams>({
    projectType: [],
    opportunity: [],
    level: [],
    minCommit: 0,
    maxCommit: 1,
    searchTerm: '',
  });

  const SetProjectParams = (value: ProjectParams) => {
    setFilteredProjects(FilterProjects(projects, value));
  };

  /**
   * Request the projects from the API
   */

  const fetchProjects = (projectsList: Project[]) => {
    if (projectsList.length > 0) {
      const list = projectsList.map((item: Project) => ({
        id: item.id,
        slug: item.slug,
        catchPhrase: item.catchPhrase,
        title: item.title,
        description: item.description,
        commitmentLevel: item.commitmentLevel,
        opportunities: item.opportunities,
        isPlatform: item.isPlatform,
      }));
      setProjects(list);
      setFilteredProjects(list);
      setProjectsLoaded(true);
    }
  };

  /**
   * Extract the Open Positions from the projects entities
   */
  function fetchOpportunities(opportunities: Opportunity[]) {
    if (opportunities.length <= 0) return;
    setOpportunities(opportunities);
    setOpportunitiesLoaded(true);
  }

  const handleParamsChange = (params: ProjectParams) => {
    setProjectParams(params);
    setFilteredProjects(FilterProjects(projects, params));
  };

  const handlePlatformChange = (value: string[]) => {
    handleParamsChange({ ...projectParams, projectType: value });
  };

  const handleRemovePlatform = (value: string) => {
    const types = projectParams.projectType.filter((p) => p !== value);
    handleParamsChange({ ...projectParams, projectType: types });
  };

  const handleOpportunityChange = (value: string[]) => {
    handleParamsChange({ ...projectParams, opportunity: value });
  };

  const handleRemoveOpportunity = (value: string) => {
    const opportunity = projectParams.opportunity.filter((p) => p !== value);
    handleParamsChange({ ...projectParams, opportunity });
  };

  const handleLevelChange = (value: SkillLevel[]) => {
    handleParamsChange({ ...projectParams, level: value });
  };

  const handleRemoveLevel = (value: string) => {
    const level = projectParams.level.filter((p) => p !== SkillLevel[value]);
    handleParamsChange({ ...projectParams, level });
  };

  const handleCommitmentChange = (value: any) => {
    handleParamsChange({
      ...projectParams,
      minCommit: value.min,
      maxCommit: value.max,
    });
  };

  const handleSearchTermChange = (searchTerm: any) => {
    handleParamsChange({
      ...projectParams,
      searchTerm,
    });
  };

  return {
    projectParams,
    filteredProjects,
    projectsLoaded,
    opportunities,
    opportunitiesLoaded,
    fetchProjects,
    fetchOpportunities,
    SetProjectParams,
    handlePlatformChange,
    handleRemovePlatform,
    handleOpportunityChange,
    handleRemoveOpportunity,
    handleLevelChange,
    handleRemoveLevel,
    handleCommitmentChange,
    handleSearchTermChange,
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
  if (projects.length > 0) {
    let list: ProjectLite[] = [...projects];

    if (params.searchTerm) {
      list = list.filter((p) =>
        p.title.toLowerCase().includes(params.searchTerm.toLowerCase())
      );
    }

    if (params.level && params.level.length > 0) {
      list = list.filter((project) =>
        project.opportunities.some((op) => params.level.includes(op.level))
      );
    }

    if (params.opportunity && params.opportunity.length > 0) {
      list = list.filter((project) =>
        project.opportunities?.some((op) =>
          params.opportunity.includes(op.title)
        )
      );
    }

    if (params.maxCommit > params.minCommit && params.minCommit > 0) {
      list = list.filter((project) =>
        project.opportunities.some(
          (op) =>
            op.commitmentHoursPerWeek >= params.minCommit &&
            op.commitmentHoursPerWeek <= params.maxCommit
        )
      );
    }

    if (params.projectType && params.projectType.length > 0) {
      let items = [];
      const isPlatform = params.projectType.includes('Platform');
      const isIndependent = params.projectType.includes('Independent');

      if (isPlatform) {
        items = [...items, ...list.filter((p) => p.isPlatform)];
      }
      if (isIndependent) {
        items = [...items, ...list.filter((p) => !p.isPlatform)];
      }

      list = [...items];
    }
    return list.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
  }
}
