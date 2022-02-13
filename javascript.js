let inputFileImg = document.getElementById("imgFileInput");
let inputFileElement = document.getElementById("inputFileElement");
inputFileImg.onclick = function(){
    console.log("img clicked");
    inputFileElement.click();
}
inputFileElement.onchange=function()
{
    var reader= new FileReader();
    reader.onload = function(){
        var dataURL = reader.result;
        inputFileImg.src=dataURL;
    }
    reader.readAsDataURL(inputFileElement.files[0]);
    
}
let firstName = document.getElementById("inputPrenom");
firstName.onchange=function(){
    let prenom1=document.getElementById("prenom1");
    prenom1.innerText=firstName.value;
    let prenom2=document.getElementById("prenom2");
    prenom2.innerText=firstName.value;
}
let namee = document.getElementById("inputNom");
namee.onchange=function(){
    let nom1=document.getElementById("nom1");
    nom1.innerText=namee.value;
    let nom2=document.getElementById("nom2");
    nom2.innerText=namee.value;
}

let buttonAddSkils=document.getElementById("buttonAddSkils");
let idskils=0;
buttonAddSkils.onclick=function(){
    let inputAddSkils=document.getElementById("inputAddSkils");
    let divCompetence=document.getElementById("divCompetence");
    
    let newSkilDiv=document.createElement("div");
    let newSkilSpan = document.createElement("span");
    let newSkilButton = document.createElement("button");
    newSkilSpan.innerText=inputAddSkils.value;
    newSkilButton.innerText="*";
    newSkilDiv.appendChild(newSkilSpan);
    newSkilDiv.appendChild(newSkilButton);
    newSkilDiv.id="divIdSkils" + idskils;
    idskils++;
    newSkilDiv.className="div-skils";
    divCompetence.appendChild(newSkilDiv);

}