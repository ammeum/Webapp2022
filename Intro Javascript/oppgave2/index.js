const users = [
  { id: 0, name: "Trude", age: 77 },
  { id: 1, name: "Simen", age: 85 },
  { id: 2, name: "Lars", age: 99 },
  { id: 3, name: "Ali", age: 34 },
  { id: 4, name: "Finn", age: 60 },
  { id: 5, name: "Kåre", age: 70 },
  { id: 6, name: "Hanne", age: 20 },
  { id: 7, name: "Åse", age: 21 },
  { id: 8, name: "Anne", age: 6 },
  { id: 9, name: "Amanda", age: 31 },
  { id: 10, name: "Morgan", age: 87 }
];

const userUl = document.getElementById("users");
// TODO: Hent HTML #id med getElementById
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const filterButton = document.getElementById("filter");

// TODO: Lag en funksjon som kan brukes til å skrive ut HTMLen for å se brukerene. Du kan bruke users importert over for å hente en liste med 10 brukere
const createTableUI = (users) => {
  userUl.innerHTML = null;
  userUl.innerHTML += `<li><span>Id</span><span>Navn</span><span>Alder</span></li>`;
  for (const user of users) {
    userUl.innerHTML += `<li><span>${user.id}</span><span>${user.name}</span><span>${user.age}</span></li>`;
  }
};

// TODO: Lag en funksjon som håndterer søket og oppdaterer grensesnittet med resultatet fra søket
const writeOutName = () => {
  const searchInput = nameInput.value;

  if (searchInput) {
    const searchResult = users.find((user) => user.name === searchInput);

    if (searchResult) {
      createTableUI([searchResult]);
    } else {
      userUl.innerHTML = "Fyll inn med stor bokstav og hele navnet";
    }
  } else {
    createTableUI(users);
  }
};

// TODO: Lag en funksjon som håndterer filteret og oppdaterer grensesnittet med resultatet fra filteret
const writeOutAge = () => {
  const filterInput = ageInput.value;

  if (filterInput && +filterInput) {
    const filterResult = users.filter((user) => user.age > filterInput);

    if (filterResult && filterResult.length > 0) {
      createTableUI(filterResult);
    } else {
      userUl.innerHTML = "Forsøk en annen alder";
    }
  } else {
    createTableUI(users);
  }
};
// TODO: Lytt til tastatur klikk på søkefeltet, den skal trigge søkefunksjonen (handleSearch)
nameInput.addEventListener("keyup", writeOutName);
// TODO: Lytt til klikk på filter-knappen, den skal trigge filterfunksjonen (handleFilter)
filterButton.addEventListener("click", writeOutAge);

const main = () => {
  createTableUI(users);
};

main();
