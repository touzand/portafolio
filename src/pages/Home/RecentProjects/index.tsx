import { Wrapper, Card } from "./style";
import { Link } from "react-router-dom";
import { useHandleTransition } from "../../../context/transitionContext";
import { useEffect, useState } from "react";
import axios from "axios";

import maggo from "maggo/request";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

await maggo.get<Post>("https://jsonplaceholder.typicode.com/posts");

interface DataInterface {
  title: string;
  title_min: string;
  author: string;
  body: string;
  description: string;
  release_date: string;
  year: number;
  cargo?: string;
  tag?: string;
}

const RecentProjects = () => {
  const { handleTransition } = useHandleTransition();
  const [data, setData] = useState<DataInterface[]>();

  useEffect(() => {
    axios.get(import.meta.env.VITE_ARTICLES).then((response) => {
      const db = response.data;
      const personalProjects = db
        .filter((article: DataInterface) => article.tag == "Personal project")
        .slice(0, 3);

      setData(personalProjects);
    });
  }, []);

  return (
    <Wrapper $haveData={data ? true : false}>
      <h4 style={{marginBottom:"1rem"}}>Recent Projects</h4>
      <div>
        {data &&
          data.map((project, index) => (
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
          ))}
      </div>
    </Wrapper>
  );
};

export default RecentProjects;
