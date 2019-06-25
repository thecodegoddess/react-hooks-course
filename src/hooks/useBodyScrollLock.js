import { useLayoutEffect } from 'react';

function useBodyScrollLock() {
  useLayoutEffect(() => {
    const originalOverflowValue = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflowValue;
    }
  }, []);
}

export {
  useBodyScrollLock,
}
