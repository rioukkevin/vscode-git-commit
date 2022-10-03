export const setLengtToX = (length: number) => (value: string) => {
  return value.slice(length * -1);
};
