import { Wrapper, Card } from "./style";
import projects from "../../../config/projects.json";
import { Link } from "react-router-dom";
import { useHandleTransition } from "../../../context/transitionContext";
import { useEffect, useState } from "react";
import axios from "axios";

const RecentProjects = () => {
  const { handleTransition } = useHandleTransition();
  const [data, setData] = useState();

  useEffect(() => {
    axios.get(import.meta.env.VITE_ARTICLES).then((response) => {
      const db = response.data;
      const personalProjects = db.filter(
        (article) =>
          article.tag == "Personal project"
      ).slice(0,3);

      setData(personalProjects)
    });
  }, []);

  return (
    <Wrapper>
      <h4>Recent Projects</h4>
      <div>
        {data && data.map((project, index) =>
              <Card key={index}>
                <div>
                  <Link
                    onClick={(e) => handleTransition(e)}
                    to={"/article/" + project.title}
                  >
                    {project.title_min}
                  </Link>
                  <p>{project.cargo}</p>
                </div>
                <div>
                  <span>{project.year}</span>
                </div>
              </Card>
        )}
      </div>
    </Wrapper>
  );
};

export default RecentProjects;
