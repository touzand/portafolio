import {useEffect, useRef} from 'react';

export const useEffectOnce = ( effect:any ) => {
  const destroyFunc = useRef();
  const effectCalled = useRef(false);
  const renderAfterCalled = useRef(false);
  //const [val, setVal] = useState<number>(0);

  if (effectCalled.current) {
    renderAfterCalled.current = true;
  }

  useEffect(() => {
    if (!effectCalled.current) {
      destroyFunc.current = effect();
      effectCalled.current = true;
    }

    //setVal(val => val + 1);

    return () => {
      if (!renderAfterCalled.current) {
        return;
      }
      if (destroyFunc.current) {
        //destroyFunc.current();
      }
    };
  }, []);
};
