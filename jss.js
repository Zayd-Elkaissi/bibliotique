function validation(){
    var valid = true;
    var formLabels = document.getElementsByTagName("label");





    var titre = document.regForm.titre.value;
    if(titre == ""){
        formLabels[0].innerHTML = "Le titre de l'ouvrage: * [Requis]";
        formLabels[0].style.color="red";
        valid = false;
    }
    else if(!isNaN(titre)){
        formLabels[0].innerHTML = "Titre de l'ouvrage: * [Text Only]";
        formLabels[0].style.color="red";
        formLabels[0].style.textAlign="left";
        valid = false;
    }
    else if(titre.length>=30){
        formLabels[0].innerHTML = "Titre de l'ouvrage: * [Max 30]";
        formLabels[0].style.color="red";
        valid = false;
    }
    else{
        formLabels[0].innerHTML = "Titre de l'ouvrage";
        formLabels[0].style.color="green";
    }




    var auteur = document.regForm.auteur.value;
    if(auteur == ""){
        formLabels[1].innerHTML = "Auteur de l'ouvrage: * [Requis]";
        formLabels[1].style.color="red";
        valid = false;
    }
    else if(!isNaN(auteur)){
        formLabels[1].innerHTML = "Auteur del'ouvrage: * [Text Only]";
        formLabels[1].style.color="red";
        valid = false;
    }
    else if(auteur.length>=30){
        formLabels[1].innerHTML = "Auteur de l'ouvrage: * [Max 30]";
        formLabels[1].style.color="red";
        valid = false;
    }
    else{
        formLabels[1].innerHTML = "Auteur de l'ouvrage";
        formLabels[1].style.color="green";
    }
var prix = document.regForm.prix.value;
    if(prix == ""){
        formLabels[2].innerHTML = "Prix de l'ouvrage: * [Requis]";
        formLabels[2].style.color="red";
        valid = false;
    }
    else if(prix<=0){
        formLabels[2].innerHTML = "Le prix de l'ouvrage: * [doit etre positif]";
        formLabels[2].style.color="red";
        valid = false;
    }
    else if (!isNaN(prix.value)){
        formLabels[2].innerHTML = "Le prix de l'ouvrage: * [doit etre un nombre]";
        formLabels[2].style.color="red";
        valid = false;
    }

    else{
        formLabels[2].innerHTML = "Prix de l'ouvrage: * ";
        formLabels[2].style.color="green";
        valid = (valid) ? true : false ;
    }


    var date = document.regForm.date.value;
    if(date == ""){
        formLabels[3].innerHTML = "Date De Publication: * [Requis]";
        formLabels[3].style.color="red";
        valid = false;
    }

    else{
        formLabels[3].innerHTML = "Date De Publication: * ";
        formLabels[3].style.color="green";
        valid = (valid) ? true : false ;
    }
var langue = document.regForm.langue.value;
    if(langue == ""){
        formLabels[4].innerHTML = "La langue de l'ouvrage: * [Requis]";
        formLabels[4].style.color="red";
        valid = false;
    }

    else{
        formLabels[4].innerHTML = "La langue de l'ouvrage: * ";
        formLabels[4].style.color="green";
        valid = (valid) ? true : false ;
    }


    var typee = document.regForm.Roman.value;
    if(typee == ""){
    formLabels[5].innerHTML = "Saisir le type de l'ouvrage: * [Requis]";
    formLabels[5].style.color="red";
    valid = false;
     }
     else{
        formLabels[5].innerHTML = "Le Type de l'ouvrage: * ";
        formLabels[5].style.color="green";
        valid = (valid) ? true : false ;
    }
 


//tabel
var getSelectedByValue = document.querySelector(
    'input[name="Roman"]:checked');

var myTable = document.getElementById("table");
var row = myTable.insertRow(-1);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);

var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);
var cell5 = row.insertCell(4);
var cell6 = row.insertCell(5);
var cell7 = row.insertCell(6);


cell1.innerHTML = regForm.titre.value;
cell2.innerHTML = regForm.auteur.value;
cell3.innerHTML = regForm.prix.value;
cell4.innerHTML = regForm.date.value;
cell5.innerHTML = regForm.langue.value;
cell6.innerHTML = getSelectedByValue.value;

cell7.innerHTML = '<input type="button" value="Edit" onclick="editRow(this)" >' + '<input type="submit" onclick="deleteRow(this)"value="Delete" id="btn">';

return valid;

}






function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    table.deleteRow(i);
}


function editRow(td) {
    var  type = document.getElementsByClassName("radio");
   var selectedRow = td.parentElement.parentElement.rowIndex;
    var row = table.rows[selectedRow];
    if(td.value == "Edit"){
    document.getElementById("th1").value = row.cells[0].innerHTML;
    document.getElementById("th2").value = row.cells[1].innerHTML;
    document.getElementById("th3").value = row.cells[2].innerHTML;
    document.getElementById("th4").value = row.cells[3].innerHTML;
    document.getElementById("langue").value = row.cells[4].innerHTML;
for(var i=0;i<type.length;i++){
        if(row.cells[5].innerHTML==type[i].value){
            type[i].checked = true;
        }
    }
    td.value="Save"
    document.getElementById("submit").setAttribute("disabled","true");
}
else{
            row.cells[0].innerHTML = document.getElementById("th1").value;
            row.cells[1].innerHTML = document.getElementById("th2").value;
            row.cells[2].innerHTML =  document.getElementById("th3").value;
            row.cells[3].innerHTML = document.getElementById("th4").value;
            row.cells[4].innerHTML = document.getElementById("langue").value;
            for(var i=0;i<type.length;i++){
                if(type[i].checked){
                    row.cells[5].innerHTML = type[i].value;
                }
            }
            td.value = "Edit";
            document.getElementById("submit").removeAttribute("disabled")
}

    }

