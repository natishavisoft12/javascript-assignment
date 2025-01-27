// Example JSON data
const slideData = [
    { title: "Slide 1", content: "Welcome to Slide 1", bgColor: "#FFB6C1" },
    { title: "Slide 2", content: "This is Slide 2", bgColor: "#ADD8E6" },
    { title: "Slide 3", content: "Enjoy Slide 3", bgColor: "#90EE90" },
  ];
  
  // Step 1: Select the slider element
  const slider = document.querySelector("#slider");
  
  // Step 2: Function to add slides
  function adder() {
    slideData.forEach((slide, index) => {
      // Create a slide element
      const slideElement = document.createElement("div");
      slideElement.classList.add("slide");
      if (index === 0) slideElement.classList.add("active"); // Add 'active' to the first slide
  
      // Apply content and styles
      slideElement.innerHTML = `
        <h2>${slide.title}</h2>
        <p>${slide.content}</p>
      `;
      slideElement.style.backgroundColor = slide.bgColor;
  
      // Append slide to the slider
      slider.appendChild(slideElement);
    });
  }
  
  // Step 3: Function to handle slide navigation
  function mover(direction) {
    const current = document.querySelector(".slide.active");
    let newSlide;
  
    if (direction === "next") {
      // Get next sibling, or loop back to the first
      newSlide = current.nextElementSibling || slider.firstElementChild;
    } else if (direction === "prev") {
      // Get previous sibling, or loop back to the last
      newSlide = current.previousElementSibling || slider.lastElementChild;
    }
  
    // Update active class
    current.classList.remove("active");
    newSlide.classList.add("active");
  }
  
  // Step 4: Add event listeners to buttons
  document.querySelector("#next").addEventListener("click", () => mover("next"));
  document.querySelector("#prev").addEventListener("click", () => mover("prev"));
  
  // Step 5: Load slides when DOM content is loaded
  document.addEventListener("DOMContentLoaded", adder);
  