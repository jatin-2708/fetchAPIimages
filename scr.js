fetch('https://www.coursehubiitg.in/api/codingweek/contributions')
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        data.sort((a, b) => b.points - a.points);
    //    console.log(data);
        
 
        const firstName = data[0].name;

        const me1 = document.getElementsByClassName('rb1')[0];
        const me2 = document.getElementById('rb22');
        me2.innerHTML = firstName

        // Update the HTML content of the element with the name
        me1.insertAdjacentHTML('afterbegin', firstName);
        console.log(me1);
    });

