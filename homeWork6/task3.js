function divide (numerator, denominator) {
	
	const result = numerator/denominator;
	if (denominator==0) {
		throw new Error ("Ділення на 0 неприпустиме")
	} else if (typeof numerator!=='number') {
		throw new Error ("This is wrong combination of arguments")
	} else if ( typeof denominator !=='number') {
		throw new Error ("This is wrong combination of arguments")
	}
	return result	
};

try {
	let finalResult1 = divide (10, 0);
	console.log (finalResult1)
} catch (error) {
	console.error (error.message)
} finally {
	console.log ("Роботу завершено")
};

try {
	let finalResult2 = divide (25, 5);
    console.log (finalResult2);
} catch (error) {
	console.error (error.message)
} finally {
	console.log ("Роботу завершено")
};

try {
	let finalResult3 = divide ('', 5);
    console.log (finalResult3);
} catch (error) {
	console.error (error.message)
} finally {
	console.log ("Роботу завершено")
};

try {
	let finalResult4 = divide (undefined, 5);
    console.log (finalResult4);
} catch (error) {
	console.error (error.message)
} finally {
	console.log ("Роботу завершено")
};

try {
	let finalResult4 = divide (12, );
    console.log (finalResult4);
} catch (error) {
	console.error (error.message)
} finally {
	console.log ("Роботу завершено")
};

try {
	let finalResult5 = divide (368, 27);
    console.log (finalResult5);
} catch (error) {
	console.error (error.message)
} finally {
	console.log ("Роботу завершено")
}