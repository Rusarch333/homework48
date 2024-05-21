"use strict";

/*

Посилання на коміт зі сторінкою, яка потрібна для виконання завдання:
https://github.com/freshjsftm/pfm2024-1-js-17-05-2024/tree/1871c2ccee3b5a324e78a69b7f69f39de774b7cd
Зміни в html не вносити!

Завдання:
*/

// 1) Зібрати живу колекцію усіх посилань на сторінці
console.log(document.links);

// 2) Забрати статичну колекцію усіх зображень на сторінці
console.log(document.querySelectorAll("img"));

// 3) Дістати останній елемент li з меню
console.log(document.querySelector(".menu li:last-of-type"));

// 4) Дістати заголовок першої статті з секції з класом content-section

// First-of-type можна не писати у querySelector, він і так перший знаходить!
// console.log(document.querySelector(".content-section article:first-of-type h2"));
console.log(document.querySelector(".content-section article h2"));

// 5) Дістати усі другі абзаци в статтях
console.log(document.querySelectorAll("article p:nth-of-type(2n)"));
