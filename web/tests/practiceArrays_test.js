/* SCRIPT: REMOVE DUPLICATE ELEMENTS FROM ARRAY
 * SCOPE: INTERVIEW QUESTION THAT TESTS A CANDIDATE'S BASIC UNDERSTANDING OF JS AND PROBLEM SOLVING
 * THERE ARE MANY SOLUTIONS, AND MANY WAYS TO GET IT WRONG
 * NOTES:
 * 1. CALL-BACK THE DIRECTIONS BEING ASKED TO CONFIRM YOU UNDERSTAND WHAT IS BEING ASKED
 * 2. ASK KEY QUESTIONS LIKE WHETHER OR NOT SOMETHING LIKE ORDER NEEDS TO BE PRESERVED BEFORE GETTING STARTED
 * 3. TALK THRU YOUR SOLUTION SO THE INTERVIEWER UNDERSTANDS YOUR THOUGHT PROCESS
 * 4. BE PERSONABLE AND ENGAGING. IDEALLY THE POINT IS TO GET THE SOLUTION RIGHT, BUT IF TIME RUNS OUT, ITS ABOUT YOU
 * 5. BE DESCRIPTIVE IN YOUR VARIABLE NAMING
 */


Feature('PracticeArrays');

Scenario('test array output', (I) => {
    let firstArray = [1, 2, 7, 3, 8, 5, 3, 2, 9, 5, 4, 1, 7, 8, 6];
    //let secondArray = [];
    //let firstArrayLen = firstArray.length;
    //let i=0;

    /* BRUTE FORCE APPROACH - HAVE SEPARATE ARRAY AND ITERATE THROUGH IT
     * THIS APPROACH CYCLES THROUGH THE FIRST ARRAY, COMPARES THE ELEMENT, IF NOT A MATCH -> GOES TO NEW ARRAY
     * COMPLEXITY LEVEL: HIGHEST (N^2)
     * 
        for (i; i < firstArrayLen; i++)
        {
            if (secondArray.indexOf(firstArray[i]) === -1)
            {
                secondArray.push(firstArray[i]);
            }
        }
        console.log(secondArray);
     */
    /* ___________________________________________________________ */

    /* USING SORT - WHEN WE CARE ABOUT ORDER
     * COMPLEXITY - MEDIUM, DEPENDING ON SORT vs QUICK SORT 
        let _temp;
        firstArray.sort(); //ORDERS THE ARRAY PROPERLY
        for (i; i < firstArrayLen; i++){
            if(firstArray[i] !== _temp) //CHECKS IF THE ELEMENT OCCURRED IN THE _temp VARIABLE PLACEHOLDER
            {
                secondArray.push(firstArray[i]);
                _temp = firstArray[i];
            }
        }
        console.log(secondArray);
     */
    /* ___________________________________________________________ */

    /* USING A JS OBJECT 
     * THIS APPROACH YIELDS THE SAME OUTPUT, BUT AS STRINGS
     * COMPLEXITY: N (THE USE OF THE OBJECT ADDS OVERHEAD AND THE OUTPUT IS NOT AS INTENDED)
    
        array_obj = {};
        for (let element of firstArray)
        {
            array_obj[element] = true;
        }

        let secondArray = Object.keys(array_obj);
        console.log(secondArray);
    */
    /* ___________________________________________________________ */
    
    /* USING SET
     * THIS APPROACH INTRODUCES THE USE OF SETs TO FIND UNIQUE VALUES
     * COMPLEXITY: EASY (AND FAST)
        let secondArraySet = new Set(firstArray); // YIELDS A UNIQUE SET OF ITEMS FROM SOURCE
        console.log(secondArraySet);
    */
    /* ___________________________________________________________ */
    
    /* ONE-LINE SOLUTION -- USES SPARE OPERATOR 
    // COMPLEXITY: BEST SOLUTION -- QUICKEST & EASIEST TO LEARN
    console.log([... new Set(firstArray.sort())]);
    */

    /* ___________________________________________________________ */
    
    /* MORE TRICK QUESTIONS ON TECH INTERVIEW 
    1. WHAT IS THE EXPECTED OUTPUT OF: 
        console.log(2 + '2'); //ANSWER: THE "+" CONCATENATES THE TWO NUMBERS
        console.log(2 - '2'); //ANSWER: SIMPLE NUMERIC OPERATION; STRING CONVERTED TO A NUMBER
    */

    /* 2. GIVEN THE FOLLOWING ARRAY, REMOVE THE DUPLICATES:
        let nums = [1,2,2,3,5,4,7,5,6,8,5];
        console.log([... new Set(nums)]);
    */

    /* 3. GIVEN THE FOLLOWING FUNCTION, DISPLAY THE OUTPUT, FIX ANY ISSUES THAT PRESENT THEMSELVES 
     * SOLUTION: Immediately Invoked Function Expression

        let func = function(){
            {
                (function(){
                    let l = 'let'; //HAS BLOCK SCOPE
                    let v = 'var'; //HAS FUNCTION SCOPE
                })();
            }
            console.log(v);
            console.log(l);
        }
        func();
        */

    /* 4. GIVEN THE FOLLOWING COMPARISON OPERATORS, GIVE THE SOLUTION 
        console.log(5 < 6 < 7); //system answer = TRUE
        console.log(7 > 6 > 5); //system answer = FALSE

        //REASON:
        //first-order comparison: 5 is less than 6 yields true
        //second-order comparison: true in front of a comparison operator is converted to 1
    */

    /* 5. GIVEN THE FOLLOWING ARROW FUNCTION, WHAT MIGHT THE RETURN OUTPUT BE 
        
        //let a = () => {return arguments}; //using 'arguments' = don't do this!!
        let a = (...n) => {return n}; //do this
        console.log(a('hi'));
    */
    /* 6. FOR THE FOLLOWING FUNCTION, FIX THE ERROR THEN STATE WHAT THE SOLUTION WAS 
    * THE ISSUE: unnecessary line break at the return object opening curly bracket caused the key 'message' to fail
    
        let my_func = function(){
            return{
                message: 'hi'
            }
        }
        console.log(my_func());
    */

    /* 7. GIVEN THE FOLLOWING OBJECT, HOW WOULD YOU PREVENT ADDING ADDITIONAL PROPERTIES OR MODIFYING EXISTING PROPERTIES 
        //SOLUTION: 'FREEZE' IT; TO ALLOW MODS BUT NO ADD-ONS OR REMOVAL, USE Object.seal();

        let profile = {
            name: 'techsmith'
        };

        Object.freeze(profile);

        //ADDITION BLOCKED
        //profile.age = '45';

        //MODIFICATION BLOCKED
        //profile.name = 'jon snow'


        console.log(profile);
    */

    /* 8. GIVEN THE FOLLOWING OBJECT, HOW WOULD YOU PREVENT MODIFICATIONS TO DISTINCT PROPERTY 
        //SCOPE: YOU WANT TO MODIFY NAME BUT NOT AGE
        //SOLUTION: USE OBJECT.DEFINEPROPERTY(obj, new property,{attributes})
        let profile = {
            name: 'techsmith'
        };

        Object.defineProperty( profile, 'age', {
            value: 45,
            writable: false
        });

        profile.name = 'superb man';
        profile.age = 4;
        console.log(profile);
    */
    
    /* 9. WHAT IS THE ANSWER TO: Math.max() */
    //SOLUTION: -INFINITY
    //console.log(Math.max());

    /* ___________________________________________________________ */
        
    /* GIVEN THE FOLLOWING OBJECT, HOW CAN WE PREVENT IT FROM BEING MODIFIED
        const myObj = {
            x: 1
        };

        //1. we secure object
        Object.freeze(myObj);

        //2. we attempt a modification
        myObj['y'] = 2;

        //3. we prove the object is immutable
        console.log(myObj);
*/

    /* GIVEN AN ARRAY OF NUMBES, PRODUCE THE SUM
    let myArray = [1, 2, 5, 7];

    let myArrayLen = myArray.length;
    let i = 0;
    let total = 0;

    //using loop: for (i; i < myArrayLen; i++){total += myArray[i];};
    //using reduce: console.log(myArray.reduce((acc, item) => acc+item));
     */

     /* GIVEN add(1,2) & add(1), add(2) .. PRODUCE A FUNCTION THAT ADDS THEM 
        function addNums(num1, num2){
            if (num1 && num2){
                return num1 + num2
            }
            else{
                return function (num3){
                    return num1 + num3
                }
            }
        };
        addNums(1,2);
    */

    /* GIVEN AN UNSORTED ARRAY, FIND THE MISSING NUMBER 
    const ary = [1 - 100] // 1 NUMBER IS MISSING
    
    //SOLUTION:
    //1. Get the total of all numbers in the array
    //2. Get the array total
    //3. Yield the output

    let total = n*(n+1)/2;
    let arrayTotal = ary.reduce((t, i) => t + i);
    console.log("The missing number is: " + total - arrayTotal);
    */

    /* IDENTIFY THE DIFFERENCE BETWEEN THE FOLLOWING */
    
    //THIS IS A DECLARATION
    //function x (){
        //code goes here
    //}
    //if you encase the declaration inside parenthesis, it becomes an expression (immediately invoked function expression)

    //THIS IS AN EXPRESSION; the variable can be called elsewhere; is portable
    //let x = function x (){
        //code goes here
    //}

    /* MIRROR STRING: GIVEN A RANDOM STRING, GENERATE ITS OUTPUT IN REVERSE */
    let str = 'i love javaScript';
    console.log(str.split("").reverse().join(""));

});

