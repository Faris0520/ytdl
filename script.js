async function download(){
    const link = document.getElementById('url').value;
    const hasil = document.getElementById('hasil');
    const respon = await fetch(`https://api.ryzendesu.vip/api/downloader/aiodown?url=${link}`);
    const data = await respon.json();

    if (link) {
        try{
            if (data.success = true){
                let first = data.quality[0]
                let sec = data.quality[1]
                let third = data.quality[2]
                hasil.innerHTML = `Link : <a href="${first.url}" download>${first.quality}</a> | <a href="${sec.url}" download>${sec.quality}</a> | <a href="${third.url}" download>${third.quality}</a>`;
            } else {
                hasil.innerHTML = 'Error ${data.message}';
            }
            
        } catch (error){
            hasil.innerHTML = `${data.error}<br>${data.details}`;
            console.log(error);
        }
    } else {
        hasil.innerHTML = 'Masukkan URL';
    }
}

function kirim(event){
    if (event.key === 'Enter'){
        download();
    }
}

const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});