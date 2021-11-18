console.log(got);
let parentElm = document.querySelector(".box");

let allPeople = got.houses.reduce((acc, cv) => {
    acc = acc.concat(cv.people);
    return acc;
},[]);


let cardsHTML = allPeople.map((person) => {
    return `<li>
    <img src="${person.image}" alt="${person.name}">
    <span>${person.name}</span>
    <p>${person.description}</p>
    <button>Learn More!</button>
  </li>`;
});

parentElm.innerHTML = cardsHTML.join("");

// let ul = document.querySelector("ul")

// allPeople.map((oerson) => {
//   let li = document.createElement("li");
//   let img = document.createElement("img");
//   img.src = "person.image";
//   let span = document.createElement("span");
//   span.innerText = "person.name";
//   let p = document.createElement("p");
//   p.innerText = "person.description";
//   let button = document.createElement("button");
//   button.innerText = "Learn More!";

//   li.append(img, span, p, button);
//   ul.append(li)
// })