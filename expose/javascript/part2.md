# Part2

## var declaration
Q1 **3** is printed in line 12
    Since the length of the array prices is 3 and the for loop block terminated with var i = prices.length, as variable exist outside of block, i is printed as 3.

Q2 **150** is printed in line 13
    var variable can be called everywhere in the script. discountedPrice will be the 0.5 times of the last element in prices.

Q3 **150** is printed in line 14
    var variable can be called everywhere in the script. Value of discountedPrice is inhereted from finalPrice.

Q4 **[ 50, 100, 150 ]** is returned by the function
    The function will return a list with half of the value for each element in prices.

Q5 Error **ReferenceError: i is not defined** pop out
    let i declare in the for block only exist in the for block, hence console.log() can not print out i outside the for block.

Q6 Error **ReferenceError: discountedPrice is not defined** pop out
    let discountedPrice declare in the for block only exist in the for block, hence console.log() can not print out discountedPrice outside the for block.

Q7 **150** is printed in line 14
    let declaretion and console.log() are in the same block, half of the last element of prices are printed

Q8 **[ 50, 100, 150 ]** is returned by the function
    The function will return a list with half of the value for each element in prices.

Q9 Error **ReferenceError: i is not defined** pop out
    let i declare in the for block only exist in the for block, hence console.log() can not print out i outside the for block. 

Q10 **3** is printed in line 12
    const declaretion and console.log() are in the same block, length of the prices is printed

Q11 **[ 50, 100, 150 ]** is returned for the function
    The function will return a list with half of the value for each element in prices.

Q12 
1. **student.name** give access to the value of the name property in the student object
2. **student['Grad Year']** give access to the value of the Grad Year property in the student object
3. **student.greeting()** call the function for the greeting property in the student object
4. **student['Favorite Teacher'].name** give access to the name property of the object in the Favorite Teacher property in student
5. **student.courseLoad[0]** give access to the first index in the array of the courseLoad property of the student object

Q13
1. ‘3’ + 2 = **'32'** since 2 map to their exact string representation
2. ‘3’ - 2 = **1** since '3' map to their exact integer representation
3. 3 + null = **3** since null map to 0 gives 3 + 0 = 3
4. ‘3’ + null = **'3null'** since null become the string 'null'
5. true + 3 = **4** since boolean true map to integer 1
6. false + null = **0** since both null and false will map to integer 0
7. '3' + undefined = **'3undefined'** since undefined is maped to the string undefine.
8. '3' - undefined = **NaN** since a error is occur in the occuration undefined can not be cast to integer
   
Q14
1. ‘2’ > 1 = **true** since '2' is map to integer 2 which is > 1
2. ‘2’ < ‘12’ = **false** since '2' > '1' which gives a false
3. 2 == ‘2’ = **true** since '2' become the number 2
4. 2 === ‘2’ = **false** beacause they have a different type
5. true == 2 = **false** since true in number gives a 1 which != 2
6. true === Boolean(2) = **true** since both side are boolean true

Q15 <br>
    == check the equality with type conversion. On the other hand == check the equality without type. conversion

Q17 modifyArray([1,2,3], doSomething) will return **[ 2, 4, 6 ]**. 
    since in the for loop we iterate through each number in the array [1, 2, 3] and use dosomething to add 2 times the number to the newArr array.

Q19 <br>
    The output is displayed in the order below, it is clear that 2 will be the last to print with 1s of delay. 3 is printed after 4 since the function can only called after the setTimeOut function is terminated which make it printed after 4. <br>
    1<br>
    4<br>
    3<br>
    2<br>