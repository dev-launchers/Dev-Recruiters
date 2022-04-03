import { GetStaticProps } from "next";
import Head from "next/head";
import PositionCard from "../components/modules/DetailedPage/PositionCard";
import FilteringComponent from "../components/modules/MainPage/filtering/FilteringComponent";
import { Project } from "../components/modules/MainPage/filtering/project";

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("https://api.devlaunchers.org/projects");
  const projects = await res.json();

  return {
    props: {
      projects,
    },
    revalidate: 10,
  };
};

interface Props {
  projects: Project[];
}

const IndexPage = ({ projects }: Props) => (
  <>
    <Head>
      <title>Our Projects</title>
      <meta name="title" content="Our Projects"></meta>
      <meta
        name="description"
        content="Create, discover, and join open-source software projects! We help members to contribute meaningfully and gain industry-ready experience along the way. Build epic products, tools, and games used by real people while learning valuable skills and meeting awesome people!"
      ></meta>

      <meta property="og:type" content="website"></meta>
      <meta
        property="og:url"
        content="https://devlaunchers.org/projects"
      ></meta>
      <meta
        property="og:image"
        content="/images/DevlaunchersGitHubThumb.png"
      ></meta>
      <meta property="og:title" content="Our Projects"></meta>
      <meta
        property="og:description"
        content="Create, discover, and join open-source software projects! We help members to contribute meaningfully and gain industry-ready experience along the way. Build epic products, tools, and games used by real people while learning valuable skills and meeting awesome people!"
      ></meta>

      <meta property="twitter:card" content="summary_large_image"></meta>
      <meta
        property="twitter:url"
        content="https://devlaunchers.org/projects"
      ></meta>
      <meta property="twitter:title" content="Our Projects"></meta>
      <meta
        property="twitter:description"
        content="Create, discover, and join open-source software projects! We help members to contribute meaningfully and gain industry-ready experience along the way. Build epic products, tools, and games used by real people while learning valuable skills and meeting awesome people!"
      ></meta>
      <meta
        property="twitter:image"
        content="/images/DevlaunchersGitHubThumb.png"
      ></meta>
      <meta content="#ff7f0e" data-react-helmet="true" name="theme-color" />
    </Head>
    <h1>hello from page index</h1>
    {/* testing postion Card */}
    <PositionCard position={position} />

    {projects && <FilteringComponent projects={projects} />}
  </>
);

export default IndexPage;

const position = {
  title: "Web Developer",
  level: "Beginner Level",
  stack: ["React", "html", "css"],
  expectations: [
    "Self Sufficient learner",
    "Hands on learning experience",
    "Weekly meetings",
  ],
  description: ` We are looking for a web developer who has some knowledge of
  React.js, HTML, and CSS. Experience using API's is appreciated but
  not required. All experience levels welcome, provided you are a
  willing and self-sufficient learner and a good communicator. You
  will:`,
};
