function calculateDeltaP(event) {
    event.preventDefault();  // Prevent form from submitting
    const length = parseFloat(document.getElementById('length').value);
    const radius = parseFloat(document.getElementById('radius').value);
    const viscosity = parseFloat(document.getElementById('viscosity').value);
    const flowRate = parseFloat(document.getElementById('flowrate').value);

    if (isNaN(length) || isNaN(radius) || isNaN(viscosity) || isNaN(flowRate)) {
        alert("Please enter valid numbers in all fields.");
        return;
    }

    const deltaP = (length * 8 * viscosity * flowRate) / (Math.PI * Math.pow(radius, 4));
    document.getElementById('result').textContent = deltaP.toFixed(6);
}
