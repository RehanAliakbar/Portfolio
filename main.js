document.addEventListener('DOMContentLoaded', createParticles);

let header = document.querySelector('header');
let lastY = 50;

window.addEventListener('scroll', () => {
    let currentY = window.scrollY;

    if (currentY > lastY) {
        header.style.transform = 'translate(-50%, -100%)';
    } else {
        header.style.transform = 'translate(-50%, 0)';
    }

    lastY = currentY;
});



function createParticles() {
    const container = document.querySelector('.hero');
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 20}s`;
        particle.style.opacity = Math.random() * 0.3 + 0.2;
        particle.style.width = `${Math.random() * 3 + 1}px`;
        particle.style.height = particle.style.width;

        container.appendChild(particle);
    }
}

// function mouseMover(){
//         window.addEventListener('mousemove',function(dets){
//             this.document.querySelector('.cursor').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`
//         })


    
// }

let mousemove =(e)=>{
    let cursor = document.querySelector('.cursor')
    let x = e.clientX;
    let y = e.clientY

    cursor.style.left = x+'px'
    cursor.style.top = y+'px'

}
window.addEventListener('mousemove', (e)=>mousemove(e));