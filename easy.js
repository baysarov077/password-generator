const pass = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
let easy = pass.split('').sort(() => Math.random() - 0.5).join('')

console.log(easy)