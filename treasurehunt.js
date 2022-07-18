//Function treasurehunt
var treasure = Math.floor(Math.random() * 9)
var bomb = Math.floor(Math.random() * 9)
if(treasure===bomb){
  bomb = Math.floor(Math.random() * 9)
}
const treasure = (id) => {
  if (id === treasure){
    document.getElementaryById(id).innerHTML = '📨'
  } else if (id === bomb){
    document.getElmentaryById(id).innerHTML = '💣'
  }
}


//Function treasurehunt
var harryPotter1 = Math.floor(Math.random() * 9)
var voldemort = Math.floor(Math.random() * 9)
if(harryPotter1===voldemort){
  voldemort = Math.floor(Math.random() * 9)
}
// const harryHider = (id) => {
//   if (id === 'harryPotter1'){
//     document.getElementaryById(id).innerHTML = '📨'
//   } else if (id === 'ron'){
//     document.getElmentaryById(id).innerHTML = '💣'
//   } else if (id === 'hermione'){
//     document.getElmentaryById(id).innerHTML = '💣'
//   } else if (id === 'draco'){
//     document.getElmentaryById(id).innerHTML = '💣'
//   } else if (id === 'gryfindor'){
//     document.getElmentaryById(id).innerHTML = '💣'
//   } else if (id === 'ravenclaw'){
//     document.getElmentaryById(id).innerHTML = '💣'
//   } else if (id === 'slytherin'){
//     document.getElmentaryById(id).innerHTML = '💣'
//   } else if (id === 'voldemort'){
//     document.getElmentaryById(id).innerHTML = '💣'
//    } else {
//       document.getElementById(id).innerHTML = '🍰'
// }

const harryHider = (id) => {
  if (id === 'harryPotter1'){
    document.getElementaryById(id).innerHTML = '⚡️'
  } else if (id === 5){
    document.getElmentaryById(id).innerHTML = '💣'
  } else {
      document.getElementById(id).innerHTML = '🍰'
}


// const harryHider = (id) => {
//   if(id === '0') {
//     document.getElementById(id).innerHTML = '🍏'
//   } else if(id === 'honey') {
//     document.getElementById(id).innerHTML = '🍎'
//   } else if(id === 'grandma') {
//     document.getElementById(id).innerHTML = '🍏'
//   } else {
//     document.getElementById(id).innerHTML = '🥧'
//   }
// }
