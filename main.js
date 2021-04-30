const getUserData = document.querySelector("#data")

function send(){
    let ValorSinIva = parseFloat(getUserData.value / 1.12).toFixed(2)
    let ValorIVA = parseFloat(ValorSinIva * 12/100).toFixed(2)
    let sumatotal = ValorSinIva + ValorIVA; 
    let sendResults = document.querySelector("#results")
    sendResults.innerHTML =
        'Valor sin iva: ' + ValorSinIva + 
        ' Valor del Iva: ' + ValorIVA +
        ' Suma total:' + getUserData.value

}

send()