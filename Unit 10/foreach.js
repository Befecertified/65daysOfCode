//Function to replicate the array method "Foreach"

//It takes two parameters, the array and a callback function
function forEach(arr, callback) {
    //It iterates through every value in the array
	for (var i = 0; i < arr.length; i++){
        //It runs the callback on every value in the array
		callback(arr[i], i, arr);
	}
}