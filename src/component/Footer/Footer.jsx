import "./footer.css";
function Footer() {
  return (
    <footer>
      <article className="footerArticle">
        <p>
          <b>Retrouvez-moi sur : </b>
        </p>
        <div>
          <a
            href="https://github.com/NemoOnTheNet"
            target="_blank"
            title="lien vers github">
            <img src="./assets/github.png" alt="lien vers mon github" />
          </a>
          <a
            href="https://www.linkedin.com/in/robinfantino"
            target="_blank"
            title="lien vers linkedIn">
            <img src="./assets/linkedin.png" alt="lien vers mon github" />
          </a>
        </div>
      </article>

      <p>
        Contactez-moi en cliquant{" "}
        <a href="mailto:robin.fantino.rf@gmail.com">ici</a>
      </p>

      <p>
        Toute reproduction est interdite sans autorisation. Site créé et
        administré par Robin Fantino.
      </p>
    </footer>
  );
}

export default Footer;
