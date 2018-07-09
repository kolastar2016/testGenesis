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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tXHJcbi8vIEZvcm1cclxuLy8tLS0tLS0tLS0tXHJcbnZhciByZV9uYW1ldXNlcj0vXltBLVrQkC3Qr9CBXFwnXFxgXXsyLDEwMH0kL2k7XHJcbnZhciByZV9lbWFpbD0vXltBLVowLTlfJFxcLiFcXC1dK0BbQS1aMC05XFwuXStcXC5bQS1a0JAt0K/QgV17Mn0kL2k7XHJcbnZhciByZV9wYXNfcG9zaWJsZT0vXltcXHcqLlxcXFxcXC8jJCVeJiFdezgsfSQvO1xyXG5cclxudmFyIGxhYmVsX25hbWU9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsbmFtZXVzZXJcIik7XHJcbnZhciBsYWJlbF9lbWFpbD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlbWFpbFwiKTtcclxudmFyIGxhYmVsX3Bhcz1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxwYXMxXCIpO1xyXG5cclxucmVnZm9ybS5zdWJtLm9uY2xpY2s9ZnVuY3Rpb24oKXtcclxuICAgIHZhciBmbGFnPTA7XHJcbiAgICBpZighcmVfbmFtZXVzZXIudGVzdChyZWdmb3JtLm5hbWV1c2VyLnZhbHVlKSl7XHJcbiAgICAgICAgbGFiZWxfbmFtZS5jbGFzc0xpc3QuYWRkKFwidHhfbGFiZWxfbmFtZVwiKTtcclxuICAgICAgICBtZXNzYWdlKFwi0JLQstC10LTQuNGC0LUg0YHQstC+0LUg0LjQvNGPXCIsXCJsbmFtZXVzZXJcIik7XHJcbiAgICAgICAgZmxhZz0xO1xyXG4gICAgfVxyXG4gICAgaWYoIXJlX2VtYWlsLnRlc3QocmVnZm9ybS5lbWFpbC52YWx1ZSkpe1xyXG4gICAgICAgIGxhYmVsX2VtYWlsLmNsYXNzTGlzdC5hZGQoXCJ0eF9sYWJlbF9lbWFpbFwiKTtcclxuICAgICAgICBtZXNzYWdlKFwi0J3QtdCy0LXRgNC90YvQuSDRhNC+0YDQvNCw0YIgZW1haWxcIixcImxlbWFpbFwiKTtcclxuICAgICAgICBmbGFnPTI7XHJcbiAgICB9XHJcbiAgICBpZighcmVfcGFzX3Bvc2libGUudGVzdChyZWdmb3JtLnBhczEudmFsdWUpKXtcclxuICAgICAgICBsYWJlbF9wYXMuY2xhc3NMaXN0LmFkZChcInR4X2xhYmVsX3Bhc1wiKTtcclxuICAgICAgICBtZXNzYWdlKFwi0J/RgNC40LTRg9C80LDQudGC0LUg0L3QvtCy0YvQuSDQv9Cw0YDQvtC70YxcIixcImxwYXMxXCIpO1xyXG4gICAgICAgIGZsYWc9MztcclxuICAgIH1cclxuXHJcbiAgICBpZihmbGFnPT09MCl7XHJcbiAgICAgICAgcmVnZm9ybS5zdWJtaXQoKTtcclxuICAgICAgICByZWdmb3JtLnJlc2V0KCk7XHJcbiAgICAgICAgYWxlcnQoXCJDb25ncmF0dWxhdGlvblwiKTtcclxuICAgICAgICBsYWJlbF9uYW1lLmNsYXNzTGlzdC5yZW1vdmUoXCJ0eF9sYWJlbF9uYW1lXCIpO1xyXG4gICAgICAgIGxhYmVsX2VtYWlsLmNsYXNzTGlzdC5yZW1vdmUoXCJ0eF9sYWJlbF9lbWFpbFwiKTtcclxuICAgICAgICBsYWJlbF9wYXMuY2xhc3NMaXN0LnJlbW92ZShcInR4X2xhYmVsX3Bhc1wiKTtcclxuXHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gbWVzc2FnZShtZXMsc3RyX2lkKXtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHN0cl9pZCkuaW5uZXJIVE1MPW1lcztcclxufVxyXG52YXIgaW5wcmVnZj1yZWdmb3JtLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW5wdXRcIik7XHJcbmZvcihpPTA7aTxpbnByZWdmLmxlbmd0aDtpKyspe1xyXG4gICAgaWYgKGlucHJlZ2ZbaV0udHlwZS50b0xvd2VyQ2FzZSgpPT09XCJ0ZXh0XCIgfHwgaW5wcmVnZltpXS50eXBlLnRvTG93ZXJDYXNlKCk9PT1cInBhc3N3b3JkXCIpe1xyXG4gICAgICAgIGlucHJlZ2ZbaV0ub25mb2N1cz1mdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBtZXNzYWdlKFwiXCIsXCJsXCIrdGhpcy5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGNsZWFyTWVzKCl7XHJcbiAgICBsYWJlbF9uYW1lLmNsYXNzTGlzdC5yZW1vdmUoXCJ0eF9sYWJlbF9uYW1lXCIpO1xyXG4gICAgbGFiZWxfZW1haWwuY2xhc3NMaXN0LnJlbW92ZShcInR4X2xhYmVsX2VtYWlsXCIpO1xyXG4gICAgbGFiZWxfcGFzLmNsYXNzTGlzdC5yZW1vdmUoXCJ0eF9sYWJlbF9wYXNcIik7XHJcbiAgICBtZXNzYWdlKFwiXCIsXCJsXCIrdGhpcy5pZCk7XHJcbn1cclxucmVnZm9ybS5uYW1ldXNlci5vbmZvY3VzZT1jbGVhck1lcztcclxucmVnZm9ybS5lbWFpbC5vbmZvY3VzZT1jbGVhck1lcztcclxucmVnZm9ybS5wYXMxLm9uZm9jdXNlPWNsZWFyTWVzO1xyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gY2hhbmdlIGJhY2tncm91bmRcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS1cclxuIl19
