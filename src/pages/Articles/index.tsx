import { useState, useEffect } from "react";
import { Wrapper } from "./style";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHandleTransition } from "../../context/transitionContext";

interface ArticleInterface {
  title: string;
  author: string;
  body: string;
  description: string;
  release_date: string;
  year: number;
}

const Articles = () => {
  const { transitionOut, handleTransition } = useHandleTransition();
  const [data, setData] = useState<ArticleInterface[][]>();

  //const convertDate = (fechaStr: string) => {
    //const parts = fechaStr.split(" ");
    //const meses: MesesInterface = {
      //Jan: 0,
      //Feb: 1,
      //Mar: 2,
      //Apr: 3,
      //May: 4,
      //Jun: 5,
      //Jul: 6,
      //Aug: 7,
      //Sep: 8,
      //Oct: 9,
      //Nov: 10,
      //Dec: 11,
    //};

    //return new Date(
      //new Date().getFullYear(),
      //meses[parts[0]],
      //parseInt(parts[1])
    //);
  //};

  useEffect(() => {
    const articlesByYear: ArticleInterface[][] = [];

    axios.get(import.meta.env.VITE_ARTICLES).then((response) => {
      const db = response.data;

      db.forEach((article: ArticleInterface) => {
        const year = article.year;

        if (!articlesByYear[year]) {
          articlesByYear[year] = [];
        }

        articlesByYear[year].push(article);
      });

      setData(articlesByYear);
    });
  }, []);

  return (
    <>
      {data && (
        <Wrapper
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: transitionOut ? 20 : 0,
            opacity: transitionOut ? 0 : 1,
          }}
          transition={{ duration: 0.2, delay: 0 }}
        >
          <h3>Articles</h3>
          <p>
            Here is the complete list of articles I have written in recent
            years.
          </p>
          <h5>2024</h5>
          <ul>
            {data &&
              data[2024].map((article, index) => (
                <li key={index}>
                  <Link
                    to={"/article/" + article.title}
                    onClick={(e) => handleTransition(e)}
                  >
                    {article.title}
                  </Link>{" "}
                  - {article.release_date}
                </li>
              ))}
          </ul>
          <h5>2023</h5>
          <ul>
            {data &&
              data[2023].map((article, index) => (
                <li key={index}>
                  <Link
                    to={"/article/" + article.title}
                    onClick={(e) => handleTransition(e)}
                  >
                    {article.title}
                  </Link>{" "}
                  - {article.release_date}
                </li>
              ))}
          </ul>
          <h5>2022</h5>
          <ul>
            {data &&
              data[2022].map((article, index) => (
                <li key={index}>
                  <Link
                    to={"/article/" + article.title}
                    onClick={(e) => handleTransition(e)}
                  >
                    {article.title}
                  </Link>{" "}
                  - {article.release_date}
                </li>
              ))}
          </ul>
        </Wrapper>
      )}
    </>
  );
};

export default Articles;
