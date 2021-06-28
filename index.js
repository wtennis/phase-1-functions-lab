function distanceFromHqInBlocks(street) {
    if (street >= 42)
    return (street - 42)
    else return (42 - street)
}

function distanceFromHqInFeet(street) {
    if (street >= 42)
    return (street - 42)*264
    else return (42 - street)*264
}

function distanceTravelledInFeet(start, destination) {
    if (start >= destination)
    return (start - destination)*264
    else return (destination - start)*264
}



function calculatesFarePrice(start, destination) {
    const absoluteBlockDistance = (Math.abs(start-destination))
    console.log(absoluteBlockDistance)
    const absoluteFeetDistance = (absoluteBlockDistance*264)
    console.log(absoluteFeetDistance)
    if (absoluteFeetDistance < 400){
    console.log("free ride distance!")
    return 0
   } else if (400 <= absoluteFeetDistance && absoluteFeetDistance <=2000) {
    console.log("2 cent/foot distance!")
    return (absoluteFeetDistance-400)*.02 
    } else if (2000 < absoluteFeetDistance && absoluteFeetDistance <=2500) {
    return 25
    } else return "cannot travel that far"
}