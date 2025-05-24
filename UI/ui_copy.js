import { Copy } from "../modules/copy.js";

document.querySelector("button").addEventListener("click", () => {
  let input = document.querySelector("#input").value;

  let result = new Copy(input, "string").toString();

  document.querySelector("#output").value = result;
});
