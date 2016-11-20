var quantitaMassimaMagazzino = 0;
var quantitaMagazzino = 0;
var list = [];

function caricaElemento() {
    quantitaMassimaMagazzino = parseInt(document.getElementById("inputMaxQta").value);
    var codice = document.getElementById("codiceNuovo").value.toString();
    var descrizione = document.getElementById("descrizioneNuovo").value.toString();
    var quantita = document.getElementById("quantitaNuovo").value;
    
    var avviso = document.getElementById("labelAvvisiCarichi");
        avviso.innerHTML = "";
    
    if(codice.toString() == ""){
        avviso.innerHTML = "Inserire un codice articolo";
        return;
    } 
    else if(descrizione.toString() == ""){
        avviso.innerHTML = "Inserire una descrizione articolo";
        return;
    } 
    else if(quantita == 0){
        avviso.innerHTML = "Inserire una quantita articolo";
        return;
    }
    
    if(parseInt(quantitaMassimaMagazzino) < (parseInt(quantitaMagazzino) + parseInt(quantita))){
        avviso.innerHTML = "Impossibile stoccare la Qta richiesta, superata Qta massima.";  
        return;
    }
    
    var indiceElemento = list.indexOf(codice.toString());
    var table = document.getElementById("tabellaGiacenza");
    if(parseInt(indiceElemento) == -1){
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        cell1.className = "tdGiacenza";
        var cell2 = row.insertCell(1);
        cell2.className = "tdGiacenza";
        var cell3 = row.insertCell(2);
        cell3.className = "tdGiacenza";
        cell1.innerHTML = codice.toString();
        cell2.innerHTML = descrizione.toString();
        cell3.innerHTML = quantita.toString();
        quantitaMagazzino += parseInt(quantita);
        codice.innerHTML = "";
        descrizione.innerHTML = "";
        quantita.innerHTML = 0;
        list.push(codice.toString());
    }
    else{
        var row = table.rows[indiceElemento + 1];
        var qtaAttuale = parseInt(row.cells[2].innerHTML.toString());
        qtaAttuale = parseInt(qtaAttuale) + parseInt(quantita);
        row.cells[2].innerHTML = qtaAttuale.toString();
        quantitaMagazzino += parseInt(quantita);
    }
}