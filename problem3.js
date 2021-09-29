/**
 * name : Dipu
 * Date : 26.09.2021
 *
 * question : Given a string s, find the length of the longest substring without repeating characters.
 */

const text = "abcdefgababcdeffecd";
const string1 = text.toString();
let arr = [];

const fun = (para) =>{
    for(let i = 0; i < para.length; i++){
        arr.push(para[i]);
    }
    return arr.filter((val, ind, self) =>{
        if(self.indexOf(val) === ind){
          console.log(val);
        }
    }) ;
}

fun(string1);
