const tea = {
    name:"lemon tea",
    type:"Green",
    caffin : "low",
}

console.log(tea.name)
console.log(tea["type"])

// add new property
tea.origin = "china"

tea.caffin = "medium"

delete tea.type

console.log("origin" in tea)

// use of forin loop
for(let key in tea){
    console.log(key + ": "+tea[key])
}

// nested objects

const teas= {
    greentea:{
        type : "green",
        caffin: "low"
    },
    blacktea:{
        type:"black",
        caffin:"medium"
    }
}

// copy of tea object

