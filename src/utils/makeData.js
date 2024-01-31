import faker from 'faker';

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newUser = () => {
  const statusChance = Math.random();
  return {
    name: faker.name.findName(),
    lastName: faker.name.lastName(),
    age: Math.floor(Math.random() * 30),
    visits: Math.floor(Math.random() * 100),
    progress: Math.floor(Math.random() * 100),
    status:
      statusChance > 0.66
        ? 'relationship'
        : statusChance > 0.33
        ? 'complicated'
        : 'single',
    // sno: faker.datatype.number(),
    // name: faker.name.findName(),
    // email: faker.internet.email(),
    // role: faker.finance.account(),
    // createdAt: faker.date.past(),
    // updatedAt: faker.date.past(),
    // createdBy: faker.name.middleName(),
    // lastLogin: faker.date.recent(),
  };
};

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map((d) => {
      return {
        ...newUser(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}
