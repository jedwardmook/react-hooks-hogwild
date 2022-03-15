import { useState } from "react";
import HogTile from "./HogTile";

function HogContianer({hogs}){
    const [myHogs, setMyHogs] = useState(hogs)
    const [checkGreased, setCheckGreased] = useState(false)
    const [sortByName, setSortByName] = useState(false)

    function handleGreased(event){
        setCheckGreased(!checkGreased)
        
        if(event.target.checked){
        const filteredHogs = myHogs.filter( hog => {
            return hog.greased === true
        })
        setMyHogs(filteredHogs)
        }else
        setMyHogs(hogs)
    }

    function handleSort(event){
        setSortByName(!sortByName)

        if(event.target.checked){
          let sortedHogs = myHogs.slice().sort((a, b) => {
              if(a.name < b.name) return -1
              if(a.name > b.name) return 1
              return 0
          })
          setMyHogs(sortedHogs)
        }
        else
            setMyHogs(hogs)
    }

        
    return (
            <div className="indexWrapper">
                <div>Only greased  
                    <input
                    onClick={handleGreased}
                    type="checkbox"
                    id="filter">
                    </input>
                </div>
                <div>Sort by name  
                    <input
                    onClick={handleSort} 
                    type="checkbox"
                    id="sort"
                    ></input>
                </div>
                {myHogs.map(hog => <HogTile hog={hog}/>)}
            </div>
    )
};

export default HogContianer;
