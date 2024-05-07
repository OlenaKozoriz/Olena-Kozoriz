function isPersonAdult (age) {

	if (age >= 18) {
		return true;
		
  }	else {
		return false;
	}
}

const result1 = isPersonAdult (25);
console.log (result1);

const result2 = isPersonAdult (15);
console.log (result2);
