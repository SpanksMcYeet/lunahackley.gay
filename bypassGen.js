
let n = ''
let nA = {
    n: ['🅽', 'Ⓝ', 'ⓝ', '𐌽', 'Ṇ', 'η', 'Ｎ', 'ｎ', 'ᑎ', 'Ň', 'ภ', 'η', 'ή', 'Ň', 'Ɲ', '𝔫', '𝓷', '𝓃', '𝓝', '𝐍', '𝐧', 'ℕ', '𝕟', 'ᶰ', 'n', 'ո', 'ռ', 'ｎ', '𝐧', '𝑛', '𝒏', '𝓃', '𝓷', '𝔫', '𝕟', '𝖓', '𝗇', '𝗻', '𝘯', '𝙣', '𝚗', 'N', 'ɴ', 'Ν', 'ℕ', 'Ⲛ', 'ꓠ', 'Ｎ'],
    i: ['I', 'i', '!', 'l', '1', '🅸', 'Ⓘ', '𐌆', 'ḭ', 'ι', 'Ｉ', 'ｉ', 'Ꭵ', 'Ɨ', 'เ', 'ι', 'ί', 'Į', '𝔦', '𝓲', '𝒾', '𝓘', '𝐈', '𝐢', '𝕀', '𝕚', 'ᶤ', '!', '|', 'ì', 'į', 'ī', 'í', 'ï', 'î', 'Ì', 'Į', 'Ī', 'Í', 'Ï', 'Î'],
    g: ['G', 'g', '🅶', 'Ⓖ', 'ⓖ', '𐌾', 'Ḡ', 'Ｇ', 'ｇ', 'Ǥ', 'Ꮆ', 'ﻮ', 'g', 'ģ', 'Ğ', 'Ɠ', '𝔤', '𝓰', '𝑔', '𝓖', '𝐆', '𝐠', '𝔾', '𝕘', 'ᵍ', 'ƃ','G','ɢ','Ԍ','ԍ','Ꮐ','Ᏻ','ᏻ','ꓖ','ꮐ','Ｇ','𝐆','𝐺','𝑮','𝒢','𝓖','𝔊','𝔾','𝕲','𝖦','𝗚','𝘎','𝙂','𝙶','g','ƍ','ɡ','ց','ᶃ','ℊ','ｇ','𝐠','𝑔','𝒈','𝓰','𝔤','𝕘','𝖌','𝗀','𝗴','𝘨','𝙜','𝚐'],
    e: ['🅴', 'Ⓔ', 'ⓔ', '𐌄', 'Σ', 'є', 'Ｅ', 'ｅ', 'ᗴ', 'є', '€', 'ε', 'έ', 'Ẹ', 'Ę', '𝔢', '𝒆', '𝑒', '𝓔', '𝐄', '𝔼', '𝐞', '𝕖', 'ᵉ', 'ǝ', 'E', 'Ε', 'Е', 'Ꭼ', 'ᴇ', 'ℰ', '⋿', 'ⴹ', 'ꓰ', 'ꭼ', 'Ｅ', '𐊆', 'e', 'е', 'ҽ', '℮', 'ℯ', 'ⅇ', 'ꬲ', 'ｅ', '𝐞', '𝑒', '𝒆', '𝓮', '𝔢', '𝕖', '𝖊', '𝖾', '𝗲', '𝘦', '𝙚', '𝚎'],
    r: ['🆁', 'Ⓡ', 'ⓡ', '𐍂', 'Ṝ', 'я', 'Ｒ', 'ｒ', 'ᖇ', 'Ř', 'г', 'я', 'ŕ', 'Ř', 'Ɍ', '𝔯', '𝓻', '𝓇', '𝓡', '𝐑', '𝐫', 'ℝ', '𝕣', 'ʳ', 'ɹ', 'R', 'Ʀ', 'ʀ', 'Ꭱ', 'Ꮢ', 'ᖇ', 'ᚱ', 'ℛ', 'ℜ', 'ℝ', 'ꓣ', 'ꭱ', 'ꮢ', 'Ｒ', '𐒴', 'r', 'г', 'ᴦ', 'ⲅ', 'ꭇ', 'ꭈ', 'ꮁ', 'ｒ', '𝐫', '𝑟', '𝒓', '𝓇', '𝓻', '𝔯', '𝕣', '𝖗', '𝗋', '𝗿', '𝘳', '𝙧', '𝚛']
}
let b = ''
let bA = {
    b: ['🅱', 'Ⓑ', 'ⓑ', '𐌁', 'β', 'в', 'Ｂ', 'ｂ', 'ᗷ', 'β', '๒', 'в', 'в', 'β', 'Ɓ', '𝔟', '𝓫', '𝒷', '𝓑', '𝐁', '𝐛', '𝔹', '𝕓', 'ᵇ', 'B', 'ʙ', 'Β', 'В', 'в', 'Ᏼ', 'ᏼ', 'ᗷ', 'ᛒ', 'ℬ', 'ꓐ', 'Ꞵ', 'Ｂ', '𐊂', '𐊡', '𐌁', '𝐁', '𝐵', '𝑩', '𝓑', '𝔅', '𝔹', '𝕭', '𝖡', '𝗕', '𝘉', '𝘽', '𝙱', '𝚩', '𝛣', '𝜝', '𝝗', '𝞑', 'b', 'Ƅ', 'Ь', 'Ꮟ', 'ᑲ', 'ᖯ', 'ｂ', '𝐛', '𝑏', '𝒃', '𝒷', '𝓫', '𝔟', '𝕓', '𝖇', '𝖻', '𝗯', '𝘣', '𝙗', '𝚋'],
    e: ['🅴', 'Ⓔ', 'ⓔ', '𐌄', 'Σ', 'є', 'Ｅ', 'ｅ', 'ᗴ', 'є', '€', 'ε', 'έ', 'Ẹ', 'Ę', '𝔢', '𝒆', '𝑒', '𝓔', '𝐄', '𝔼', '𝐞', '𝕖', 'ᵉ', 'ǝ', 'E', 'Ε', 'Е', 'Ꭼ', 'ᴇ', 'ℰ', '⋿', 'ⴹ', 'ꓰ', 'ꭼ', 'Ｅ', '𐊆', 'e', 'е', 'ҽ', '℮', 'ℯ', 'ⅇ', 'ꬲ', 'ｅ', '𝐞', '𝑒', '𝒆', '𝓮', '𝔢', '𝕖', '𝖊', '𝖾', '𝗲', '𝘦', '𝙚', '𝚎'],
    a: ['🅰', 'Ⓐ', 'ⓐ', '𐌀', 'Λ', 'α', 'Ａ', 'ａ', 'ᗩ', 'Δ', 'ค', 'α', 'Ã', 'Ą', '𝔞', '𝓪', '𝒶', '𝓐', '𝐀', '𝔸', '𝕒', 'ᵃ', 'ɐ', 'a', 'ɑ', 'α', 'а', '⍺', 'ａ', '𝐚', '𝑎', '𝒂', '𝒶', '𝓪', '𝔞', '𝕒', '𝖆', '𝖺', '𝗮', '𝘢', '𝙖', '𝚊', '𝛂', '𝛼', '𝜶', '𝝰', '𝞪', 'A', 'Α', 'А', 'Ꭺ', 'ᗅ', 'ᴀ', 'ꓮ', 'ꭺ', 'Ａ', '𐊠'],
    n: ['🅽', 'Ⓝ', 'ⓝ', '𐌽', 'Ṇ', 'η', 'Ｎ', 'ｎ', 'ᑎ', 'Ň', 'ภ', 'η', 'ή', 'Ň', 'Ɲ', '𝔫', '𝓷', '𝓃', '𝓝', '𝐍', '𝐧', 'ℕ', '𝕟', 'ᶰ', 'n', 'ո', 'ռ', 'ｎ', '𝐧', '𝑛', '𝒏', '𝓃', '𝓷', '𝔫', '𝕟', '𝖓', '𝗇', '𝗻', '𝘯', '𝙣', '𝚗', 'N', 'ɴ', 'Ν', 'ℕ', 'Ⲛ', 'ꓠ', 'Ｎ'],
    r: ['🆁', 'Ⓡ', 'ⓡ', '𐍂', 'Ṝ', 'я', 'Ｒ', 'ｒ', 'ᖇ', 'Ř', 'г', 'я', 'ŕ', 'Ř', 'Ɍ', '𝔯', '𝓻', '𝓇', '𝓡', '𝐑', '𝐫', 'ℝ', '𝕣', 'ʳ', 'ɹ', 'R', 'Ʀ', 'ʀ', 'Ꭱ', 'Ꮢ', 'ᖇ', 'ᚱ', 'ℛ', 'ℜ', 'ℝ', 'ꓣ', 'ꭱ', 'ꮢ', 'Ｒ', '𐒴', 'r', 'г', 'ᴦ', 'ⲅ', 'ꭇ', 'ꭈ', 'ꮁ', 'ｒ', '𝐫', '𝑟', '𝒓', '𝓇', '𝓻', '𝔯', '𝕣', '𝖗', '𝗋', '𝗿', '𝘳', '𝙧', '𝚛']
}
document.getElementById("bypassNGen").addEventListener("click", nWGen = () => {
    let rN = l => {
        let rNg = a => {
            return Math.floor(Math.random() * a.length)
        }
        return nA[l][rNg(nA[l])]
    }
    if (document.getElementById("amountOfNSlurs").value <= 1) {
        n = `${rN('n')}${rN('i')}${rN('g')}${rN('g')}${rN('e')}${rN('r')}`
    } else {
        for (let i = 0; i < document.getElementById("amountOfNSlurs").value; i++) {
            n += `
            ${rN('n')}${rN('i')}${rN('g')}${rN('g')}${rN('e')}${rN('r')}, 
            `
        }
    }
    document.getElementById("showNBypass").innerHTML = n
})
document.getElementById("bypassBGen").addEventListener("click", bWGen = () => {
    let rB = l => {
        let rNb = a => {
            return Math.floor(Math.random() * a.length)
        }
        return bA[l][rNb(bA[l])]
    }
    if (document.getElementById("amountOfBSlurs").value <= 1) {
        b = `${rB('b')}${rB('e')}${rB('a')}${rB('n')}${rB('e')}${rB('r')}`
    } else {
        for (let i = 0; i < document.getElementById("amountOfBSlurs").value; i++) {
            b += `
          ${rB('b')}${rB('e')}${rB('a')}${rB('n')}${rB('e')}${rB('r')}, 
          `
        }
    }
    document.getElementById("showBBypass").innerHTML = b
})
document.getElementById("beanerButton").addEventListener("click", g = () => {
    let r = (m, d) => d ? Math.floor(Math.random() * m) : Math.random() < m
    let p = a => a[Math.floor(Math.random() * a.length)]
    let u = (w, c) => r(c) ? w.toUpperCase() : w
    let s = (x, c, i, h, t) => i.match(x) && r(c) ? i += h : i += t
    let b = {
        c: ['}', '{', '+', '`', '/', '\'', 'ç'],
        w: ['hola', 'equipo', 'gato', 'pero', 'viva', 'pro', 'dejas', 'paja', 'puto', 'es mal', 'gordo', 'morir', 'madre', 'gg', 'xX', 'spain', 'portugal', '[GD]'],
        f: [':v', ':V', '>:V', '>:v', ':c', ':C'],
        s: ['el crak', 'elcrak', 'elcrack', 'el crack', 'puta madre', 'muy gordo', 'soy tu mal', 'equipo pro', 'tengo pro', 'es amigo?', 'jajaja', 'xd', 'xxx', '    ', 'caca!!', 'gg', 'depressões'],
        n: ['ronaldo', 'ssundee', 'alfonso', 'alfredo', 'aberto', 'balzac', 'hugo', 'lola', 'mateo', 'marco', 'joaquin', 'leonardo', 'rafael', 'lorenzo', 'diego', 'antonio', 'cruz', 'francisco', 'carlos', 'matias', 'miguel', 'mario', 'pablo', 'carlo', 'rico', 'diablo', 'jose', 'carmen', 'nacho', 'paco', 'manuel', 'juan', 'matheo', 'sergio', 'eduardo', 'pedro', 'ricardo', 'gustavo', 'esteban', 'rodrigo', 'leon', 'felipe', 'jorge', 'felice', 'ernesto']
    }
    let o = ''
    let v = (l) => {
        let c = ''
        for (let i = 0; i < l; i++)
            c = s(/[}{+]$/g, 0.6, c, '+', p(b.c))
        return c
    }
    let c = [
      0.1, 0.3, 0.8, 0.4, 0.2, 0.75,
      v(2),
      u(p(b.w), 0.4),
      u(p(b.n), 0.4),
      u(p(b.s), 0.4),
      p(b.f),
      v(7)
    ]
    for (let i of c) {
      o += r(i) ? ` ${c[c.indexOf(i)+6]}` : ''
    }
    o.slice(o.length - (o.length - 1))
    document.getElementById("showBean").innerHTML = o   
})