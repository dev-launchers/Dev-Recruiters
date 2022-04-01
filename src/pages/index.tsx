import Head from "next/head";
import LongCard from '../components/modules/MainPage/LongCard';
import Main from '../components/modules/MainPage/MainCom';

const IndexPage = () => (
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
    <Main />
    {/* <ShortCard cardDatas ={{
     titleText:"Thought Process",
     smallText:"An online,community based idea or problem solving tool",
     type:"Type",
      content:[
        {
            id:11,
            cont:"Product"
        },
        {
            id:22,
            cont:"Platform"
        }
      ],
        position:"Position Available",
        study: [
            { 
                id:111,
                stud:"Developer"
              },
              { 
                id:222,
                stud:"Digital Artist"
              },
              { 
                id:333,
                stud:"UX/UI"
              },
        ],
        time:"Time Commitment",
        hour:"5 hrs"   
  
    }}/> */}

    {/* <LongCard cardDatas = {{ 
      description:"DESCRIPTION",
      details:[
        {
          id:1,
          detail:"Social media is constantly changing and coming up with somthing new, so come right in and expose us to your fresh ideas! We accept people of ALL skill levels, and want YOU to help us make this possible!",
        },
        {
          id:2,
          detail:"You! Yes,you! The one who understands the importance of building relationships and tailoring a unique experience for individuals.You will be helping to develop the social network and media that allows our users to be connected tp both projects and other users across the plattform"
        }
      ]
   }}/> 
   <br /> */}
  </>
);

export default IndexPage;
