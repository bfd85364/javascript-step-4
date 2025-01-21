// NAME: junhyung-kim
// DATE: 2024-04-08
// WEEK:6
// EXERCISE/ASSIGNMENT: common patterns



function Exercise1() {
	let i;
	for(i=0; i<50; i++){
		print(i + "the square is =" + i**2);
	}
}
	
function Exercise2() {
	//we ned count variable to count how mwny square//
	let i;
	for(i=0; i<50; i++){
		print("the square of "+ i + "is " + i**2);
	}
}
	
function Exercise3() {
	let n = parseInt(prompt("enter your divisor number"));
	let i;
	for(i=0; i<n; i++){
		if(n%i==0){
			print("the divisor number is="+ i);
		}
	}

}

function Exercise4() { 
			let smallest = 101;
		for (let i = 0; i <=10; i++) {
				n = getRandom(100);
			if(n>50&&n<100){
			print(n);
			}
			if (n < smallest) {
				smallest = n;
			}
}
		print("the lowset number is" + smallest);
}
			
			
	
			
function Exercise5() {
			let smallest = 101;
		for (let i = 0; i <=10; i++) {
				n = getRandom(100);
			if(n>50&&n<100){
			print(n);
			}
			if (n < smallest) {
				smallest = n;
  }

			 else if(n%2==1){
				 print("One or more numbers in the list are prime");
		}
}
	print("the lowset number is" + smallest);
}

function Exercise6(){
	let x = 7;
	let y = 10;
	let z = 20;
	let temp;

	temp =x;
	x = y;
	y = temp;
	y=z;
	z = temp;
	
  print(x,y,z);
  
}

function Exercise7(){
	let i;
	for(i=1; i<1000; i++){
	if(1000%i==0){
	print(i +"+");
}
}
	if(i=1000){
	print("="+ i);
}
}

function Exercise8() {

}

function Exercise9(){

}

function Exercise10() {

}

//Clear working space
function clearPrintSpace() {
	clearAll();
}
