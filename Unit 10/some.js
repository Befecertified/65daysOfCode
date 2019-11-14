//Function to replicate the array method "Some"

//It takes two parameters, the array and a callback function
function some(arr, callback){

    //It iterates through every value in the array
	for(var i = 0; i < arr.length; i++){
        //It runs the callback on every value in the array and if atleast one value returns true, it returns stops the function and returns true
		if(callback(arr[i], i, arr)) return true;
    } 
    //If no value returns true in the loop, it returns false.
    return false;
}