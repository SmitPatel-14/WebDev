// alert("linked");

let p1 = document.getElementById('p1');
console.log(p1)

p1.addEventListener('click',function(){
    p1.style.color = 'red';
    console.log("clicked")
})


//input
const input = document.getElementById('input');

input.addEventListener('input',(dets)=>{
    if(dets.data !==null){
        console.log(dets.data)
    }
})


//selection
const select = document.querySelector('#device');
const h3 = document.querySelector('h3');

select.addEventListener('change',(phone)=>{
    h3.innerText = `${phone.target.value} divece is selected`;
    
})


