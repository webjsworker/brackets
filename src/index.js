module.exports = function check(str, bracketsConfig) {
  /* return true */
  /* console.log(str)
  console.log(bracketsConfig) */
  let result = true ;
    let value = bracketsConfig.map( (elem) => {
     /*  console.log(elem) */
    let start = elem[0]
    let end = elem[1]
    const creatRegExp = new RegExp( `[${start}${end}]`, 'gi' );
    const replace = "";
    let  answer = str.replace(creatRegExp, replace);
    /* console.log(!answer.length) */
    /* return !answer.length */
    result = !answer.length
    }
  )
  return result 
}
