'use strict'

// 1.1 Для примера с последней части занятия (https://github.com/pecourses/js-intro/blob/main/js/users.js) прописать метод getFullName() (возвращает строку с полным именем) для юзера. Общую логику (т.е. указанный метод) вынести в прототип. 


function User(name, surname, age, isMale, eMail, isSubscribed){
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
    this.isMale = isMale;
    this.eMail = eMail;
    this.isSubscribed = isSubscribed;
}

const userProto = new User();
userProto.getFullName = function(user){
    return `${user.firstName} ${user.lastName}`;
}

User.prototype = userProto;

const users = [];
for(let i = 0; i < 100; i++){
    const user = new User(
        `Username${i}`,
        `Usersurname${i}`,
        Math.floor(Math.random() * 90),
        Math.random() > 0.5,
        `useremail${i}@gmail.com`,
        Math.random() > 0.5,
    );
    users.push(user);
}

console.table(users);

// 1.2 Получить массив полных имен лиц женского пола школьного возраста (6 - 18 лет).

function isWoman(user){
    return !user.isMale;
}

function isPupil(user){
    if(user.age >=6 && user.age <=18){
        return true;
    }
}

const schoolGirls = users.filter(isWoman).filter(isPupil);
console.table(schoolGirls);
const schoolGirlsFullName =schoolGirls.map(user => user.getFullName(user));
console.table(schoolGirlsFullName);

// 1.3 Проверить, есть ли среди пользователей пользователь с email`ом useremail99@gmail.com
console.log(users.some(user => user.eMail === 'useremail99@gmail.com')); 



// 1.4 Проверить, все ли пользователи подписаны (subscribed).
function isSubsc(user){
    return user.isSubscribed;
}

console.log(users.every(user => isSubsc(user)));

