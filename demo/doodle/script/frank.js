(function (widnow, document) {
	var G = function (id) {
		return document.getElementById(id);
	}
	var maxSpeed = 67;
	var initial = 1;
	var acceleration = 1;
	var bSpeed = initial;
	var pSpeed = initial;
	var interval = 25;
	var bg = G('bg');
	var play = G('play');
	var mask = G('mask');
	var bgPlay = function () {
		setTimeout(function () {
			var pos = bg.style.backgroundPosition;
			var m = pos.match(/(-?\d+)\S+\s(-?\d+)\S+/) || [0, 0, 0];
			var posX = m[1] - 0;
			posX = (posX <= -804) ? (posX + 804) : posX;
			var posY = m[2] - 0;
			bg.style.backgroundPosition = posX - (bSpeed > 5 ? bSpeed : 3) + "px " + posY + "px";
			bSpeed < maxSpeed ? (bSpeed += acceleration) : 0;
			setTimeout(bgPlay, interval);
		}, interval);
	};
	var playPlay = function () {
		setTimeout(function () {
			var pos = play.style.backgroundPosition;
			var m = pos.match(/(-?\d+)\S+\s(-?\d+)\S+/) || [0, 0, 0];
			var posX = m[1] - 0;
			var posY = m[2] - 0;
			play.style.backgroundPosition = posX - (pSpeed > 5 ? pSpeed : 3) + "px " + posY + "px";
			pSpeed < maxSpeed ? (pSpeed += acceleration) : 0;
			setTimeout(playPlay, interval);
		}, interval);
	};
	document.body.onload = function () {
		mask.onclick = function () {
			bgPlay();
			playPlay();
			mask.onclick = null;
		};
	};
})(window, document)
