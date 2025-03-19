document.getElementById("hamburger").addEventListener('click', function() {
    var status = 'open'
    let navbar = document.getElementById('ul-navbar')
    navbar.classList.toggle('show')
})