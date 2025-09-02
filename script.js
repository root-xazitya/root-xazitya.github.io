function gestisciProvider() {
  const provider = document.getElementById('provider').value;
  const costField = document.getElementById('manual-cost-field');
  const costInput = document.getElementById('cost');

  if (provider === "custom" || provider === "other") {
    costField.style.display = "block";
    costInput.value = "";
    } 
    
    else {
    costField.style.display = "none";
    costInput.value = provider ? parseFloat(provider).toFixed(3) : "";
  }
}

function calcolaCosto() {

  const potenza = parseFloat(document.getElementById('power').value);
  const provider = document.getElementById('provider').value;
  const costInput = document.getElementById('cost');
  const costManual = parseFloat(costInput.value);
  const tempo = parseFloat(document.getElementById('time').value);

  if (isNaN(potenza) || isNaN(tempo) || (provider === "")) {
    document.getElementById('result').innerText = "Inserire i valori.";
    return;
  }

  let costoKWh;

  if (provider === "custom" || provider === "other") {
    if (isNaN(costManual)) {
      document.getElementById('result').innerText = "Inserire un costo valido.";
      return;
    }

    costoKWh = costManual;
    }
    
    else {
    costoKWh = parseFloat(provider);
    }

  const energiaKWh = (potenza / 1000) * tempo;
  const costoTotale = energiaKWh * costoKWh;

  document.getElementById('result').innerText =
    `Energia consumata: ${energiaKWh.toFixed(3)} kWh\nCosto totale: €${costoTotale.toFixed(2)}`;
}
