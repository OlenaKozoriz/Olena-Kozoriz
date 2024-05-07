const number = 7;

//Generation of Multiplication Table ('for' cycle)
for (let i=1; i < 11; i++) {

	const result = number*i;
	console.log (`${number} X ${i}=${result}`);
}

//Generation of Multiplication Table ('while' cycle)
let i=1
while (i < 11) {
	
	const result = number*i;
	console.log (`7 X ${i}=${result}`);
	i++;
}