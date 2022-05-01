import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import PositionCard from "@components/modules/DetailedPage/PositionCard";
import { Project } from "../models/project";

export const getProjectsSlugs = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/projects?_publicationState=live`
  );
  
  const result: Project[] = await res.json();
  const projects = result?.filter((p) => p.opportunities?.length > 0);

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
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/${params.slug}`
  );
  const project: Project = await res.json();

  return {
    props: {
      project,
    },
    revalidate: 10,
  };
};

interface Props {
  project: Project;
}

export default function DetailedPage({ project }: Props) {
  const samplePosition = {
    id: "1",
    title: "Web Developer",
    level: "Beginner Level",
    stack: ["React", "html", "css"],
    expectations: ["Self Sufficient learner", "Hands on learning experience", "Weekly meetings"],
    description: ` We are looking for a web developer who has some knowledge of
    React.js, HTML, and CSS. Experience using API's is appreciated but
    not required. All experience levels welcome, provided you are a
    willing and self-sufficient learner and a good communicator. You
    will:`,
  };

export default function DetailedPage() {
  return (
    <>
      <Head>
        <title>Detailed Page</title>
        <meta name='title' content='Our Projects'></meta>
        <meta
          name='description'
          content='Create, discover, and join open-source software projects! We help members to contribute meaningfully and gain industry-ready experience along the way. Build epic products, tools, and games used by real people while learning valuable skills and meeting awesome people!'
        ></meta>

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://devlaunchers.org/projects" />
        <meta
          property="og:image"
          content="/images/DevlaunchersGitHubThumb.png"
        />
        <meta property="og:title" content="Our Projects" />
        <meta
          property='og:description'
          content='Create, discover, and join open-source software projects! We help members to contribute meaningfully and gain industry-ready experience along the way. Build epic products, tools, and games used by real people while learning valuable skills and meeting awesome people!'
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
      <h1>hello from project details page</h1>
      {/* testing postion Card */}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "1.5rem",
        }}
      >
        {project.opportunities.length &&
          project.opportunities.map((position) => (
            <PositionCard
              key={position.id}
              position={samplePosition}
            />
          ))}
      </div>
    </>
  );
}
