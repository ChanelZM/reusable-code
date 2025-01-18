export default function throttle(
  func: (...args: any[]) => void,
  limit: number
) {
  let lastFunc: number;
  let lastRan: number;
  return function (this: any, ...args: any[]) {
    if (!lastRan) {
      func.apply(this, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = window.setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func.apply(this, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}
