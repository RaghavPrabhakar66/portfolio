const text = document.querySelector('.holographic');

text.addEventListener('mousemove', (e) => {
    gsap.to(text, {
      '--x': `${(e.offsetX/window.innerWidth)*100}%`,
      '--y': `${(e.offsetY / window.innerHeight)*100}%`,
    });
});