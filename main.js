const main = document.querySelector('.main');
const cancel = document.querySelector('.cancel');
const msg = document.querySelector('#msg');

while (true) {
    let n = prompt("enter your name")
    
    if(n == null) {
        main.style.display = "none"
        cancel.style.display = "flex"
        msg.innerHTML = "Thank you"
    }

    if (n.length > 0) {
        alert("what if...")
        alert("What if gusto kita?");
        alert("What if ako nalang?");
        alert("Puro nalang what if");
        alert("Ako nalang kasi " + n)
        alert("Charr !!! hahaha ");
        main.style.display = "block";
        break;
    }
}