export const run = (args) =>{
    let moreThanOneNumber = args.search(',');
    if(moreThanOneNumber == -1){
        if(args === ''){
            return 0;
        }
    }
    let numbers = args.split(',');
    if(numbers.length == 1){
        return parseInt(numbers[0]);
    }
    else{
        let result = 0;
        for(var i=0; i< numbers.length; i++){
            result+=parseInt(numbers[i]);
        }
        return result;
    }
};