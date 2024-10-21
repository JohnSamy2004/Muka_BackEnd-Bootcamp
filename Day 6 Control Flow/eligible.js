function eligible(num){
    if (num >= 18){
        console.log('Your age is Eligible');
        return true;
    } else{
        console.log('Your age is not Eligible');
        return false;
    }
}

// test
eligible(18);