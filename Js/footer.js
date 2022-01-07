const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `<div class="footer-content">
    <img src="images/logo.png" class="logo" alt="">
    <div class="footer-ul-container">
        <ul class="category">
            <li class="category-title">Computers</li>
            <li><a href="#" class="footer-link">Desktop</a></li>
            <li><a href="#" class="footer-link">Laptops</a></li>
            <li><a href="#" class="footer-link">Computer Accessories</a></li>
            <li><a href="#" class="footer-link">Wifi & Networking</a></li>
            <li><a href="#" class="footer-link">Software</a></li>
            <li><a href="#" class="footer-link">Printer & Scanner</a></li>
        </ul>
        <ul class="category">
            <li class="category-title">Home & Kitchen</li>
            <li><a href="#" class="footer-link">Big Appliances</a></li>
            <li><a href="#" class="footer-link">Small Appliances</a></li>
            <li><a href="#" class="footer-link">Home Furnishings</a></li>
            <li><a href="#" class="footer-link">Kitchen & Dinning</a></li>
            <li><a href="#" class="footer-link">Furniture</a></li>
            <li><a href="#" class="footer-link">Others</a></li>
        </ul>
        <ul class="category">
            <li class="category-title">Phones & Tablets</li>
            <li><a href="#" class="footer-link">Mobile Phones</a></li>
            <li><a href="#" class="footer-link">Tablets</a></li>
            <li><a href="#" class="footer-link">Accessories</a></li>
            <li><a href="#" class="footer-link">Top Phone Brands</a></li>
        </ul>
        <ul class="category">
            <li class="category-title">Electronics</li>
            <li><a href="#" class="footer-link">Television</a></li>
            <li><a href="#" class="footer-link">Cameras & Photos</a></li>
            <li><a href="#" class="footer-link">Generators & Powers</a></li>
            <li><a href="#" class="footer-link">Home & Audio</a></li>
            <li><a href="#" class="footer-link">Game & Consoles</a></li>
        </ul>
        <ul class="category">
            <li class="category-title">Fashion</li>
            <li><a href="#" class="footer-link">Men Wears</a></li>
            <li><a href="#" class="footer-link">Women Wears</a></li>
            <li><a href="#" class="footer-link">Watches</a></li>
            <li><a href="#" class="footer-link">Sunglasses</a></li>
            <li><a href="#" class="footer-link">Kids Wears</a></li>
        </ul>
        <ul class="category">
            <li class="category-title">Cars</li>
            <li><a href="#" class="footer-link">Car Brands</a></li>
            <li><a href="#" class="footer-link">Car Care</a></li>
            <li><a href="#" class="footer-link">Car Electronics & Light Accessories</a></li>
        </ul>
    </div>
</div>
<p class="footer-title">about company</p>
<p class="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada, mi eget rhoncus tincidunt, felis enim maximus lectus, a cursus tortor lacus id turpis. Cras a dignissim orci. Donec finibus dolor libero, a mollis neque malesuada ut. Mauris quis laoreet risus, et ornare velit. Fusce non tortor enim. Nunc eget mollis diam, vel sodales felis. Aliquam euismod, nunc quis blandit luctus, enim nulla congue nisi, a faucibus mi augue ut velit. Aliquam erat volutpat. Praesent bibendum tortor diam, blandit viverra erat suscipit id. Phasellus laoreet, quam in malesuada rutrum, ligula leo venenatis tortor, accumsan fringilla lectus ligula nec risus. Morbi aliquam semper tincidunt. In hac habitasse platea dictumst. Praesent tempor ex lorem, ac semper nunc fringilla sit amet. Cras tincidunt sagittis urna, quis pretium tellus laoreet ac.</p>
<p class="info">support emails - help@naijaonlinestore.com, 
customersupport@naijaonlinestore.com</p>
<p class="info">telephone - +234 800 00 003, +234 701 00 003</p>
<div class="footer-social-container">
    <div>
        <a href="#" class="social-link">Terms & Condition</a>
        <a href="#" class="social-link">privacy page</a>
    </div>
    <div>
        <a href="#" class="social-link">instagram</a>
        <a href="#" class="social-link">facebook</a>
        <a href="#" class="social-link">twitter</a>
    </div>
</div>
<p class="footer-credit">Naija online store, Best online retail store</p>
    
    `;
}

createFooter();