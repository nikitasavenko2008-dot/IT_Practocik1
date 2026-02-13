const users = [
{ id: 1, name: "Anna", age: 22, city: "Moscow", isActive: true },
{ id: 2, name: "Oleg", age: 17, city: "Kazan", isActive: false },
{ id: 3, name: "Ivan", age: 30, city: "Moscow", isActive: true },
{ id: 4, name: "Maria", age: 25, city: "Sochi", isActive: false }
];


function getActiveUsers(users) {
    return users.filter(user => user.isActive);
}

const getUserNames = (users) => users.map(user => user.name);

function findUserById(users, id) {
    const user = users.find(user => user.id === id);
    return user
}

function getUsersStatistics(users) {
    const total = users.length;
    const active = users.filter(user => user.isActive).length;
    const inactive = users.filter(user => !user.isActive).length;
}

function getAverageAge(users) {
    const totalAge = users.reduce((acc, user) => acc + user.age, 0);
    return totalAge / users.length;
}

function groupUsersByCity(users) {
    return users.reduce((acc, user) => {
        if (!acc[user.city]) {
            acc[user.city] = [];
        }
        acc[user.city].push(user);
        return acc;
    }, {});
}


console.log(getActiveUsers(users));
console.log(getUserNames(users));
console.log(findUserById(users, 3));
console.log(getUsersStatistics(users));
console.log(getAverageAge(users));
console.log(groupUsersByCity(users));