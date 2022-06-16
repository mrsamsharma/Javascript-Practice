const helloName = (name = 'User') => 'Hello ' + name + '!';
const bckCol = () => {
  document.querySelector('.button').style.backgroundColor = 'black';
}
const sum = (a = 0, b = 0) => a+b;