

import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface TransitionProviderInterface {
  children: JSX.Element;
}

interface TransitionContextType {
  handleTransition: Function;
  transitionOut: boolean;
};

const transitionContext = createContext<TransitionContextType | null>(null);

const TransitionProvider = ({ children }: TransitionProviderInterface) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [transitionOut, setTransitionOut] = useState<boolean>(false);

  const handleTransition: React.MouseEventHandler = (e): void => {
    e.preventDefault();
    const to = e.currentTarget.getAttribute("href");

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
