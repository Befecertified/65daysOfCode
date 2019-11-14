//Function to replicate the array method "Filter"

//It takes two parameters, the array and a callback function
function filter(arr, callback){
    //Create an empty array to store new values
    var newArr = [];

    //It iterates through every value in the array
	for( var i = 0; i < arr.length; i++ ){
        //It runs the callback on every value in the array and if the callback returns true it push the value into the new array
		if(callback(arr[i], i, arr)) newArr.push(arr[i]);
    }

    //Returns the new array    
	return newArr;
}