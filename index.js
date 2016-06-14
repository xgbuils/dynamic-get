var _ = require('lodash');

function dynamicGet (object, path, defaultValue) {
    path = _.toPath(path);
    var index = 0;
    var length = path.length;
    while (!_.isNil(object) && index < length) {
        var property = path[index];
        object = _.isFunction(object) ? object(property) : object[property];
        ++index;
    }
    return (index && index === length) ? object : defaultValue;
}

/*
var obj = {
    beep: function (n) {
        return  {
            foo: function (i) {
                return {
                    bar: (Number(i) + 1) + ' and ' + n
                }
            },
            value: n + ' is the best number'
        }
    }
};

console.log(dynamicGet(obj, 'beep[2].value')) // '3 is the best number' 
console.log(dynamicGet(obj, 'beep[2].foo[5].bar')) // '6 and 2'
*/

module.exports = dynamicGet;
