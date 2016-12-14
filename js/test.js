var testSum2Num = function() {
	status = true;
	if (sum(4, 2) != 6) {
		status = false;
	}
	return status;
}

var testSumWithZero = function() {
	status = true;
	if (sum(3, 0) != 3) {
		status = false;
	}
	if (sum(0, 3) != 3) {
		status = false;
	}
	return status;
}


var testSumWithNeg = function() {
	status = true;
	if (sum(6, -2) != 4) {
		status = false;
	}
	if (sum(-2, 6) != 4) {
		status = false;
	}
	if (sum(-3, -4) != -7) {
		status = false;
	}
	return status;
}

var testSumMoreThan2 = function() {
	status = true;
	if (sum(6, 2, -2) != 6) {
		status = false;
	}
	if (sum(-2, 6, 6) != 10) {
		status = false;
	}
	if (sum(-3, -4, 1, 1, 1, 1) != -3) {
		status = false;
	}
	return status;
}

function sum() {
	return sumar(arguments);
}

function testIt(func) {
	var execution = func();
	console.log(execution)
	var status = "success'>OK";
	if ( execution != "true" ) {
		status = "danger'>FAIL";
	}

 	funcName = func.name;

	document.write("<h1>" + funcName + " | Status: <span class='label label-" + status + "</span></h1>");
}

function test() {
	testIt(testSum2Num);
	testIt(testSumWithZero);
	testIt(testSumWithNeg);
	testIt(testSumMoreThan2);
}

test();