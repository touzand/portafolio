import { Me, Navbar, Wrapper } from "./style.ts";
import { NavLink, Link } from "react-router-dom";
import urls from "../../config/urls.json";
import { useHandleTransition } from "../../context/transitionContext.tsx";

const pagesArray = Object.entries(urls.pages);

const Header = () => {
  const { handleTransition } = useHandleTransition();

  return (
    <Wrapper>
      <Me>
        <figure>
          <Link to={urls.home_page} onClick={(e) => handleTransition(e)}>
            <img src={urls.profile_picture_grey} />
          </Link>
        </figure>
        <div>
          <a href={urls.github_touzand} target="_blank">
            Alan G. Alonso
          </a>
          <div>Indie developer</div>
        </div>
      </Me>
      <Navbar>
        <ul>
          {pagesArray.map(([key, value]) => (
            <li key={key}>
              <NavLink to={value} onClick={(e) => handleTransition(e)}>
                <span>{key}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </Navbar>
    </Wrapper>
  );
};

export default Header;
