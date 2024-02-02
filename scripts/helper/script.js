const div = document.querySelector("#n");
const a = document.querySelector("#src")
//styling div and html 
//style
a.addEventListener('scroll', select_scroll, false);

  function select_scroll(e) {
    let percent = a.scrollTop / (a.scrollHeight - a.clientHeight);
    div.scrollTop =  (div.scrollHeight - div.clientHeight)* percent;       
  }
a.addEventListener("input", OnInput, false);
  function OnInput() {
    const e =  document.querySelector("li[id^='clicked']")
    const n = parseInt(e.getAttribute("id").replace("clicked",""))
    const ini =a.value;
    if( n<=5){localStorage.setItem("t1e"+n,ini);iframe.setAttribute("srcdoc",localStorage.getItem("t1e"+ n)) ;}

    if(n>5 && n<=9){localStorage.setItem("t2e"+(n-5),ini);iframe.setAttribute("srcdoc",localStorage.getItem("t2e"+ (n-5))) ;}

    if(n>9){localStorage.setItem("t3e"+(n-9),ini);iframe.setAttribute("srcdoc",localStorage.getItem("t3e"+ (n-9))) ;}

    div.innerHTML=""
    a.value.split("\n").forEach((e,number)=>{div.innerHTML+=(number+1)+"\n";})
  
  }

const svg = document.querySelectorAll("svg")
svg.forEach((value,number)=>{value.addEventListener("click",() => {

  const e =  document.querySelector("*[id^='clicked']")
    if(e!=null)
    {e.style.cssText='';
    e.removeAttribute("id")}

    value.style.backgroundColor="darkblue";value.style.borderColor="blue"; value.setAttribute("id","clicked")
    
let i =  document.getElementById("ul"+number);
var ch = value.children[0];
ch.setAttribute("points",i.style.display==="none" ?  "5,30  10,35 15,30" : "5,30 10,35 5,40" )

if (i.style.display==="none" ) {

    i.style.display="block";

}
else{
i.style.display= "none"}

})})


//exercice opnning
const iframe = document.querySelector("iframe")

document.querySelectorAll("li").forEach((value,number)=>{
  //input

   //stylling
   value.onclick=()=>{ 
     //const init=localStorage.getItem("t1e"+ (number + 1) )
     const e =  document.querySelector("*[id^='clicked']")
    //const n = parseInt(e.getAttribute("id").replace("clicked",""))
    if(e!=null){e.style.cssText='';e.removeAttribute("id");  }
        value.style.backgroundColor="darkblue";value.style.borderColor="blue";
        value.setAttribute("id","clicked"+(number+1))
        div.innerHTML=''
    if (number<5){
        iframe.setAttribute("srcdoc",localStorage.getItem("t1e"+ (number + 1) )) ;
        a.value=localStorage.getItem("t1e"+ (number + 1) )
     
      }

 else{
   if (number>4 && number<9) { 
    if(number===6 ){
      var src= localStorage.getItem( "t1e4" )
      var css = localStorage.getItem( "t2e2" )
      var index=src.indexOf("</head>")
      
      iframe.setAttribute("srcdoc",src.slice(0,index)+"<style type='text/css'>"+css+"</style>"+src.slice(index+7))
  }
    else
    iframe.setAttribute("srcdoc",localStorage.getItem("t2e"+ (number -4) ));
    a.value=  localStorage.getItem("t2e"+ (number -4) );
}
   
  else{ iframe.setAttribute("srcdoc",localStorage.getItem("t3e"+ (number -8) ));
  a.value=localStorage.getItem("t3e"+ (number -8) )
}
}
a.value.split("\n").forEach((e,n)=>{ div.innerHTML+=(n+1)+"\n";})
}

var v =  value.innerHTML.indexOf('.')
   switch (value.innerHTML.slice(v+1)) {
    case "html":
        value.innerHTML="<i style='color:#a45e2f' class='fa fa-code' ></i>"+value.innerHTML

        break;
    case "js":
    value.innerHTML="<font color='yellow' size='2'>JS</font>"+value.innerHTML
    default:
        value.innerHTML="<font size='2' color='#4f98b5'>#</font>"+value.innerHTML
        break;
   }

}); 



