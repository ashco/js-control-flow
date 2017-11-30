var thing = 'cat';
var count = '0';

count = parseInt(count);

if (count > 1){
	console.log(count + " " + thing + "s");
}else if(count === 1){
	console.log(count + " " + thing);
}else{
	console.log("There are none of the things :(")
}