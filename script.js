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
