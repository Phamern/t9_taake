document.querySelectorAll("nav a").forEach(e => {
  e.addEventListener('mouseover', () => {
    switch(e.textContent) {
      case "Schizotypal":
        document.querySelector('.symptoms').classList.add('schizoSympt');
      break;
      case "Borderline":
        document.querySelector('.symptoms').classList.add('schizoSympt');
      default:
      break;
    }
  })

  e.addEventListener('mouseout', () => {
    switch(e.textContent) {
      case "Schizotypal":
        document.querySelector('.symptoms').classList.remove('schizoSympt');
      break;
      case "Borderline":
        document.querySelector('.symptoms').classList.remove('schizoSympt');
      break;
      default:
      break;
    }
  })
})

