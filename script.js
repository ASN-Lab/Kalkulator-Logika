// Variabel untuk menyimpan ekspresi
let display = document.getElementById('display');
let isResultDisplayed = false; // Menandai apakah hasil sudah ditampilkan

// Fungsi untuk menambahkan karakter ke layar kalkulator
function appendToDisplay(value) {
    if (isResultDisplayed) {
        // Jika hasil sudah ditampilkan, reset layar sebelum memasukkan input baru
        display.value = '';
        isResultDisplayed = false; // Reset status
    }
    display.value += value;
}

// Fungsi untuk menghapus layar kalkulator
function clearDisplay() {
    display.value = '';
    isResultDisplayed = false; // Reset status
}

// Fungsi untuk mengevaluasi ekspresi logika
function calculateResult() {
    try {
        // Deklarasikan nilai logika untuk variabel
        const variables = {
            F: false,
            T: true
        };

        // Ganti simbol logika dengan operator JavaScript
        let expression = display.value
            .replace(/∧/g, '&&') // AND
            .replace(/∨/g, '||') // OR
            .replace(/¬/g, '!') // NOT
            .replace(/⊕/g, '^') // XOR
            .replace(/→/g, '|| !') // IMPLIES (A → B = !A || B)
            .replace(/↔/g, '==='); // BIIMPLIKASI

        // Ganti variabel logika dengan nilai boolean
        for (const [key, value] of Object.entries(variables)) {
            expression = expression.replace(new RegExp(key, 'g'), value);
        }

        // Evaluasi ekspresi logika
        const result = eval(expression);

        // Tampilkan hasilnya
        display.value = result;
        isResultDisplayed = true; // Tandai bahwa hasil telah ditampilkan
    } catch (error) {
        // Tampilkan pesan kesalahan jika ada
        display.value = 'Operasi tidak valid';
        isResultDisplayed = true; // Tandai bahwa hasil telah ditampilkan
    }
}