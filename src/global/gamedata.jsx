// export const gameData = ( ) => {

var gameData = {
    days: 365 * 14,
    totalDays: 0,
    paused: false,
    realtime: 0.0,
    realtimeRun: 0.0,
    settings: {
        currencyNotation: 0,
        numberNotation: 1,
    },
    stats: {
        startDate: new Date(),
    }
}

const updateSpeed = 20
const baseLifespan = 365 * 70
const baseGameSpeed = 4
var tempData = {}

function canSimulate() {
    return !gameData.paused
}

// function isAlive() {
//     const condition = gameData.days < getLifespan() || getLifespan() == Infinity
//     const deathText = document.getElementById("deathText")
//     if (!condition) {
//         gameData.days = getLifespan()
//         deathText.classList.remove("hidden")
//     }
//     else {
//         deathText.classList.add("hidden")
//     }
//     return condition && !tempData.hasError
// }

function getLifespan() {
    const lifespan = baseLifespan

    return lifespan
}

function getGameSpeed() {
    if (!canSimulate())
        return 0

    return getUnpausedGameSpeed()
}

function getUnpausedGameSpeed() {
    // const timeWarpingSpeed = boostWarping

    const gameSpeed = baseGameSpeed

    return gameSpeed
}

export function togglePause() {
    gameData.paused = !gameData.paused
}

function applySpeed(value) {
    if (value == 0)
        return 0
    if (value == Infinity)
        return Infinity
    return value * getGameSpeed() / updateSpeed
}

function increaseDays() {
    gameData.days += applySpeed(1)
    gameData.totalDays += applySpeed(1)
}

function increaseRealtime() {
    if (!canSimulate())
        return;

    const realDiff = 1.0 / updateSpeed

    gameData.realtime += realDiff
    gameData.realtimeRun += realDiff
}

function update() {
    increaseRealtime()
    increaseDays()
}

update()
loadGameData()

let ticking = false;

var gameloop = setInterval(function() {
    if (ticking) return;
    ticking = true;
    update();

    ticking = false;
}, 1000 / updateSpeed)

var saveloop = setInterval(saveGameData, 3000)

function saveGameData() {
    localStorage.setItem("gameDataSave", JSON.stringify(gameData))
}

function loadGameData() {
    try {
        const gameDataSave = JSON.parse(localStorage.getItem("gameDataSave"))

        if (gameDataSave !== null) {
            // When the game contains completedTimes, add 1 Dark Matter and remove the instance.
            if ("completedTimes" in gameDataSave && gameDataSave["completedTimes"] > 0) {
                delete gameDataSave["completedTimes"]
                gameDataSave.dark_matter += 1
                console.log("Gave 1 free Dark Matter")
            }

            // remove milestoneData from gameData
            if ("milestoneData" in gameDataSave) {
                delete gameDataSave["milestoneData"]                
            }

            replaceSaveDict(gameData, gameDataSave)
            replaceSaveDict(gameData.settings, gameDataSave.settings)
            replaceSaveDict(gameData.stats, gameDataSave.stats)
            gameData = gameDataSave


            if (gameData.days == null)
                gameData.days = 365 * 14

            
        }
    } catch (error) {
        console.error(error)
        console.log(localStorage.getItem("gameDataSave"))
        alert("It looks like you tried to load a corrupted save... If this issue persists, feel free to contact the developers!")
    }

}

function replaceSaveDict(dict, saveDict) {
    for (const key in dict) {
        if (!(key in saveDict)) {
            saveDict[key] = dict[key]
        } else if (dict == gameData.requirements) {
            if (saveDict[key].type != tempData["requirements"][key].type) {
                saveDict[key] = tempData["requirements"][key]
            }
            else if (saveDict[key].querySelectors == undefined) {
                saveDict[key].querySelectors = tempData["requirements"][key].querySelectors
            }

        }
    }

    for (const key in saveDict) {
        if (!(key in dict)) {
            delete saveDict[key]
        }
    }
}

function resetGameData() {
    clearInterval(saveloop)
    clearInterval(gameloop)
    if (!confirm('Are you sure you want to reset the game?')) {
        gameloop = setInterval(update, 1000 / updateSpeed)
        saveloop = setInterval(saveGameData, 3000)
        return
    }
    localStorage.clear()
    location.reload()
}

function importGameData() {
    try {
        const importExportBox = document.getElementById("importExportBox")
        if (importExportBox.value == "") {
            alert("It looks like you tried to load an empty save... Paste save data into the box, then click \"Import Save\" again.")
            return
        }
        const data = JSON.parse(window.atob(importExportBox.value))
        clearInterval(gameloop)
        gameData = data
        saveGameData()
        location.reload()
    } catch (error) {
        alert("It looks like you tried to load a corrupted save... If this issue persists, feel free to contact the developers!")
    }
}

function exportGameData() {
    const importExportBox = document.getElementById("importExportBox")
    const saveString = window.btoa(JSON.stringify(gameData))
    importExportBox.value = saveString
    copyTextToClipboard(saveString)
    setTimeout(() => {
        if (importExportBox.value == saveString) {
            importExportBox.value = ""
        }
    }, 15 * 1000)
}

function copyTextToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        const tooltip = document.getElementById("exportTooltip");
        tooltip.innerHTML = "&nbsp;&nbsp;Save copied to clipboard!" ;
    }, err => {
        //console.error('Async: Could not copy text: ', err);
    })
}

/////////////////////////////////////////////////////////////////////////////////////////

function renderSettings() {
    // Stats
    const date = new Date(gameData.stats.startDate)
    document.getElementById("startDateDisplay").textContent = date.toLocaleDateString()

    const currentDate = new Date()
    document.getElementById("playedDaysDisplay").textContent = format((currentDate.getTime() - date.getTime()) / (1000 * 3600 * 24), 2)
    document.getElementById("playedRealTimeDisplay").textContent = formatTime(gameData.realtimeRun)

    document.getElementById("playedGameTimeDisplay").textContent = format(gameData.totalDays, 2)
}

function formatTime(sec_num, show_ms = false) {
    if (sec_num == null) {
        return "unknown"
    }
    if (sec_num < 0) {
        return '-' + formatTime(-sec_num, show_ms)
    }

    if (sec_num >= 31536000) {
        let years = Math.floor(sec_num / 31536000)
        if (years >= 1000) {
            return formatWhole(years) + ' years'
        }
        return years + 'y ' + formatTime(sec_num % 31536000, show_ms)
    }
    if (sec_num >= 86400) {
        let days = Math.floor(sec_num / 86400)
        return days + 'd ' + formatTime(sec_num % 86400, show_ms)
    }

    let hours = Math.floor(sec_num / 3600)
    let minutes = Math.floor((sec_num - (hours * 3600)) / 60)
    let seconds = Math.floor(sec_num - (hours * 3600) - (minutes * 60))
    let ms = Math.floor((sec_num - Math.floor(sec_num)) * 1000)
    let mss = (show_ms ? "." + ms.toString().padStart(3, "0") : "")

    if (hours < 10) hours = "0" + hours
    if (minutes < 10) minutes = "0" + minutes
    if (seconds < 10) seconds = "0" + seconds
    return (sec_num > 3600 ? hours + ':' : "") + minutes + ':' + seconds + mss
}

function formatWhole(number, decimals = 1) {
    if (number >= 1e3 || (number <= 0.99 && number != 0)) {
        return format(number, decimals)
    }
    return format(number, 0);
}

function formatAge(days) {
    const years = daysToYears(days)
    const day = getCurrentDay(days)
    if (years > 10000)
        return "Age " + format(years)
    else
        return "Age " + years + " Day " + day
}

function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
}

function yearsToDays(years) {
    return years * 365
}

function daysToYears(days) {
    return Math.floor(days / 365)
}

function getCurrentDay(days) {
    return Math.floor(days - daysToYears(days) * 365)
}

function getElementsByClass(className) {
    return document.getElementsByClassName(removeSpaces(className))
}

function removeSpaces(string) {
    return string.replace(/ /g, "")
}

function removeStrangeCharacters(string) {
    return string.replace(/'/g, "")
}


export default gameData