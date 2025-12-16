document.addEventListener("DOMContentLoaded", () => {
    if(localStorage.getItem("welcomeDone") === "yes"){
        document.getElementById("welcome").classList.remove("active");
        document.getElementById("produk").classList.add("active");
        document.getElementById("menuNav").style.display = "flex";
    }
});

function startWeb(){
    localStorage.setItem("welcomeDone", "yes");

    document.getElementById("welcome").classList.remove("active");
    document.getElementById("produk").classList.add("active");
    document.getElementById("menuNav").style.display = "flex";
}

function openPage(id){
    document.querySelectorAll('.page').forEach(p=>{
        p.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
}

function copyDana(){
    const dana = document.getElementById("danaNumber").innerText;
    navigator.clipboard.writeText(dana);
    alert("Nomor DANA berhasil disalin!");
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
