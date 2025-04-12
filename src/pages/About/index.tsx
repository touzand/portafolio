import { useHandleTransition } from "../../context/transitionContext";
import { InfoWrapper, Wrapper } from "./style";

interface InfoInterface {
  title: string;
  body: string[];
}

const InfoWrapperData: InfoInterface[] = [
  {
    title: "Soft Skills",
    body: ["Energetic & Positive", "Hard Working Time Management Focus"],
  },
  {
    title: "Hard Skills",
    body: [
      "Javascript, Html, Css",
      "Typescript",
      "React (Jest)",
      "Node (Express, Nest)",
      "Python (Flask,FastAPI)",
      "Java (Spring Boot)",
    ],
  },
  {
    title: "Langagues",
    body: ["English: Intermediate.", "Portuguese: Fluid.", "Spanish: Native"],
  },
  {
    title: "Education",
    body: ["Curently studying IT (information systems career)"],
  },
  {
    title: "Experience",
    body: ["Empresta.me : Developer", "Morpheus : Developer"],
  },
  {
    title: "Interest",
    body: ["Photography", "Phylosofy", "Astronomi"],
  },
];

const About = () => {
  const { transitionOut } = useHandleTransition();

  return (
    <Wrapper
      initial={{ y: 20, opacity: 0 }}
      animate={{
        y: transitionOut ? 20 : 0,
        opacity: transitionOut ? 0 : 1,
      }}
      transition={{ duration: 0.2, delay: 0 }}
    >
      <h3>About (me)</h3>

      <div>
        {InfoWrapperData.map((info, index) => (
          <InfoWrapper key={index}>
            <h6>{info.title}</h6>
            <ul>
              {info.body.map((linea, index) => (
                <li key={index}>{linea}</li>
              ))}
            </ul>
          </InfoWrapper>
        ))}
      </div>
    </Wrapper>
  );
};

export default About;
