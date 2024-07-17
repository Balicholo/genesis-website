document.getElementById('nav-toggle').addEventListener('click', function() {
    var dropdown = document.getElementById('dropdown-menu');
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
        dropdown.style.display = 'flex';
    } else {
        dropdown.style.display = 'none';
    }
});

// HOMES CHANGING
$(document).ready(function(){
    $('.house-card').on('click', function(){
        var partId = $(this).data('part');
        $('.changing-part').removeClass('active');
        $('#changing-part-' + partId).addClass('active');
        $('.house-card').css({'border': 'none', 'transform': 'scale(1)'});
        $(this).css({'border': '2px solid rgb(34, 146, 34)', 'transform': 'scale(1.1)'});
    });
});

// DROP DOWN
$(document).ready(function() {
    $('.small-heading-dropdown').click(function() {
        $(this).next('.dropdown-text').toggleClass('show');
        $(this).find('.dropdown-icon').toggleClass('rotate');
    });
});

// PAGINATION EFFECT
const grid = document.querySelector('.passport-grid');
const leftArrow = document.querySelector('.right-arrow');
const rightArrow = document.querySelector('.left-arrow');
const pageIndicator = document.querySelector('.page-number');

let currentPage = 1;
let totalPages = 4; // four pages

leftArrow.addEventListener('click', () =>
{
    if (currentPage > 1) {
        currentPage--;
        grid.classList.add('flip-prev');
        setTimeout(() => {
            grid.classList.remove('flip-prev');
        }, 500); pageIndicator.innerText = `Page ${currentPage}`;
    }
});

rightArrow.addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        grid.classList.add('flip-next');
        setTimeout(() => {
            grid.classList.remove('flip-next');
        }, 500); pageIndicator.innerText = `Page ${currentPage}`;
    }
});

pageIndicator.innerText = `Page ${currentPage}`;

// DARKMODE
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dark-mode-toggle")

// check if darkmode is enabled
// if it`s enabled, turn it off
// if it`s disabled turn it on

const enableDarkmode = () => {
    // 1. add the class darkmode to body
    document.body.classList.add("darkmode");
    // 2. update darkMode in the local storage
    localStorage.setItem("darkMode", "enabled");
};
const disableDarkmode = () => {
    // 1. add the class darkmode to body
    document.body.classList.remove("darkmode");
    // 2. update darkMode in the local storage
    localStorage.setItem("darkMode", null);
};

if (darkMode === "enabled") {
    enableDarkmode();
}

darkModeToggle.addEventListener("click", () =>{
    darkMode = localStorage.getItem("darkMode");
   if (darkMode !== "enabled") {
    enableDarkmode();
    console.log(darkMode);
   } else {
    disableDarkmode ();
    console.log(darkMode);
   }
})