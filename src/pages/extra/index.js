const videoFile = document.getElementById('video-file')
videoButton = document.getElementById('video-button')
videoIcon = document.getElementById('video-icon')

function playPause(){
    if(videoFile.paused){
        //play video
        videoFile.play()

        // we change the icon
        videoIcon.classList.add('ri-pause-circle-fill')
        videoIcon.classList.remove('ri-play-circle-fill')
    } else{
        // pause video
        videoFile.pause()

        //we change the icon
        videoIcon.classList.remove('ri-pause-circle-fill')
        videoIcon.classList.add('ri-play-circle-fill')
    }
}

videoButton.addEventListener('click', playPause)