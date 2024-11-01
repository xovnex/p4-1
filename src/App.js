import React from "react";
import "./style.css"; // Importa el archivo CSS para los estilos

function App() {
  return (
    <>
      <header>
        <h1>Bienvenido a Mi Página</h1>
        <nav>
          <ul>
            <li>
              <a href="index.html">Inicio</a>
            </li>
            <li>
              <a href="Juegos.html">Juegos</a>
            </li>
            <li>
              <a href="favoritos.html">Favoritos</a>
            </li>
            <li>
              <a href="contacto.html">Contacto</a>
            </li>
            <li>
              <a href="acerca.html">Acerca de nosotros</a>
            </li>
          </ul>
        </nav>
      </header>

      <section id="bienvenida">
        <h2>Bienvenido a Nuestro Espacio</h2>
        <p>
          En nuestra página, te ofrecemos una variedad de juegos y contenido
          diseñado para brindarte horas de diversión. Nos esforzamos por
          proporcionar la mejor experiencia para nuestros usuarios, combinando
          calidad y entretenimiento.
        </p>
        <p>
          ¡Explora nuestros juegos y no dudes en añadir tus favoritos para
          tenerlos siempre a mano!
        </p>
        <a href="Juegos.html" className="btn-explorar">
          Explorar Juegos
        </a>
      </section>

      <section>
        <h2>Acerca de</h2>
        <p>
          Somos una compañía dedicada a ofrecer los mejores servicios en nuestra
          área, comprometidos con la calidad y la satisfacción de nuestros
          clientes.
        </p>
      </section>

      <footer>
        <p>&copy; 2024 - Todos los derechos reservados a Ale.</p>
      </footer>
    </>
  );
}

export default App;
