const ratingsEl = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container");
let selectedRating = "";


ratingsEl.forEach((ratingEl) => {
  ratingEl.addEventListener("click", (event) => {
    removeAcitive();
    selectedRating = event.target.innerText || event.target.parentNode.innerText;
    // console.log(event.target.innerText || event.target.parentNode.innerText);
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
  });
});

btnEl.addEventListener("click", () => {
  if(selectedRating !== "") {
    containerEl.innerHTML = `
      <strong>Thank You!</strong>
      <br>
      <br>
      <strong>Feedback : ${selectedRating}</strong>
      <p>we'll use your feedback to improve our customer support.</p>
    `;
  }
})

function removeAcitive() {
  ratingsEl.forEach((ratingEl) => {
    ratingEl.classList.remove("active");
  })
}