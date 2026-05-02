function generateQR() {
    const qrContainer = document.getElementById("qrContainer");

    let randomText = Math.random().toString(36).slice(2, 10);

    if (!window.QRCode) {
        alert("QR Code library yuklanmadi!");
        return;
    }
    new QRCode(qrContainer, {
        text: randomText,
        width: 160,
        height: 160,
        colorDark: "#fff",
        colorLight: "#2c7dfa",
        correctionLevel: QRCode.CorrectLevel.H,
    });
}

generateQR();
