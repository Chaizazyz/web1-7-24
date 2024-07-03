function calculateRadius(event) {
    event.preventDefault();  // Prevent form from submitting
    const deltaP = parseFloat(document.getElementById('deltaP').value);
    const length = parseFloat(document.getElementById('length').value);
    const viscosity = parseFloat(document.getElementById('viscosity').value);
    const flowRate = parseFloat(document.getElementById('flowrate').value);

    if (isNaN(deltaP) || isNaN(length) || isNaN(viscosity) || isNaN(flowRate)) {
        alert("Please enter valid numbers in all fields.");
        return;
    }

    const radius = Math.pow((length * 8 * viscosity * flowRate) / (deltaP * Math.PI), 0.25);
    document.getElementById('result').textContent = radius.toFixed(6);
}
