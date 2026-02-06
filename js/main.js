// SIMPLE SCROLL REVEAL
const revealElements = document.querySelectorAll('.service-card');

const revealOnScroll = () => {
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 80){
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
};

revealElements.forEach(el=>{
  el.style.opacity=0;
  el.style.transform="translateY(40px)";
  el.style.transition="0.8s ease";
});

window.addEventListener('scroll',revealOnScroll);
// Remove intro after animation
setTimeout(()=>{
  const intro = document.getElementById("intro");
  if(intro) intro.remove();
},4000);


