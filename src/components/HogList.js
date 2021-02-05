import React, {useState} from "react"
import Filter from './Filter'
import HogCard from './HogCard'
import HogForm from './HogForm'


function HogList({hogs}) {

    const [showGreased, setShowGreased] = useState(false)
    const [sortBy, setSortBy] = useState("weight")

    const [hogState, setHogState] = useState(hogs)


    function handleAddHog(newHog){
        setHogState([newHog, ... hogState])
    }



    const filteredHogs = hogState
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
                <HogForm onAddHog={handleAddHog}/>
            </div>
            <div className="ui grid container">
             {hogTiles}
            </div>
        </div>
    )
}

export default HogList;