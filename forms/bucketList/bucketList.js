let bucketList = []
let doneList = false
let seeAdd = ""

while (doneList == false){
    seeAdd = prompt("Do you want to add to your bucket list or see it?")
    if (seeAdd == "Add"){
        doneList = false
        newItem = prompt("Enter the next thing you want on your bucket list:")
		bucketList.push(newItem)
    } else
        doneList = true
}

let run = 0

while (bucketList.length !== run) {
    let name = bucketList[run]
    console.log(`${name}`)
    run++
}