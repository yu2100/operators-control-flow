//Q3 answer
let generalSubjects = 'english subjects';

if (generalSubjects == 'Science subjects') {
    console.log('Physics, Chemistry, Biology, Technical Drawing');

} else if (generalSubjects == 'Social science subjects') {
    console.log('Accounting, Commerce, Marketing, Geography');

} else if (generalSubjects == 'Art subjects') {
    console.log('Government, Economics, Literature, History');

} else if (generalSubjects == 'General subjects') {
    console.log('English, Mathematics');  

} else {
    console.log('English, Mathematics'); 
}

//Q5 answer

let num = 64;
for (let index = 1; index < 6; index++) {
    pwr = 2 ** index; 
}
  console.log(pwr);
    if (pwr < num){
        console.log("The number " +pwr+ " is the power of 2 nearest to " +num+ ".")
    };
           
    
