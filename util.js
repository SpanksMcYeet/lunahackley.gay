export const random = (max, round) => round ? Math.floor(Math.random() * max) : Math.random() < max

export const getRandom = array => array[Math.floor(Math.random() * array.length)]

export const clipboardCopy = (popupElement, data) => {
    navigator.clipboard.writeText(data).then(() => {
        popup(popupElement)
    })
}

export const insert = (array, index, item) => [...array.slice(0, index), item, ...array.slice(index)]

export const posUpperCase = (string, chance) => random(chance) ? string.toUpperCase() : false

export const popup = element => document.getElementById(element).classList.toggle("show")
