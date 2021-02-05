import React, {useState} from "react"
import Filter from './Filter'
import HogCard from './HogCard'


function HogList({hogs}) {

    const [showGreased, setShowGreased] = useState(false)
    const [sortBy, setSortBy] = useState("weight")

    const filteredHogs = hogs
        .filter(hog => {
            if (showGreased) {
                return hog.greased
            }else {
                return true
            }
        })
        .sort((hogA, hogB) => {
            if (sortBy === "weight") {
                return hogA.weight - hogB.weight
            }else {
                return hogA.name.localeCompare(hogB.name)
            }
        })

    const hogTiles = filteredHogs
        .map(hog => {
            return <HogCard key={hog.name} hog={hog} />
    })


    return (
        <div>
            <div>
                <Filter 
                    showGreased={showGreased} 
                    setShowGreased={setShowGreased}
                    sortyBy={sortBy}
                    setSortBy={setSortBy}
                />
            </div>
            <div className="ui grid container">
             {hogTiles}
            </div>
        </div>
    )
}

export default HogList;