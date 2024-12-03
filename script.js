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

        // Tangani XOR
        expression = handleXOR(expression);

        // Evaluasi ekspresi logika
        const result = eval(expression);

        // Tampilkan hasilnya
        display.value = result ? 'true' : 'false'; // Pastikan menampilkan 'true' atau 'false'
        isResultDisplayed = true; // Tandai bahwa hasil telah ditampilkan
    } catch (error) {
        // Jika terjadi kesalahan, tampilkan pesan kesalahan
        display.style.fontWeight = 'bold';
        display.value = 'Error!';
        isResultDisplayed = true; // Tandai bahwa hasil telah ditampilkan
    }
}

// Fungsi untuk menangani XOR dengan benar
function handleXOR(expression) {
    // Gunakan regular expression untuk mengganti operator XOR dengan implementasi XOR boolean
    return expression.replace(/(true|false)\s*\^(\s*(true|false))/g, (match, p1, p2, p3) => {
        const val1 = p1 === 'true';  // Ubah 'true' menjadi boolean true
        const val2 = p3 === 'true';  // Ubah 'false' menjadi boolean false

        // XOR logic: (A ^ B) = (A OR B) AND NOT (A AND B)
        const xorResult = (val1 || val2) && !(val1 && val2);
        
        // Kembalikan hasil XOR sebagai 'true' atau 'false'
        return xorResult ? 'true' : 'false';
    });
}
