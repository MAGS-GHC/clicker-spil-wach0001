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
  
  let monkeyCost = 10 
  let bananIsekundet = 0
  let banansamlerPris = 80
  let antalKøbtemonkey = 0
  let antalBS = 0
  let købtBS = false




  function buyMonkey () {
    if (banan >= monkeyCost) {
        banan = banan - monkeyCost
        købtMonkey = true
        antalMonkey++
        monkeyCost += 10
        if(banan === 1) {
            document.getElementById("demo").innerHTML = banan + ' banan' ;
        }
       else { 
            document.getElementById("demo").innerHTML = banan + ' bananer' 
       }
       
        if (antalMonkey === 1){
            document.getElementById("antal").innerHTML = antalMonkey + ' købt abe' 
        } else {    document.getElementById("antal").innerHTML = antalMonkey + ' købte aber' }
    
        document.getElementById("abe pris").innerHTML = 'abepris: ' + monkeyCost 
    } else {
        alert('Du har ikke nok bananer, saml flere for at opgradere')
    
    }




  }

function bananSamler() {
    if(banan >= banansamlerPris) {
        banan = banan - banansamlerPris
        bananIsekundet += 1
        købtBS = true
        antalBS++
        banansamlerPris *= 2
        

       if (antalBS === 1){document.getElementById("antalb").innerHTML = antalBS + ' købt Banan Mand'
    } else {document.getElementById("antalb").innerHTML = antalBS + ' købte Banan Mænd'}
        
        document.getElementById("BananSamleren").innerHTML = 'prisen på Banan Manden: ' + banansamlerPris 
    } else {  alert('Du har ikke nok bananer, saml flere for at opgradere')} 
}
  


setInterval(function(){
    if (købtBS){
        banan += bananIsekundet
        banan1 += bananIsekundet
        if(banan === 1) {
            document.getElementById("demo").innerHTML = banan + ' banan' ;
        }
        else { 
            document.getElementById("demo").innerHTML = banan + ' bananer' 
        }


        
    } 
}, 1000)





let banan1 = 0


function minFunktion2() {
    banan1 += 1
    if (købtMonkey){
        banan1 += antalMonkey
    } 
 }



let antalBanan = 0 
function highscore() {
    antalBanan = banan1
    
document.getElementById("high_s").innerHTML = 'nuværende score: ' + antalBanan + ' bananpoint'
}





