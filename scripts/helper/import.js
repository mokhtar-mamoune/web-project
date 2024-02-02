const tp1Exo1 = `<!doctype html>
<html>
<head>
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Les balises sémantiques</title></head>
<body bgcolor="black">
<font color="white"><header>
<h1>Titre de l"ent&eacutete de la page</h1>
</header>
<main>
<ul>
 <li><a href="">Accueil</a></li>
<li><a href="">Services</a></li>
<li><a href="">Partenaires</a></li>

<li><a href="">Contact</a></li>
</ul>
<section>
<h2>Titre de la section</h2>
<article>
<h3>Titre de l"article 1</h3>
<p>contenu de l"article 1</p>
</article>
<article>
<h3>Titre de l"article 2</h3>
<p>contenu de l"article 2</p>
 </article>
</section>
</main>
<br>
<footer>
<p>&copy <font size=3 >2020 All Rights Reserved</font></p>
</footer></font>
</body>
</html>`

const tp1Exo2 = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>exo2</title>
</head>
<body>
<map name="photo">
<area alt="area" shape="circle" coords="60,40,20" href="cercle.com"/>
<area alt="area" shape="rect" coords="200,20,270,30" href="rectangle.com"/>
<area  alt="area" shape="poly" coords="60,120,160,60,200,120" href="triangle.com"/>
</map>
<img alt="" src="assets/map.jpg"  usemap="#photo"/>
</body>
</html>
`
const tp1Exo3 =`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>exo3</title>
</head>
<body>
<table border=1>
<tr>
 <td colspan=1><font color="red" size=4>PREFIXES USUELS EN METROLOGIE</font></td>
</tr>
 </table>
<p><font size=3 >Quand le nombre d'unit&eacutes est trop grand on utilise des prefixes :</font></p>
<table><tr><td width=380></td><td><table border=1>
 <tr>
   <th colspan=3> <center>Multiple</center></th>
   <th><center>Exemple:</center></th>
</tr>
<div align="left"><tr>
    <th >Pr&eacutefixe</th>
    <th >Symbole</th>
    <th >Multiplicateur</th>
    <td rowspan=5 >1 500 000 000 octes<br>
c'est<br>
1,5 Go = 1500 Mo</td>
 </tr>
 <tr>
    <td width=20px>t&eacutera</td>
    <td width=23px>T</th>
    <td width=43px>10<sup>12</sup></td>
</tr>
<tr>
    <td width=20px>giga</td>
    <td width=23px>G</td>
    <td width=43px>10<sup>9</sup></td>
</tr>
<tr>
    <td width=20px>m&eacutega</td>
    <td width=23px>M</td>
    <td width=43px>10<sup>6</sup></td>
</tr>
<tr>
    <td width=20px>kilo</td>
    <td width=23px>k</td>
    <td width=43px>10<sup>3</sup></td>
</tr></div>
</table>
</td>
</tr>
</table>
</body></html>`

const tp1Exo4 =`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Developpement WEB</title>
    </head>
    <body link="blue">
      <center><font color="blue" ><h1 >D&eacuteveloppement WEB</h1></font></center>
        <ul id="ul" type="circle" align="left">
            <li><a href="#web">Web</a></li>
            <li><a href="#list">Les Services web</a></li>
            <li><a  href="#internet"> List d"outils d"internet</a></li>
        </ul>
        
        <table border="0">
          <tr>
            <td width="10%" rowspan="6"> </td>
	    <th colspan="2"> <a align="left" name="web"><h2>Le Web</h2></a></th>
                       			</tr>
            
            <tr>
		<td width="5%"></td>
		<td>Syst&egraveme hypertexte public fonctionnant sur 
    Internet et qui permet de consulter, des pages mises en ligne dans des sites.</td>
              </tr>
   		<tr>
		 <th colspan="2"> <a align="left" name="service"><h2>Les Services Web</h2></a></th>	   
 			</tr> 
            <tr>
		<td width="5%"></td>
			<td>Les servicves de l"Internet sont offertes par les serveurs pr&eacutesent sur Internet:
         <ol type="1">
        <li>Web(documents hypertextes)</li>
 	  <li>Courier &eacutelectronique (e-mail)</li>
        <li>Messageries Instantan&eacutees</li>
        <li>Forums de discussion</li>
	<li>T&eacutel&eacutechargement de fichiers</li>
         </ol>
</td>
                      </tr>
          <tr>

       <th colspan="2"> <a name="internet" align="left">
        <h2 >List d"outils internet</h2></a></th>
</tr>
    <tr>
      <td width="5%"></td>
      <td>
        
        <table border=1>
         <tr>
<td rowspan="3" width="30%">Outils de pr&eacutesentation</td>
<td colspan="2" width="45%"><a href="http://cyberzoide.developpez.com/html/">HTML</a></td>
</tr>
<tr><td colspan="2" width="35%"><a href="http://xml.developpez.com/cours/">xml</a></td></tr>
<tr><td colspan="2" width="35%"><a href="http://css.developpez.com/cours/">css</a></td></tr>
<tr>
   <td   width="35%" rowspan="2">Outils de programmation</td>
   <td height="7%" width="20%" ><a   href="http://javascript.developpez.com/cours/">
   <center><img alt="" align="center" width="50" height="30" src="assets/javascript.png">
   </center></a></td>
    <td height="7%" width="25%" ><center>javascript</center></td>
      </tr>
   <tr><td height="15%" width="20%" ><a href="http://chgi.developpez.com/java/applet/">
   <center><img alt="" width="40" height="50" src="assets/javaApplet.jfif"></center></a></td> 
    <td width="25%" height="15%" ><center>Applet Java</center></td></tr>
        </table> 
      </td>
     </tr>
</table>

    </body>
</html>`
const tp1Exo5 =`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>exo5</title>
</head>
<body>
 <fieldset>
 <legend>Votre identit&eacute</legend>
 <form>
 <ol>
<li> Nom<input type="text" placeholder="Prenoom et nom"></li>
 <li> Email<input type="text" placeholder="exemple@domain.com"></li>
<li>T&eacutel&eacutephone<input type="text"
 placeholder="par ex : +33755500000000"></li>
</ol>
</fieldset>
<fieldset>
 <legend>Adresse de livraison</legend>
 <ol>
 <li>Adresse<textarea rows=4 cols=40></textarea></li>
 <li>Code postal<input type="text" ></li>
 <li>Pays<input type="text"></li>
 </ol>
 </fieldset>
<fieldset>
 <legend>informations CB</legend>
 <ol>
 <li><fieldset>
       <legend>Type de carte bancaire</legend>
         <ol>
            <li><input type="radio" name= "carte" value="visa">VISA</li>
            <li><input type="radio" name= "carte" value="AmEx">AmEx</li>
            <li><input type="radio" name= "carte" value="Mastercard">Matercard</li>
         </ol>
         </fieldset>
 </li>
 <li>Num de carte<input type="text" ></li>
 <li>Code de s&eacutecurit&eacute<input type="password">
 <li>Nom du porteur<input type="text" placeholder="Meme nom que sur la carte"<li>
 </ol>
 </fieldset>
 <fieldset>
 <button >J"ach&egravete</button>
</fieldset>
 </body>
</html>
 
 
 `
const tp2Exo1 =`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>exo1</title>
<style type="text/CSS">

body,.h1{color:blue;}


h1{color:green;}

ol[start] li{color:purple;}

#h2{color:yellow;}

li:first-child{color:orange;}

li[title^="sel"]{color:red;}</style>

</head>
<body>
<h1>text [1]</h1>
<ul>
  <li>text  [2]</li>
  <li>text  [3]</li>
</ul>
<h2 id="h2" title="selection" >text [4]</h2>
 <ul>
  <li>text  [5]</li>
  <li class="h1" title="selecteur">text  [6]
       <ol start="2">
         <li>text  [7]</li>
         </ol></li></ul>
</body>
	</html>
`
const tp2Exo2 =`body{color:navy;background: url(assets/back.jpg) 
 no-repeat fixed  ;font-family:"sans-serif" ;
background-size:cover;  }
h1,h2{font-family:"Comic Sans MS ";}
h1{color:white;background-color:navy;text-shadow:5px 5px 4px gray; }
a{color:navy;}
a:visited{color:maroon;}
table{border-radius:5px;}
`
const tp2Exo3 =`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
<style type="text/css">
body{width:180px;position:fixed;left:400px;top:100px;}
#one{transform:rotate(-15deg);}
#two{transform:rotate(-2deg);}
#three{transform:rotate(13deg);}
#four{transform:rotate(18deg);}
#five{transform:rotate(-13deg);}
#six{transform:rotate(3deg);}

img:hover{border:solid white;
          box-shadow:6px 6px 5px;
          position:relative;
          z-index:2;}
img{
	width:80px; height:110px;}
h3{color:yellow;position:absolute;top:165px;animation:rotate 5s infinite ;z-index:2}
@keyframes rotate{
  0%{transform:rotate(0deg);color:yellow;}
  100%{color:red;transform:rotate(360deg);}
}
         </style>
</head>
<body>
<h3>Quelle belle nature !!</h3>
<img alt="" id="one" src="assets/img1.jpg" > 
<img alt="" id="two" class="two" src="assets/img2.jpg" > 
<img alt="" id="three" src="assets/img3.jpg" > 
<img alt="" id="four" class="two" src="assets/img4.jpg" > 
<img alt="" id="five" src="assets/img5.jpg" > 
<img alt="" id="six" class="two" src="assets/img6.jpg" > 
</body>
</html>`
const tp2Exo4 =`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" 
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
   <style type="text/css" >
div{width:100px;height:100px; color:white;position:absolute;z-index: 1;
 top:0px;}
    
div div{
  position: absolute;
  opacity: 0.6;
z-index: 2;
 top:20px;
 left:30px;
  width: 40px;   
  height: 35px; 
  border-bottom-left-radius: 100% 100%;
  border-bottom-right-radius: 100% 100%;
  border-top-left-radius: 100% 100%;
  border-top-right-radius: 100% 100%;
}   

#home div{background-color:#d6731b;}
#service div{background-color:#e69f33;}
#portfolio div{background-color:#2b9cc2;}
#blog div{background-color:#2c79ad;}
#mail div{background-color:#2b3d4b;}
 i{width:30px;height: 35px;position:absolute;margin: -8px 0 0 -8px;
  top: 60%;left: 50%;}
     #home{background-color:#d16503;left:0px;}
     #service{background-color:#e9931a;left:100px; }
     #portfolio{background-color:#1791c0;left:200px;}
     #blog{background-color:#166ba2;left:300px;}
     #mail{background-color:#162836;left:400px;}
 h5{position:absolute;top:50px;left:27px;opacity:0.5;}
 .list{background-color: gray;transition: top 0s ;position:absolute;z-index: -1;}
 #list1 {left: 0px;}
 #list2 {left: 100px;}
 #list3 {left: 200px;}
 #list4 {left: 300px;}
 #list5 {left: 400px;}
 ul{width:100px;margin-top: 1px;line-height: 0%;
list-style-type: none;
padding-left:2px;}
 #home:hover ~ #list1,
 #service:hover ~ #list2,
 #portfolio:hover ~ #list3,
 #blog:hover ~ #list4,#mail:hover ~ #list5{
  line-height: 180%;top:100px;}
 
a{color: whitesmoke;}
 
     </style>
</head>
<body>
  

</html>
<div id="home">
<div><i class="fa fa-home" ></i></div>
 <h5>Home</h5>
</div>
<div id="service">
<div><i class="fa fa-flask"  ></i></div>
 <h5>Services</h5>
</div>
<div id="portfolio">
<div><i class="fa fa-paint-brush" ></i></div>
 <h5>Portfolio</h5>
</div>
<div id="blog">
<div><i class="fa fa-bookmark"></i></div>
 <h5>Blog</h5>
</div>
<div id="mail">
<div><i class="fa fa-envelope"></i></div>
 <h5>Contact</h5>
</div>
<ul id="list1" class="list">
    <li><a href="">Introduction</a></li>
    <li><a href="">Actualite</a></li></ul>
<ul id="list2" class="list">
  <li><a href="">service1</a></li>
  <li><a href="">service2</a></li>
  <li><a href="">service3</a></li></ul>
  <ul id="list3" class="list">
  <li><a href="">compte</a></li>
  <li><a href="">conexion</a></li>
  <li><a href="">sing in</a></li>
  <li><a href="">email</a></li></ul>
<ul id="list4" class="list">
  <li><a href="">blog1</a></li>
  <li><a href="">blog2</a></li>
  <li><a href="">blog3</a></li>
  <li><a href="">blog4</a></li>
  <li><a href="">blog5</a></li>
</ul>
<ul id="list5" class="list">
  <li><a href="">tel</a></li>
  <li><a href="">mail</a></li>
  <li><a href="">mobile</a></li>
</ul>
</body>
</html>

`
const tp3Exo1 =`<!DOCTYPE html>
<html lang="en" >
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>exo1</title>
        <style type="text/css">
           button{position: fixed;left: 160px;top:160px;}
           img{width: 80px;height:150px;}

        </style>
         
        </head>
    <body>
     <img  alt="" src="assets\\lampAllumee.jpg">
     <img alt="" src="assets\\lampEteinte.png">
     <img  alt="" src="assets\\lampAllumee.jpg">
     <img alt="" src="assets\\lampEteinte.png">
     <img  alt="" src="assets\\lampAllumee.jpg">
     <button type="button" onclick="echanger()" >Echanger les places de lampes </button>
    <script lang="javascript">
    const lamps = document.getElementsByTagName("img")
    const l = lamps.length
      for(let i=0;i<l; i++)
       lamps.item(i).onclick=()=>{lamps.item(i).style.visibility="hidden";};
 function echanger (){
    var  aux;
      for(let i = 1;i<l;i+=2){
          aux= lamps.item(i-1).getAttribute("src")
         lamps.item(i-1).setAttribute("src",lamps.item(i).getAttribute("src"))
         lamps.item(i).setAttribute("src",aux)
        }
     if((l%2)!=0)
    lamps.item(l-1).setAttribute("src",lamps.item(l-3).getAttribute("src"))
     
    }
   
     </script>
    </body>
    </html>`
const tp3Exo2 =`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  <script >
    function add(){
      const e = document.forms[0].elements[0].vlaue
        if ( e!="") 
        document.getElementsByTagName("ul")[0].innerHTML+=("<li>"+e+"</li>");
    }
    function rm(){
      const child=document.getElementsByTagName("ul")[0].lastChild;
      document.getElementsByTagName("ul")[0].removeChild(child);}
  </script>
</head>
<body>
    <form action="" method="">
        <input type="text" ><button type="button" onclick=add()>ok</button>
    </form>
    <ul></ul>
    <button type="button" onclick="rm()">delete</button>
</body>
</html>`
const tp3Exo3 =`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style type="text/css">
        input,select,button{position: relative;left:5px;margin-right: 5px;}
    </style>
    

</head>
<body>
* champs obligatoire<br></br>
    <form action="" method="">
Name:<input type="text">*<br><br>
E-mail:<input type="text">*<br><br>
couleur de fond<input type="color"><br><br>
 couleur de texte<input type="color"><br><br>
police<select>
    <option >Verdana
    <option>sans serif
        <option value="">Arial
</select><br><br>
<button type="button" onclick=script()>Submit</button>
    </form>
    <p></p>
    <script >
        function script(){
            const name =document.forms[0].elements[0].value;
            const email=document.forms[0].elements[1].value;
            if (name==="" || email==="") 
             alert("vous avez oublie de champ(s) obligatoire");
            const text=document.forms[0].elements[3].value;
            const fond=document.forms[0].elements[2].value;
            const police=document.forms[0].elements[4].value;
            document.querySelectorAll("input,select,button").forEach((e)=>{
              e.style.cssText="border-color:"+text+";"})
document.body.style.cssText ="background-color:"+fond+";color:"+text+";font-family:"+police+";";
const p =  document.querySelector("p")
const l0 ="respectivement pour le fond et text"
p.innerHTML=l0
const l = "Bienvenue "+name+" vous préférez les couleurs "+[fond,text]
p.innerHTML.padStart(l0.length+l.length,l);
        }
    </script>
</body>
</html>`
const tp3Exo4 =`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exo4</title> <style type="text/css">button{ margin-bottom:10px;
       height:30px; width:80px;}</style>
</head>
<body>
     <button>Essayer</button>
     <p></p>
    <script>
      const b= document.querySelector("button");
      const p = document.querySelector("p")
      const m=()=>{
        p.re
        p.innerHTML+="<br>"+Math.floor(Math.random() * 101)
      }
      b.addEventListener("mousemove",m)
       b.onclick=()=>{ 
         b.removeEventListener("mousemove",m)
         p.innerHTML+="<br>Vous avez cliqué sur le bouton !"
        }
        
      b.onmouseover=()=>{p.innerHTML+="<br>le souris est sur  le bouton !"}
   
      b.onmouseout=()=>{p.innerHTML+="<br>le souris est en dehors du bouton !"}

   </script>
</body>
</html>`
localStorage.setItem("t1e1",tp1Exo1)
localStorage.setItem("t1e2",tp1Exo2)
localStorage.setItem("t1e3",tp1Exo3)
localStorage.setItem("t1e4",tp1Exo4)
localStorage.setItem("t1e5",tp1Exo5)
localStorage.setItem("t2e1",tp2Exo1)
localStorage.setItem("t2e2",tp2Exo2)
localStorage.setItem("t2e3",tp2Exo3)
localStorage.setItem("t2e4",tp2Exo4)
localStorage.setItem("t3e1",tp3Exo1)
localStorage.setItem("t3e2",tp3Exo2)
localStorage.setItem("t3e3",tp3Exo3)
localStorage.setItem("t3e4",tp3Exo4)


