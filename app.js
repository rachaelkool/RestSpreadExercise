function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }

const filterOutOdds2 = (...arguments) => {
      return arguments.filter(function(num) {
          return num % 2 === 0;
      })
  }


const findMin = function(...arguments) { 
    return arguments.reduce(function(min, currNum) {
        if(min < currNum) {
            return min;
        } else {
            return currNum;
        }
    });
}
 
const findMin2 = (...arguements) => {
    return arguements.reduce((min, currNum) => {
        if(min < currNum) {
            return min;
        } else {
            return currNum;
        }
    })
}


const mergeObjects = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
}

const mergeObjects2 = (obj1, obj2) => ({...obj1, ...obj2});


const doubleAndReturnArgs = (arr, args) => [...arr, ...args.map(v => v * 2)]


const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
}


const extend = (array1, array2) => {
    return [...array1, ...array2];
}


const addKeyVal = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj;
}


const removeKey = (obj, key) => {
    let newObj = {...obj}
    delete newObj[key]
    return newObj;
}  


const combine = (obj1, obj2) => {
    return {...obj1, ...obj2};
}


const update = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj;
}