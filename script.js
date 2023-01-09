const ham = document.getElementById('ham');
const primaryNav= document.getElementById('primary-nav');
const navExtend1 = document.getElementById('nav-extend1');
const navExtend2 = document.getElementById('nav-extend2');
const navExtend3 = document.getElementById('nav-extend3');
const productExtend = document.getElementById('products-extend');
const companyExtend = document.getElementById('company-extend');
const connectExtend = document.getElementById('connect-extend');


primaryNav.style.display = "none";
companyExtend.style.display = "none";
connectExtend.style.display = "none";
productExtend.style.display = "none"

function toggle(){
    if(primaryNav.style.display == "none"){
        primaryNav.style.display = "block";
    }
    else{
        primaryNav.style.display = "none";
    }
}

function expand1(){
    if(productExtend.style.display == "none"){
        productExtend.style.display = "block";
    }
    else{
        productExtend.style.display = "none";
    }
}
function expand2(){

    if(companyExtend.style.display == "none"){
        companyExtend.style.display = "block";
    }
    else{
        companyExtend.style.display = "none";
    }
}
function expand3(){

    if(connectExtend.style.display =="none"){
        connectExtend.style.display = "block";

    }
    else{
        connectExtend.style.display = "none"
    }
}
