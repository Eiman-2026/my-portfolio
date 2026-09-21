// Loader Screen Timer & Fade Out
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.classList.add('opacity-0', 'pointer-events-none');
      setTimeout(() => {
        loader.style.display = 'none';
      }, 700);
    }
  }, 2600); // 2.6s Complete Sequence
});

// Headline Auto Typing Effect
const typingText = document.getElementById('typing-text');
const phrases = ['Frontend Developer', 'Software Engineering Student', 'Web Enthusiast'];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  if (!typingText) return;
  
  const currentPhrase = phrases[phraseIndex];
  
  if (isDeleting) {
    typingText.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingText.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 40 : 90;

  if (!isDeleting && charIndex === currentPhrase.length) {
    typeSpeed = 1800; // Pause at full word
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    typeSpeed = 400; // Pause before typing next word
  }

  setTimeout(type, typeSpeed);
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(type, 2800); // Starts after loader fades out
});