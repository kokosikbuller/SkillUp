import users from './users.js';

const getUsersWithGender = (users, gender) => {

    return users.filter((user) => user.gender === gender).map(user => user.name);

//    return users.reduce((acc, user) => {
//     if(user.gender === gender) {
//         acc.push(user.name)
//     }
//     return acc
//    }, []);
};
console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]