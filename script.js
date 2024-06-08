
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    if(validateEmail(email)) {
        alert('Thank you for subscribing!');
        document.getElementById('form').reset();
    } else {
        alert('Please enter a valid email address.');
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

document.addEventListener('DOMContentLoaded', function() {
    const colors = document.querySelectorAll('.color-name');
    const roundNeckTShirtImage = document.querySelector('#round-neck-tshirt-image');
    const defaultImageSrc = roundNeckTShirtImage.src; // Store the default image source

    colors.forEach(color => {
        color.addEventListener('click', function() {
            const colorName = color.innerText.trim().toLowerCase();
            if (colorName === 'red') {
                // If red color is selected, revert to default image
                roundNeckTShirtImage.src = defaultImageSrc;
            }else if(colorName==='navy blue') {
                roundNeckTShirtImage.src = `./assets/navybluepic.jpg`;
            }
            else if(colorName==='black') {
                roundNeckTShirtImage.src = `./assets/blackpic.jpg`;
            }
            else if(colorName==='green') {
                roundNeckTShirtImage.src = `./assets/greenpic.jpg`;
            }
            else if(colorName==='white') {
                roundNeckTShirtImage.src = `./assets/whitepic.jpg`;
            }
            else if(colorName==='yellow') {
                roundNeckTShirtImage.src = `./assets/yellowpic.jpg`;
            }
            else if(colorName==='blue') {
                roundNeckTShirtImage.src = `./assets/bluepic.jpg`;
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const colors = document.querySelectorAll('.color-name-p');
    const roundNeckTShirtImage = document.querySelector('#polo-shirt-image');
    const defaultImageSrc = roundNeckTShirtImage.src; // Store the default image source

    colors.forEach(color => {
        color.addEventListener('click', function() {
            const colorName = color.innerText.trim().toLowerCase();
            if (colorName === 'red') {
                // If red color is selected, revert to default image
                roundNeckTShirtImage.src = `./assets/polored.jpg`;
            }else if(colorName==='navy blue') {
                roundNeckTShirtImage.src = `./assets/polonavyblue.jpg`;
            }
            else if(colorName==='black') {
                roundNeckTShirtImage.src = `./assets/poloblack.jpg`;
            }
            else if(colorName==='green') {
                roundNeckTShirtImage.src = `./assets/pologreen.jpg`;
            }
            else if(colorName==='white') {
                roundNeckTShirtImage.src = `./assets/polowhite.jpg`;
            }
            else if(colorName==='yellow') {
                roundNeckTShirtImage.src = `./assets/poloyellow.jpg`;
            }
            else if(colorName==='blue') {
                roundNeckTShirtImage.src = `./assets/polo blue.png`;
            }
            else if(colorName==='sky blue') {
                roundNeckTShirtImage.src = `./assets/poloskyblue.jpg`;
            }
        });
    });
});

