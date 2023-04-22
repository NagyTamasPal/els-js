function calc() {
    var negyzetoldal= document.getElementById("aoldal").value;
    negyzetoldal = Number(negyzetoldal);
    var kerulet= 4*negyzetoldal;
    var terulet= negyzetoldal*negyzetoldal
    document.getElementById("ker").innerText=kerulet
    document.getElementById("ter").innerText=terulet
}