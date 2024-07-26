function validate(){
    let x=document.forms["myform"]["name"].value;
    if(x==''){
        name_error.innerHTML="please fill the fields";
    }
}