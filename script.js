'use strict';

let date = new Date();
let date1 = new Date(2021, 0, 1)
console.log(date.getHours());

function hi(date){
(date.getHours()) > 0 && (date.getHours()) <= 6 ? console.log('Доброй ночи!') : 
(date.getHours()) > 6 && (date.getHours()) <= 10 ? console.log('Доброe утро!') :
(date.getHours()) > 10 && (date.getHours()) <= 16 ? console.log('Добрый день!') :
(date.getHours()) > 16 && (date.getHours()) < 24 ? console.log('Добрый вечер!'):
console.log();
};

hi(date);

function getWeekDay(date){
  let day = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  return day[date.getDay()];
};
console.log('Сегодня: ', getWeekDay(date));
console.log('Текущее время: ' + date.toLocaleTimeString('en'));

// function getNewYearDay (date){
//   let newYearDay = new Date(2021, 0, 1) - ;
// };
let newYearDay = new Date(2021, 0, 1);
console.log('Новый год через: ' + Math.floor(((date1.getTime() - Date.now())) /(1000 * 3600 * 24)) + ' дней');