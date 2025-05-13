function enviaDados()
{
document.getElementById("inputusuario").innerHTML = "Nome enviado foi: " + window.prompt ("Digite seu nome: ");
}

function exibDados ()
{
window.alert("nome digitado foi: " + document.getElementById("nome").value);}