import React, { useState } from "react"

import augustus_gloop from "../assets/augustus_gloop.jpg";
import babe from "../assets/babe.jpg";
import bailey from "../assets/bailey.jpg";
import cherub from "../assets/cherub.jpg";
import galaxy_note from "../assets/galaxy_note.jpg";
import leggo_my_eggo from "../assets/leggo_my_eggo.jpg";
import peppa from "../assets/peppa.jpg";
import piggy_smalls from "../assets/piggy_smalls.jpg";
import piglet from "../assets/piglet.jpg";
import porkchop from "../assets/porkchop.jpg";
import trouble from "../assets/trouble.jpg";
import truffle_shuffle from "../assets/truffle_shuffle.jpg";

const images = {
    "Augustus Gloop": augustus_gloop,
    Babe: babe,
    Bailey: bailey,
    Cherub: cherub,
    "Galaxy Note": galaxy_note,
    "Leggo My Eggo": leggo_my_eggo,
    Peppa: peppa,
    "Piggy smalls": piggy_smalls,
    Piglet: piglet,
    Porkchop: porkchop,
    Trouble: trouble,
    "Truffle Shuffle": truffle_shuffle,
  };

function HogCard({hog}) {

    const {name, specialty, greased, weight, "highest medal achieved": medal } = hog

    const [showDetails, setShowDetails] = useState(false)

    function handleDetailClick(){
        setShowDetails(showDetails => !showDetails)
    }

    return (
        <div className="ui four wide column">
            <div class="ui card">
                <h2>{name}</h2>
                <img src={images[name]} alt={name} onClick={handleDetailClick} />
                {/* <button onClick={handleDetailClick}>Show Details for {name}</button> */}
                {showDetails ? 
                    (<div> 
                        <p>Weight: {weight} </p> 
                        <p>Specialty: {specialty} </p>
                        <p>Greased: {greased ? "GreaZy" : "Non-Greazy"} </p>
                        <p>Medal: {medal} </p>
                    </div>
                ) : null }
            </div>
        </div>
  );
}





export default HogCard;