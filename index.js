window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".navbar");
    var fixedDiv = document.querySelector(".fixed-div");
    var rect = navbar.getBoundingClientRect();
  
    if (rect.top <= 0) {
      fixedDiv.classList.add("fixed");
    } else {
      fixedDiv.classList.remove("fixed");
    }
  });
 
  
  
  
  
  