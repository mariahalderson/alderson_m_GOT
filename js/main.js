(() => {
console.log("got videos");

//add to string prototype to cap first letter
String.prototype.capIt = function() {return this.replace(this.charAt(), this.charAt().toUpperCase());};

const sigils = document.querySelectorAll('.sigilContainer'),
	  lightbox = document.querySelector('.lightbox'),
	  closeLightbox = lightbox.querySelector('.close-lightbox'),
	  vidPlayer = document.querySelector('video'),
	  taglines = document.querySelectorAll('.tag'),
	  playPause = document.querySelector('.playPause'),
	  stopButton = document.querySelector('.stop'),
	  rewindButton = document.querySelector('.rewind'),
	  forwardButton = document.querySelector('.forward'),
	  backButton = document.querySelector('.backward'),
	  imageBanner = document.querySelector('#houseImages'),
	  houseInfo = document.querySelector('.house-info');

var info = ["House Stark of Winterfell is a Great House of Westeros, ruling over the vast region known as the North from their seat in Winterfell. It is one of the oldest lines of Westerosi nobility by far, claiming a line of descent stretching back over eight thousand years. Before the Targaryen conquest, as well as during the War of the Five Kings and Daenerys Targaryen's invasion of Westeros, the leaders of House Stark ruled over the region as the Kings in the North.",
			"House Baratheon of Storm's End is a legally extinct Great House of Westeros. A cadet branch was formerly the royal house, but House Lannister now controls the throne. House Baratheon traditionally ruled the Stormlands on the eastern coast of Westeros, aptly named for its frequent storms, from their seat of Storm's End. House Baratheon became the royal house of the Seven Kingdoms after Robert Baratheon led a rebellion against the Targaryen dynasty. At the end of the rebellion, Robert ascended the Iron Throne as Robert I and married Cersei Lannister after the death of Lyanna Stark.",
			"House Lannister of Casterly Rock is one of the Great Houses of Westeros, one of its richest and most powerful families and oldest dynasties. It is also the current royal house of the Seven Kingdoms following the extinction of House Baratheon of King's Landing, which had been their puppet house anyway. The Lannisters rule over the Westerlands. Their seat is Casterly Rock, a massive rocky promontory overlooking the Sunset Sea which has had habitations and fortifications built into it over the millennia. They are the Lords Paramount of the Westerlands and Wardens of the West. As the new royal house, they also rule directly over the Crownlands from their seat of the Red Keep in King's Landing, the traditional seat of the royal family.",
			"House Greyjoy of Pyke is one of the Great Houses of Westeros. It rules over the Iron Islands, a harsh and bleak collection of islands off the west coast of Westeros, from the castle at Pyke. The head of the house is the Lord Reaper of Pyke. House Greyjoy's sigil is traditionally a golden kraken on a black field. Their house words are 'We Do Not Sow,' although the phrase 'What Is Dead May Never Die' is also closely associated with House Greyjoy and their bannermen, as they are associated with the faith of the Drowned God.",
			"House Tully of Riverrun is an exiled Great House of Westeros. Its most senior member carried the title of Lord of Riverrun and Lord Paramount of the Trident, until the Red Wedding. The current head is Lord Edmure Tully, son of the late Hoster Tully. The Tully sigil is a silver trout on a red and blue background. Their house words are 'Family, Duty, Honor.'",
			"House Arryn of the Eyrie is one of the Great Houses of Westeros. It has ruled over the Vale of Arryn for millennia, originally as the Kings of Mountain and Vale and more recently as Lords Paramount of the Vale and Wardens of the East under the Targaryen kings and Baratheon-Lannister kings. The nominal head of House Arryn is Robin Arryn, the Lord of the Eyrie, with his stepfather Petyr Baelish acting as Lord Protector until he reaches the age of majority.",
			"House Targaryen of Dragonstone is a Great House of Westeros and was the ruling royal House of the Seven Kingdoms for three centuries since it conquered and unified the realm, before it was deposed during Robert's Rebellion and House Baratheon replaced it as the new royal House. The few surviving Targaryens fled into exile to the Free Cities of Essos across the Narrow Sea. Currently based on Dragonstone off of the eastern coast of Westeros, House Targaryen seeks to retake the Seven Kingdoms from House Lannister, who formally replaced House Baratheon as the royal House following the destruction of the Great Sept of Baelor."
			];


//methods/ functions
function loadMovie(){
	//turn on light box
	lightbox.classList.add('show-lightbox');

//put path together and make video load and play

	vidPlayer.load();
	vidPlayer.play();
}

//animate banner scroll on clicks
function animateBanners(offset){
	console.log(600 * offset); //should give valule that we need: banners = 600px

	//animate banners across screen
	imageBanner.style.right = (offset * 600) + "px";
}

function addInfo(offset){
	houseInfo.innerHTML = info[offset];
}

function sigclick(){
	//grab the right video based on class name- split yields name
	var house = this.className.split(' ')[1].capIt();
	vidPlayer.src = `videos/House-${house}.${vidPlayer.currentSrc.split('.')[1]}`;

	taglines.forEach(tagline => tagline.innerHTML = house);

	animateBanners(this.dataset.offset);
	addInfo(this.dataset.offset);

	imageBanner.addEventListener('transitionend', loadMovie); //load video after transition
}

function closeLBox(){
	lightbox.classList.remove('show-lightbox');
	houseInfo.classList.remove('hide');
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
	vidPlayer.currentTime +=10;
}

function back() {
	vidPlayer.currentTime -=10;
}


//events
sigils.forEach(sigil => sigil.addEventListener('click', sigclick));
closeLightbox.addEventListener('click', closeLBox);
vidPlayer.addEventListener('ended', closeLBox);
playPause.addEventListener('click', togglePlay);
stopButton.addEventListener('click', stopVid);
rewindButton.addEventListener('click', rewindVid);
forwardButton.addEventListener('click', fastFwd);
backButton.addEventListener('click', back);

})();