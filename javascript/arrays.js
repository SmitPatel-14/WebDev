let tea = [`masala`,`asami`,`gujrati`,`blacktea`,`green tea`]
// console.log(tea)
// // tea.push("newtea")
// // console.log(tea)
// console.log(tea.length)

// for(let i=0;i<tea.length;i++){
//     console.log(tea[i])
// }

function count(arr){
    let c = 0;
    for(let i = 0;i<arr.length;i++){
        if(arr[i]!="green tea"){
            c++
        }
    }
    return c;
}

function upper(arr){
    let newarr = []
    for (let i = 0 ;i<arr.length;i++){
        let a = arr[i].toUpperCase()
        newarr.push(a)
    }
    return newarr
}

function longest(arr){
    let longesttea = ""
    for (let i = 0 ; i<arr.length;i++){
        if(arr[i].length > longesttea.length){
            longesttea = arr[i]
        }
    }
    return longesttea
}


let teacount=count(tea)
console.log(teacount)

console.log(upper(tea))

console.log(longest(tea))

