function hitung() {
    const operand1 = document.getElementById("operand1").value === "true";
    const operand2 = document.getElementById("operand2").value === "true";
    const operasi = document.getElementById("operation").value;
    let hasil;

    switch (operasi) {
        case "AND":
            hasil = operand1 && operand2;
            break;
        case "OR":
            hasil = operand1 || operand2;
            break;
        case "NOT":
            hasil = !operand1; // hanya operand1 untuk NOT
            break;
        case "IMPLIKASI":
            hasil = !operand1 || operand2;
            break;
        case "BIIMPLIKASI":
            hasil = operand1 == operand2;
            break;
        case "EXCLUSIVE OR":
            hasil = operand1 !== operand2;
            break;
        default:
            hasil = "Operasi tidak dikenali";
    }

    document.getElementById("result").innerText = hasil;
}