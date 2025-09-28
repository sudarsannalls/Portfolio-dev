function toggleMenu(){
    const hamburger = document.querySelector(".ham");
    const navlinksMobile = document.querySelector(".Navlinks-Mobile");
    hamburger.classList.toggle("open");
    navlinksMobile.classList.toggle("open");
}