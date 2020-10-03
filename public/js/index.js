// const hamburguesa = document.querySelector("#hamburguesa");
// const menu = document.querySelector("#menu");

// hamburguesa.addEventListener("click", () => {
//   if (menu.classList.contains("hidden")) {
//     menu.classList.remove("hidden");
//   } else {
//     menu.classList.add("hidden");
//   }
// });

// ----------------------------------------------------------------
//  Otra opción para conseguir lo mismo de manera más simple
// ----------------------------------------------------------------

const hamburguesa = document.querySelector("#hamburguesa");
const menuClassList = document.querySelector("#menu").classList;

hamburguesa.addEventListener("click", () => {
  menuClassList.toggle("hidden");
});
