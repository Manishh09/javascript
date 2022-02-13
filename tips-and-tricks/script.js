// get uniue value from an array of object

const items = [
    {name: 'car', rating: 5},
    {name: 'bike', rating: 2.5},
    {name: 'plane', rating: 4.5},
    {name: 'car', rating: 5},
];

const getUnique =  (arr, prop) =>{
    const uniqueArr = []; 
    const entries = {};
    arr.forEach( (item, index)=>{
        if(!entries[item[prop]]){
            entries[item[prop]] = true;
            uniqueArr.push(item);
        }
    })
    return uniqueArr;
}

const uniqueArr = getUnique(items,'rating');
console.log(uniqueArr);