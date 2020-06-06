let config = {

	type : Phaser.CANVAS,
	width : 800,
	height : 600,
	backgroundColor : 0xffcc00,

	scene :  {

		preload : preload,
		create : create,
		update : update,
	}

};

let game = new Phaser.Game(config);

function preload(){
	console.log("Preload");
	//console.log(this);
	this.load.image('background','Assets/back3.jpg');

	this.load.image('wheel','Assets/wheelf2.png');
	this.load.image('pin','Assets/pin.png');
	this.load.image('stand','Assets/stand.png');

}

function create(){
	console.log("create");
	let W = game.config.width;
	let H = game.config.height;

	let background = this.add.sprite(0,0,'background');
	background.setPosition(W/2,H/2,'background');
	background.setScale(0.5);

	//create wheel object
	let stand = this.add.sprite(W/2,H/2+240,'stand');
	stand.setScale(0.15);

	this.wheel = this.add.sprite(W/2,H/2,'wheel');
	this.wheel.setScale(0.34);

	let pin = this.add.sprite(W/2,H/2-210,'pin');
	pin.setScale(0.25);

	//eventlistener for mouse click
	this.input.on("pointerdown",spinwheel,this);

	//create text object
	font_style = {
		font: "bold 30px Roboto",
		align : "center",
		color : "red",
	}
	this.game_text = this.add.text(10,10,"Welcome to spin and win",font_style);

	
}

function spinwheel(){

	console.log("mouse clicked");
	console.log("start spining");
	this.game_text.setText("Spinning");

	let rounds = Phaser.Math.Between(4,5);
	let extra = Phaser.Math.Between(0,15) *22 + 22;
	
	let total = rounds*360 + extra;
	console.log("total");

	tween = this.tweens.add({
		targets : this.wheel,
		angle : total,
		ease : "Cubic.easeOut",
		duration : 5000,
		callbackScope:this,
		onComplete : function(){
			console.log("You won something");
			this.game_text.setText("Spin Again");
		}

	});




}

function update(){
	console.log("update");
	//this.wheel.angle +=1;
	//this.wheel.alpha-=0.001;

}