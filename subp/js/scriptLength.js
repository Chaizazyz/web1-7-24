function calculateLength(event) {
    event.preventDefault();  // Prevent form from submitting
    const deltaP = parseFloat(document.getElementById('deltaP').value);
    const radius = parseFloat(document.getElementById('radius').value);
    const viscosity = parseFloat(document.getElementById('viscosity').value);
    const flowRate = parseFloat(document.getElementById('flowrate').value);  // Updated ID

    if (isNaN(deltaP) || isNaN(radius) || isNaN(viscosity) || isNaN(flowRate)) {
        alert("Please enter valid numbers in all fields.");
        return;
    }

    const length = (deltaP * Math.PI * Math.pow(radius, 4)) / (8 * viscosity * flowRate);
    document.getElementById('result').textContent = length.toFixed(6);
}
