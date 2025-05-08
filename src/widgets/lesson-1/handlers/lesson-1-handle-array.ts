export const handleArray = (param: unknown[]) => {

  const getFirstPhrase = (param) => {
    let firstBigElement = param.find((element) => element > 10);
    if (firstBigElement === undefined) {
      return `В массиве ${param} нет больших чисел — коты грустят.`
    } else {
      return firstBigElement;
    }
  }

  const getSecondPhrase = (param) => {
    let evenArray = param.filter((element) => element % 2 === 0);
    let evenNumberCount = evenArray.length;
    return `В массиве ${param} ${evenNumberCount} чётных чисел. Котам они нравятся!`
  }

  return {
    phrase1: getFirstPhrase(param),
    phrase2: getFirstPhrase(param),
    paramArrayLength: param.length,
    paramFirstElement: param[0],
    paramLastElement: param.at(-1),
  }
}
