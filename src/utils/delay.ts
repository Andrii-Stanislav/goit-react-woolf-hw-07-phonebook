const delay = (callback: () => void, ms: number) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(callback());
    }, ms);
  });
};

export default delay;
