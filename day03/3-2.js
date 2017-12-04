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
     let result = [];
     result['0x0'] = 1;
     let res = 1;

     while (res <= data) {
         // make a step, add 'direction' vector (di, dj) to current position (i, j)
         i += di;
         j += dj;
         ++segment_passed;

         result[i+'x'+j] = 0

         result[i+'x'+j] += result[(i+1)+'x'+(j+1)] ? result[(i+1)+'x'+(j+1)] : 0;
         result[i+'x'+j] += result[(i+1)+'x'+(j-1)] ? result[(i+1)+'x'+(j-1)] : 0;
         result[i+'x'+j] += result[(i+1)+'x'+(j)] ? result[(i+1)+'x'+(j)] : 0;
         result[i+'x'+j] += result[(i-1)+'x'+(j+1)] ? result[(i-1)+'x'+(j+1)] : 0;

         result[i+'x'+j] += result[(i-1)+'x'+(j-1)] ? result[(i-1)+'x'+(j-1)] : 0;
         result[i+'x'+j] += result[(i-1)+'x'+(j)] ? result[(i-1)+'x'+(j)] : 0;
         result[i+'x'+j] += result[(i)+'x'+(j+1)] ? result[(i)+'x'+(j+1)] : 0;
         result[i+'x'+j] += result[(i)+'x'+(j-1)] ? result[(i)+'x'+(j-1)] : 0;

         res = result[i+'x'+j];

         if (segment_passed == segment_length) {
             // done with current segment
             segment_passed = 0;

             // 'rotate' directions
             let buffer = di;
             di = -dj;
             dj = buffer;

             // increase segment length if necessary
             if (dj == 0) {
                 ++segment_length;
             }
         }
     }

    return res;
};
