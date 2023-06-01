import { useEffect, useRef } from 'react';

const useKeyUp = (keys: Array<number>, callback: (event: Event) => void) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler: EventListener = (event) => {
      keys.forEach((key)=>{
        if ((event as KeyboardEvent).keyCode === key) {
        callbackRef.current(event);
      }
      })
    }

    document.addEventListener('keyup', handler);
    return () => document.removeEventListener('keyup', handler);
  }, [keys]);
}

export default useKeyUp;