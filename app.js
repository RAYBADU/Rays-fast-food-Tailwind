const hamBtn = document.getElementById("ham-btn");
const menu = document.getElementById("menu");
const closeBtn = document.getElementById("close-btn")

hamBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

closeBtn.addEventListener("click",()=>{
      menu.classList.toggle("hidden");

})
