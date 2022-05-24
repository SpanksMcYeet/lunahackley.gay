import * as util from './util.js'
const fs = require('fs')

(async () => {
    const result = await fetch('./gifs.json')
    const GIFS = await result.json()
    document.getElementById('gifClickable').addEventListener('click', () => {
        let chosenGif = ''
        let chosenDomain = ''
        const gifTypes = [
            [GIFS.TENOR.GIFS, GIFS.TENOR.DOMAIN],
            [GIFS.DISCORD.GIFS, GIFS.DISCORD.DOMAIN],
            [GIFS.CDNDISCORD.GIFS, GIFS.CDNDISCORD.DOMAIN],
            [GIFS.CTENOR.GIFS, GIFS.CTENOR.DOMAIN],
            [GIFS.OTHER.GIFS, GIFS.OTHER.DOMAIN],
        ]
        let getGif = () => {
            let getRatio = gifs => {
                let ratios = []
                let total = gifs.reduce((a, b) => a + b)
                for (let i of gifs)
                    ratios.push(i / total)
                return ratios
            }
            let typeRatio = getRatio(gifTypes.map(a => a[0].length))
            let chance = Math.random()
            let possibility = 0
            for (let i = 0; i < typeRatio.length; i++) {
                possibility += typeRatio[i]
                if (chance < possibility) {
                    chosenGif = util.getRandom(gifTypes[i][0])
                    chosenDomain = gifTypes[i][1]
                    break
                }
            }
            document.getElementById('gif-button').innerHTML = `${chosenDomain}${chosenGif}`
            return `${chosenDomain}${chosenGif}`
        }
        util.clipboardCopy('gifPopup', getGif())
    })

    // Translate gifs that I have favorited on discord into seperate arrays depending upon their web domain
    /*
    const favoriteGifs = await fetch('./favoriteGifs.json')
    const cachedGifs = await favoriteGifs.json()
    let gifs = Object.keys(cachedGifs)
    let translate = domain => {
        let array = gifs.filter(a => a.includes(domain)).map(a => a.slice(domain.length))
        gifs = gifs.filter(a => !a.includes(domain))
        return array
    }
    let tenor = translate('https://tenor.com/view/')
    let mediadiscordapp = translate('https://media.discordapp.net/attachments/')
    let cdndiscordapp = translate('https://cdn.discordapp.com/attachments/')
    let ctenor = translate('https://c.tenor.com/')

    console.log(tenor, mediadiscordapp, cdndiscordapp, ctenor, gifs)
    */

    document.getElementById('beanerClickable').addEventListener('click', () => {
        let beaners = {
            chara: ['}', '{', '+', '`', '/', '\'', 'ç', ' '],
            words: ['hola', 'equipo', 'gato', 'pero', 'viva', 'pro', 'dejas', 'paja', 'puto', 'es mal', 'gordo', 'morir', 'madre', 'gg', 'xX', 'spain', 'portugal', '[GD]'],
            faces: [':v', ':V', '>:V', '>:v', ':c', ':C', 'XD'],
            slang: ['el crak', 'elcrak', 'elcrack', 'el crack', 'puta madre', 'muy gordo', 'soy tu mal', 'equipo pro', 'tengo pro', 'es amigo?', 'jajaja', 'xd', 'xxx', '    ', 'caca!!', 'gg', 'depressões'],
            names: ['ronaldo', 'ssundee', 'alfonso', 'alfredo', 'aberto', 'balzac', 'hugo', 'lola', 'mateo', 'marco', 'joaquin', 'leonardo', 'rafael', 'lorenzo', 'diego', 'antonio', 'cruz', 'francisco', 'carlos', 'matias', 'miguel', 'mario', 'pablo', 'carlo', 'rico', 'diablo', 'jose', 'carmen', 'nacho', 'paco', 'manuel', 'juan', 'matheo', 'sergio', 'eduardo', 'pedro', 'ricardo', 'gustavo', 'esteban', 'rodrigo', 'leon', 'felipe', 'jorge', 'felice', 'ernesto'],
        }
        let output = ''
        let sequential = (regex, chance, sequence, addOn, other) => sequence + (sequence.match(regex) && util.random(chance) ? addOn : util.getRandom(other))
        let specialChar = length => {
            let char = ''
            for (let i = 0; i < length; i++)
                char = sequential(/[}{+]$/g, 0.6, char, '+', beaners.chara)
            return char
        }
        let insertSpace = (string, chance, maxLength) => {
            let splitString = string.split('')
            if (util.random(chance))
                splitString.splice(util.random(splitString.length - 1, true) + 1, 0, ' '.repeat(util.random(maxLength, true)))
            return splitString.join('')
        }
        let ranUpperCase = (string, chance) => {
            let word = util.posUpperCase(string, 0.4)
            if (word) return word
            let splitString = string.split('')
            word = ''
            for (let letter of splitString)
                word += util.random(chance) ? letter.toUpperCase() : letter
            return word
        }
        let nameData = [
            [0.1, specialChar(2)],
            [0.3, ranUpperCase(util.getRandom(beaners.words), 0.4)],
            [0.8, insertSpace(util.random(0.2) ? ranUpperCase(util.getRandom(beaners.names), 0.4) : util.getRandom(beaners.names), 0.2, 5)],
            [0.4, ranUpperCase(util.getRandom(beaners.slang), 0.4)],
            [0.2, util.getRandom(beaners.faces)],
            [0.75, specialChar(7)],
        ]
        for (let [chance, part] of nameData) {
            if (util.random(chance))
                output += ` ${part}`
            console.log(output)
        }
        output = output.slice(1)
        util.clipboardCopy('beanPopup', output)
    })

    document.getElementById('arrastd').addEventListener('click', () => {
        window.open('https://arrasio-td.glitch.me/', '_blank')
    })
})()
