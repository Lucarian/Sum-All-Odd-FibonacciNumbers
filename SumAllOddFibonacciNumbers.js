// -------------------------------------------------------------------------
// ( My Personal Symbols Legend: D&I === Declaration & Initialization )
// -------------------------------------------------------------------------


/**
 *  --------------------- FUNCTIONALITY SUMMARY ----------------------------
 * 
 *  --- A program that finds all fibonacci numbers till the given argument's number
 *      and stores them in an array. Then, it filters the odd ones and finally
 *      sums them up.
 */

// ------------------------------------------------------------------------


function sumFibs(num) {
    
    let series = [1, 1];  // D&I of storing array.
    let one = 1;  //  first of the two preceding numbers that are needed to find the next one in the fibonacci sequence.
    let two = 1;  //  second of the two preceding numbers that are needed to find the next one in the fibonacci sequence.
    let res = 0;  //  the storing variable for the addition of the two preceding numbers that results in the next fibonacci number.

    //-------------------------------------------------------------------------------------------------------------------------------

    while (res < num) {  // while Loop for fibonacci numbers creation and storing in the array.
        res = two + one;   // Creation of the next fibonacci number
        one = two;      // Value transfer of 'two' variable's value
        two = res;     // Value transfer of 'res' variable's value
        if (res > num) break;  // if conditional for stopping the loop before it pushes the last value of 'res' variable.
        series.push(res);
    }
    
    let filtered = series.filter( x => x%2 == 1);   // Creation of an array that includes only the odd fibonacci numbers.
    var sum = filtered.reduce((a, b) => a + b);   // Summing of all odd fibonacci numbers.
    
    return "The sum is " + sum + " .";
  }
  
  console.log(sumFibs(8));  // Outputs the summing result. Any argument number can be passed.