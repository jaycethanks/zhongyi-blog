import { useCallback, useEffect, useRef, useState } from 'react';

function useThrottle<T extends any[]>(callback: (...args: T) => void, delay: number): (...args: T) => void {
  const lastExec = useRef(0);
  const timer = useRef<NodeJS.Timeout>();
  const [lastCallArgs, setLastCallArgs] = useState<T | null>(null);

  const execute = useCallback(
    (...args: T) => {
      const now = Date.now();
      const timeSinceLastExec = now - lastExec.current;

      if (timeSinceLastExec < delay) {
        setLastCallArgs(args);

        if (timer.current) {
          clearTimeout(timer.current);
        }

        timer.current = setTimeout(() => {
          if (lastCallArgs) {
            execute(...lastCallArgs);
            setLastCallArgs(null);
          }
        }, delay - timeSinceLastExec);
      }
      else {
        lastExec.current = now;
        callback(...args);
      }
    },
    [callback, delay],
  );

  useEffect(() => {
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  return execute;
}

export default useThrottle;
