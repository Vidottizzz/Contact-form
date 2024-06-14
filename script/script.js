const form = document.getElementById("form");
const campos = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".span-required");
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

function setError(index) {
campos[index].style.border = '1px solid #e63636';
spans[index].style.display = 'block';
}


function removeError(index) {
    campos[index].style.border = '';
spans[index].style.display = 'none';
}

function nameValidate() {
    if(campos[0].value.length === 0) {
        setError(0);
    }else {
        removeError(0)
    }
}

function lastNameValidate() {
    if(campos[1].value.length === 0) {
        setError(1);
    }else {
        removeError(1)
    }
}

function emailValidate() {
    if(!emailRegex.test(campos[2].value))
        {
            setError(2);
        }
        else {
            removeError(2);
        }
    }