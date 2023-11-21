const mainCursor = document.querySelector('.main-cursor');
const customCursor = document.querySelector('.custom-cursor');
const imageContainer = document.querySelector('.image-container');

document.addEventListener('mousemove', (e) => {
    mainCursor.style.top = e.clientY + 'px';
    mainCursor.style.left = e.clientX + 'px';
});

imageContainer.addEventListener('mousemove', (e) => {
    customCursor.style.top = e.clientY + 'px';
    customCursor.style.left = e.clientX + 'px';
});

imageContainer.addEventListener('mouseenter', () => {
    customCursor.textContent = 'Scroll';
    mainCursor.style.display = 'none';
    customCursor.style.width = '70px';
    customCursor.style.height = '70px';
    customCursor.style.top = '50%';
    customCursor.style.left = '50%';
    customCursor.style.transform = 'translate(-50%, -50%)';
});

imageContainer.addEventListener('mouseleave', () => {
    customCursor.textContent = '';
    mainCursor.style.display = 'block';
    customCursor.style.width = '60px';
    customCursor.style.height = '60px';
    customCursor.style.top = '-50%';
    customCursor.style.left = '-50%';

    
});

function initAnimations() {
    const elements = document.querySelectorAll('.animate-on-scroll');

    elements.forEach((element) => {
      gsap.from(element, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      element.addEventListener('mouseenter', () => {
        gsap.to(element, { scale: 0.9, duration: 0.3 });
      });

      element.addEventListener('mouseleave', () => {
        gsap.to(element, { scale: 1, duration: 0.3 });
      });
    });
  }

  document.addEventListener('DOMContentLoaded', initAnimations);

