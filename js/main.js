(() => {
console.log("GOT video");

const vidPlayer = document.querySelector('video'),
	  playButton = document.querySelectorAll('button')[0],
	  pauseButton = document.querySelectorAll('button')[1],
	  rewindButton = document.querySelectorAll('button')[2];


function volOn(){
	vidPlayer.muted=false; //object.property
}

function volOff(){
	vidPlayer.muted=true;
}

function rewindVid(){
	vidPlayer.currentTime=0;
	//vidPlayer.currentTime -= 5; <-- bumps back 5 seconds from wherever you are
}

function playVid(){
	vidPlayer.play();
}

function pauseVid(){
	vidPlayer.pause();
}

vidPlayer.addEventListener('mouseover', volOn);
vidPlayer.addEventListener('mouseout', volOff);
rewindButton.addEventListener('click', rewindVid);
playButton.addEventListener('click', playVid);
pauseButton.addEventListener('click', pauseVid);

})();