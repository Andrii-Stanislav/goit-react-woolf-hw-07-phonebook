const mapNumbersArrToString = (numbersArr: any[]) => {
  return numbersArr
    .filter(num => Number.isInteger(num))
    .map(num => num.toString());
};

export default mapNumbersArrToString;
