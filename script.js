// Variabel untuk menyimpan ekspresi
const display = document.getElementById('display');
let isResultDisplayed = false; // Menandai apakah hasil sudah ditampilkan

// Fungsi untuk menambahkan karakter ke layar kalkulator
function appendToDisplay(value) {
    if (isResultDisplayed) {
        resetDisplay();
    }
    display.value += value;
}

// Fungsi untuk menghapus layar kalkulator
function clearDisplay() {
    resetDisplay();
}

// Fungsi untuk mereset layar kalkulator
function resetDisplay() {
    display.value = '';
    isResultDisplayed = false; // Reset status
}

// Fungsi untuk mengevaluasi ekspresi logika
function calculateResult() {
    try {
        const variables = { F: false, T: true };

        // Ganti simbol logika dengan operator JavaScript
        let expression = display.value
            .replace(/∧/g, '&&') // AND
            .replace(/∨/g, '||') // OR
            .replace(/¬/g, '!') // NOT
            .replace(/⊕/g, '^') // XOR
            .replace(/→/g, '|| !') // IMPLIES
            .replace(/↔/g, '==='); // BIIMPLIKASI

        // Ganti variabel logika dengan nilai boolean
        expression = expression.replace(/[FT]/g, match => variables[match]);

        // Evaluasi ekspresi logika
        display.value = eval(expression);
        isResultDisplayed = true; // Tandai bahwa hasil telah ditampilkan
    } catch (error) {
        display.value = 'Operasi tidak valid';
        isResultDisplayed = true; // Tandai bahwa hasil telah ditampilkan
    }
}