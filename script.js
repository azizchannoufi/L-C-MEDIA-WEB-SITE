document.addEventListener("DOMContentLoaded", function() {
    const texts = [
      "Une boutique qui vend, c'est bien.",
      "MAIS UNE BOUTIQUE QUI NE LAISSE PASSE AUCUNE VENTE C'EST MIEUX! "
    ];
    const textContainer = document.querySelector('.text-container');
    const text = document.querySelector('.text');
  
    let index = 0;
  
    function animateText() {
      const content = texts[index];
      text.textContent = '';
  
      // Écrire le texte
      text.classList.remove('erasing-text');
      text.classList.add('typing-text');
      for (let i = 0; i < content.length; i++) {
        const char = content.charAt(i);
        const span = document.createElement('span');
        span.textContent = char;
        span.style.animationDelay = `${i * 0.1}s`;
        text.appendChild(span);
      }
  
      // Attendre avant d'effacer le texte et d'afficher le prochain
      setTimeout(function() {
        // Effacer le texte
        text.classList.remove('typing-text');
        text.classList.add('erasing-text');
  
        // Changer le texte
        index = (index + 1) % texts.length;
        setTimeout(animateText, 3000); // Temps avant le prochain texte
      }, 3000); // Temps d'affichage du texte
    }
  
    // Démarrer l'animation
    animateText();
  });
  