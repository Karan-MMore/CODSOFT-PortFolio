document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");
  
    menuToggle.addEventListener("click", function () {
      menu.classList.toggle("active");
    });
  });
  

  document.addEventListener("DOMContentLoaded", function() {
    const skills = document.querySelectorAll(".skill");
  
    skills.forEach(skill => {
      const skillLevelElement = skill.querySelector(".skill-level");
      const skillLevel = parseInt(skillLevelElement.style.width);
      
      // Set skill level dynamically
      skillLevelElement.style.width = skillLevel + "%";
    });
  });
  
  