const users = [
  {
    id: 10,
    name: 'ivan',
    isActive: true,
    age: 39,
  },

  {
    id: 5,
    name: 'Sergei',
    isActive: false,
    age: 11,
  },
  {
    id: 12,
    name: 'John',
    isActive: true,
    age: 19,
  },
  {
    id: 3,
    name: 'Mark',
    isActive: false,
    age: 58,
  },
];

const getUsers = (arr) => {
  const names = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].isActive) {
      names.push(arr[i].name);
    }
  }
  return names;
};

const getUsers1 = (arr) => {
  const names = [];
  arr.forEach((item) => {
    names.push(item.name);
  });
  return names;
};

const getUsers2 = (arr) => arr.map((elem) => elem.id);

const getActiveUsers = (arr) => {
  return arr.filter((item) => item.isActive).map((item) => item.name);
};

const sortByAge = (arr) => {
  return arr
    .sort((item1, item2) => (item1.age < item2.age ? -1 : 1))
    .map((item) => item.name);
};

const isNameExists = (arr, name) => arr.some((item) => item.name === name);

const fruits = ['banana', 'apple', 'orange', 'pineapple', 'orange'];
const getUniqArray = (arr) => [...new Set(arr)];

const getUniqArray1 = (arr) => {
  return arr.reduce((acc, item) => {
    return acc.includes(item) ? acc : [...acc, item];
  }, []);
};

const createRange = (end) => [...Array(end).keys()].map((item) => ++item);
console.log(createRange(25));
