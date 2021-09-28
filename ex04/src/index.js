const milili = [10, 25, 4];

function myArr(mili) {
    'use strict';


/* milili[0] = 1;
milili[1] = 1;
milili[2] = 1;
 */

mili[0] = 4;
mili[1] = 10;
mili[2] = 25;


    return mili;
}
console.log(myArr(milili));

module.exports = myArr;