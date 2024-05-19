"use strict";

// 1) Зібрати живу колекцію усіх посилань на сторінці
console.log(document.links);

// 2) Забрати статичну колекцію усіх зображень на сторінці
console.log(document.querySelectorAll("img"));

// 3) Дістати останній елемент li з меню
console.log(document.querySelector(".menu li:last-of-type"));

// 4) Дістати заголовок першої статті з секції з класом content-section
console.log(document.querySelector(".content-section article:first-of-type h2"));

// 5) Дістати усі другі абзаци в статтях
console.log(document.querySelectorAll("article p:nth-of-type(2n)"));
