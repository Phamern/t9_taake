document.querySelectorAll("nav a").forEach(
  function(e) {
  e.addEventListener('mouseover', 
  function() {
    switch(e.innerHTML) {
      case "Schizotypal":
        document.querySelector('.symptoms').classList.add('schizoSympt');
      break;
      case "Borderline":
        document.querySelector('.symptoms').classList.add('schizoSympt');
      default:
      break;
    }
  })

  e.addEventListener('mouseout', function(){
    switch(e.innerHTML) {
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

