import { header } from "./components/header.js";

export const App = () => {
  let divRoot = document.querySelector("#root");
  divRoot.innerHTML = "<h3>Explicacion de SPA</h3>";
  divRoot.append(header());
};
