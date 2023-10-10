let banan = 0 
let købtMonkey = false
let antalMonkey = 0

function minFunktion() {
    banan += 1 
    if (købtMonkey){
        banan += antalMonkey
    }
    if(banan === 1) {
        document.getElementById("demo").innerHTML = banan + ' banan' ;
    }
   else { 
        document.getElementById("demo").innerHTML = banan + ' bananer' 
   }

  }
  
  let monkeycost = 10 
  let monkey = 0
 


  function buyMonkey () {
    if (banan >= monkeycost) {
        banan = banan - monkeycost
        købtMonkey = true
        antalMonkey++
        document.getElementById("demo").innerHTML = banan + ' bananer'
    }


  }


  



 