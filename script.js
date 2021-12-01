/*№8. Создать из придуманных массивов типа const headerArray = [{ name: "google", href: "http://google.cpm" }...] 
хедер и футер с помощью JS. 
header > nav > ul > li;
footer > nav > ul > li;
тег body в html должен быть пустым, все теги вы должны создать с помощью JS.
Можно использовать классы либо inline-css в js. Работа по парам, пары разбиты были на занятиях. 
Для тех кого не было : у вас в паре человек который был на занятии, он должен вам написать. 
Если есть вопросы пишите*/

let footer = document.createElement("footer");
footer.className = "class2";
document.body.append(footer);

let nav = document.createElement("nav");
footer.append(nav);

let ul = document.createElement("ul");
nav.append(ul);
let ul2 = document.createElement("ul");
nav.append(ul2);
let arrayLinks = [
  { name: "Google", myhref: "http://google.com" },
  { name: "Goodfon", myhref: "http://goodfon.ru" },
  { name: "VK", myhref: "http://Vkontakte.ru" },
  { name: "YouTybe", myhref: "http://youtybe.com" },
  { name: "Goodfon", myhref: "http://goodfon.ru" },
];

for (let i = 0; i < arrayLinks.length; i++) {
  let li=document.createElement("li");
  let a = document.createElement("a");
  li.append(a);
  a.innerText = arrayLinks[i].name;
  a.href = arrayLinks[i].myhref;
  ul.append(li);
}

arrayLinks.forEach((item) => {
  let newli=document.createElement("li");
  let newa = document.createElement("a");
  newli.append(newa);
  newa.innerText=item.name;
  newa.href=item.myhref;
  ul2.append(newli);
});
