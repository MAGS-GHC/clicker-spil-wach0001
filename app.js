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
  let bananIsekundet = 0
  let banansamlerPris = 80
  let antalKøbtemonkey = 0
  let antalBS = 0



  function buyMonkey () {
    if (banan >= monkeycost) {
        banan = banan - monkeycost
        købtMonkey = true
        antalMonkey++
        monkeycost += 10
        
        document.getElementById("demo").innerHTML = banan + ' bananer'
        document.getElementById("antal").innerHTML = antalMonkey + ' købte aber'
        document.getElementById("abe pris").innerHTML = 'abepris :' + monkeycost 
    } else {
        alert('Du har ikke nok bananer, saml flere for at opgradere')
    
    }




  }

function bananSamler() {
    if(banan >= banansamlerPris) {
        banan = banan - banansamlerPris
        bananIsekundet += 1
        antalBS++
        banansamlerPris *= 2
        document.getElementById("antalb").innerHTML = antalBS + ' købte Banan Mænd'
        document.getElementById("BananSamleren").innerHTML = 'prisen på Banan Manden :' + banansamlerPris 
    }
}
  

setInterval(function(){
    banan += bananIsekundet
    document.getElementById("demo").innerHTML = banan + ' bananer'
}, 1000)



