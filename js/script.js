function validar(){
    var senha = formuser.senha.value;
    var rep_senha = formuser.rep_senha.value;
    
    if(senha == "" || senha.length <= 8){
        alert('Preencha o campo senha de acordo com os requisitos');
        formuser.senha.focus();
        return false;
    }
    if(rep_senha == "" || rep_senha.length <= 5){
        alert('Preencha o campo senha de acordo com os requisitos');
        formuser.rep_senha.focus();
        return false;
    }
    if (senha != rep_senha) {
        alert('Senhas diferentes');
        formuser.senha.focus();
        return false;
    }
}
function mostrarSenha() {
    let senha = document.getElementById("senha");
    if (senha.type == "password")  {
        senha.type = "text";
        
    }else{
        senha.type="password"
    }
}
function mostrarSenha2() {
    let rep_senha = document.getElementById("rep_senha");
    if (rep_senha.type == "password")  {
        rep_senha.type = "text";
        
    }else{
        rep_senha.type="password"
    }
}
function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/D/g,"");             //Remove tudo o que não é dígito
    v=v.replace(/^(d{2})(d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(d)(d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}
function id( el ){
	return document.getElementById( el );
}
window.onload = function(){
	id('telefone').onkeypress = function(){
		mascara( this, mtel );
	}
}


