var data = [true, 'hello', 5, 12, -200, false, false, 'word']
var obj = { number: 0, string: 0, boolean: 0 }

for (let type of data){
    obj[typeof(type)] += 1;
}
    console.log(obj);