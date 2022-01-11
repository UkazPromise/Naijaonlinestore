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
                <a href="#"><img src="Images/use.png" alt=""></a>
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