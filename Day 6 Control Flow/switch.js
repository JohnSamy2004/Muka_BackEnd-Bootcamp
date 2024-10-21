const day_of_week = day => {
    switch(day){
        case 1:
            console.log('Saturday');
            break;
        case 2:
            console.log('Sunday');
            break;
        case 3:
            console.log('Monday');
            break;
        case 4:
            console.log('Tuesday');
            break;
        case 5:
            console.log('Wednesday');
            break;
        case 6:
            console.log('Thursday');
            break;
        case 7:
            console.log('Friday');
            break;
        default:
            console.log("invalid day")
            break;
    };
}

//test
day_of_week(2); //Sunday