module.exports = function check(str, bracketsConfig) {
  /* console.log(bracketsConfig)
  console.log(str) */
  let result = true ;
  let strok = str;
  let answer = ''
  function Replaser(elem){
    let start = elem[0]
    let end = elem[1]
    const creatRegExp = new RegExp( `[${start}${end}]`, 'gi' );
    const replace = "";
      answer = strok.replace(creatRegExp, replace);
      strok = answer
   /*  console.log('answer = ' + answer + !answer.length) */
     result = !answer.length 
    }
    
    let value = bracketsConfig.map( (element)=> {
      Replaser(element) 
    })
  bracketsConfig.reverse()
  value = bracketsConfig.map( (element)=> {
    Replaser(element) 
  })
  
  return result 
}
