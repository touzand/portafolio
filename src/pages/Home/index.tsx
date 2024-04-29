import { useHandleTransition } from "../../context/transitionContext";
import RecentProjects from "./RecentProjects";
import { Intro, Objetive, Wrapper } from "./style";

const Home = () => {
  const { transitionOut } = useHandleTransition();

  return (
    <Wrapper
      initial={{ y: 20, opacity: 0 }}
      animate={{
        y: transitionOut ? 20 : 0,
        opacity: transitionOut ? 0 : 1,
      }}
      transition={{ duration: 0.1, delay: 0 }}
    >
      <Intro>
        <h1>👋 My name is Alan.</h1>
        <h1>I´m a Full-stack & Indie developer based in Brazil.</h1>
      </Intro>

      <div>
        <Objetive>
          <p>
            Interested in <b>creating more and better human experiences</b>{" "}
            through interesting projects.
          </p>
          <p>
            I seek to innovate in <b>projects that improve people's lives</b>{" "}
            through interesting experiences.
          </p>
          <span>- Constantly working on personal projects.</span>
        </Objetive>

        <RecentProjects />
      </div>
    </Wrapper>
  );
};

export default Home;
