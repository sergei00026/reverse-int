module.exports = function reverse(n) {
	if (n > 0) {
		return n.toString().split('').reverse().join('');
		// a.split('');
	} else {
		return (`${-n}`.toString().split('').reverse().join(''));

	}
}

