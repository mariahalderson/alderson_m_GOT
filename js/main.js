(() => {
console.log("got videos");

//add to string prototype to cap first letter
String.prototype.capIt = function() {return this.replace(this.charAt(), this.charAt().toUpperCase());};

const sigils = document.querySelectorAll('.sigilContainer'),
	  lightbox = document.querySelector('.lightbox'),
	  closeLightbox = lightbox.querySelector('.close-lightbox'),
	  vidPlayer = document.querySelector('video'),
	  taglines = document.querySelectorAll('.tag'),
	  playPause = document.querySelector('.playPause')
	  stopButton = document.querySelector('.stop')
	  rewindButton = document.querySelector('.rewind')
	  forwardButton = document.querySelector('.forward');


//methods/ functions
function loadMovie(){
	//turn on light box
	lightbox.classList.add('show-lightbox');

//grab the right video based on class name- split yields name
	var house = this.className.split(' ')[1].capIt();
	taglines.forEach(tagline => tagline.innerHTML = house);

//put path together and make video load and play
	vidPlayer.src = `videos/House-${house}.${vidPlayer.currentSrc.split('.')[1]}`;
	vidPlayer.load();

	vidPlayer.play();
} 

function closeLBox(){
	lightbox.classList.remove('show-lightbox');
	vidPlayer.pause();
	vidPlayer.currentTime=0;
}

function togglePlay (){
	var theSVG = this.firstElementChild;
	if(vidPlayer.paused){
		vidPlayer.play();
		theSVG.dataset.icon = "pause-circle";
	}else{
		vidPlayer.pause();
		theSVG.dataset.icon = "play-circle";
	}
}

function stopVid(){
	vidPlayer.pause();
	vidPlayer.currentTime= 0;
	var play = playPause.firstElementChild;
	play.dataset.icon = "play-circle";
}

function rewindVid() {
	vidPlayer.currentTime=0;

}

function fastFwd() {
	
}


//events
sigils.forEach(sigil => sigil.addEventListener('click', loadMovie));
closeLightbox.addEventListener('click', closeLBox);
vidPlayer.addEventListener('ended', closeLBox);
playPause.addEventListener('click', togglePlay);
stopButton.addEventListener('click', stopVid);
rewindButton.addEventListener('click', rewindVid);
forwardButton.addEventListener('click', fastFwd);

})();