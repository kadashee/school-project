export const handleObject = (param: object) => {

  const fillNecessaryName = (param) => {
    if (!('name' in param)) {
      const names = ['Барсик', 'Мурзик', 'Снежок', 'Киса'];
      param.name = names[Math.floor(Math.random() * names.length)];
    }
  }

  const getPhrase = (param) => {
    fillNecessaryName(param);
    return `Кота зовут ${param.name}`;
  }

  return {
    phrase: getPhrase(param),
    newObject: param,
  }
}
