document.addEventListener('DOMContentLoaded', function () {
    const videoPlayer = document.getElementById('videoPlayer');
    const playButton = document.querySelector('.play-button');

    playButton.addEventListener('click', function () {
        if (videoPlayer.paused) {
            videoPlayer.play();
            playButton.style.display = 'none'; // Hide the play button when video is playing
        } else {
            videoPlayer.pause();
        }
    });
});
