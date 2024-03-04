import { LinkContainer, Wrapper } from "./style";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import hljs from "highlight.js";
import { marked } from "marked";
import "highlight.js/styles/base16/gruvbox-dark-hard.css";
import { useHandleTransition } from "../../context/transitionContext";
import {useEffectOnce} from "../../hooks/useEffectOnce";

interface DataInterface {
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

const Article = () => {
  const { transitionOut } = useHandleTransition();
  const { title } = useParams();
  const [data, setData] = useState<DataInterface | null>(null);

  useEffectOnce(() => {
    hljs.highlightAll();
  }, [data]);

  useEffect(() => {
    axios.get(import.meta.env.VITE_ARTICLES).then((response) => {
      const db = response.data;
      const Article = db.filter(
        (article: DataInterface) => article.title == title
      )[0];

      setData(Article);
    });
  }, []);

  return (
    <>
      {data && (
        <Wrapper
          initial={{ opacity: 0 }}
          animate={{
            opacity: transitionOut ? 0 : 1,
          }}
          transition={{ duration: 0.4, delay: 0 }}
        >
          {data && (
            <article>
              <h2>{data.title}</h2>
              <span className="release_date">
                {data.release_date}, {data.year}
              </span>

              {data.urls && (
                <LinkContainer>
                  <a href={data.urls.github} target="_blank">
                    <article>Github</article>
                  </a>
                  <a href={data.urls.live} target="_blank">
                    <article>Live</article>
                  </a>
                </LinkContainer>
              )}

              <div
                dangerouslySetInnerHTML={{ __html: marked(data.body) }}
              ></div>
            </article>
          )}
        </Wrapper>
      )}
    </>
  );
};

export default Article;
