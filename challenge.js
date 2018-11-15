let paused = false;

let setEventListeners = function() {

	setInterval(increaseCounter, 1000)


	let minus = document.querySelector('#minus');
	let plus = document.querySelector('#plus');
	let heart = document.querySelector('#heart');
	let pause = document.querySelector('#pause');
	let submit = document.querySelector('#submit')

	pause.addEventListener('click', togglePause);
	minus.addEventListener('click', decreaseCounter);
	plus.addEventListener('click', e => increaseCounter(e, true));
	heart.addEventListener('click', e => likeCurrNumber(e, getCounter()));
	submit.addEventListener('click', addComment)


}

let decreaseCounter = function(e) {
	counter = getCounter();
	count = getCount(counter);
	counter.innerText = --count;
}

let increaseCounter = function(e, isClicked=false) {
	counter = getCounter()
	count = getCount(counter)
	console.log('incremented', count	)
	if (!paused || isClicked) {
		counter.innerText = ++count;
	}
}


let likeCurrNumber = function(e, counter) {
	let count = getCount(counter);

	let list = document.getElementsByClassName('likes')[0];
	let id = `like-${count}`;
	let row = document.getElementById(id);
	console.log(`like-${count}`)
	if (row) {
		let like = row.innerText
		let split = like.split(" ")
		let numLikes = Number.parseInt(split[split.length-1]);
		numLikes++;
		split[split.length-1] = numLikes;
		row.innerText = split.join(" ")
	} else {
		let like = "Number: " + count + ", Likes: 1"
		let item = document.createElement('li')
		item.innerText = like
		item.id = id
		list.appendChild(item);
	}
}

let addComment = function(e) {
	e.preventDefault();
	input = document.getElementById('comment-input').value
	commentList = document.querySelector('.comments')
	comment = document.createElement('p')
	comment.innerText = input;

	commentList.appendChild(comment);
	document.querySelector("#comment-form").reset()


}

function togglePause(e) {
	paused = !paused;
	let newText = paused ? 'resume' : 'pause';
	console.log(newText);
	e.currentTarget.innerText = newText;
}

let getCounter = function(){
	return document.querySelector('#counter');
}

let getCount = function(counter) {
	return Number.parseInt(counter.innerText);
}





setEventListeners()