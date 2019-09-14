// Code your solutions in this file
function writeCards(names, eventName){
  let thanks = []
  for(let i=0; i<names.length; i++){
    thanks.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
  }
  return thanks 
}

function countdown(integer){
  while(integer >= 0){
    console.log(integer--)
  }
}