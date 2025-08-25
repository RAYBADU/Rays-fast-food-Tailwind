const hamBtn = document.getElementById("ham-btn");
const menu = document.getElementById("menu");
const closeBtn = document.getElementById("close-btn");
const orderBtn = document.getElementById("order-btn");
const modal = document.getElementById("modal");
const body = document.getElementById("body")

hamBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  modal.style.display = "none"
  body.classList.add("overflow-hidden")
});

closeBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

orderBtn.addEventListener("click", ()=>{
  modal.classList.toggle("hidden")
  // body.style.filter = "blur(5px)"
  
})
