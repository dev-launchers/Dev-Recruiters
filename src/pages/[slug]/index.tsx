import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { Project } from "../../models/project";
import ProjectDetails from "@components/modules/DetailedPage";
import agent from "@utils/agent";

export const getProjectsSlugs = async () => {
  let projects: Project[] = [];
  try {
    const result = await agent.Projects.list(new URLSearchParams("_publicationState=live"));
    projects = result.filter((p: Project) => p.opportunities.length > 0);
  } catch (error) {
    console.error("An error occurred while fetching Projects", error);
  }

  const projectsSlugs = projects.map((project) => ({
    params: {
      slug: project.slug,
    },
  }));

  return projectsSlugs;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getProjectsSlugs();
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let project: Project;
  let slug = params.slug as string;

  try {
    project = await agent.Projects.getDetails(slug);
  } catch (error) {
    console.error("An error occurred while fetching Project Details", error);
  }

  return {
    props: {
      project,
    },
    revalidate: 10,
  };
};

export default function DetailedPage({ project }: {project: Project}) {
  return (
    <>
      <Head>
        <title>Detailed Page</title>
        <meta name="title" content="Our Projects"></meta>
        <meta
          name="description"
          content="Create, discover, and join open-source software projects! We help members to contribute meaningfully and gain industry-ready experience along the way. Build epic products, tools, and games used by real people while learning valuable skills and meeting awesome people!"
        ></meta>

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://devlaunchers.org/projects" />
        <meta
          property="og:image"
          content="/images/DevlaunchersGitHubThumb.png"
        />
        <meta property="og:title" content="Our Projects" />
        <meta
          property="og:description"
          content="Create, discover, and join open-source software projects! We help members to contribute meaningfully and gain industry-ready experience along the way. Build epic products, tools, and games used by real people while learning valuable skills and meeting awesome people!"
        ></meta>

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://devlaunchers.org/projects"
        />
        <meta property="twitter:title" content="Our Projects" />
        <meta
          property="twitter:description"
          content="Create, discover, and join open-source software projects! We help members to contribute meaningfully and gain industry-ready experience along the way. Build epic products, tools, and games used by real people while learning valuable skills and meeting awesome people!"
        />
        <meta
          property="twitter:image"
          content="/images/DevlaunchersGitHubThumb.png"
        />
        <meta content="#ff7f0e" data-react-helmet="true" name="theme-color" />
      </Head>
      <ProjectDetails project={project} />
    </>
  );
}
