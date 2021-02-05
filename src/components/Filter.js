import React from "react"

function Filter({showGreased, setShowGreased, sortBy, setSortBy}) {

    return (
        <div style={{ margin: "20px"}}>
            <label>
                Show Greased Hogs
                <input type="checkbox" checked={showGreased} onChange={(e) => setShowGreased(e.target.checked)}></input>
            </label>
            <select value={sortBy} onChange={((e)=>setSortBy(e.target.value) )}>
                <option value="name">Sort By Name</option>
                <option value="weight">Sort By Weight</option>
            </select>
        </div>
    )
}


export default Filter;