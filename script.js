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

.welcome-box{
    max-width:400px;
    margin:80px auto;
    padding:25px;
    text-align:center;
    border-radius:18px;
    background:linear-gradient(145deg,#140028,#1f003d);
}

.welcome-foto{
    width:130px;
    height:130px;
    border-radius:50%;
    object-fit:cover;
    margin:15px 0;
    box-shadow:0 0 20px #ff00cc;
}

.brand{
    color:#ff4dff;
}

.btn-start{
    background:linear-gradient(45deg,#00ffea,#00b3a4);
    margin-top:15px;
    font-size:16px;
        }
