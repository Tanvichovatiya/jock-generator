 let get=document.getElementById("get");


 async function myfunction() {
    let getting= await fetch('https://icanhazdadjoke.com/',{
        headers:{
            accept:"application/json"
        }
    });
    let jock=await getting.json();
    let data=jock.joke;
    get.innerHTML=data;
    console.log(get);
    
    
 }