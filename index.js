/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// add "click" and "keydown" Listeners & listen for too long or negative number
const convertBtn = document.getElementById("convert-btn")
convertBtn.addEventListener("click", convertAllAndRender);

const input = document.getElementById("input")
input.addEventListener("keydown", function(e) {
    if (e.code === "Enter") {
        convertAllAndRender()
    }
});

input.addEventListener("input", validate)

function validate() {
    const stringValue = input.value.toString()
    if (stringValue.length > 3) {
        input.value = stringValue.substring(0,3);
    }
    if (stringValue.includes('-')) {
        input.value = ''
    }
}


// conversion functions & display with plural or singular form of units
const metersToFeet = document.getElementById("meters-to-feet")
const litersToGallons = document.getElementById("liters-to-gallons")
const kilosToPounds = document.getElementById("kilos-to-pounds")

const feetMultiplier = 3.281
const gallonsMultiplier = 0.264
const poundsMultiplier = 2.204

function convertAllAndRender()  {
    const number = input.value
    metersToFeet.textContent = convert(number, "meters", "feet", feetMultiplier)
    litersToGallons.textContent = convert(number, "liters", "gallons", gallonsMultiplier)
    kilosToPounds.textContent = convert(number, "kilos", "pounds", poundsMultiplier)
    number = ""
}

function convert(number, unit1, unit2, conversionMultiplier) {
    const conversions = [
        formatUnits(unit1, number),
        formatUnits(unit2, Number(number*conversionMultiplier).toFixed(3)),
        formatUnits(unit2, number),
        formatUnits(unit1, Number(number/conversionMultiplier).toFixed(3)),
    ]
    return `${conversions[0]} = ${conversions[1]} | ${conversions[2]} = ${conversions[3]}`
}

function formatUnits(unit, quantity) {
    if (quantity === "1") {
        return `${quantity} ${units[unit][0]}`
    } else {
        return `${quantity} ${units[unit][1]}`
    }
}

const units = {
    meters: ["meter", "meters"],
    feet: ["foot", "feet"],
    liters: ["liter", "liters"],
    gallons: ["gallon", "gallons"],
    kilos: ["kilo", "kilos"],
    pounds: ["pound", "pounds"]
}