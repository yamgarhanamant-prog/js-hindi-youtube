const nums = [1,2,3,4,5,6,7]

//const myNums = nums.map((num)=>num+10)
const myNums = nums.map((num)=>{
    return num *2;
})

const newNums =nums
                .map((num)=>num +10)
                .filter((num)=>num%2 === 0)


console.log(myNums)


console.log(newNums)

const data = [
    {
        title: "bahubali", Director: "SS-Rajamouli", genre:"Emotion"
    },
    {
        title: "salaar", Director: "Prashanth-Neel", genre:"Warioir"
    },
    {
        title: "kgf", Director: "Prashanth-Neel", genre:"Ego"
    },
    {
        title: "RRR", Director: "SS-Rajamouli", genre:"Emotion"
    }
]

console.log(data.filter((obj)=>{
    return obj.Director === "SS-Rajamouli" && obj.genre === "Warioir"
}))

let score= [9,8,7,9,8,5,7]

let sort = score.reduce((Active, num)=>{
    return Active + num
}, 5)

console.log(sort)