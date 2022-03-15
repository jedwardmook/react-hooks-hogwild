function HogDetails({hog}){
    return (
        <>
        <div>Hog's specialty: {hog.specialty}</div>
        <div>{hog.greased ? "Greased" : "Not greased"}</div>
        <div>{hog.weight} lbs</div>
        <div>Highest medal: {hog["highest medal achieved"]}</div>
        </>
    )
}


export default HogDetails
