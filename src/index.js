module.exports = function check(str, bracketsConfig) {
  console.log(str)
  console.log(bracketsConfig)
  let result = true;
  let strok = str;
  let answer = ''
  function Replaser(elem) {
    let start = elem[0]
    let end = elem[1]
    const creatRegExp = new RegExp(`\\${start}\\${end}`,'g');
    console.log("regexp = " + creatRegExp)
    const replace = "";
    answer = strok.replace(creatRegExp, replace);
    strok = answer
    console.log('answer = ' + answer + answer.length)
    result = !answer.length
  }
  for (let i = 0; i <= str.length ; i++) {
    let value = bracketsConfig.map((element) => {
      Replaser(element)
    })
  }

  return result
}
