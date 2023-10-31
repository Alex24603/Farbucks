function validasi(){

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();
    let address = document.getElementById('address').value.trim();
    let terms = document.getElementById('terms').checked;

    let x = true;
    if (name == ''){
        x = false;
    }
    if (email == ''){
        x = false;
    }
    if (password == ''){
        x = false;
    }
    if (address == ''){
        x = false;
    }
    if (terms == false){
        x = false;
    }

    if (x == true){
        return true;
    }
    else{
        return false;
    }
}