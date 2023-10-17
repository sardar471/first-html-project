// // JavaScript for Search functionality
// const searchInput = document.querySelector(".search-bar input");
// const cards = document.querySelectorAll(".card");

// searchInput.addEventListener("input", () => {
//   const searchTerm = searchInput.value.toLowerCase();

//   cards.forEach((card) => {
//     const cardText = card.textContent.toLowerCase();

//     if (cardText.includes(searchTerm)) {
//       card.style.display = "block";
//     } else {
//       card.style.display = "none";
//     }
//   });
// });
function show() {
  document.getElementById("slidebar").classList.toggle("active");
}

// JavaScript for Search functionality
const searchInput = document.querySelector(".search-bar input");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();

  cards.forEach((card) => {
    const cardText = card.textContent.toLowerCase();

    if (cardText.includes(searchTerm)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
