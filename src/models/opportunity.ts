import { Expectation } from "./expectation";
import { Level } from "./level";
import { Skill } from "./skill";

export interface Opportunity {
    id: string;
    title: string;
    skills: Skill[];
    level: Level;
    commitmentHoursPerWeek: number;
    description: string;
    expectations: Expectation[];
    isHidden: boolean;
    published_at: Date;
}