document.addEventListener('mousemove', function(e) {
    const cube = document.getElementById('cube');

    const rect = cube.getBoundingClientRect(); // Get the bounding rectangle of the cube
    
    const centerX = rect.left + rect.width / 2; // X coordinate of the cube's center
    const centerY = rect.top + rect.height / 2; // Y coordinate of the cube's center

    // // Get the center of the viewport
    // const centerX = window.innerWidth / 2;
    // const centerY = window.innerHeight / 2;
    
    // Calculate the distance from the center
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // Calculate rotation degrees
    // Smaller division values will make the cube more sensitive to mouse movement
    let degX = -mouseY / 10; // Tilt vertically based on mouse Y position
    let degY = mouseX / 10; // Rotate horizontally based on mouse X position

    // Clamping function to limit the rotation to +/- 90 degrees
    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
    let limiterX = 45;
    let limiterY = 75;
    degX = clamp(degX, -limiterX, limiterX);
    degY = clamp(degY, -limiterY, limiterY);

    // Apply the rotation to the cube
    cube.style.transform = `rotateX(${degX}deg) rotateY(${degY}deg)`;
});
