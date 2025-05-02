const total = localStorage.getItem("checkoutTotal") || "0.00";
document.getElementById("checkoutTotal").innerText = total;

document.getElementById("checkoutForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const valor = parseFloat(total.replace(",", ".")).toFixed(2);

  const payload = gerarPixPayload({
    chave: "12340687969",
    nome: "Deborah Ferraz Pontes",
    cidade: "Peabiru",
    valor: valor,
    txid: "PIX123ABC"
  });

  const canvas = document.getElementById("qrcode");
  QRCode.toCanvas(canvas, payload, { width: 256 }, function (error) {
    if (error) {
      console.error("Erro ao gerar QR Code:", error);
    }
  });

  const container = document.getElementById("pixQrCodeContainer");
  const payloadText = document.createElement("p");
  payloadText.style.wordBreak = "break-all";
  payloadText.style.fontSize = "12px";
  payloadText.textContent = payload;
  container.appendChild(payloadText);
});

function gerarPixPayload({ chave, nome, cidade, valor, txid }) {
  function campo(id, valor) {
    const tamanho = valor.length.toString().padStart(2, '0');
    return id + tamanho + valor;
  }

  const gui = campo("00", "br.gov.bcb.pix");
  const chavePix = campo("01", chave);
  const merchantAccountInfo = campo("26", gui + chavePix);

  const payloadSemCRC =
    "000201" +
    "010212" + // pagamento instantâneo
    merchantAccountInfo +
    "52040000" +
    "5303986" +
    campo("54", valor) +
    "5802BR" +
    campo("59", nome) +
    campo("60", cidade) +
    campo("62", campo("05", txid)) +
    "6304"; // CRC16 placeholder

  const crc = crc16(payloadSemCRC);
  return payloadSemCRC + crc;
}

function crc16(str) {
  let crc = 0xFFFF;
  for (let i = 0; i < str.length; i++) {
    crc ^= str.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      crc = (crc & 0x8000) ? (crc << 1) ^ 0x1021 : crc << 1;
    }
  }
  crc &= 0xFFFF;
  return crc.toString(16).toUpperCase().padStart(4, "0");
}
