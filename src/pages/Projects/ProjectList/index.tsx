import { Wrapper } from "./style";
import { Link } from "react-router-dom";
import { useEffectOnce } from "../../../hooks/useEffectOnce";
import { useState } from "react";
import { useHandleTransition } from "../../../context/transitionContext";
import axios from "axios";

interface ProjectInterface {
  title: string;
  title_min: string;
  author: string;
  body: string;
  tag: string;
  release_date: string;
  description: string;
  year: number;
  urls: { github: string; live: string };
  project_order: number;
}

const ProjectList = () => {
  const { handleTransition } = useHandleTransition();

  const [data, setData] = useState<ProjectInterface[]>([]);

  useEffectOnce(() => {
    const personalProjects: ProjectInterface[] = [];

    axios.get(import.meta.env.VITE_ARTICLES).then((response) => {
      const db = response.data;

      db.filter((project: ProjectInterface) => {
        if (project.tag === "Personal project") {
          personalProjects.push(project);
        }
      });
      setData(personalProjects);
    });
  });

  return (
    <Wrapper>
      {data.map((project, index) => (
        <article key={index}>
          <figure>
            <div>
              {project.urls && (
                <a href={project.urls.live} target="_black">
                  {project.title_min}
                </a>
              )}
              <span>{project.year}</span>
            </div>
          </figure>
          <Link
          onClick={(e)=>handleTransition(e)}
            to={"/article/" + project.title}
          >
            Read more
          </Link>
        </article>
      ))}
    </Wrapper>
  );
};

export default ProjectList;
