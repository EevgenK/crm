/* Makes delay for Promise requests*/
export const getAsyncDataWithDelay = async <T>(
  fetchFn: () => Promise<T>,
  delay: number,
): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fetchFn());
    }, delay);
  });
};
