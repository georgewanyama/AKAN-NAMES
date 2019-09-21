function akan(){
    var date = new Date(document.getElementById("day").value);
    console.log(date);
    var day = date.getDate();
    console.log(day);
    var month = date.getMonth()+1;
    console.log(month);
    var year = date.getFullYear();
    console.log(year);
    var gender = document.getElementById("choice").value;
    if(gender.checked){
        var gende = "Female";
    }
    else{
        var gende = "Male";
    }
    var yy = parseInt(year.toString().slice(2,4));
    var century = Math.ceil(year/100);
    var yearCode = (yy+parseInt(yy/4))%7;
    var dayOfTheWeek;
    switch(century){
        case  21 : // century code =4
        if(month===1 || month===10 )//jan and oct code=0
        {
            dayOfTheWeek = (yearCode + 0 + 4 + day)%7;
        }
        else if(month ===2 || month===3 || month===11)//feb && mar && nov code=3
        {
            dayOfTheWeek = (yearCode + 3 + 4 + day)%7;
        }
        else if(month===4 || month===7) // apr && july code=6
        {
            dayOfTheWeek = (yearCode + 6 + 4 + day)%7;
        }
        else if(month===5)// may code = 1
        {
            dayOfTheWeek = (yearCode + 1 + 4 + day)%7;
        }
        else if(month===6)// june code = 4
        {
            dayOfTheWeek = (yearCode + 4 + 4 + day)%7;
        }
        else if(month===8)//Aug code=2
        {
            dayOfTheWeek = (yearCode + 2 + 4 + day)%7;
        }
        else if(month===9 || month===12)// sept && dec code = 5
        {
            dayOfTheWeek = (yearCode + 5 + 4 + day)%7;
        }
        else{
            alert("Wrong month entry!");
        }
        break;
        case 18 : // century code = 2
        if(month===1 || month===10 )//jan and oct code=0
        {
            dayOfTheWeek = (yearCode + 0 + 2 + day)%7;
        }
        else if(month ===2 || month===3 || month===11)//feb && mar && nov code=3
        {
            dayOfTheWeek = (yearCode + 3 + 2 + day)%7;
        }
        else if(month===4 || month===7) // apr && july code=6
        {
            dayOfTheWeek = (yearCode + 6 + 2 + day)%7;
        }
        else if(month===5)// may code = 1
        {
            dayOfTheWeek = (yearCode + 2 + 2 + day)%7;
        }
        else if(month===6)// june code = 4
        {
            dayOfTheWeek = (yearCode + 4 + 2 + day)%7;
        }
        else if(month===8)//Aug code=2
        {
            dayOfTheWeek = (yearCode + 2 + 2 + day)%7;
        }
        else if(month===9 || month===12)// sept && dec code = 5
        {
            dayOfTheWeek = (yearCode + 5 + 2 + day)%7;
        }
        else{
            alert("Wrong month entry!");
        }
        break;
        case 19 : // century code = 0
        if(month===1 || month===10 )//jan and oct code=0
        {
            dayOfTheWeek = (yearCode + 0 + 0 + day)%7;
        }
        else if(month ===2 || month===3 || month===11)//feb && mar && nov code=3
        {
            dayOfTheWeek = (yearCode + 3 + 0 + day)%7;
        }
        else if(month===4 || month===7) // apr && july code=6
        {
            dayOfTheWeek = (yearCode + 6 + 0 + day)%7;
        }
        else if(month===5)// may code = 1
        {
            dayOfTheWeek = (yearCode + 2 + 0 + day)%7;
        }
        else if(month===6)// june code = 4
        {
            dayOfTheWeek = (yearCode + 4 + 0 + day)%7;
        }
        else if(month===8)//Aug code=2
        {
            dayOfTheWeek = (yearCode + 2 + 0 + day)%7;
        }
        else if(month===9 || month===12)// sept && dec code = 5
        {
            dayOfTheWeek = (yearCode + 5 + 0 + day)%7;
        }
        else{
            alert("Wrong month entry!");
        }
        break;
        case 20 : // century code = 6
        if(month===1 || month===10 )//jan and oct code=0
        {
            dayOfTheWeek = (yearCode + 0 + 6 + day)%7;
        }
        else if(month ===2 || month===3 || month===11)//feb && mar && nov code=3
        {
            dayOfTheWeek = (yearCode + 3 + 6 + day)%7;
        }
        else if(month===4 || month===7) // apr && july code=6
        {
            dayOfTheWeek = (yearCode + 6 + 6 + day)%7;
        }
        else if(month===5)// may code = 1
        {
            dayOfTheWeek = (yearCode + 2 + 6 + day)%7;
        }
        else if(month===6)// june code = 4
        {
            dayOfTheWeek = (yearCode + 4 + 6 + day)%7;
        }
        else if(month===8)//Aug code=2
        {
            dayOfTheWeek = (yearCode + 2 + 6 + day)%7;
        }
        else if(month===9 || month===12)// sept && dec code = 5
        {
            dayOfTheWeek = (yearCode + 5 + 6 + day)%7;
        }
        else{
            alert("Wrong month entry!");
        }
        break;
        default:
        console.log("Wrong year entry");
    }
    var dd;
    var f = ['Abena', 'Akua', 'Yaa' , 'Afua' , 'Amma', 'Akosua' , 'Adwoa'];
    var m = ['Kwabena', 'Kwaku', 'Yao' , 'Kofi', 'Kwame' , 'Kwasi' , 'Kwadwo'];
    if(dayOfTheWeek===0){
        dd="Tuesday";
        if(gender==="Female"){
            document.getElementById("name").innerHTML=f[dayOfTheWeek];
        }
        else if(gender==="Male"){
            document.getElementById("name").innerHTML=m[dayOfTheWeek];
        }
    }
    else if(dayOfTheWeek===1){
        dd="Wednesday";
        if(gender==="Female"){
            document.getElementById("name").innerHTML=f[dayOfTheWeek];
        }
        else if(gender==="Male"){
            document.getElementById("name").innerHTML=m[dayOfTheWeek];
        }
    }
    else if(dayOfTheWeek===2){
        dd="Thursday";
        if(gender==="Female"){
            document.getElementById("name").innerHTML=f[dayOfTheWeek];
        }
        else if(gender==="Male"){
            document.getElementById("name").innerHTML=m[dayOfTheWeek];
        }
    }
    else if(dayOfTheWeek===3){
        dd="Friday";
        if(gender==="Female"){
            document.getElementById("name").innerHTML=f[dayOfTheWeek];
        }
        else if(gender==="Male"){
            document.getElementById("name").innerHTML=m[dayOfTheWeek];
        }
    }
    else if(dayOfTheWeek===4){
        dd="Saturday";
        if(gender==="Female"){
            document.getElementById("name").innerHTML=f[dayOfTheWeek];
        }
        else if(gender==="Male"){
            document.getElementById("name").innerHTML=m[dayOfTheWeek];
        }
    }
    else if(dayOfTheWeek===5){
        dd="Sunday";
        if(gender==="Female"){
            document.getElementById("name").innerHTML=f[dayOfTheWeek];
        }
        else if(gender==="Male"){
            document.getElementById("name").innerHTML=m[dayOfTheWeek];
        }
    }
    else if(dayOfTheWeek===6){
        dd="Monday";
        if(gender==="Female"){
            document.getElementById("name").innerHTML=f[dayOfTheWeek];
        }
        else if(gender==="Male"){
            document.getElementById("name").innerHTML=m[dayOfTheWeek];
        }
    }
}

