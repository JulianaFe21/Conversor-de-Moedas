function Converter() {
	var valorElemento = document.getElementById("valor");
	var valor = valorElemento.value;
	var valorEmRealNumerico = parseFloat(valor);
	var valorEmDolar = valorEmRealNumerico * 0.2;
	var elementoValorConvertido = document.getElementById("valorConvertido");
	var valorConvertido = "O resultado em Dolar é $  " + valorEmDolar;
	elementoValorConvertido.innerHTML = valorConvertido;

	var valorElementoEuro = document.getElementById("valor");
	var valor = valorElementoEuro.value;
	var ValorEmRealNumerico = parseFloat(valor);
	var valorEmDolar = valorEmRealNumerico * 0.18;
	var elementoValorConvertidoEuro = document.getElementById(
		"valorConvertidoEuro"
	);
	var valorConvertidoEuro = "O resultado em Euro é €  " + valorEmDolar;
	elementoValorConvertidoEuro.innerHTML = valorConvertidoEuro;
}