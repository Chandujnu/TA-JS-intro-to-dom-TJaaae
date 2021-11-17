
let parentElm = document.querySelector("ul");

let allPeople = got.houses.reduce((acc, cv) => {
    acc = acc.concat(cv.people);
    return acc;
},[]);


parentElm.innerHTML = allPeople.map((person) => {
    return `<li>
    <img src="${person.image}" alt="${person.name}">
    <span>${person.name}</span>
    <p>${person.description}</p>
    <button>Learn More!</button>
  </li>`;
}).join("");