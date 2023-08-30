import { footer } from "./components/footer.js";
import { header } from "./components/header.js";

export const App = () => {
  let divRoot = document.querySelector("#root");
  divRoot.innerHTML = "<h1>My first SPA</h1>";
  divRoot.append(header());
  divRoot.append(footer());
};
