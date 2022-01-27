const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="navbar">
            <img src="images/logo.png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search 
                    brand, product">
                    <button class="search-btn">search</button>
                </div>
                <a>
                    <img src="Images/use.png" id="user-img" alt="">
                    <div class="login-logout-popup">
                        <p class="account-info">Log in as, name</p>
                        <button class="btn" id="user-btn">Log out</button>
                    </div>
                </a>
                <a href="#"><img src="Images/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="index.html" class="link">Home</a></li>
            <li class="link-item"><a href="Computer.html" class="link">Computer</a></li>
            <li class="link-item"><a href="Kitchen&Home.html" class="link">Home & Kitchen</a></li>
            <li class="link-item"><a href="Phones&Tablets.html" class="link">Phones & Tablets</a></li>
            <li class="link-item"><a href="Electronic.html" class="link">Electronics</a></li>
            <li class="link-item"><a href="Fashion.html" class="link">Fashion</a></li>
            <li class="link-item"><a href="cars.html" class="link">Cars</a></li>
        </ul>
    `;
}

createNav();

// nav popup
const userImageButton = document.querySelector('#user-img');
const userPopup = document.querySelector('.login-logout-popup');
const popuptext = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');

userImageButton.addEventListener('click', () => {
    userPopup.classList.toggle('hide');
}) 

window.onload = () => {
    let user = JSON.parse(sessionStorage.user || null);
    if(user != null){
        // means user is logged in
        popuptext.innerHTML = `log in as, ${user.name}`;
        actionBtn.innerHTML = `log out`;
        actionBtn.addEventListener(`click`, () => {
            sessionStorage.clear();
            location.reload();
        })
    } else{
        // user is logged out
        popuptext.innerHTML = 'log in to place order';
        actionBtn.innerHTML = 'log in';
        actionBtn.addEventListener('click', () => {
            location.href = '/login';
        })
    }
}