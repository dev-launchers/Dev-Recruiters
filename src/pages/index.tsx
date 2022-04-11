import { GetStaticProps } from 'next';
import Head from 'next/head';
import FilteringComponent from '../components/modules/MainPage/filtering/FilteringComponent';
import { Opportunity } from '../models/opportunity';
import { Project } from '../models/project';

export const getStaticProps: GetStaticProps = async (context) => {
  const projectsData = await fetch('https://api.devlaunchers.org/projects');

  //Enable this filter when opportunities related object is implemented
  const projects: Project[] = await projectsData.json(); //.filter((p) => p.opportunities.length > 0);

  const opportunitiesData = await fetch(
    'https://api.devlaunchers.org/opportunities'
  );

  // Enable when Opportunities endpoint is available.
  const opportunities: Opportunity[] = []; //await opportunitiesData.json();

  return {
    props: {
      projects,
      opportunities,
    },
    revalidate: 10,
  };
};

interface Props {
  projects: Project[];
  opportunities: Opportunity[];
}

const IndexPage = ({ projects, opportunities }: Props) => (
  <>
    <Head>
      <title>Our Projects</title>
      <meta name='title' content='Our Projects'></meta>
      <meta
        name='description'
        content='Create, discover, and join open-source software projects! We help members to contribute meaningfully and gain industry-ready experience along the way. Build epic products, tools, and games used by real people while learning valuable skills and meeting awesome people!'
      ></meta>

      <meta property='og:type' content='website'></meta>
      <meta
        property='og:url'
        content='https://devlaunchers.org/projects'
      ></meta>
      <meta
        property='og:image'
        content='/images/DevlaunchersGitHubThumb.png'
      ></meta>
      <meta property='og:title' content='Our Projects'></meta>
      <meta
        property='og:description'
        content='Create, discover, and join open-source software projects! We help members to contribute meaningfully and gain industry-ready experience along the way. Build epic products, tools, and games used by real people while learning valuable skills and meeting awesome people!'
      ></meta>

      <meta property='twitter:card' content='summary_large_image'></meta>
      <meta
        property='twitter:url'
        content='https://devlaunchers.org/projects'
      ></meta>
      <meta property='twitter:title' content='Our Projects'></meta>
      <meta
        property='twitter:description'
        content='Create, discover, and join open-source software projects! We help members to contribute meaningfully and gain industry-ready experience along the way. Build epic products, tools, and games used by real people while learning valuable skills and meeting awesome people!'
      ></meta>
      <meta
        property='twitter:image'
        content='/images/DevlaunchersGitHubThumb.png'
      ></meta>
      <meta content='#ff7f0e' data-react-helmet='true' name='theme-color' />
    </Head>
    <h1>hello from page index</h1>

    {projects && (
      <FilteringComponent projects={projects} opportunities={opportunities} />
    )}
  </>
);

export default IndexPage;
