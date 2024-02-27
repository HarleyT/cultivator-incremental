import { useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";

function Planet() {
    const [planets, setPlanets] = useState([
        { id: 1, name: "Earth" },
        { id: 2, name: "Mars" },
        { id: 3, name: "Venus" },
        { id: 4, name: "Planet X" },
    ])
    const [selectedPlanetId, setSelectedPlanetId] = useState()
    const selectedPlanet = useMemo(() => {
        return planets.find(planet => planet.id === selectedPlanetId)
    }, [planets, selectedPlanetId])

    useEffect(() => {
        selectedPlanet(1)
        updatePlanet(1, "Earth")
    }, [])

    function selectPlanet(id) {
        setSelectedPlanetId(id)
    }

    function updatePlanet(id, name) {
        setPlanets(prevPlanets => {
            const newPlanets = [...prevPlanets]
            const planet = newPlanets.find(planet => planet.id === id)
            planet.name = name
            return newPlanets
        })
    }

    return planets.map(planet => planet.name).join(", ")
}

export default Planet;