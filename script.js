function openPage(id){
    document.querySelectorAll('.page').forEach(p=>{
        p.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
}

function showDana(id){
    document.getElementById("dana"+id).style.display="block";
    document.getElementById("qris"+id).style.display="none";
}

function showQris(id){
    document.getElementById("qris"+id).style.display="block";
    document.getElementById("dana"+id).style.display="none";
}

/* === NOMOR 3 TARO DI SINI === */
function copyDana(){
    const dana = document.getElementById("danaNumber").innerText;
    navigator.clipboard.writeText(dana).then(()=>{
        alert("Nomor DANA berhasil disalin!");
    });
}

function downloadQris(){
    const img = document.getElementById("qrisImg").src;
    const a = document.createElement("a");
    a.href = img;
    a.download = "QRIS-Payment.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

window.onload = () => {
    setTimeout(() => {
        document.getElementById("loading").style.display = "none";
    }, 4000); // 10 detik
};