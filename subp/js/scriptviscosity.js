function calculateViscosity(event) {
    event.preventDefault();  // Prevent form from submitting
    const deltaP = parseFloat(document.getElementById('deltaP').value);
    const length = parseFloat(document.getElementById('length').value);
    const radius = parseFloat(document.getElementById('radius').value);
    const flowRate = parseFloat(document.getElementById('flowrate').value);

    if (isNaN(deltaP) || isNaN(length) || isNaN(radius) || isNaN(flowRate)) {
        alert("Please enter valid numbers in all fields.");
        return;
    }

    const viscosity = (deltaP * Math.PI * Math.pow(radius, 4)) / (8 * length * flowRate);
    document.getElementById('result').textContent = viscosity.toFixed(6);
}
