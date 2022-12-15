// import { data } from "./character.json";
// console.log(data);

const URL = "https://rickandmortyapi.com/api/character/";

let arr = [];

for (let i = 1; i <= 826; i++) {
    arr.push(i)
}

console.log(arr)

async function getCharacter(data) {
	let response = await fetch(URL + arr);
	let dat = await response.json();
    console.log(dat)
	return dat;
}

let getCard = await getCharacter();

function createCard(el) {
	const card = document.createElement("div");
	const img = document.createElement("img");
	const creattitle = document.createElement("div");
	const title = document.createElement("h2");
	const special = document.createElement("p");
	const gender = document.createElement("p");
	const status = document.createElement("p");

	card.className = "main__card";
	img.className = "main__img";
	creattitle.className = "head__card__creattitle";
	title.className = "main__title";
	special.className = "main__text";
	gender.className = "main__text";
	status.className = "main__text";

	img.setAttribute("src", el.image);
	title.textContent = el.name;
	special.textContent = `Special: ${el.species}`;
	gender.textContent = `Gender: ${el.gender}`;

	card.append(img);
	card.append(creattitle);
	creattitle.append(title);
	creattitle.append(special);
	creattitle.append(gender);

	console.log(card);

	return card;
}

const headcard = document.querySelector(".main__headcard");
console.log(headcard);
getCard.forEach((el) => headcard.append(createCard(el)));

let input = document.querySelector(".header__inputbtm");
const sel = document.querySelector("select");
console.log(input);
function searchInput() {
	const inputValue = input.value.trim().toLowerCase();
	const selectValue = sel.value;
	console.log(selectValue);
	const filterValue = getCard
		.filter((el) => el.name.toLowerCase().includes(inputValue))
		.filter((el) => el.species === selectValue);
	headcard.innerHTML = " ";
	filterValue.forEach((el) => headcard.append(createCard(el)));
}
input.addEventListener("input", searchInput);
sel.addEventListener("change", searchInput);


