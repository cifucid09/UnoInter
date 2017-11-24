let numbers = [1,2,3,[45,76,32,[4,78,0,-45]],3,[[[[[25,67,1,-687,34,[[[[45,52,100,[[[33,25]]]],0.5]],3.45]]],78,2]]],2,1,78],
total=0, numNum=0;

console.log('*** Init ***');

//Sum the numbers
function sum(num){
    console.log('--- Sum number: ', num);
    total += num;
    numNum++;
}

//Iterate over the content and either sum or iterate again
function iterate(item) {
    //console.log('calling item:', item);
    if(isNaN(item)) {
        //console.log('NaN -- 2:', item);
        for(var i=0; i < item.length; i++){
            iterate(item[i]);
        }
    } else {
        sum(item);
        //console.log('number -- 2:', item);
    }
}

//Just calling iterate
iterate(numbers);

console.log('Total sum:', total);
console.log('Number of numbers:', numNum);