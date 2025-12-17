/* TOGGLE MENU */
function toggleMenu(){
    document.getElementById("sideMenu").classList.toggle("active");
}

/* PINDAH PAGE + UPDATE HEADER */
function openPage(id){
    document.querySelectorAll(".page").forEach(p=>{
        p.classList.remove("active");
    });

    setTimeout(()=>{
        document.getElementById(id).classList.add("active");
        updateHeader(id);
    }, 80);
}

/* START -> INTRO */
function startWeb(){
    document.getElementById("welcome").classList.remove("active");

    setTimeout(()=>{
        document.getElementById("intro").classList.add("active");
        updateHeader("intro");
        typeIntroText();
    }, 300);
}

/* EFEK KETIK */
function typeIntroText(){
    const text = "Selamat datang di PAYMENT AND PRODUCT. Tempat terbaik untuk produk digital dan payment terpercaya.";
    const el = document.getElementById("introText");
    el.innerText = "";
    let i = 0;

    const typing = setInterval(()=>{
        el.innerText += text.charAt(i);
        i++;
        if(i >= text.length){
            clearInterval(typing);
        }
    }, 40);
}

/* LANJUTKAN */
function goToMenu(){
    document.querySelectorAll(".page").forEach(p=>{
        p.classList.remove("active");
    });

    setTimeout(()=>{
        document.getElementById("portfolio").classList.add("active");
        updateHeader("portfolio");
    }, 200);
}

/* HEADER UNTUK INTRO */
function updateHeader(page){
    const header = document.getElementById("headerTitle");

    switch(page){
        case "intro":
            header.innerText = "WELCOME";
            break;
        case "portfolio":
            header.innerText = "PORTOFOLIO";
            break;
        case "produk":
            header.innerText = "MENU PRODUK";
            break;
        case "payment":
            header.innerText = "MENU PAYMENT";
            break;
        default:
            header.innerText = "PAYMENT AND PRODUCT";
    }
}

/* COPY DANA */
function copyDana(){
    const dana = document.getElementById("danaNumber").innerText;
    navigator.clipboard.writeText(dana);
    alert("Nomor DANA berhasil disalin");
}

/* DOWNLOAD QRIS */
function downloadQris(){
    const img = document.getElementById("qrisImg").src;
    const a = document.createElement("a");
    a.href = img;
    a.download = "QRIS.png";
    a.click();
}
