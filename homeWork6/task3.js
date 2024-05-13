function divide (numerator, denominator) {
	
	const result = numerator/denominator;
	if (denominator==0  || typeof numerator!=='number' || typeof denominator !=='number') {
		return error
	} else {
		return result
	}
	
};

try {
	let finalResult1 = divide (10, 0);
	console.log (finalResult1)
} catch (error) {
	console.error ("Denominator cannot be 0")
} finally {
	console.log ("Роботу завершено")
};

try {
	let finalResult2 = divide (25, 5);
    console.log (finalResult2);
} catch (error) {
	console.error ("This is wrong combination of arguments")
} finally {
	console.log ("Роботу завершено")
};

try {
	let finalResult3 = divide ('', 5);
    console.log (finalResult3);
} catch (error) {
	console.error ("Denominator cannot be a space")
} finally {
	console.log ("Роботу завершено")
};

try {
	let finalResult4 = divide (undefined, 5);
    console.log (finalResult4);
} catch (error) {
	console.error ("Denominator cannot be an undefined value")
} finally {
	console.log ("Роботу завершено")
};

try {
	let finalResult5 = divide (368, 27);
    console.log (finalResult5);
} catch (error) {
	console.error ("This is wrong combination of arguments")
} finally {
	console.log ("Роботу завершено")
}