function calculateflowrate(event) {
    event.preventDefault();  // Prevent form from submitting
    const deltaP = parseFloat(document.getElementById('deltaP').value);
    const radius = parseFloat(document.getElementById('radius').value);
    const viscosity = parseFloat(document.getElementById('viscosity').value);
    const length = parseFloat(document.getElementById('length').value);  // Updated ID

    if (isNaN(deltaP) || isNaN(radius) || isNaN(viscosity) || isNaN(length)) {
        alert("Please enter valid numbers in all fields.");
        return;
    }

    const flowrate = (deltaP * Math.PI * Math.pow(radius, 4)) / (8 * viscosity * length);
    document.getElementById('result').textContent = flowrate.toFixed(6);
}