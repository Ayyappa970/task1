var txt=true;
function fun(){
    document.getElementById("i1").style.display="block"
    document.getElementById("iss").style.display="block"
    document.getElementById("sub33").style.display="block";
    document.getElementById("get").style.backgroundColor="navy"
    document.getElementById("b").style.backgroundColor="white"
    document.getElementById("b").style.color="rgb(54, 159, 244)"
    document.getElementById("pr").style.backgroundColor="white"
    document.getElementById("pr").style.color="rgb(54, 159, 244)"
    document.getElementById("if").style.backgroundColor="white"
    document.getElementById("if").style.color="rgb(54, 159, 244)"
    document.getElementById("fccu").style.backgroundColor="white"
    document.getElementById("fccu").style.color="rgb(54, 159, 244)"
    document.getElementById("sl").style.backgroundColor="white"
    document.getElementById("sl").style.color="rgb(54, 159, 244)"
    document.getElementById("tea").style.display="none"
    document.getElementById("i2").style.display="none"
    document.getElementById("i3").style.display="none"
    document.getElementById("i4").style.display="none"
    document.getElementById("us2").style.display="none"
    document.getElementById("us").style.display="none"
    document.getElementById("us1").style.display="none"
    document.getElementById("about").style.color=" rgb(54, 159, 244)"
    document.getElementById("about").style.backgroundColor="white"
    document.getElementById("i5").style.display="none"
    document.getElementById("us3").style.display="none"
    document.getElementById("i6").style.display="none"
    document.getElementById("us4").style.display="none"
    document.getElementById("pla").style.color=" rgb(54, 159, 244)"
    document.getElementById("pla").style.backgroundColor="white"
    document.getElementById("car").style.color=" rgb(54, 159, 244)"
    document.getElementById("car").style.backgroundColor="white"
    document.getElementById("i7").style.display="none"
    document.getElementById("us5").style.display="none"
    document.getElementById("i8").style.display="none"
    document.getElementById("us6").style.display="none"
    document.getElementById("ad").style.color=" rgb(54, 159, 244)"
    document.getElementById("ad").style.backgroundColor="white"
    document.getElementById("i9").style.display="none"
    document.getElementById("coin").style.color=" rgb(54, 159, 244)"
    document.getElementById("coin").style.backgroundColor="white"
    document.getElementById("sub32").style.display="block";
    document.getElementById("sub311").style.display="none";
}
var text=true;
function fun1(){
    back();
    document.getElementById("sub33").style.display="none";
    document.getElementById("get").style.backgroundColor=" navy"
    if(text){
        document.getElementById("sub33").style.display="none";
        document.getElementById("get").style.backgroundColor=" rgb(54, 159, 244)"
    }else{
        document.getElementById("sub33").style.display="block";
        document.getElementById("get").style.backgroundColor="navy"
    }
    text=!text;
}
function home(){
    fun();
    back();
    document.getElementById("i1").style.display="block"
    document.getElementById("iss").style.display="block"
    document.getElementById("b").style.color="white"
    document.getElementById("b").style.backgroundColor="rgb(54, 159, 244)"
    document.getElementById("sub33").style.display="block";
    document.getElementById("get").style.backgroundColor="navy"
}
function stdLife(){
    home();
    document.getElementById("i1").style.display="none"
    document.getElementById("iss").style.display="none"
    document.getElementById("b").style.backgroundColor="white"
    document.getElementById("b").style.color="rgb(54, 159, 244)"
    back();
    document.getElementById("slf").style.backgroundColor="navy"

    document.getElementById("i2").style.display="block"
    document.getElementById("us").style.display="block"
    document.getElementById("sl").style.backgroundColor=" rgb(54, 159, 244)"
    document.getElementById("sl").style.color="white"
}
function programs(){
    stdLife();
    document.getElementById("i2").style.display="none"
    document.getElementById("us").style.display="none"
    document.getElementById("sl").style.color=" rgb(13, 105, 243)"
    document.getElementById("sl").style.backgroundColor="white"
    back();
    document.getElementById("prr").style.backgroundColor="navy"

    document.getElementById("i3").style.display="block"
    document.getElementById("us1").style.display="block"
    document.getElementById("pr").style.backgroundColor="rgb(54, 159, 244)"
    document.getElementById("pr").style.color="white"
}
function infra(){
    programs();
    document.getElementById("i2").style.display="none"
    document.getElementById("us1").style.display="none"
    document.getElementById("pr").style.color=" rgb(13, 105, 243)"
    document.getElementById("pr").style.backgroundColor="white"
    back();
    document.getElementById("iff").style.backgroundColor="navy"

    document.getElementById("i4").style.display="block"
    document.getElementById("us2").style.display="block"
    document.getElementById("if").style.backgroundColor=" rgb(54, 159, 244)"
    document.getElementById("if").style.color="white"
}
function faculty(){
    infra();
    document.getElementById("i3").style.display="none"
    document.getElementById("us1").style.display="none"
    document.getElementById("if").style.color=" rgb(54, 159, 244)"
    document.getElementById("if").style.backgroundColor="white"
    document.getElementById("tea").style.display="block"
    back();

    document.getElementById("i4").style.display="block"
    document.getElementById("us2").style.display="none"
    document.getElementById("fccu").style.backgroundColor=" rgb(54, 159, 244)"
    document.getElementById("fccu").style.color="white"
    
}
function about(){
    faculty();
    document.getElementById("i4").style.display="none"
    document.getElementById("us2").style.display="none"
    document.getElementById("tea").style.display="none"
    document.getElementById("fccu").style.color=" rgb(54, 159, 244)"
    document.getElementById("fccu").style.backgroundColor="white"
    back();

    document.getElementById("i5").style.display="block"
    document.getElementById("us3").style.display="block"
    document.getElementById("about").style.backgroundColor=" rgb(54, 159, 244)"
    document.getElementById("about").style.color="white"
}
function placement(){
    about();
    document.getElementById("i5").style.display="none"
    document.getElementById("us3").style.display="none"
    document.getElementById("about").style.color=" rgb(54, 159, 244)"
    document.getElementById("about").style.backgroundColor="white"
    back();

    document.getElementById("i6").style.display="block"
    document.getElementById("us4").style.display="block"
    document.getElementById("pla").style.backgroundColor=" rgb(54, 159, 244)"
    document.getElementById("pla").style.color="white"
}   
function carrer(){
    placement();
    document.getElementById("i6").style.display="none"
    document.getElementById("us4").style.display="none"
    document.getElementById("pla").style.color=" rgb(54, 159, 244)"
    document.getElementById("pla").style.backgroundColor="white"
    back();
    document.getElementById("c1").style.backgroundColor=" navy"

    document.getElementById("i7").style.display="block"
    document.getElementById("us5").style.display="block"
    document.getElementById("car").style.backgroundColor=" rgb(54, 159, 244)"
    document.getElementById("car").style.color="white"
}
function admissions(){
    carrer();
    document.getElementById("i7").style.display="none"
    document.getElementById("us5").style.display="none"
    document.getElementById("car").style.color=" rgb(54, 159, 244)"
    document.getElementById("car").style.backgroundColor="white"
    back();
    document.getElementById("i8").style.display="block"
    document.getElementById("us6").style.display="block"
    document.getElementById("ad").style.backgroundColor=" rgb(54, 159, 244)"
    document.getElementById("ad").style.color="white"
}
function contactinfo(){
    admissions();
    document.getElementById("sub311").style.display="block"
    document.getElementById("i8").style.display="none"
    document.getElementById("us6").style.display="none"
    document.getElementById("ad").style.color=" rgb(54, 159, 244)"
    document.getElementById("ad").style.backgroundColor="white"

    document.getElementById("i9").style.display="block"
    document.getElementById("coin").style.backgroundColor=" rgb(54, 159, 244)"
    document.getElementById("coin").style.color="white"
    document.getElementById("sub32").style.display="none";
    document.getElementById("sub31").style.display="none";

}
function back(){
    document.getElementById("c1").style.backgroundColor="rgb(54, 159, 244)"
    document.getElementById("prr").style.backgroundColor="rgb(54, 159, 244)"
    document.getElementById("get").style.backgroundColor="rgb(54, 159, 244)"
    document.getElementById("iff").style.backgroundColor="rgb(54, 159, 244)"
    document.getElementById("slf").style.backgroundColor="rgb(54, 159, 244)"
    document.getElementById("sub33").style.display="none";
}