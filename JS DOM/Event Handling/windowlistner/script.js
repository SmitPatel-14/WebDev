// alert("hi")

let h3 = document.querySelector('h1');

window.addEventListener('keydown',(data)=>{
    if(data.key === " "){
        h3.innerText="SPC";
    }
    else{
    h3.innerText = data.key;
    }
})