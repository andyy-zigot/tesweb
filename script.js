function startWeb(){
    document.getElementById("welcome").classList.remove("active");

    setTimeout(()=>{
        document.getElementById("portfolio").classList.add("active");
    }, 300);
}
function toggleMenu(){
    document.getElementById("sideMenu").classList.toggle("active");
}

function openPage(id){
    document.querySelectorAll(".page").forEach(p=>{
        p.classList.remove("active");
    });

    setTimeout(()=>{
        document.getElementById(id).classList.add("active");
    }, 50);
}

function copyDana(){
    const dana = document.getElementById("danaNumber").innerText;
    navigator.clipboard.writeText(dana);
    alert("Nomor DANA berhasil disalin");
}

function downloadQris(){
    const img = document.getElementById("qrisImg").src;
    const a = document.createElement("a");
    a.href = img;
    a.download = "QRIS.png";
    a.click();
}
