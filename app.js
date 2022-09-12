const rating = document.querySelectorAll(".rating li");
const startState = document.querySelector(".start-state");
const endState = document.querySelector(".end-state");
const span = document.querySelector(".result span");
const submit = document.querySelector(".submit");

rating.forEach((item) => {
  item.addEventListener("click", (e) => {
    number = item.getAttribute("data-rate");
    rating.forEach((el) => {
      el.classList.remove("active");
    });
    item.classList.add("active");

    submit.addEventListener("click", () => {
      //   console.log(number);
      span.innerHTML = number;
      startState.style.display = "none";
      endState.style.display = "flex";
    });
  });
});
