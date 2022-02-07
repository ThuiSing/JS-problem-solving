//get card number
const getCardNumber = (user, ind) => {
  //   console.log((ind + 1).toString().length);
  const name = user.district.slice(0, 2).toUpperCase();
  const currentYearLastTwoDigit = user.currentYear.toString().substr(-2);
  const firstTwoPostal = user.postNo.toString().slice(0, 2);
  const birthYear = user.birthYear.toString();
  const serialNum = (ind + 1).toString();
  let gotFromUser = `${name}${currentYearLastTwoDigit}${firstTwoPostal}${birthYear}`;

  for (let index = gotFromUser.length; index < 16 - serialNum.length; index++) {
    gotFromUser = gotFromUser.concat("0");
  }
  const result = gotFromUser.concat(serialNum);
  return [result, user.priority];
};

const cardDistribution = (users) => {
  //   getCardNumber(users)
  const cardNumber = users.map((user, ind) => getCardNumber(user, ind));
  //   console.log(cardNumber);
  const getObj = cardNumber.map((data) => {
    const obj = {};
    obj.carNumber = data[0];
    const lastOfNum = data[0].substr(-1);
    // console.log(lastOfNum);
    if (lastOfNum % 2 == 0) {
      obj.gift = "R";
    } else {
      obj.gift = "W";
    }
    obj.priority = data[1];

    return obj;
  });
  const sortingByPriority = getObj.sort((a, b) => a.priority - b.priority);
  return sortingByPriority;
};

const users = [
  {
    name: "Mr Reshed",
    birthYear: 1999,
    currentYear: 2022,
    district: "Dhaka",
    postNo: 1200,
    priority: 2,
  },
  {
    name: "Mr Raju",
    birthYear: 1995,
    currentYear: 2022,
    district: "Rajshahi",
    postNo: 1211,
    priority: 1,
  },
  {
    name: "Mr Raju",
    birthYear: 1997,
    currentYear: 2022,
    district: "chittagong",
    postNo: 1211,
    priority: 11,
  },
  {
    name: "Mr Raju",
    birthYear: 1992,
    currentYear: 2022,
    district: "Barisal",
    postNo: 1211,
    priority: 100,
  },
];
const result = cardDistribution(users);
// console.log(result);
