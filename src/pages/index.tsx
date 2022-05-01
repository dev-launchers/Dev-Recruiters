import { GetStaticProps } from 'next';
import Head from 'next/head';
import FilteringComponent from '@components/modules/MainPage/filtering/FilteringComponent';
import { Opportunity } from '../models/opportunity';
import { Project } from '../models/project';
import agent from '@utils/agent';

export const getStaticProps: GetStaticProps = async (context) => {
  let projects: Project[] = [];
  let opportunities: Opportunity[] = [];
  try {
    const result = await agent.Projects.list();
    projects = result.filter((p: Project) => p.opportunities.length > 0);
  } catch (error) {
    console.error('An error occurred while fetching Projects', error);
  }

  try {
    const result = await agent.Opportunities.list();
    opportunities = result.filter((o: Opportunity) => o.projects.length > 0);
  } catch (error) {
    console.error('An error occurred while fetching Opportunities', error);
  }

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
