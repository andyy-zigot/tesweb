function toggleMenu(){
    document.getElementById("sideMenu").classList.toggle("active");
}

function openPage(id){
    document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
    setTimeout(()=>{
        document.getElementById(id).classList.add("active");
        updateHeader(id);
    },80);
}

function startWeb(){
    document.getElementById("welcome").classList.remove("active");
    setTimeout(()=>{
        document.getElementById("intro").classList.add("active");
        updateHeader("intro");
        typeIntroText();
    },300);
}

function typeIntroText(){
    const text = "Selamat datang di PAYMENT AND PRODUCT.\nTempat terbaik untuk produk digital dan payment terpercaya.";
    const el = document.getElementById("introText");
    el.innerHTML = "";
    let i = 0;

    const t = setInterval(()=>{
        el.innerHTML += text[i] === "\n" ? "<br>" : text[i];
        i++;
        if(i >= text.length) clearInterval(t);
    }, 40);
}

function goToMenu(){
    openPage("portfolio");
}

function updateHeader(page){
    const h=document.getElementById("headerTitle");
    if(page==="portfolio") h.innerText="PORTOFOLIO";
    else if(page==="produk") h.innerText="MENU PRODUK";
    else if(page==="payment") h.innerText="MENU PAYMENT";
    else if(page==="intro") h.innerText="WELCOME";
    else h.innerText="PAYMENT AND PRODUCT";
}

function copyDana(){
    navigator.clipboard.writeText(document.getElementById("danaNumber").innerText);
    alert("Nomor DANA berhasil disalin");
}

function downloadQris(){
    const a=document.createElement("a");
    a.href=document.getElementById("qrisImg").src;
    a.download="QRIS.png";
    a.click();
}

let musicPlaying = false;
const music = document.getElementById("bgMusic");

function playMusic(){
    music.volume = 0.4; // 40%
    music.play();
    musicPlaying = true;
}

function toggleMusic(){
    if(musicPlaying){
        music.pause();
        musicPlaying = false;
    }else{
        music.play();
        musicPlaying = true;
    }
}
