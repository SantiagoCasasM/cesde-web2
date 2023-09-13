export const header = () => {
  let p = document.createElement("p");
  p.innerHTML = `
      <p><strong> Pasos para la creacion de un SPA:</strong></p><br>
      <p>1. Hacemos creación de carpetas correspondientes</p><br>
      <p>1.1 Caperta principal "app"<br>
      <p>1.2 Archivo principal html "index.hmtml"<br>
      <p>1.3 Dentro de carpeta principal "app" creamos carpeta principal de nuestros componentes "components"<br>
      <p>1.4 Creamos en la misma raiz, afuera de componentes los archivos llamados "index.js" y "main.js"<br>

      <p>2. En nuestro index.html irá la estructura básica de html 

      `;
  return p;
};
