import users from './users.js';
// Получить пользоваля (не массив) по email (поле email, он уникальный).
const getUserWithEmail = (users, email) => {
  return users.filter(user => user.email === email)
};
console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}