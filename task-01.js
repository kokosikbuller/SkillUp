import users from './users.js';

const getUserNames = users => {
  return users.map(({name}) => name);
};
console.log(getUserNames(users));
