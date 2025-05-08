export const filterArray = (arr: unknown[]) => {
  const newArray = [];

  for (const string of arr) {
    if ((str.length > 3)) && (str.includes('ав') && (str.length < 10)) {
      newArray.push(string);
    }
  }
  return newArray;
}
