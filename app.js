const hamBtn = document.getElementById("ham-btn");
const menu = document.getElementById("menu");
const closeBtn = document.getElementById("close-btn");
const orderBtn = document.getElementById("order-btn");
const modal = document.getElementById("modal");
const modal2 = document.getElementById("modal2");
const body = document.getElementById("body");
const submitBtn = document.getElementById("submit-btn");
const bookBtn = document.getElementById("book-btn");
const bookBtnNow = document.getElementById("book-btn-now");

hamBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  modal.style.display = "none";
    modal2.style.display = "none";

  body.classList.add("overflow-hidden");
});

closeBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  body.classList.remove("overflow-hidden")
});

orderBtn.addEventListener("click", () => {
  modal.classList.toggle("hidden");
  body.classList.add("overflow-hidden");
});

submitBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
  body.classList.remove("overflow-hidden");
});
bookBtn.addEventListener("click", () => {
  modal2.classList.toggle("hidden");
  body.classList.toggle("overflow-hidden");
});
bookBtnNow.addEventListener("click", () => {
  modal2.classList.toggle("hidden");
  body.classList.remove("overflow-hidden");
});


// After closing the hamburger button and clicking on the order  and book a table button, the body overflow property takes over, which should not be so