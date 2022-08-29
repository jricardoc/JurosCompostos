
function calcJurosCompostos(aporte) {
    let carteira = 0;
    let juros = 0;
    let jurosTotal = 0;
    let counterMes = 1;

    for (let i = 0; i < 48; i++) {
        juros = carteira * 0.01;
        carteira += aporte;
        carteira += juros;
        jurosTotal += juros;

        jurosFormat = juros.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        jurosTotalFormat = jurosTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        carteiraFormat = carteira.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        if (counterMes == 12 || counterMes == 24 || counterMes == 36 || counterMes == 48) {
            console.log(counterMes + "ª MêS!")
            console.log("Juros do mes: " + jurosFormat);
            console.log("Soma dos juros: " + jurosTotalFormat);
            console.log("Carteira do mes: " + carteiraFormat);
            console.log("// --------------------------- //")
        }
        counterMes++;
    }
    console.log("------------- o valor da carteira é: " + carteiraFormat) + "-----------------";
    console.log("------------- o valor total do juros é: " + jurosTotalFormat + "-----------------");
}

function conseguirChegarEm200Mil(aporte) {
    let carteira = 0;
    let juros = 0;
    let jurosTotal = 0;
    let quantMes = 0;

    while (carteira < 200000) {
        juros = carteira * 0.01;
        carteira += aporte;
        carteira += juros;
        jurosTotal += juros;
        quantMes++;
    }
    console.log(quantMes + " meses com: " + carteira.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
}
 
conseguirChegarEm200Mil(2000);

