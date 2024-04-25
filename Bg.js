const images = [
    // 'url(/images/bg-1.jpg)',
    'url(/images/bg-2.jpg)',
    'url(/images/bg-5.jpg)',
    'url(/images/bg-4.jpg)',
    'url(/images/bg-3.jpg)'
];

let currentIndex = 0;

function changeBackground() {
    const $bg = document.querySelector('#bg');

    const currentBg = images[currentIndex];

    $bg.style.transition = 'background-image 0.9s linear';
    $bg.style.backgroundImage = currentBg;

    currentIndex = (currentIndex + 1) % images.length;

    setTimeout(() => {
        $bg.style.transition = '';
    }, 500);
}

setInterval(changeBackground, 5000);



/////////////////////////////
// Select the search input element
const searchInput = document.getElementById('searchInput');

// Select the search bar container
const searchBarContainer = document.querySelector('.search');

// Select the movies container
const moviesContainer = document.querySelector('.images');

// Add event listener for input changes
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.trim().toLowerCase();

    const movies = document.querySelectorAll('#movie');

    movies.forEach(movie => {
        const title = movie.querySelector('h3').textContent.toLowerCase();
        const description = movie.querySelector('p').textContent.toLowerCase();

        // Check if title or description contains the search term
        const match = title.includes(searchTerm) || description.includes(searchTerm);

        // Show or hide the movie based on the match
        movie.style.display = match ? 'block' : 'none';
    });

    // Move movies closer to the search bar
    if (searchTerm) {
        const searchBarHeight = searchBarContainer.offsetHeight;
        moviesContainer.style.marginTop = `-${searchBarHeight}px`; // Adjust the margin based on search bar height
    } else {
        moviesContainer.style.marginTop = ''; // Reset the margin
    }
});

// Add click event listener to the search bar container
searchBarContainer.addEventListener('click', () => {
    // Calculate the scroll position to halfway
    const halfwayScroll = moviesContainer.scrollHeight / 2;
    const scrollPosition = moviesContainer.offsetTop + halfwayScroll - window.innerHeight / 1.5;

    // Scroll down to halfway
    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
});
///////////////////////////////////////

window.addEventListener('scroll', function() {
    var stickyBar = document.getElementById('stickyBar');
  
    if (window.scrollY > 400) {
      stickyBar.classList.add('sticky');
    } else {
      stickyBar.classList.remove('sticky');
    }
  });


