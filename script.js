// OLD CODE

// const passwordGenerator = (string, num, amount) => {
//     const pass = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
//     const numbers = '0123456789'
//     const icons = '!#$%&()*+,-./:;<=>?@[\]^_{|}~'
//     const newArr = []
//     let easyPass = pass.split('').sort(() => Math.random() - 0.5).join('')
//     let hardPass = (pass.split() + numbers.split() + icons.split()).split('').sort(() => Math.random() - 0.5).join('')
//     let mediumPass = (pass.split() + numbers.split()).split('').sort(() => Math.random() - 0.5).join('')
//     if(amount){
//         for(i = 0; i < amount; i++){
//             if(string === 'easy') {newArr.push(pass.split('').sort(() => Math.random() - 0.5).join('').substring(0, num))   
//             } else if(string === 'medium'){newArr.push((pass.split() + numbers.split()).split('').sort(() => Math.random() - 0.5).join('').substring(0, num))   
//             } else if(string === 'hard'){newArr.push((pass.split() + numbers.split() + icons.split()).split('').sort(() => Math.random() - 0.5).join('').substring(0, num))
//             }
//         }return newArr 
//     } else{
//             if(string === 'easy'){return easyPass.substring(0, num)
//             } else if(string === 'medium') {return mediumPass.substring(0, num)
//             } else if(string === 'hard') {return hardPass.substring(0, num)} }}
// console.log(passwordGenerator('hard', 10, 3))

// NEW CODE

const pass = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const icons = "!#$%&()*+,-./:;<=>?@[]^_{|}~";
const passWordGenerator = (string, num, amount = 1) => {
   if(amount) for(let i = 0; i < amount; i++){
      if(string === 'easy') console.log(pass.split('').sort(() => Math.random() - 0.5).join('').substring(0, num))
      if(string === 'medium') console.log((pass.split() + numbers.split()).split('').sort(() => Math.random() - 0.5).join('').substring(0, num))
      if(string === 'hard') console.log((pass.split() + numbers.split() + icons.split()).split('').sort(() => Math.random() - 0.5).join('').substring(0, num))
}};
passWordGenerator('hard', 10, 3)
