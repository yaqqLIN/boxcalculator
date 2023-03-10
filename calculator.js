let count_post=document.querySelector("#count_post");
let count_num=document.querySelector("#count_num");
let count_multi=document.querySelector("#count_multi");
let count_result=document.querySelector("#count_result");
let inputvalues=document.querySelector(".inputvalue");
let table_inputvalue=document.querySelector("#table_inputvalue");
let table_inputmulti=document.querySelector("#table_inputmulti");
let table_inputresult=document.querySelector("#table_inputresult");
let shadowresult=document.querySelector("#shadowresult");
shadowresult.value=0
function add(){
    if(shadowresult.value!=count_result.value){
        count_post.innerHTML=count_post.innerHTML+"+";
        table_inputvalue.style.display="block";
        table_inputmulti.style.display="block";
        shadowresult.innerHTML=count_post.innerHTML;
        shadowresult.value=count_result.value;
    }else{
        alert("未輸入數量");
    }
}
function clearin(){
    table_inputvalue.style.display="block";
    table_inputmulti.style.display="block";
    count_num.value=0;
    count_multi.value=0;
    count_post.innerHTML=shadowresult.innerHTML;
    count_result.value=shadowresult.value;
    
}
function reset(){
    if(confirm("確定全部清除?")){
        window.location.href=window.location.href;
    }
}
function caltotal(){
    if(count_result.value==0){
        alert("未輸入數量");
    }else{
        count_result.value=parseInt(count_multi.value)+parseInt(count_result.value);
        count_multi.value=0;
        count_post.innerHTML=count_post.innerHTML+"<br/> ="+count_result.value;
    }
}
function inputmultiple(Multiples){
    count_multi.value=parseInt(count_num.value)*Multiples;
    if(count_num.value!=0){
        count_post.innerHTML=count_post.innerHTML+"x"+String(Multiples);
        count_num.value=0;
        table_inputvalue.style.display="none";
        table_inputmulti.style.display="none";
        count_result.value=parseInt(count_multi.value)+parseInt(count_result.value);
        count_multi.value=0;
    }else{
        alert("未輸入數量")
    }
}
function inputnum(num){
    numin=String(num)
    if(count_multi.value==0){
        count_post.innerHTML=count_post.innerHTML+numin;
    }
    if(count_num.value==0){
        count_num.value=numin;
    }else{
        count_num.value=count_num.value+numin;
    }
}
