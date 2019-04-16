let phone_number = prompt("phone number");
let request = /^([0-9]{2})(-[0-9]{10}$)/;
let ckeck = request.test(phone_number);
function check_number() {
    if (ckeck){
        alert('TRUE');
    } else {
        alert('FALE');
    }
}
check_number(phone_number);