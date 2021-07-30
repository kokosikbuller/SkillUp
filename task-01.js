const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

const userKeys = Object.keys(user);
for(item of userKeys) {
    console.log(item);
}