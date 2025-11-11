import { countries } from "./countries.js";

const container = document.querySelector(".countries-container");
document.getElementById("total").textContent = countries.length;

countries.forEach(country => {
  const div = document.createElement("div");
  div.className = "country";
  div.textContent = country.toUpperCase();
  container.appendChild(div);
});
