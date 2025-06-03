//primeiro desafio
function calculoDoNivelDoHeroi(){

  let dadosDoHeroi = "felipinho da massa";
  let xpDoHeroi = 30000
  let niveis = ["ferro", "bronze", "prata", "ouro",
     "platina", "ascendente", "imortal", "RADIANTE!!"];

    if(xpDoHeroi < 1000){
    console.log(`o heroi ${dadosDoHeroi} esta no nivel ${niveis[0]}`);

    }
    else if(xpDoHeroi >= 1001 && xpDoHeroi <= 2000){
 console.log(`o heroi ${dadosDoHeroi} esta no nivel ${niveis[1]}`);
    }
    else if(xpDoHeroi >= 2001 && xpDoHeroi <= 5000){
     console.log(`o heroi ${dadosDoHeroi} esta no nivel ${niveis[2]}`);   
    }
    else if(xpDoHeroi >= 5001 && xpDoHeroi <= 7000){
     console.log(`o heroi ${dadosDoHeroi} esta no nivel ${niveis[3]}`);
    }
    else if(xpDoHeroi >= 7001 && xpDoHeroi <= 8000){
     console.log(`o heroi ${dadosDoHeroi} esta no nivel ${niveis[4]}`);
    }
    else if(xpDoHeroi >= 8001 && xpDoHeroi <= 9000){
     console.log(`o heroi ${dadosDoHeroi} esta no nivel ${niveis[5]}`);
    }
    else if(xpDoHeroi >= 9001 && xpDoHeroi <= 10000){
    
     console.log(`o heroi ${dadosDoHeroi} esta no nivel ${niveis[6]}`);
    }

    else if(xpDoHeroi > 10001){

     console.log(`o heroi ${dadosDoHeroi} esta no nivel ${niveis[7]}`);
    }
}calculoDoNivelDoHeroi();


//segundo desafio DIO.me
 let niveis = [" Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"];

let saldoDeVitorias = calculoDasVitorias(61, 5);

if (saldoDeVitorias < 10){
     console.log(`o saldo de vitórias é: ${saldoDeVitorias} e está no nivel: ${niveis[0]}`);
}
else if(saldoDeVitorias >= 11 && saldoDeVitorias <= 20){
     console.log(`o saldo de vitórias é: ${saldoDeVitorias} e está no nivel: ${niveis[1]}`);
}
else if(saldoDeVitorias >= 21 && saldoDeVitorias <= 50){
     console.log(`o saldo de vitórias é: ${saldoDeVitorias} e está no nivel: ${niveis[2]}`);
}
else if(saldoDeVitorias >= 51 && saldoDeVitorias <= 80){
     console.log(`o saldo de vitórias é: ${saldoDeVitorias} e está no nivel: ${niveis[3]}`);
}
else if(saldoDeVitorias >= 81 && saldoDeVitorias <= 90){
     console.log(`o saldo de vitórias é: ${saldoDeVitorias} e está no nivel: ${niveis[4]}`);
}
else if(saldoDeVitorias >= 91 && saldoDeVitorias <= 100){
     console.log(`o saldo de vitórias é: ${saldoDeVitorias} e está no nivel: ${niveis[5]}`);

}
else if(saldoDeVitorias >= 101){
     console.log(`o saldo de vitórias é: ${saldoDeVitorias} e está no nivel: ${niveis[6]}`);
}



function calculoDasVitorias(vitorias, derrotas){
    let resultado = (vitorias - derrotas);
    return resultado;

}
