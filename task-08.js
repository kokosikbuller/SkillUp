import users from './users.js';

const getUsersWithFriend = (users, friendName) => {
    return users.filter(user => {
        const statusFrind = user.friends.some(friend => friend === friendName);
        if(statusFrind) {
            return statusFrind
        }
    }).map(item => item.name);
};
console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]