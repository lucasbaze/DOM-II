let blocksDiv = document.querySelector('.blocks');
let blocks = document.querySelectorAll('.block');

// //Click to move to top of box
blocksDiv.addEventListener('click', event => {
    blocks.forEach(block => {
        block.classList.remove('first');
    });
    event.target.classList.add('first');
});

//Hold click to move "traveler" to the left
blocksDiv.addEventListener('mousedown', function(event) {
    let movingRight = setInterval(function() {
        event.target.style.marginLeft = `${counter(
            event.target.style.marginLeft
        )}px`;
    }, 50);
    event.target.addEventListener('mouseup', function(event) {
        clearInterval(movingRight);
    });
    event.target.addEventListener('mouseleave', function(event) {
        clearInterval(movingRight);
    });
});

counter = marginLeft => {
    let stripped = Number(marginLeft.slice(0, marginLeft.length - 2));
    stripped += 5;
    console.log(stripped);
    return stripped;
};
