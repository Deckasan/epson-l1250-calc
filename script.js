
function calcular() {
  const paginas = parseInt(document.getElementById("paginas").value);
  if (paginas < 30) {
    document.getElementById("resultado").innerHTML = "Insira 30 páginas ou mais.";
    return;
  }
  const totalAno = paginas * 52;
  const custoCartucho = Math.ceil(totalAno / 150) * 70;
  const custoEcoTank = (totalAno <= 4500) ? 0 : Math.ceil((totalAno - 4500) / 7500) * 225.90;
  const precoImpressora = 1000;
  const economia = (precoImpressora + custoEcoTank) - (400 + custoCartucho);
  document.getElementById("resultado").innerHTML =
    `<p>Economia estimada: <strong>R$ ${economia.toFixed(2)}</strong> no ano.</p>`;
}
