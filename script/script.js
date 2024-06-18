const form = document.getElementById("form");
const campos = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".span-required");
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
const htmlRadio1 = document.getElementById('html');
const cssRadio2 = document.getElementById('css');
const checkBox = document.getElementById('consent');


// form.addEventListener('submit', (event) => {
//     event.preventDefault();

//     nameValidate();
//     lastNameValidate();
//     emailValidate();
//     radioValidate();
//     checkBoxValidate()
// })
form.addEventListener('submit', (event) => {
    event.preventDefault();
 
  
    nameValidate();
    lastNameValidate();
    emailValidate();
    radioValidate();
    checkBoxValidate();

    if (checkBox.checked === true && campos[0].value.length > 0 && campos[1].value.length > 0 && emailRegex.test(campos[2].value) && (htmlRadio1.checked || cssRadio2.checked)) {
     
        alert("Message Sent. Thanks for completing the form. We'll be in touch soon!");
        
       
    }
    
    
        
        

})


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
     removeError(0);
     
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

  function radioValidate() {
   
       if(!(htmlRadio1.checked || cssRadio2.checked))
       {
        setError(3);
       }
       else {
        removeError(3);
       }
    }
   
    function checkBoxValidate() {
        if(checkBox.checked == false)
            {
                setError(4);
            }    
            else {
                removeError(4);
            }




    }
    