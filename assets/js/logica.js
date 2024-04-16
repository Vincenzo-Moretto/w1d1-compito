/* JS Exercises should go here */

// EXTRA Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automaticamente.

window.addEventListener("load", function () {
  // Trova l'elemento che contiene i link "Altro"
  let altroSection = document.querySelector("aside");
  let altro = altroSection.querySelector(".p-4:nth-child(3)");
  /* console.log(altro); */

  // Trova il link "Twitter" sotto alla sezione "Altro"
  let twitterLink = altro.querySelector("li:nth-child(2)");
  /* console.log(twitterLink); */
  // Rimuovi il link "Twitter" se presente
  if (twitterLink && twitterLink.textContent === "Twitter") {
    twitterLink.remove();
  }
});

// EXTRA Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM cliccando sul link "Continua a leggere".

window.addEventListener("load", function () {
  let links = document.querySelectorAll('a[href="#"]'); // Trova tutti i link "Continua a leggere"
  console.log(links);

  // Aggiungi un gestore di eventi a ciascun link
  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      // Impedisci il comportamento predefinito del link
      event.preventDefault();

      // Trova l'elemento padre da rimuovere
      let post = link.closest(".p-4");
      /*       console.log(post); */
      // Rimuovi l'elemento padre dal DOM
      post.remove();
    });
  });
});

// EXTRA Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta che il cursore passa sopra l'autore del post.

window.addEventListener("load", function () {
  // Trova tutti i link degli autori
  let authorLinks = document.querySelectorAll(".blog-post-meta a");

  // Aggiungi un gestore di eventi a ciascun link dell'autore
  authorLinks.forEach((link) => {
    link.addEventListener("mouseover", function () {
      // Ottieni il nome dell'autore
      let authorName = link.textContent;
      console.log(link);
      // Mostra un alert con il nome dell'autore
      alert("Autore del post: " + authorName);
    });
  });
});
