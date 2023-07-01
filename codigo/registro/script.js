const btn = document.querySelector("#send");

btn.addEventListener("click", function(e){

    e.preventDefault()

    const email = document.querySelector("#enviar");
 
    const valor_email = email.value;

    console.log(valor_email);
 })

 btn.addEventListener("click", function(e){

    e.preventDefault()

    const email = document.querySelector("#senha");
 
    const valor_senha = email.value;

    console.log(valor_senha);

 })

var user = {
    "data": [
        {
            "email": "teste@email.com",
            "senha": "12345"
        }
    ]
}

btn.addEventListener("click", function(e){

    const check_email = document.querySelector("#check-email");
 
    const check_value = check_email.value;
    
    if(check_value == user.data[0].email){
        console.log(user.data[0].email);
    } else {
        alert("Email Incorreto! Tente Novamente")
    }

    const check_password = document.querySelector("#check-password");
 
    const check_pvalue = check_password.value;
    
    if(check_pvalue == user.data[0].senha){
        console.log(user.data[0].senha);
    } else {
        alert("Senha Incorreta! Tente Novamente")
    }

    if(check_pvalue == user.data[0].senha && check_value == user.data[0].email){
        alert("Usuário Logado!")
    }
 })

