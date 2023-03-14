const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const jobSelect = document.querySelector("#job")
const messageTextarea = document.querySelector("#message")



form.addEventListener("submit", (event)=>{

    event.preventDefault();
    
    //validação de campo vazio
    if (nameInput.value.trim() === '') {
        alert('Por favor, preencha o campo de nome.');
        nameInput.focus();
        return;
      }
    //validação de campo vazio + email correto
    if(emailInput.value === ''|| !emailValidation(emailInput.value)){
        alert('Por favor, preencha o seu email')
        emailInput.focus();
        return
    }
     //validação de campo vazio + digitos minimos
    if(!validatePassword(passwordInput.value,8)){
        alert('Por favor, insira uma senha com no mínimo 8 digitos!')
        passwordInput.focus();
        return
    }
    //validação de campo vazio
    if(jobSelect.value.trim() ===''){
        alert("Por favor, selecione uma opcção")
        jobSelect.focus();
        return
    }
     //validação de campo vazio
    if(messageTextarea.value.trim()===''){
        alert("Por favor, escreva uma mensagem")
        messageTextarea.focus();
        return
    }

    form.submit()
})

//função com validação de email
function emailValidation(email){
    const emailRegex =  new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    )

    if(emailRegex.test(email)){
        return true
    } else return false
}
//função com validação de senha
function validatePassword(password, minDigits){
    if(password.length >= minDigits){
        return true
    } else {
    return false
}
} 
