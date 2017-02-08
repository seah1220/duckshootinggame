var Duck = function(config) {

	var duckTemplate 	= $('.duck');
	var duck 			= duckTemplate.clone();


	// Add the duck to the right position
	duck.css({
		bottom: config.position + '%',
		opacity: 1
	});


	duck.on('click', function() {
		config.clickHandler(duck);
	});
	


	// Move the duck to the left
	duck.fly = function () {
		var css 	= { left: '100%' };
		var time 	= 6000+Math.random()*1500;

		duck.animate(css, time, duck.kill);
	}

	// Duck got shot, and is now dead (i.e removed from stage)
	duck.kill = function () {
		duck.killed = true;
		duck.remove();
	}
	
	// Return the duck and all it's methods, son we can use it elsewhere
	return duck;
}