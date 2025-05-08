export const handleString = (param: string) => {

  const getCount = (param) => {

    const indices = [];
    let currentIndex = param.toLowerCase().indexOf('m');

    while (currentIndex !== -1) {
      indices.push(currentIndex);
      currentIndex = param.toLowerCase().indexOf('m', currentIndex + 1);
    }

    return indices.length;
  }


  const getFirstCLetter = (param) => {
    return param.toLowerCase.indexOf('с');
  }


const getPhrase = (param) => {
  if (getFirstCLetter(param) === -1) {
    return `В строке ${param} найдено ${getCount(param)} мурчащих 'm' и ни одного 'c'. Кошачья трагедия!`;
  }
  return `В строке ${param} найдено ${getCount(param)} мурчащих 'm' и ${getFirstCLetter(param)} первого 'c'.`
}


return {
  length: param.length,
  firstLetter: param[0],
  phrase: getPhrase(param),
}
};
