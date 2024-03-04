import { useHandleTransition } from "../../context/transitionContext";
import ProjectList from "./ProjectList";
import { Wrapper } from "./style";

const Projects = () => {
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
      <h3>Personal Projects</h3>
      <div>
        <p>
          In my professional career, I constantly dedicate myself to the{" "}
          <b>study</b>
          and <b>development of personal projects</b>.
        </p>
        <p>
          My active <b>focus on learning</b> and the practical application of
          knowledge reflects my commitment to <b>continuous improvement</b>.
        </p>
        <p>
          This combination nourishes my curiosity and empowers me to approach
          challenges with creativity and a proactive mindset.
        </p>
      </div>
      <ProjectList />
    </Wrapper>
  );
};

export default Projects;
