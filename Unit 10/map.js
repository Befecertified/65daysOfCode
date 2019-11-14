//Function to replicate the array method "Map"

//It takes two parameters, the array and a callback function
function map(arr, callback){
    //Create an empty array to store new values
    var newArr = [];
    
    //It iterates through every value in the array
	for (var i = 0; i < arr.length; i++){
        //It runs the callback on every value in the array and push the new value to the array created on line 6
		newArr.push(callback(arr[i], i, arr));
    }
    //Returns the new array
	return newArr;
}