document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const backgroundOverlay = document.createElement('div');
    backgroundOverlay.classList.add('background-overlay');
    document.querySelector('.background-container').appendChild(backgroundOverlay);

    body.addEventListener('mousemove', (e) => {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const distanceToCenter = Math.sqrt(Math.pow(e.pageX - centerX, 2) + Math.pow(e.pageY - centerY, 2));
        const maxDistance = Math.sqrt(Math.pow(centerX, 2) + Math.pow(centerY, 2));
        const maxRadius = 100; 
        
        let radius = maxRadius * (1 - distanceToCenter / maxDistance);

        radius = Math.max(radius, 10); 
        const gradientX = (e.pageX - centerX) / maxRadius * 50 + 50;
        const gradientY = (e.pageY - centerY) / maxRadius * 50 + 50;

        backgroundOverlay.style.mask = `radial-gradient(circle at ${gradientX}% ${gradientY}%, transparent 40%, black 70%)`;
    });

    body.addEventListener('mouseleave', () => {
        backgroundOverlay.style.mask = 'none';     
    });

    body.addEventListener('mouseenter', () => {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        backgroundOverlay.style.mask = `radial-gradient(circle at 50% 50%, transparent 40%, black 70%)`;
    });
});