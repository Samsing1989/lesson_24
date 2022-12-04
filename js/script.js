//Відео №1
// Задача №1
// Кто попадет в консоль первым Вася или Коля?
// function showName() {
// 	console.log('Вася!');
// }
// setTimeout(showName, 0);
// console.log('Коля!');
// Задача №2
// Верно ли вызвана функция
// function showMessage() {
// 	console.log('Сообщение');
// }
// showMessage();
// Задача №3
// Верно ли вызвана функция
// showMessage();
// let showMessage = function () {
// 	console.log('Сообщение');
// }
// Задача №4
// Как решить проблему?
// 'use strict'
// if (2 > 1) {
// 	function showMessage() {
// 		console.log('Сообщение');
// 	}
// 	showMessage();
// }
// Error (showMessage is not defined)
//Відео №2
// Задача №1.
// Какое число (длинну) мы получим?
// let arr = ['Ваня', 'Иштван', 'Оля',];
// let newArr = arr;
// newArr.push('Петя');
// console.log(arr.length);
// Задача №2.
// let users = ["Ваня", "Иштван",];
// users.push("Оля");
// delete users[1];
// users[1] = "Петя";
// console.log(users.indexOf("Ваня"));
// console.log(users.indexOf("Петя"));
// console.log(users.indexOf("Оля"));
// users.shift();
// users.unshift("Ваня");
// users.unshift("Маша", "Паша");
// console.log(users);
// Задача №3.
// Удалить элемент 'Иштван' и возвратить его в переменную
// let arr = ['Ваня', 'Иштван', 'Оля',];
// let removed = arr.splice(1, 1);
// console.log(removed);
// console.log(arr);
// Задача №4.
//Сделать из строки массив
// let str = 'Ваня,Иштван,Оля';
// let arr = str.split(',');
// console.log(arr);
// Задача №5.
// Чему равен previousValue в начале работы метода?
// let arr = [9, 2, 8,];
// let reduceValue = arr.reduce(function (previousValue, item, index, array) {
// console.log(previousValue);
// });
//Відео №3
// Задача №1.
// Получить в переменную элемент с атрибутом data-say-hi
// и прочитать значение этого атрибута
// {<div data-say-hi="yes">Привет!</div>}
// const elemData = document.querySelector(`[data-say-hi]`);
// console.log(elemData);
// Задача №2.
// Получить в переменную элемент с текстом Йончи
{/* <ul>
	<li>Корчи</li>
	<li>Йончи</li>
</ul> */}
// const lessonList = document.querySelectorAll('li')[1];
// console.log(lessonList);
// Задача №3.
// Получить в переменную коллекцию элементов с классом like
{/* <div class="like"></div>
<div class="subscribe"></div>
<div class="like-subscribe"></div> */}
// const lessonList = document.querySelectorAll(`.like`);
// console.log(lessonList);
// Задача №4.
// Куда добавится <li>Текст</li> ?
// // JS
// const list = document.querySelector('ul');
// list.insertAdjacentHTML(
// 	'beforeend',
// 	'<li>Текст</li>'
// );
// console.log(list);
// HTML
/* <ul>
	<li>Пункт №1</li>
	<li>Пункт №2</li>
</ul> */
// Задача №1.
// Узнать ширину полосы прокрутки
// const windowWidth = window.innerWidth;
// const mainElement = document.documentElement;
// const mainElementWidth = mainElement.clientWidth;
// console.log(windowWidth - mainElementWidth);
// Задача №2.
// Заставьте браузер прокрутиться на 100px сверху
// спустя секунду после открытия страницы
// function setScrollToOptions() {
// 	window.scrollTo({
// 		top: 100,
// 		left: 0,
// smooth, instant,
// либо auto; по умолчанию auto
// 		behavior: "smooth"
// 	});
// }
// setTimeout(setScrollToOptions, 1000);
// Задача №3.
// Получите координаты любых трех элементов на странице
// Задача №3.
// Получите координаты любых трех элементов на странице
// const page = document.querySelector('.like');
// const getItemCoords = page.getBoundingClientRect();
// console.log(getItemCoords);
// const video = document.querySelector('.page__video-3');
// const getItemTopCoord = video.getBoundingClientRect().top;
// console.log(getItemTopCoord);
// const like = document.querySelector('.like-subscribe');
// const getItemLeftCoord = like.getBoundingClientRect().left;
// console.log(getItemLeftCoord);



