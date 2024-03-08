import { useState } from "react";

const Universe = () => {
    const [universe, setUniverse] = useState("");
    const [system, setSystem] = useState("");
    const [planet, setPlanet] = useState("");
    const [region, setRegion] = useState("");

    const handleUniverseChange = (e) => {
        setUniverse(e.target.value);
        setSystem("");
        setPlanet("");
        setRegion("");
    };

    const handleSystemChange = (e) => {
        setSystem(e.target.value);
        setPlanet("");
        setRegion("");
    };

    const handlePlanetChange = (e) => {
        setPlanet(e.target.value);
        setRegion("");
    };

    const handleRegionChange = (e) => {
        setRegion(e.target.value);
    };

    return (
        <div>
            <select onChange={handleUniverseChange} value={universe}>
                <option value="">Select Universe</option>
                <option value="Universe Alpha">Universe Alpha</option>
                <option value="Universe Beta">Universe Beta</option>
                <option value="Universe Omega">Universe Omega</option>
            </select>
            <select value={system} disabled={universe === ""} onChange={handleSystemChange}>
                <option value="">Select System</option>
                {universe === "Universe Alpha" && (
                    <><option key="System A-1">System A-1</option><option key="System A-2">System A-2</option><option key="System A-3">System A-3</option></>
                )}
                {universe === "Universe Beta" && (
                    <><option key="System B-1">System B-1</option><option key="System B-2">System B-2</option><option key="System B-3">System B-3</option></>
                )}
                {universe === "Universe Omega" && (
                    <><option key="System O-1">System O-1</option><option key="System O-2">System O-2</option><option key="System O-3">System O-3</option></>
                )}
            </select>
            <select value={planet} disabled={system === ""} onChange={handlePlanetChange}>
                <option value="">Select Planet</option>
                {system === "System A-1" && (
                    <><option key="Planet A-1A">Planet A-1A</option><option key="Planet A-1B">Planet A-1B</option><option key="Planet A-1C">Planet A-1C</option></>
                )}
                {system === "System A-2" && (
                    <><option key="Planet A-2A">Planet A-2A</option><option key="Planet A-2B">Planet A-2B</option><option key="Planet A-2C">Planet A-2C</option></>
                )}
                {system === "System A-3" && (
                    <><option key="Planet A-3A">Planet A-3A</option><option key="Planet A-3B">Planet A-3B</option><option key="Planet A-3C">Planet A-3C</option></>
                )}
                {system === "System B-1" && (
                    <><option key="Planet B-1A">Planet B-1A</option><option key="Planet B-1B">Planet B-1B</option><option key="Planet B-1C">Planet B-1C</option></>
                )}
                {system === "System B-2" && (
                    <><option key="Planet B-2A">Planet B-2A</option><option key="Planet B-2B">Planet B-2B</option><option key="Planet B-2C">Planet B-2C</option></>
                )}
                {system === "System B-3" && (
                    <><option key="Planet B-3A">Planet B-3A</option><option key="Planet B-3B">Planet B-3B</option><option key="Planet B-3C">Planet B-3C</option></>
                )}
                {system === "System O-1" && (
                    <><option key="Planet O-1A">Planet O-1A</option><option key="Planet O-1B">Planet O-1B</option><option key="Planet O-1C">Planet O-1C</option></>
                )}
                {system === "System O-2" && (
                    <><option key="Planet O-2A">Planet O-2A</option><option key="Planet O-2B">Planet O-2B</option><option key="Planet O-2C">Planet O-2C</option></>
                )}
                {system === "System O-3" && (
                    <><option key="Planet O-3A">Planet A-3A</option><option key="Planet O-3B">Planet O-3B</option><option key="Planet O-3C">Planet O-3C</option></>
                )}
            </select>
            <select value={region} disabled={planet === ""} onChange={handleRegionChange}>
                <option value="">Select Region</option>
                {planet === "Planet A-1A" && (
                    <><option key="Region 1">Region 1</option><option key="Region 2">Region 2</option><option key="Region 3">Region 3</option></>
                )}
                {planet === "Planet A-1B" && (
                    <><option key="Region 1">Region 1</option><option key="Region 2">Region 2</option><option key="Region 3">Region 3</option></>
                )}
                {planet === "Planet A-1C" && (
                    <><option key="Region 1">Region 1</option><option key="Region 2">Region 2</option><option key="Region 3">Region 3</option></>
                )}
                {planet === "Planet A-2A" && (
                    <><option key="Region 1">Region 1</option><option key="Region 2">Region 2</option><option key="Region 3">Region 3</option></>
                )}
                {planet === "Planet A-2B" && (
                    <><option key="Region 1">Region 1</option><option key="Region 2">Region 2</option><option key="Region 3">Region 3</option></>
                )}
                {planet === "Planet A-2C" && (
                    <><option key="Region 1">Region 1</option><option key="Region 2">Region 2</option><option key="Region 3">Region 3</option></>
                )}
                {planet === "Planet A-3A" && (
                    <><option key="Region 1">Region 1</option><option key="Region 2">Region 2</option><option key="Region 3">Region 3</option></>
                )}
                {planet === "Planet A-3B" && (
                    <><option key="Region 1">Region 1</option><option key="Region 2">Region 2</option><option key="Region 3">Region 3</option></>
                )}
                {planet === "Planet A-3C" && (
                    <><option key="Region 1">Region 1</option><option key="Region 2">Region 2</option><option key="Region 3">Region 3</option></>
                )}
                {planet === "Planet B-1A" && (
                    <><option key="Region 1">Region 1</option><option key="Region 2">Region 2</option><option key="Region 3">Region 3</option></>
                )}
                {planet === "Planet B-1B" && (
                    <><option key="Region 1">Region 1</option><option key="Region 2">Region 2</option><option key="Region 3">Region 3</option></>
                )}
                {planet === "Planet B-1C" && (
                    <><option key="Region 1">Region 1</option><option key="Region 2">Region 2</option><option key="Region 3">Region 3</option></>
                )}
                {planet === "Planet B-2A" && (
                    <><option key="Region 1">Region 1</option><option key="Region 2">Region 2</option><option key="Region 3">Region 3</option></>
                )}
                {planet === "Planet B-2B" && (
                    <><option key="Region 1">Region 1</option><option key="Region 2">Region 2</option><option key="Region 3">Region 3</option></>
                )}
                {planet === "Planet B-2C" && (
                    <><option key="Region 1">Region 1</option><option key="Region 2">Region 2</option><option key="Region 3">Region 3</option></>
                )}
                {planet === "Planet B-3A" && (
                    <><option key="Region 1">Region 1</option><option key="Region 2">Region 2</option><option key="Region 3">Region 3</option></>
                )}
                {planet === "Planet B-3B" && (
                    <><option key="Region 1">Region 1</option><option key="Region 2">Region 2</option><option key="Region 3">Region 3</option></>
                )}
                {planet === "Planet B-3C" && (
                    <><option key="Region 1">Region 1</option><option key="Region 2">Region 2</option><option key="Region 3">Region 3</option></>
                )}
                {planet === "Planet O-1A" && (
                    <><option key="Region 1">Region 1</option><option key="Region 2">Region 2</option><option key="Region 3">Region 3</option></>
                )}
                {planet === "Planet O-1B" && (
                    <><option key="Region 1">Region 1</option><option key="Region 2">Region 2</option><option key="Region 3">Region 3</option></>
                )}
                {planet === "Planet O-1C" && (
                    <><option key="Region 1">Region 1</option><option key="Region 2">Region 2</option><option key="Region 3">Region 3</option></>
                )}
                {planet === "Planet O-2A" && (
                    <><option key="Region 1">Region 1</option><option key="Region 2">Region 2</option><option key="Region 3">Region 3</option></>
                )}
                {planet === "Planet O-2B" && (
                    <><option key="Region 1">Region 1</option><option key="Region 2">Region 2</option><option key="Region 3">Region 3</option></>
                )}
                {planet === "Planet O-2C" && (
                    <><option key="Region 1">Region 1</option><option key="Region 2">Region 2</option><option key="Region 3">Region 3</option></>
                )}
                {planet === "Planet O-3A" && (
                    <><option key="Region 1">Region 1</option><option key="Region 2">Region 2</option><option key="Region 3">Region 3</option></>
                )}
                {planet === "Planet O-3B" && (
                    <><option key="Region 1">Region 1</option><option key="Region 2">Region 2</option><option key="Region 3">Region 3</option></>
                )}
                {planet === "Planet O-3C" && (
                    <><option key="Region 1">Region 1</option><option key="Region 2">Region 2</option><option key="Region 3">Region 3</option></>
                )}
            </select>
        </div>
    )
}

export default Universe