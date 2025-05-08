const getMagicCubePhrase = (param) => {
  let i = 0;

  while (Math.pow(i, 3) <= param) {
    if (Math.pow(i, 3) === param) {
      return `Число ${param} — магический куб! Кот построил башню из ${i} кубиков.`;
    }
    i += 1;
  }

  let nextCube = Math.pow(i + 1, 3);

  return `Число ${param} не магическое. Нужно ещё ${(nextCube - param)} кубиков до числа ${nextCube}.`;
}

const getPhrase = (param) => {
  if (!Number.isInteger(param)) {
    return 'Число не только не магическое. Оно даже не целое. Грусть печаль тоска.'
  }

  return getMagicCubePhrase(param);
}

export const handleNumber = (param: number) => {
  return {
    square: param ** 2,
    string: param.toString(),
    phrase: getPhrase(param),
  }
};
