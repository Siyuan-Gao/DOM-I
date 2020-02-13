const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let a1 = document.querySelectorAll("nav a")[0]
a1.textContent = "Services";

let a2 = document.querySelectorAll("nav a")[1]
a2.textContent = "Product";

let a3 = document.querySelectorAll("nav a")[2]
a3.textContent = "Vision";

let a4 = document.querySelectorAll("nav a")[3]
a4.textContent = "Features";

let a5 = document.querySelectorAll("nav a")[4]
a5.textContent = "About";

let a6 = document.querySelectorAll("nav a")[5]
a6.textContent = "Contact";

// const home = document.createElement('a');
// home.textContent = "Home"; 

// const newA = document.querySelectorAll('nav a');
// newA.appendChild(home);

//  document.querySelectorAll("nav a").style.backgroundColor = "green";



document.getElementById("logo-img").src="img/logo.png";

h1 = document.querySelector('h1');
h1.textContent = 'DOM Is Awesome';

button1 = document.querySelector('button');
button1.textContent = 'Get Started';

document.getElementById("cta-img").src="img/header-img.png";


let h41 = document.querySelectorAll("h4")[0]
h41.textContent = "Features";

let h42 = document.querySelectorAll("h4")[1]
h42.textContent = "About";

let h43 = document.querySelectorAll("h4")[2]
h43.textContent = "Services";

let h44 = document.querySelectorAll("h4")[3]
h44.textContent = "Product";

let h45 = document.querySelectorAll("h4")[4]
h45.textContent = "Vision";

let p1 = document.querySelectorAll('.main-content p')[0]
p1.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let p2 = document.querySelectorAll('.main-content p')[1]
p2.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let p3 = document.querySelectorAll('.bottom-content p')[0]
p3.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let p4 = document.querySelectorAll('.bottom-content p')[1]
p4.textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let p5 = document.querySelectorAll('.bottom-content p')[2]
p5.textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

document.getElementById("middle-img").src="img/mid-page-accent.jpg";

const h47 = document.querySelectorAll(' h4')[5]
h47.textContent = "Contact";

let p6 = document.querySelectorAll('.contact p')[0]
p6.textContent = "123 Way 456 Street Somewhere, USA";

let p7 = document.querySelectorAll('.contact p')[1]
p7.textContent = "1 (888) 888-8888";

let p8 = document.querySelectorAll('.contact p')[2]
p8.textContent = "sales@greatidea.io";

let footer1 = document.querySelectorAll('footer p')
footer1.textContent = "Copyright Great Idea! 2018";