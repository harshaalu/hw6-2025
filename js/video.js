var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

	// Getting the video element
	video = document.querySelector("#player1");  

	// Making sure autoplay is off
    video.autoplay = false;
    console.log("Autoplay is set to: " + video.autoplay);

    // Making sure looping is off
    video.loop = false;
    console.log("Looping is set to: " + video.loop);
});

// Playing the video
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

// Pausing the video
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// Slowing down the video speed
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;  // Decrease speed by 10%
	console.log("Slow down video");
	console.log("New speed is " + video.playbackRate);
});

// Speeding up the video speed
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;  // Increase speed to offset the slowdown
	console.log("Speed up video");
	console.log("New speed is " + video.playbackRate);
});

// Skiping ahead 10 seconds
document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;  // Reset to start if skipping exceeds duration
		console.log("Going back to start");
	} else {
		video.currentTime += 10;
		console.log("Skip Ahead");
		console.log("Video current time is " + video.currentTime);
	}
});

// Mute and Unmute the video
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		console.log("Unmuted");
		this.textContent = "Mute";
	} else {
		video.muted = true;
		console.log("Muted");
		this.textContent = "Unmute";
	}
});

// Volume control
document.querySelector("#slider").addEventListener("input", function() {
	video.volume = this.value / 100;  // Adjust volume according to slider value
	document.querySelector("#volume").textContent = this.value + "%";
	console.log("Volume is: " + this.value);
});

// Applying old school style
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("Old school style applied");
});

// Removing old school style and reverting to the original
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Original style restored");
});

