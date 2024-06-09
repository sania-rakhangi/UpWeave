
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
    const roundNeckTShirtImage2 = document.querySelector('#round-neck-tshirt-image-2');
    const roundNeckTShirtImage3 = document.querySelector('#round-neck-tshirt-image-3');
   

    colors.forEach(color => {
        color.addEventListener('click', function() {
            const colorName = color.innerText.trim().toLowerCase();
           
            roundNeckTShirtImage3.classList.remove('border-black');
            if (colorName === 'red') {

                roundNeckTShirtImage.src=`./assets/round red.png`;
                roundNeckTShirtImage2.src=`./assets/roundred2.png`;
                roundNeckTShirtImage3.src=`./assets/roundred3.png`;
            }else if(colorName==='navy blue') {
                roundNeckTShirtImage.src = `./assets/navybluepic.jpg`;
                roundNeckTShirtImage2.src=`./assets/navybluepic2.jpg`;
                roundNeckTShirtImage3.src=`./assets/navybluepic3.jpg`;
            }
            else if(colorName==='black') {
                roundNeckTShirtImage.src = `./assets/blackpic.jpg`;
                roundNeckTShirtImage2.src=`./assets/blackpic2.jpg`;
                roundNeckTShirtImage3.src=`./assets/blackpic3.jpg`;
            }
            else if(colorName==='green') {
                roundNeckTShirtImage.src = `./assets/greenpic.jpg`;
                roundNeckTShirtImage2.src=`./assets/greenpic2.jpg`;
                roundNeckTShirtImage3.src=`./assets/greenpic3.jpg`;
            }
            else if(colorName==='white') {
                roundNeckTShirtImage.src = `./assets/whitepic.jpg`;
                roundNeckTShirtImage2.src=`./assets/whitepic2.jpg`;
                roundNeckTShirtImage3.src=`./assets/whitepic3.jpg`;
                roundNeckTShirtImage3.classList.add('border-black');
            }
            else if(colorName==='yellow') {
                roundNeckTShirtImage.src = `./assets/yellowpic.jpg`;
                roundNeckTShirtImage2.src=`./assets/yellowpic2.jpg`;
                roundNeckTShirtImage3.src=`./assets/yellowpic3.jpg`;
            }
            else if(colorName==='blue') {
                roundNeckTShirtImage.src = `./assets/bluepic.jpg`;
                roundNeckTShirtImage2.src=`./assets/bluepic2.jpg`;
                roundNeckTShirtImage3.src=`./assets/bluepic3.jpg`;
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const colors = document.querySelectorAll('.color-name-p');
    const poloShirt = document.querySelector('#polo-shirt-image');
    const poloShirt2 = document.querySelector('#polo-shirt-image-2');
    const poloShirt3 = document.querySelector('#polo-shirt-image-3');
    

    colors.forEach(color => {
        color.addEventListener('click', function() {
            const colorName = color.innerText.trim().toLowerCase();
            poloShirt3.classList.remove('border-black');
            if (colorName === 'red') {
                
                poloShirt.src = `./assets/polored.jpg`;
                poloShirt2.src = `./assets/polored2.jpg`;
                poloShirt3.src = `./assets/polored3.jpg`;
            }else if(colorName==='navy blue') {
                poloShirt.src = `./assets/polonavyblue.jpg`;
                poloShirt2.src = `./assets/polonavyblue2.jpg`;
                poloShirt3.src = `./assets/polonavyblue3.jpg`;
            }
            else if(colorName==='black') {
                poloShirt.src = `./assets/poloblack.jpg`;
                poloShirt2.src = `./assets/poloblack2.jpg`;
                poloShirt3.src = `./assets/poloblack3.jpg`;
            }
            else if(colorName==='green') {
                poloShirt.src = `./assets/pologreen.jpg`;
                poloShirt2.src = `./assets/pologreen2.jpg`;
                poloShirt3.src = `./assets/pologreen3.jpg`;
            }
            else if(colorName==='white') {
                poloShirt.src = `./assets/polowhite.jpg`;
                poloShirt2.src = `./assets/polowhite2.jpg`;
                poloShirt3.src = `./assets/polowhite3.jpg`;
                poloShirt3.classList.add('border-black');
            }
            else if(colorName==='yellow') {
                poloShirt.src = `./assets/poloyellow.jpg`;
                poloShirt2.src = `./assets/poloyellow2.jpg`;
                poloShirt3.src = `./assets/poloyellow3.jpg`;
                poloShirt3.classList.add('border-black');
            }
            else if(colorName==='blue') {
                poloShirt.src = `./assets/polo blue.png`;
                poloShirt2.src = `./assets/poloblue2.png`;
                poloShirt3.src = `./assets/poloblue3.png`;
            }
            else if(colorName==='sky blue') {
                poloShirt.src = `./assets/poloskyblue.jpg`;
                poloShirt2.src = `./assets/poloskyblue2.jpg`;
                poloShirt3.src = `./assets/poloskyblue3.jpg`;
                poloShirt3.classList.add('border-black');
            }
        });
    });
});
