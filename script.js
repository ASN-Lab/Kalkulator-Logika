function hitung() {
    // Ambil nilai dari operand1 dan operand2
    const operand1 = document.getElementById('operand1').value;
    const operand2 = document.getElementById('operand2').value;
    const operation = document.getElementById('operation').value;

    let result;

    // Logika untuk operasi
    if (operation === 'AND') {
        result = (operand1 === 'true' && operand2 === 'true') ? 'True' : 'False';
    } else if (operation === 'OR') {
        result = (operand1 === 'true' || operand2 === 'true') ? 'True' : 'False';
    } else if (operation === 'NOT') {
        result = (operand1 === 'true') ? 'False' : 'True';
    } else if (operation === 'IMPLIKASI') {
        result = (operand1 === 'true' && operand2 === 'false') ? 'False' : 'True';
    } else if (operation === 'BIIMPLIKASI') {
        result = (operand1 === operand2) ? 'True' : 'False';
    } else if (operation === 'EXCLUSIVE OR') {
        result = (operand1 !== operand2) ? 'True' : 'False';
    }

    document.getElementById('result').innerText = result;
}

document.getElementById('operation').addEventListener('change', function() {
    const operand2 = document.getElementById('operand2');
    const labelOperand2 = document.getElementById('labelOperand2');

    if (this.value === 'NOT') {
        operand2.style.display = 'none'; // Sembunyikan operand2
        labelOperand2.style.display = 'none'; // Sembunyikan label operand2
    } else {
        operand2.style.display = 'block'; // Tampilkan operand2
        labelOperand2.style.display = 'block'; // Tampilkan label operand2
    }
});

document.querySelectorAll('select').forEach(select => {
    select.addEventListener('focus', () => {
        select.style.backgroundColor = '#ffaf59'; // Ganti warna latar belakang saat fokus
        select.style.color = 'black'; // Ganti warna teks saat fokus
    });

    select.addEventListener('blur', () => {
        select.style.backgroundColor = '#FFDBB5'; // Kembali ke warna asli saat tidak fokus
        select.style.color = '#603F26'; // Kembali ke warna asli saat tidak fokus
    });
});