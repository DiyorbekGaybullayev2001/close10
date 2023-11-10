
let hisob =document.getElementById("hisob")
hisob.onclick = function close10(){
    let a =document.getElementById("son1").value;
    let b =document.getElementById("son2").value;
    let par =document.getElementById("parag")
    if((a+b)%10==0){
      return par.innerHTML=0;
    }
    else if(a<b){
      return par.innerHTML=a;
    }
    else if (b<a){
      return par.innerHTML=b
    }
  }