'use strict';
module.exports = data => {

    // (di, dj) is a vector - direction in which we move right now
     let di = 1;
     let dj = 0;
     // length of current segment
     let segment_length = 1;

     // current position (i, j) and how much of current segment we passed
     let i = 0;
     let j = 0;
     let segment_passed = 0;
     let result;
     if(data<2) return 0;
     for (let k = 1; k < data; ++k) {
         // make a step, add 'direction' vector (di, dj) to current position (i, j)
         i += di;
         j += dj;
         ++segment_passed;
         result = [i,j];

         if (segment_passed == segment_length) {
             // done with current segment
             segment_passed = 0;

             // 'rotate' directions
             // 'rotate' directions
             let buffer = di;
             di = -dj;
             dj = buffer;

             // increase segment length if necessary
             if (dj === 0) {
                 ++segment_length;
             }
         }
     }

    return Math.abs(result[0]) + Math.abs(result[1]);
};
