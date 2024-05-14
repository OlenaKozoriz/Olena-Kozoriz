function handleNum (n, handleEven, handleOdd) {
	if (n % 2 === 0) {
		handleEven ()
	} else {
		handleOdd ()
	}
};

function handleEven () {
	console.log ("Number is even");
};
function handleOdd () {
	console.log ("Number is odd");
};

handleNum (3, handleEven, handleOdd)
