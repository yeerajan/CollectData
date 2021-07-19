function validation(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var roll = document.getElementById('roll').value;
    var contact = document.getElementById('number').value;

    var checkname = /^[A-Za-z]{3,35}[ ]{1}[A-Za-z]{3,30}$/;
    var checkemail = /^[A-Za-z.0-9]{5,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,}[A-Za-z]{1,6}$/;
    var checkroll = /^[0-9]{3}[A-Za-z]{2}[0-9]{4}$/;
    var checkcontact = /^[6789]{1}[0-9]{9}$/;

    if(checkname.test(name)){
        document.getElementById('errorname').innerHTML = " ";
    }
    else{
        document.getElementById('errorname').innerHTML = "**Enter Valid Value";
        return false;
    }
    if(checkemail.test(email)){
        document.getElementById('erroremail').innerHTML = " ";
    }
    else{
        document.getElementById('erroremail').innerHTML = "**Enter Valid Value";
        return false;
    }
    if(checkroll.test(roll)){
        document.getElementById('errorroll').innerHTML = " ";
    }
    else{
        document.getElementById('errorroll').innerHTML = "**Enter Valid Value";
        return false;
    }
    if(checkcontact.test(contact)){
        document.getElementById('errornumber').innerHTML = " ";
    }
    else{
        document.getElementById('errornumber').innerHTML = "**Enter Valid Value";
        return false;
    }
}