let btn = document.querySelector('button');
btn.addEventListener('click', showmsg);

// function showmsg () {
//     let name = prompt('What is your name ?')
//     btn.textContent = `Roll No. 1:${name}`;
// }



var firstName = "Taha";

const price = 99 ;

var courseName  = "js";

var CardNumber = "123456789";

var isPaid = true; 

var modeOfPayment;

//  modeOfPayment = prompt("Mode of Payment?");
function showmsg () {
    modeOfPayment = prompt("Mode of Payment?");

    if (modeOfPayment == "") {
      alert ("You are wrong")
    }else {
         alert (`${firstName} ${""}Sucessfully bought ${""} ${courseName} ${""}Couse of ${""}${price} ${""}using ${""}${modeOfPayment}`);
    }
}

