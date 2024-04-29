import { useHandleTransition } from "../../context/transitionContext";
import { InfoWrapper, Wrapper } from "./style";

interface InfoInterface {
  title: string;
  body: string;
}

const InfoWrapperData: InfoInterface[] = [
  {
    title: "Soft Skills",
    body: "- Energetic & Positive\n- Hard Working Time Management Focus",
  },
  {
    title: "Hard Skills",
    body: "Javascript. Html. Css. React. Python ( Flask,FastAPI ). Node ( Express ). Typescript",
  },
  {
    title: "Langagues",
    body: "- English: Intermediate.\n- Portuguese: Fluid.\n- Spanish: Native",
  },
  {
    title: "Education",
    body: "Curently studying IT\n(information systems career)",
  },
  {
    title: "Experience",
    body: "- Morpheus:\n( Developer )",
  },
  {
    title: "Interest",
    body: "Photography. Filmaking. Phylosofy. Astronomi.",
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
            {info.body.split("\n").map((linea, index) => (
              <p key={index}>{linea}</p>
            ))}
          </InfoWrapper>
        ))}
      </div>
    </Wrapper>
  );
};

export default About;
