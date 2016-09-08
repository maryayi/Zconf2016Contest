function num2word(wordList, number){
  // wordList: an Array of words;
  // number: a number to check with words;
  // description: num2word function takes two arguments, wordList an Array of words (i.e: ['BOOK','ALI','CITY', 'ZANJAN']) and
  // number, a number to check equivalent number  of array Items with it (i.e: 1232341246). this function returns an array of matched Items.
  // if no Items match with number an empty array returned.
  // Author: Mahdi Aryayi (mahdiaryayi@gmail.com)
  // 2016/09/08
  var charLists = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; //Numbers from 1 to 26 map to each number.
  var numStr = String(number);
  var result = wordList.filter(function(item){
    var itemNum = '';
    for (var ii=0; ii<item.length; ii++) {
      itemNum += String(charLists.indexOf(item[ii])+1);
    }
    return itemNum === number;
  });
  return result;
}
