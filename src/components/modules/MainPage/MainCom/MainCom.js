import React from "react";
import ShortCard from "../ShortCard";
import LongCard from "../LongCard";
import {
  SectionOne,
  SectionTwo,
  ProjectContainer,
} from "../MainCom/StyledMainCom";
import { featuredCardData } from "./data";
const Main = () => {
  return (
    <SectionOne>
      <SectionTwo>
        <h1>Join Us!</h1>
      </SectionTwo>
      <ProjectContainer>
        {featuredCardData.map((cardData) => {
          return <ShortCard cardData={cardData} />;
        })}
        {/* <ShortCard
          cardDatas={[
            {
              id: 1,
              titleText: "Thought Process",
              smallText:
                "An online,community based idea or problem solving tool",
              type: "Type",
              content: [
                {
                  id: 11,
                  cont: "Product",
                },
                {
                  id: 22,
                  cont: "Platform",
                },
              ],
              position: "Position Available",
              study: [
                {
                  id: 111,
                  stud: "Developer",
                },
                {
                  id: 222,
                  stud: "Digital Artist",
                },
                {
                  id: 333,
                  stud: "UX/UI",
                },
              ],
              time: "Time Commitment",
              hour: "5 hrs",
              href: "http://localhost:3000",
            },
            {
              id: 2,
              titleText: "Thought Process",
              smallText:
                "An online,community based idea or problem solving tool",
              type: "Type",
              content: [
                {
                  id: 11,
                  cont: "Product",
                },
                {
                  id: 22,
                  cont: "Platform",
                },
              ],
              position: "Position Available",
              study: [
                {
                  id: 111,
                  stud: "Developer",
                },
                {
                  id: 222,
                  stud: "Digital Artist",
                },
                {
                  id: 333,
                  stud: "UX/UI",
                },
              ],
              time: "Time Commitment",
              hour: "5 hrs",
              href: "http://localhost:3000",
            },
            {
              id: 3,
              titleText: "Thought Process",
              smallText:
                "An online,community based idea or problem solving tool",
              type: "Type",
              content: [
                {
                  id: 11,
                  cont: "Product",
                },
                {
                  id: 22,
                  cont: "Platform",
                },
              ],
              position: "Position Available",
              study: [
                {
                  id: 111,
                  stud: "Developer",
                },
                {
                  id: 222,
                  stud: "Digital Artist",
                },
                {
                  id: 333,
                  stud: "UX/UI",
                },
              ],
              time: "Time Commitment",
              hour: "5 hrs",
              href: "http://localhost:3000",
            },
          ]}
        /> */}
      </ProjectContainer>
      {/* <LongCard
        cardDatas={{
          description: "DESCRIPTION",
          details: [
            {
              id: 1,
              detail:
                "Social media is constantly changing and coming up with somthing new, so come right in and expose us to your fresh ideas! We accept people of ALL skill levels, and want YOU to help us make this possible!",
            },
            {
              id: 2,
              detail:
                "You! Yes,you! The one who understands the importance of building relationships and tailoring a unique experience for individuals.You will be helping to develop the social network and media that allows our users to be connected tp both projects and other users across the plattform",
            },
          ],
        }}
      /> */}
      <br />
    </SectionOne>
  );
};

export default Main;
