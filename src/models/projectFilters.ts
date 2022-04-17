import { SkillLevel } from "./level";

export interface ProjectParams {
    projectType: string[];
    opportunity: string[] | null;
    level: SkillLevel[] | null;
    minCommit: number;
    maxCommit: number;
    searchTerm: string | null;
}