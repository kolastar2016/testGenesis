//-----------
// Form
//----------
var re_nameuser=/^[A-ZА-ЯЁ\'\`]{2,100}$/i;
var re_email=/^[A-Z0-9_$\.!\-]+@[A-Z0-9\.]+\.[A-ZА-ЯЁ]{2}$/i;
var re_pas_posible=/^[\w*.\\\/#$%^&!]{8,}$/;

var label_name=document.getElementById("lnameuser");
var label_email=document.getElementById("lemail");
var label_pas=document.getElementById("lpas1");

regform.subm.onclick=function(){
    var flag=0;
    if(!re_nameuser.test(regform.nameuser.value)){
        label_name.classList.add("tx_label_name");
        message("Введите свое имя","lnameuser");
        flag=1;
    }
    if(!re_email.test(regform.email.value)){
        label_email.classList.add("tx_label_email");
        message("Неверный формат email","lemail");
        flag=2;
    }
    if(!re_pas_posible.test(regform.pas1.value)){
        label_pas.classList.add("tx_label_pas");
        message("Придумайте новый пароль","lpas1");
        flag=3;
    }

    if(flag===0){
        regform.submit();
        regform.reset();
        alert("Congratulation");
        label_name.classList.remove("tx_label_name");
        label_email.classList.remove("tx_label_email");
        label_pas.classList.remove("tx_label_pas");

    }
}
function message(mes,str_id){
    document.getElementById(str_id).innerHTML=mes;
}
var inpregf=regform.getElementsByTagName("input");
for(i=0;i<inpregf.length;i++){
    if (inpregf[i].type.toLowerCase()==="text" || inpregf[i].type.toLowerCase()==="password"){
        inpregf[i].onfocus=function(){
            message("","l"+this.id);
        }
    }
}
function clearMes(){
    label_name.classList.remove("tx_label_name");
    label_email.classList.remove("tx_label_email");
    label_pas.classList.remove("tx_label_pas");
    message("","l"+this.id);
}
regform.nameuser.onfocuse=clearMes;
regform.email.onfocuse=clearMes;
regform.pas1.onfocuse=clearMes;

//------------------
// change background
//------------------
