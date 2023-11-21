// Wait for the content to be loaded
document.addEventListener("DOMContentLoaded", function () {
    const scrollText = document.getElementById('scrollText');
    const repeatCount = 8; // Set the number of times to repeat

    // Generate the repeated text
    const repeatedText = Array(repeatCount).fill('<span class="scroll">Scroll</span><span class="down">down</span>').join('');

    // Assign the repeated text to the element
    scrollText.innerHTML = repeatedText;
});
const skillContainer = document.querySelector('.skill-container');
const customCursor = document.querySelector('.custom-cursor');

skillContainer.addEventListener('mouseover', () => {
  customCursor.style.display = 'block';
});

skillContainer.addEventListener('mouseout', () => {
  customCursor.style.display = 'none';
});

skillContainer.addEventListener('mousemove', (e) => {
  customCursor.style.left = e.clientX + 'px';
  customCursor.style.top = e.clientY + 'px';
});

let isDragging = false;
let startX, scrollLeft;

const draggableContainer = document.getElementById('draggableContainer');

draggableContainer.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX - draggableContainer.offsetLeft;
  scrollLeft = draggableContainer.scrollLeft;
  draggableContainer.style.cursor = 'grabbing';
});

draggableContainer.addEventListener('mouseleave', () => {
  isDragging = false;
  draggableContainer.style.cursor = 'grab';
});

draggableContainer.addEventListener('mouseup', () => {
  isDragging = false;
  draggableContainer.style.cursor = 'grab';
});

draggableContainer.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - draggableContainer.offsetLeft;
  const walk = (x - startX) * 1.5; // Adjust scrolling speed
  draggableContainer.scrollLeft = scrollLeft - walk;
});

//CUSTOM CURSOR//
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.main-cursor');
    cursor.style.top = e.clientY + 'px';
    cursor.style.left = e.clientX + 'px';
  });

  
//CRUST SOCIETY HOVER IMG CURSOR ANIMATION//
const projectItemCrustSociety = document.querySelector('.crust-society');
const hoverImageCrustSociety = document.querySelector('.crust-society-image');

projectItemCrustSociety.addEventListener('mouseover', showImage);
projectItemCrustSociety.addEventListener('mouseout', hideImage);
document.addEventListener('mousemove', moveImage);

function showImage() {
    hoverImageCrustSociety.style.opacity = '1';
}

function hideImage() {
    hoverImageCrustSociety.style.opacity = '0';
}

function moveImage(event) {
    hoverImageCrustSociety.style.top = event.clientY + 'px';
    hoverImageCrustSociety.style.left = event.clientX + 'px';
}

//HEADLINE PROJECT ANIMATION//



//GSAP ANIMARION//

// Wrap your GSAP animations inside window.onload to ensure all elements are loaded before animating
window.onload = function () {
    // GSAP timeline for animations
    const tl = gsap.timeline();
  
    // Animation for the menu
    tl.from('.logo', {
      opacity: 0,
      duration: 1,
      x: -50,
      ease: 'power2.out',
    })
      .from('.menu-list li', {
        opacity: 0,
        duration: 0.5,
        y: -30,
        stagger: 0.2,
      })
      .from('.cta-email', {
        opacity: 0,
        duration: 0.5,
        y: 30,
      });
  
    // Animation for sections
    gsap.from('.hello', {
      opacity: 0,
      duration: 1,
      y: -50,
      scrollTrigger: {
        trigger: '.hello',
        start: 'top center+=100',
      },
    });
  
   gsap.from('.main-p', {
      opacity: 0,
      duration: 1,
      y: -50,
      scrollTrigger: {
        trigger: '.main-p',
        start: 'top center+=100',
      },
    });

    gsap.from('.sub-p', {
        opacity: 0,
        duration: 1,
        x: -50,
        scrollTrigger: {
          trigger: '.sub-p',
          start: 'top center+=100',
        },
      });
      
      
  
    gsap.from('.service', {
      opacity: 0,
      duration: 1,
      y: -50,
      scrollTrigger: {
        trigger: '.service',
        start: 'top center+=100',
      },
    });
  
    gsap.from('.projects', {
      opacity: 0,
      duration: 1,
      y: -50,
      scrollTrigger: {
        trigger: '.projects',
        start: 'top center+=100',
      },
    });

    // Animation for skill cards
    gsap.from('.project-items', {
        opacity: 0,
        duration: 1,
        y: -50,
        stagger: 0.8,
        scrollTrigger: {
          trigger: '.project-list',
          start: 'top center+=100',
        },
      });
  
    // Animation for skill cards
    gsap.from('.skill-card', {
      opacity: 0,
      duration: 1,
      y: -50,
      stagger: 0.8,
      scrollTrigger: {
        trigger: '.skill-container',
        start: 'top center+=100',
      },
    });
  };

  





