import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface TransitionProviderInterface {
  children: JSX.Element;
}

interface TransitionContextType {
  handleTransition: (e: React.MouseEvent<HTMLButtonElement>) => void;
  transitionOut: boolean;
}

const transitionContext = createContext({} as TransitionContextType);

const TransitionProvider = ({ children }: TransitionProviderInterface) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [transitionOut, setTransitionOut] = useState<boolean>(false);

  const handleTransition = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const to:any = e.currentTarget.getAttribute("href");

    if (to === location.pathname) {
      e.preventDefault();
      setTransitionOut(false);
    } else {
      setTransitionOut(true);
      setTimeout(() => {
        navigate(to);
        setTransitionOut(false);
      }, 400);
    }
  };

  return (
    <transitionContext.Provider value={{ handleTransition, transitionOut }}>
      {children}
    </transitionContext.Provider>
  );
};

const useHandleTransition = () => {
  return useContext(transitionContext);
};

export { TransitionProvider, useHandleTransition };
