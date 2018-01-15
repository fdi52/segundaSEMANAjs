let chute=5;
let numero = Math.random() * 6;
let numeroAredondado= Math.ceil(numero);




if(valor==numeroAredondado){
	console.log(`O valor colocado é $(valor) Voce acertou! O valor que caiu doi $(numeroAredondado)`);
}

else{
	console.log(`Voce erou! O valor colocado é $(valor). O valor que caiu foi ${numeroAredondado}`); 
}