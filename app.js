let banan = 0 
function minFunktion() {
    banan += 1 
    if(banan === 1) {
        document.getElementById("demo").innerHTML = banan + ' banan' ;
    }
   else { 
        document.getElementById("demo").innerHTML = banan + ' bananer' 
   }

  }
  
  let monkeycost = 20 
  let monkey = 0 

  function buyMonkey () {
    if (banan >= monkeycost) {
        banan = banan - monkeycost
        document.getElementById("demo").innerHTML = banan + ' bananer'
    }

    //husk monkeypic 
  }

 