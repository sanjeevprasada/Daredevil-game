var canvas = document.getElementById("layer2");
var context;
var canv = document.getElementById("map");
var ctx = canv.getContext('2d');
ctx.save();

var id2 = null;
var ddMove = false;
var gx = 0;
var gy = 0; 
var gmy = 0;
var g2x = 0;
var gstarx = 0;
var gstary = 0;
var gsmy = 0;
var ddThrow = false;
var gThrow = false;
var eventCode = 0;
var dbatonx  = 0;
var dbatony = 0;
var dbatonmvx = 0;
var ddx = 0;
var ddy = 0;
var zPos = 295;
var action = false;
var ddmvx = 0;
var intrvlID = 0;
var pan = 0;
var i = 0;
var p = 0;
var clearCode = 0;
var lvl = 1;
var right = 1;
var left = 0;
var stop = null;
var stpID = null;
var resetP = true;
var run = 0;
var iter = 0;
var startX  = [650, 678.16, 705.62, 731.72, 755.80, 777.28, 795.62, 810.38, 821.19, 827.78, 830, 827.78, 821.19, 810.38, 795.62, 777.28, 755.80, 731.72, 705.62, 678.16, 650, 621.84, 594.38, 568.28, 544.20, 522.72, 504.38, 489.62, 478.81, 472.22, 470, 472.22, 478.81, 489.62, 504.38, 522.72, 544.20, 568.28, 594.38, 621.84, 650];
var endX    = [650, 671.90, 693.26, 713.56, 732.29, 748.99, 763.26, 774.74, 783.15, 788.28, 790, 788.28, 783.15, 774.74, 763.26, 748.99, 732.29, 713.56, 693.26, 671.90, 650, 628.10, 606.74, 586.44, 567.71, 551.01, 536.74, 525.26, 516.85, 511.72, 510, 511.72, 516.85, 525.26, 536.74, 551.01, 567.71, 586.44, 606.74, 628.10, 650];
var startY  = [170, 172.22, 178.81, 189.62, 204.38, 222.72, 244.20, 268.28, 294.38, 321.84, 350, 378.16, 405.62, 431.72, 455.80, 477.28, 495.62, 510.38, 521.19, 527.78, 530, 527.78, 521.19, 510.38, 495.62, 477.28, 455.80, 431.72, 405.62, 378.16, 350, 321.84, 294.38, 268.28, 244.20, 222.72, 204.38, 189.62, 178.81, 172.22, 170];
var endY    = [210, 211.72, 216.85, 225.26, 236.74, 251.01, 267.71, 286.44, 306.74, 328.10, 350, 371.90, 393.26, 413.56, 432.29, 448.99, 463.26, 474.74, 483.15, 488.28, 490, 488.28, 483.15, 474.44, 463.26, 448.99, 432.29, 413.56, 393.26, 371.90, 350, 328.10, 306.74, 286.44, 267.71, 251.01, 236.74, 225.26, 216.85, 211.72, 210];
var numberX = [650, 670.34, 690.17, 709.02, 726.41, 741.92, 755.17, 765.83, 773.64, 778.40, 780, 778.40, 773.64, 765.83, 755.17, 741.92, 726.41, 709.02, 690.17, 670.34, 650, 629.66, 609.83, 590.98, 573.59, 558.08, 544.83, 534.17, 526.36, 521.60, 520, 521.60, 526.36, 534.17, 544.83, 558.08, 573.59, 590.98, 609.83, 629.66, 650];
var numberY = [220, 221.60, 226.36, 234.17, 244.83, 258.08, 273.59, 290.98, 309.83, 329.66, 350, 370.34, 390.17, 409.02, 426.41, 441.92, 455.17, 465.83, 473.64, 478.40, 480, 478.40, 473.64, 465.83, 455.17, 441.92, 426.41, 409.02, 390.17, 370.34, 350, 329.66, 309.83, 290.98, 273.59, 258.08, 244.83, 234.17, 226.36, 221.60, 220];
var majorlines = [0, 5, 10, 15, 20, 25, 30, 35];
var rotate = false;
var code = 0;
var counter = 0;
var detect = false;

var fall = new Howl({
	src: ['soundEffects/falling.mp3'],
	volume: 1.0,
	preload: true,
	sprite: {
		hitG: [3000,1000]
	}
});

var intro = new Howl({
	src: ['soundEffects/introMusic.mp3'],
	preload: true,
	loop: true,
	volume: 0.3,
	sprite: {
		intense: [18000,36000]
	}
});

var steps = new Howl({
	src: ['soundEffects/footsteps2.mp3'],
	volume: 1.0, 
	preload: true,
	loop: true,
	sprite: {
		walk: [0,6000]
	}
});

var over = new Howl({
	src: ['soundEffects/gameOver.mp3'],
	volume: 0.8,
	preload: true,
	sprite: {
		noise: [1000,7000]
	}
});

var walkieT = new Howl({
	src: ['soundEffects/walkietalkie.mp3'],
	volume: 0.3,
	preload: true,
	sprite: {
		noise:[3000,3250]
	}
});

var dDSteps = new Howl({
	src: ['soundEffects/daredevil_running.mp3'],
	volume: 0.6,
	preload: true,
	sprite: {
		run: [1000, 2400]
	}
});

var heystop = new Howl({
	src: ['soundEffects/hey-stop.mp3'],
	volume: 0.8,
	preload: true,
	sprite: {
		voice: [0,1200],
		stop: [1500,380]
	}
});

var breathing = new Howl({
	src: ['soundEffects/breathing.mp3'],
	volume: 1.0,
	preload: true,
	sprite: {
		run: [5000, 2700]
	}
});

var turn = new Howl({
    src: ['soundEffects/click.mp3'],
    volume: 0.5,
    preload: true,
    sprite: {
        noise: [75800,500]
    }
});

var ding = new Howl({
    src: ['soundEffects/ding.mp3'],
    volume: 0.2,
    preload: true,
    sprite: {
        noise:[4500,1250]
    }
});

var pain = new Howl({
	src: ['soundEffects/pain.mp3'],
	volume: 1.0,
	preload: true,
	sprite: {
		g1: [0,1000],
		g2: [2500,800]
	}
});

var throwing = new Howl({
	src: ['soundEffects/throw.mp3'],
	volume: 1.0
});

var impact = new Howl({
	src: ['soundEffects/impact.mp3'],
	volume: 1.0,
	preload: true,
	sprite: {
		hitG: [1000,800]	
	}
});

var stopHim = new Howl({
	src: ['soundEffects/JoeySTOPHIM.mp3'],
	preload: true,
	volume: 1.0,
	sprite: {
		yells: [2200, 1100]
	}
});
var laser = new Howl({
	src: ['soundEffects/laser.mp3'],
	volume: 0.6, 
	preload: true,
	sprite: {
		noise: [0, 4000] //there are 20 seconds of lasers in this mp3
	}
});

var slo_mo = new Howl({
	src: ['soundEffects/slo_mo.mp3'],
	volume: 0.8,
	preload: true,
	sprite: {
		noise: [0, 6000]
	}
});
var star_wars = new Howl({
	src: ['soundEffects/star_wars.mp3'],
	volume: 0.8,
	preload: true,
	sprite: {
		noise: [0, 5000]
	}
});

var hostage = new Howl({
	src: ['soundEffects/hostage.mp3'],
	volume: 0.9,
	preload: true
});

$(document).ready(function(){
	introNarration();
});

//Blue Devil has taken Ramses hostage. You're the only one who can save him, Dare Devil!

function introNarration(){
	responsiveVoice.speak("Blue Devil has taken Ramses hostage. Dare Devil is the only one who can save him!");
	narrate1();
}

function narrate1(){
	responsiveVoice.speak("You are now on the first floor of South Building. Blue Devil is on the second floor of the building. There is a guard patrolling the hallway in front of the stairs.");
	responsiveVoice.speak("Press space to sneak past the guard when you think he's walked past.");
	start(1);
}

function narrate2(){
	responsiveVoice.speak("Begin Level 2. Press space to explore the hallway. But be alert for guards.");
	setTimeout(function (){
		start(2)}, 5000);
}

function narrate3(){
	responsiveVoice.speak("Begin Level 3. You must pick the door lock to save Ramses. To pick the lock. start by pressing the left arrow key. When you hear the ding. The number is correct. After the ding. turn in the opposite direction.");
	setTimeout(function (){
		start(3)}, 8000);
}

function narrate4(){ //LEVEL 4 SPACEBAR INSTRUCTION IS TOO EARL
	responsiveVoice.speak("Press space to fight blue devil.");
	setTimeout(function (){
		start(4)}, 3000);
}

function start(lev){ //draw correct level and characters
	context = canvas.getContext("2d");
	if (lev == 1) {
		intro.play('intense');
		map1();
		setCharPos(lvl);
	    stpID = steps.play('walk');
		intrvlID = setInterval(draw1,200);
		backGround();
	}else if (lev == 2) {
		pan = 0;
		intro.play('intense');
		map2();
		lvl = 2;
		setCharPos(lvl);
		intrvlID = setInterval(draw2,200);
	}else if (lev == 3) {
		intro.play('intense');
		map3();
		lvl = 3;
		intrvlID = setInterval(draw3,200);
	}else if (lev == 4) {
		pan = 0;
		intro.play('intense');
		map4();
		lvl = 4;
		setCharPos(lvl);
		intrvlID = setInterval(draw4,200);
	}
}

function backGround(){  //play random 
	id2 = setInterval(walkie,10000);
}

function walkie(){
	stop = walkieT.play('noise');
}

function positionPanner(idNum){
	if(idNum ==  1 || idNum == 2){
		steps.stereo(pan);
	} else if(idNum == 4){
		laser.stereo(pan);
		slo_mo.stereo(pan);
	}
}

function resetPan(resetP){
	if (resetP) {
		resetP = false;
		pan = 1;
	}
}

function dareD(){
	context.beginPath();
	context.rect(ddx,ddy,30,30);
	context.fillStyle = 'red';
	context.fill();
	context.closePath();
}

function guard(x,y){
	context.beginPath();
	context.rect(x,y,40,40);
	context.fillStyle = 'blue';
	context.fill();
	context.closePath();
}

function baton(x,y){
	context.rect(x,y,5,5);
	context.fill();
	context.closePath();
}

function star(x,y){
	context.rect(x,y, 10, 10);
	context.fill();
	context.closePath();
}

function throwBaton(){
	if (eventCode == 37){
		dbatonmvx = -25;
		dbatony = ddy;
	} else if(eventCode == 39){
		dbatonmvx = 25;
		dbatony = ddy;
	}
	baton(dbatonx,dbatony);
}

function throwStar(){
	star(gstarx, gstary);
}

function restart(restType){
	if(restType == 1){
		clear(1);
		narrate1();
	} else if(restType == 2){
		clear(1);
		narrate2();
	} else if(restType == 3){
		clear(1);
		narrate3();
	} else if(restType ==4){
		clear(1);
		narrate4();
	} else {
		if (lvl == 2) {
			intrvlID = setInterval(draw2, 200);
		} else if(lvl == 4){
			p = 1;
			intrvlID = setInterval(draw4, 200);

		}
	} 
}

function batonInstructions(){
	responsiveVoice.speak("You've been spotted. When you hear the steps. Press the left arrow key to throw utility cane at guards from the left. Press right arrow key to throw it at guards from the right.");
	setTimeout(restart, 11000);
}

function blueDevilInstructions(){
	responsiveVoice.speak("Watch out for Blue Devils objects being thrown at you. Press the right arrow key to avoid objects coming at you from the left. Press the left arrow key to avoid objects coming at you from the right.");
	setTimeout(restart, 12000);
}

function map1(){  
  ctx.scale(1.8, 2);
  ctx.beginPath();
  ctx.moveTo(100, 100);
  ctx.lineTo(200, 100);
  ctx.lineTo(200, 50);
  ctx.lineTo(400, 50);
  ctx.lineTo(400, 100);
  ctx.lineTo(500, 100);
  ctx.lineTo(500, 50);

  ctx.fillStyle = 'white';
  ctx.fillRect(200, 50, 200, 150);
  ctx.fillStyle = "green";
  ctx.fillRect(100, 100, 100, 50);
  ctx.fillRect(400, 100, 100, 50);
  ctx.fillRect(500,  50, 50, 100);
  
  ctx.moveTo(100, 150);
  ctx.lineTo(200, 150);
  ctx.lineTo(200, 200);
  ctx.lineTo(400, 200);
  ctx.lineTo(400, 150);
  ctx.lineTo(550, 150);
  ctx.lineTo(550, 50);
  ctx.lineTo(500, 50);

  ctx.moveTo(100, 100);
  ctx.lineTo(100, 150);

  ctx.stroke();
  ctx.closePath();
}

function map2(){
  ctx.scale(2,1);
  ctx.beginPath();
  ctx.moveTo(150, 200);
  ctx.lineTo(200, 200);
  ctx.lineTo(200, 50);
  ctx.lineTo(500, 50); //400
  ctx.lineTo(500, 450); //200

  //Chancellor Office on Left
  ctx.moveTo(150, 200);
  ctx.lineTo(150, 150);
  ctx.lineTo(75,  150); //100
  ctx.lineTo(75,  350); //100
  ctx.lineTo(150, 350);
  ctx.lineTo(150, 300)

  ctx.moveTo(150, 300); //Bottom of main block
  ctx.lineTo(200, 300);
  ctx.lineTo(200, 450);
  ctx.lineTo(300, 450);
  ctx.lineTo(300, 600);
  ctx.lineTo(310, 600);

  ctx.moveTo(340, 600);
  ctx.lineTo(350, 600);
  ctx.lineTo(350, 450);
  ctx.lineTo(500, 450);
	
  ctx.fillStyle = "white";
  ctx.fillRect(200, 50, 300, 400); //main block
  ctx.fillRect(75,  150, 75, 200); //chancellor's office
  ctx.fillRect(300, 450, 50, 100);
 
  ctx.fillStyle = "green";
  ctx.fillRect(150, 200, 50, 100); //path to chancellor
  ctx.fillRect(300, 450, 50, 150);

  ctx.moveTo(310, 600);
  ctx.lineTo(315, 650);
  ctx.lineTo(345, 650);
  ctx.lineTo(340, 600);
  ctx.moveTo(341, 610);
  ctx.lineTo(311, 610);
  ctx.moveTo(342, 620);
  ctx.lineTo(312, 620);
  ctx.moveTo(343, 630);
  ctx.lineTo(313, 630);
  ctx.moveTo(344, 640);
  ctx.lineTo(314, 640);

  ctx.stroke();
  ctx.closePath();  
}

function map3(){ 
	ctx.beginPath();
    ctx.arc(650, 350, 200, 0*Math.PI, 2*Math.PI); //outer circle of lock
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(650, 350, 180, 0*Math.PI, 2*Math.PI); //inner circle of lock
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.moveTo(650, 170);   //indicator triangle
    ctx.lineTo(640, 150);
    ctx.lineTo(660, 150);
    ctx.stroke();
    ctx.fillStyle = "red";
    ctx.fill();

	ctx.beginPath();
    ctx.moveTo(650, 170);       //0
    ctx.lineTo(650, 190);       //indicator gridline is longer. (40px)
    ctx.stroke();
    ctx.moveTo(678.15, 172.22); //1
    ctx.lineTo(675.02, 191.97);
    ctx.stroke();
    ctx.moveTo(705.62, 178.81); //2
    ctx.lineTo(699.44, 197.83);
    ctx.stroke();
    ctx.moveTo(731.72, 189.62); //3
    ctx.lineTo(722.64, 207.44);
    ctx.stroke();
    ctx.moveTo(755.80, 204.38); //4
    ctx.lineTo(744.05, 220.56);
    ctx.stroke();
    ctx.moveTo(777.28, 222.72); //5
    ctx.lineTo(763.14, 236.86);
    ctx.stroke();
    ctx.moveTo(795.62, 244.20); //6
    ctx.lineTo(779.44, 255.95);
    ctx.stroke();
    ctx.moveTo(810.38, 268.28); //7
    ctx.lineTo(792.56, 277.36);
    ctx.stroke();
    ctx.moveTo(821.19, 294.38); //8
    ctx.lineTo(802.17, 300.56);
    ctx.stroke();
    ctx.moveTo(827.78, 321.84); //9
    ctx.lineTo(808.03, 324.97);
    ctx.stroke();
    ctx.moveTo(830, 350);       //10
    ctx.lineTo(810, 350);
    ctx.stroke();
    ctx.moveTo(827.78, 378.16); //11
    ctx.lineTo(808.03, 375.03);
    ctx.stroke();
    ctx.moveTo(821.19, 405.62); //12
    ctx.lineTo(802.17, 399.44);
    ctx.stroke();
    ctx.moveTo(810.38, 431.72); //13
    ctx.lineTo(792.56, 422.64);
    ctx.stroke();
    ctx.moveTo(795.62, 455.80); //14
    ctx.lineTo(779.44, 444.05);
    ctx.stroke();
    ctx.moveTo(777.28, 477.28); //15
    ctx.lineTo(763.14, 463.14);
    ctx.stroke();
    ctx.moveTo(755.80, 495.62); //16
    ctx.lineTo(744.05, 479.44);
    ctx.stroke();
    ctx.moveTo(731.72, 510.38); //17
    ctx.lineTo(722.64, 492.56);
    ctx.stroke();
    ctx.moveTo(705.62, 521.19); //18
    ctx.lineTo(699.44, 502.17);
    ctx.stroke();
    ctx.moveTo(678.16, 527.78); //19
    ctx.lineTo(675.03, 508.03);
    ctx.stroke();
    ctx.moveTo(650, 530);       //20
    ctx.lineTo(650, 510);
    ctx.stroke();
    ctx.moveTo(621.84, 527.78); //21
    ctx.lineTo(624.97, 508.03);
    ctx.stroke();
    ctx.moveTo(594.38, 521.19); //22
    ctx.lineTo(600.56, 502.17);
    ctx.stroke();
    ctx.moveTo(568.28, 510.38); //23
    ctx.lineTo(577.36, 492.56);
    ctx.stroke();
    ctx.moveTo(544.20, 495.62); //24
    ctx.lineTo(555.95, 479.44);
    ctx.stroke();
    ctx.moveTo(522.72, 477.28); //25
    ctx.lineTo(536.86, 463.14);
    ctx.stroke();
    ctx.moveTo(504.38, 455.80); //26
    ctx.lineTo(520.56, 444.05);
    ctx.stroke();
    ctx.moveTo(489.62, 431.72); //27
    ctx.lineTo(507.44, 422.64);
    ctx.stroke();
    ctx.moveTo(478.81, 405.62); //28
    ctx.lineTo(497.83, 399.44);
    ctx.stroke();
    ctx.moveTo(472.22, 378.16); //29
    ctx.lineTo(491.97, 375.03);
    ctx.stroke();
    ctx.moveTo(470, 350);       //30
    ctx.lineTo(490, 350);
    ctx.stroke();
    ctx.moveTo(472.22, 321.84); //31
    ctx.lineTo(491.97, 324.97);
    ctx.stroke();
    ctx.moveTo(478.81, 294.38); //32
    ctx.lineTo(497.83, 300.56);
    ctx.stroke();
    ctx.moveTo(489.62, 268.28); //33
    ctx.lineTo(507.44, 277.36);
    ctx.stroke();
    ctx.moveTo(504.38, 244.20); //34
    ctx.lineTo(520.56, 255.95);
    ctx.stroke();
    ctx.moveTo(522.72, 222.72); //35
    ctx.lineTo(536.86, 236.86);
    ctx.stroke();
    ctx.moveTo(544.20, 204.38); //36
    ctx.lineTo(555.95, 220.56);
    ctx.stroke();
    ctx.moveTo(568.28, 189.62); //37
    ctx.lineTo(577.36, 207.44);
    ctx.stroke();
    ctx.moveTo(594.38, 178.81); //38
    ctx.lineTo(600.56, 197.83);
    ctx.stroke();
    ctx.moveTo(621.84, 172.22); //39
    ctx.lineTo(624.97, 191.97);
    ctx.stroke();
}

function map4(){
	ctx.beginPath();
	ctx.moveTo(400, 550);
	ctx.lineTo(400, 50);
	ctx.lineTo(900, 50);
	ctx.lineTo(900, 550); //main block
	ctx.lineTo(700, 550);
	ctx.lineTo(700, 600);

	ctx.moveTo(400, 550);
	ctx.lineTo(600, 550);
	ctx.lineTo(600, 600);

	ctx.stroke();
	ctx.closePath();
}

function setCharPos(lvl){
	if (lvl == 1) {
		gx = 365;
		gy = 130;
		gmy = 8.25;
		ddx = 185;
		ddy = 205;
		zPos = 295;
		action = false;
		ddmvx = 0;
		intrvlID = 0;
		pan = -1.0;
		i = 0.0675;
	} else if (lvl == 2) {
		gx = 955; //610
		gy = 220;
		g2x = 325; //590
		g2y = 250;
		g2mvx = 0;
		gmvx= 0;//-12;
		ddx = 640;
		ddy = 569;
		ddmvx = 0;
		dbatonx  = 585;
		dbatony = 569;
		dbatonmvx = 0;
		action = false;
		ddmvy = 0;
		intrvlID = 0;
	    pan = 1;
		pI = 0.025;
		grd1 = '';
		grd2 = '';
		i = 0;
		j = -.04;
		ddThrow = false;
		eventCode = 0;
		iter = 0;
		left = 0;
		right = 1;
		run = 0;
	} else if (lvl == 4) {
		gx = 634;
		gy = 100;
		gmvx = 0;
		gstarx = 535;
		gstary = 100;
		gsmy = 0;
		ddx = 635;
		ddy = 560;
		ddmvx = 0;
		action = false;
		intrvlID = 0;
		p = 0;
		ddmvy = 0;
		counter = 0;
		pan = -1;
		i = 0;
	}
}

function onKeyDown(e){
	if (e.keyCode == 32){ //spacebar was clicked add movement to daredevil
		action = true;
	}
	else if ((e.keyCode == 39 || e.keyCode == 37) && lvl == 2) { //if left/right keys pressed on level 2 throw baton
		ddThrow = true;
		eventCode = e.keyCode;
		dbatonx = ddx;
		throwBaton();
	}
	else if(lvl == 4 && ((e.keyCode == 37 && ddx >  635) || (e.keyCode == 39 && ddx < 635))){ //if left/right clicked on level 4 and they were supposed to click it
		ddMove = true;
	} else if(e.keyCode == 16 && intrvlID == null){
		restart(lvl);
	} else if(lvl == 3 && (e.keyCode == 37 || e.keyCode == 39)){ // if left/right on level 3 rotate safe
		rotate = true;
	} 
	eventCode = e.keyCode;
}


$(document).keypress(onKeyDown);
$(document).keydown(onKeyDown);

function clear(code){
	if(code == 0){  //redraw screen to give appearance of movement
		context.clearRect(0,0,canvas.width,canvas.height);
	}
	else{ //reset entire level
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		context.clearRect(0,0,canvas.width,canvas.height);
		ctx.clearRect(0,0,canv.width,canv.height);
		ctx.restore();
		clearCode = 0;
	}
}

function draw1(){
	clear(0);
	guard(gx,gy);
	dareD();
	if (action){
		if(gy < 200 || gy > 300){ //if guard is out of sight, move Daredevil
			ddmvx = 60;
			dDSteps.play('run');
			breathing.play('run');
			action = false;
		} else{                  //else guard spotted Daredevil and level over
			action = false;
			heystop.play('voice');
			heystop.stop('voice');
			over.play('noise');
			clearInterval(intrvlID);
			intrvlID = null;
			clearInterval(id2);
			steps.stop(stpID);
			intro.stop();
			
			responsiveVoice.speak("The guard spotted you. Press shift to play again.");
		}	
	}

	if(gy + gmy > 350 || gy + gmy < 100){  //keep guard within boundaries of map
		gmy = -gmy;
	}

	if(ddx + ddmvx > 963){  //Daredevil reached safe zone
		clearInterval(intrvlID);
		intrvlID = null;
		clearInterval(id2);
		id2 = null;
		steps.stop(stpID);
		intro.stop();
		walkieT.stop('noise');
		responsiveVoice.speak("Level 1 complete.");
		pan = 0;
		clear(1); 
		narrate2();
	}

	if (pan + i <= -1.0 || pan + i >= 1.0){ //keep panning from going out of range
		i = -i;
	}	

	pan += i;
	positionPanner(1);
	ddx += ddmvx;
	gy += gmy;
}


function draw2(){
	clear(0);
	dareD();
	baton();
	context.font="15px Times New Roman";
	context.strokeText("Ramses's Office", 169, 230);
	
	if (right == 1 && iter < 4) { //draw guards coming from right
		guard(gx, gy);
	}

	if (left == 1 && iter < 4){ //draw guards coming from left
		guard(g2x, gy);
	}

	if(action){   
		action = false;
		ddmvy = -20;
		dDSteps.play('run');
		breathing.play('run');
		run = 4;
	}

	if(dbatonx + dbatonmvx > gx){ //kill right guard
		steps.stop(stpID);
		impact.play('hitG');
		pain.play('g1');
		fall.play('hitG');
		iter += 1;
		dbatonmvx = 0;
		gmvx = g2mvx = 0;
		ddThrow = false;
		right = 0;
		left = 1;
		gx = 953;
		g2x = 325;
		pan = -1;
		run = -1;	
	}

	if (dbatonx + dbatonmvx < g2x){ // kill left guard
		steps.stop(stpID);
		impact.play('hitG');
		pain.play('g2');
		fall.play('hitG');
		iter += 1;
		if (iter != 2) {
			dbatonmvx = 0;
			gmvx = g2mvx = 0;
			ddThrow = false;
			right = 1;
			left = 0;
			gx = 955;
			g2x = 325;
			pan = 1;
			run = 1; //changed
		} else if(iter == 2){
			ddThrow = false;
			g2x = 325;
			pan = -1;
			run = -1;
			left = 1;
			right = 0;
			gx = 955;
			gmvx = g2mvx = 0;
			dbatonmvx = 0;
		}
	}

	if (ddThrow == true) { //throw baton
		throwing.play();
		baton(dbatonx,dbatony);
		resetPan();
	}

	if (ddy + ddmvy < 229 && run == 4){ //Daredevil is level with guard, explain how to throw baton
		steps.pause();
		dDSteps.pause();
		clearInterval(intrvlID);
		setTimeout(batonInstructions,2000);
		ddmvy = 0;
		run = 1;
		resetPan();
	}

	if(gx > 954 && iter == 0){
		steps.mute(true);
	} else {
		steps.mute(false);
	}

	if (run == 1 && iter != 4) { //animate right guard
		heystop.play('voice');
		gmvx = -10;
		g2mvx = 0;
		i = j;
		run = 0;
	}

	if (run == -1 && iter != 4){ //animate left guard
		stopHim.play('yells');
		g2mvx = 10;
		gmvx = 0;
		i = -j;
		run = 0;
	}

	if(run == 0 && gmvx < 0){
		run = 2;
		stpID = steps.play('walk');
		pan = 1.0;
	}
	if(run == 0 && g2mvx > 0){
		run = 2;
		stpID = steps.play('walk');
		pan = -1.0;
	}
	

	if (gx + gmvx <= ddx || g2x + g2mvx >= ddx) {  //did not throw baton at guard
		clearInterval(intrvlID);
		intrvlID = null;
		gmvx = g2mvx = 0;
		over.play('noise');
		steps.stop(stpID);	
		intro.stop();	
		responsiveVoice.speak("The guard took you out. Press shift to play again.");
	}

	if(iter == 4 && ddmvx == 0){
		dDSteps.play('run');
		breathing.play('run');
		ddmvx = -50;
		gx = 1000;
		g2x = 0;
		g2mvx = 0;
		gmvx = 0;
		run = 0;
		steps.mute(true);
	}

	if (ddmvx + ddx < 315){ //user just beat level 2! onto level 3.
		ddmvx = 0;
		steps.stop(stpID);
		intro.stop();
		responsiveVoice.speak("NICE JOB! Level 2 complete.");
		clearInterval(intrvlID);
		intrvlID = null;
		clear(1);	
		narrate3();
	}

	pan += i;
	positionPanner(1);
	g2x += g2mvx;
	gx += gmvx;
	ddy += ddmvy;
	dbatonx += dbatonmvx;
	ddx += ddmvx;
}

function draw3(){
	clear(0);
	context.lineWidth = 2;
	context.beginPath();
	var temp;
	if (rotate == true) {
		turn.play('noise');
		for (var i = 0; i < majorlines.length; i++) {  //update position of major tic marks
			if (eventCode == 37) {
				if (majorlines[i] == 0) {
					temp = majorlines[i];
					temp = 39;
					majorlines[i] = temp; 
				}else{
					temp = majorlines[i];
					temp--;
					majorlines[i] = temp;
				}
			}else if (eventCode == 39){
				if (majorlines[i] == 39) {
					temp = majorlines[i];
					temp = 0;
					majorlines[i] = temp; 
				} else{
					temp = majorlines[i];
					temp++;
					majorlines[i] = temp;
				}
			}
		}
		rotate = false;
	}

	if (majorlines[0] == 36 && code == 0) {
		code++;
		ding.play('noise');
	} else if (majorlines[6] == 0 && code == 1){
		code++;
		ding.play('noise');
	} else if (majorlines[1] == 37 && code == 2){
		code++;
		ding.play('noise');
	}

	var num = 0;
	for (var i = 0; i < majorlines.length; i++) {  //draw lock
		context.font = "18px serif";
    	context.textAlign = "center";
		context.moveTo(startX[majorlines[i]],startY[majorlines[i]]);
		context.lineTo(endX[majorlines[i]],endY[majorlines[i]]);
		context.stroke();
		context.strokeText(num.toString(), numberX[majorlines[i]],numberY[majorlines[i]]);
	    num += 5;
	}

	if (code == 3) { //user beat level 3 continue to level 4.
		clearInterval(intrvlID);
		intrvlID = null;
		steps.stop(stpID);
		intro.stop();
		responsiveVoice.speak("Level 3 complete. On to the Blue Devil himself.");
		clear(1);	
		narrate4();
	}
}

function draw4(){
	clear(0);
	dareD();
	guard(gx, gy);
	
	if(ddMove && p < 200){
		detect = true;
		if(eventCode == 37){
			ddx -= 200;
			p++;	
		} else if(eventCode == 39){
			ddx += 200;
			p++;
		}
		ddMove = false;
		gThrow = false;
	}

	if(p == 0 && action){
		action = false;
		gx = 535;
		ddx = 535;
		gstarx = 535;
		ddy = 450;
		gstary = 100;
		pan = -1.0;
		clearInterval(intrvlID);
		intrvlID = null;
		setTimeout(blueDevilInstructions, 200);
	}

	if(p == 1 && gstarx == 535){
		pan = -1.0;
		if(gstary < 120){
			laser.play('noise');
		} else if(gstary > 350){
			slo_mo.play('noise');
		}
	} else if(p == 2 && gstarx == 735){
		pan = 1.0;
		if(gstary < 120){
			laser.play('noise');
		}
	} else if (p == 3 && gstarx == 535){
		pan = -1.0;
		if(gstary < 120){
			laser.play('noise');
		}
	} else if (p == 4 && gstarx == 735){
		pan = 1.0;
		if(gstary < 120){
			laser.play('noise');
		}
	}

	if(gx == ddx){
		gstarx = gx;
		gThrow = true;
		gmvx = 0;
		resetPan();
		star(gstarx, gstary);
		if(p < 5){
			gsmy = 15;
		}
	}

	if(p >= 4 && action){
		laser.play('noise');
		setTimeout(slo_mo.play('noise'), 2000);
		action = false;
		p++;
		gsmy = -20;
		gy = 100;
	}

	if(Math.abs(ddx - gx) == 200){
		if(p >= 4){
			responsiveVoice.speak("The Blue Devil is out of ammo. Quick! Press space to reflect the laser beam at him!");
		}
		if(ddx > gx){
			gmvx = 40;
			gstary = 100;
			gsmy = 0;
		} else if(ddx < gx){
			gmvx = -20;
			gstary = 100;
			gsmy = 0;
		}
	}

	if(gstary > ddy){ //you lose. gameover. laser hit Daredevil.
		over.play('noise');
		intro.stop();
		slo_mo.stop();
		clearInterval(intrvlID);
		intrvlID = null;
		steps.stop(stpID);
		responsiveVoice.speak("The Blue Devil defeated you with his laser . Press shift to try again.");
	}

	if(gstary < gy){
		p = 200;
	}

	if(p == 200){ //game winning loop
		gsmy = 0;
		intro.stop();
		star_wars.play('noise');
		setTimeout(pain.play('g1'), 2000);
		setTimeout(impact.play('hitG'), 4000);
		setTimeout(responsiveVoice.speak("YOU BEAT THE GAME!"), 6000);
		setTimeout(hostage.play(), 8000);
		clearInterval(intrvlID);
		intrvlID = null;
	}

	pan += i;
	positionPanner(4);
	gx += gmvx;
	gstary += gsmy;
	ddy += ddmvy;
	ddx += ddmvx;
	//game is done.
}




