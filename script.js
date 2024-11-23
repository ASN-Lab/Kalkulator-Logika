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

function calculateResult() {
    try {
        // Ganti simbol logika dengan operator JavaScript
        let expression = display.value
            .replace(/T/g, 'true')    // Ubah T menjadi true
            .replace(/F/g, 'false')   // Ubah F menjadi false
            .replace(/∧/g, '&&')      // AND
            .replace(/∨/g, '||')      // OR
            .replace(/¬/g, '!')       // NOT
            .replace(/⊕/g, '^')       // XOR (ditangani di bawah)
            .replace(/↔/g, '===');    // IFF (equivalence)

        // Tangani simbol implikasi (→)
        while (expression.includes('→')) {
            expression = expression.replace(
                /([a-zA-Z()!]+)\s*→\s*([a-zA-Z()!]+)/,
                '!($1) || ($2)'
            );
        }

        // Tangani XOR (karena JavaScript tidak memiliki operator langsung untuk XOR)
        expression = expression.replace(/true \^ true/g, 'false')
            .replace(/true \^ false/g, 'true')
            .replace(/false \^ true/g, 'true')
            .replace(/false \^ false/g, 'false');

        // Evaluasi ekspresi logika
        const result = eval(expression);

        // Tampilkan hasilnya
        display.value = result;
        isResultDisplayed = true; // Tandai bahwa hasil telah ditampilkan
    } catch (error) {
        // Tampilkan pesan kesalahan jika ada
        display.value = 'Error!';
        isResultDisplayed = true; // Tandai bahwa hasil telah ditampilkan
    }
}