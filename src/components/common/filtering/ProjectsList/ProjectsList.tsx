import { Project } from "../project";
import ProjectListItem from "../ProjectsListItem";
import { List } from "./StyledProjectsList";

interface Props {
  projects: Project[];
}

export default function ProjectsList({ projects }: Props) {
  return (
    <List>
      {projects.map((project) => (
        <li key={project.id}>
          <ProjectListItem project={project} />
        </li>
      ))}
    </List>
  );
}
