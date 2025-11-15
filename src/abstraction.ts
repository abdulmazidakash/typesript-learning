// oop - abstruation

// idea
// implementation pore korbo

// interface
// abstract class

// interface MediaPlayer {
// 	play(): void;
// 	pause(): void;
// 	stop(): void;
// };


// // implementation
// class MusicPlayer implements MediaPlayer {
// 	play(){
// 		console.log('playing music.......');
// 	};

// 	pause(){
// 		console.log('Music paused');
// 	};

// 	stop(){
// 		console.log(`Music Stopped`);
// 	};
// };

// const mezbaPlayer = new MusicPlayer();
// mezbaPlayer.play();

abstract class MediaPlayer {
	abstract play(): void;
	abstract pause(): void;
	abstract stop(): void;
};

class MezbaPlayer extends MediaPlayer {
	play(){
		console.log('playing music.......');
	};

	pause(){
		console.log('Music paused');
	};

	stop(){
		console.log(`Music Stopped`);
	};
};

const mezbaPlayer = new MezbaPlayer();
mezbaPlayer.play();