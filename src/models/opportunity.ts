import { Expectation } from "./expectation";
import { SkillLevel } from "./level";
import { Skill } from "./skill";

export interface Opportunity {
    id: string;
    title: string;
    skills: Skill[];
    level: SkillLevel;
    commitmentHoursPerWeek: number;
    description: string;
    expectations: Expectation[];
    isHidden: boolean;
    published_at: Date;
}