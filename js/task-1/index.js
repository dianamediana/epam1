function* generator() {
	let a = 1;
	let b = 1;
	let current;

	yield 0;
	yield 1;

	while (true) {
		current = b;
		yield current;
		b = a + b;
		a = current;
	}
}

let gen = generator();

function f(n) {
	let buf = [];

	for(let i = 0; i < n; i++) {
		buf.push(gen.next().value);
	}
	console.log(buf);
	return buf;
}

function f2() {
	let answer = prompt("Сколько ещё чисел подгрузить?");
	console.log(answer);
	if(answer) {
		f(answer);
		f2();
	};
}

f2();