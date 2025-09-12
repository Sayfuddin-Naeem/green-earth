### 1) What is the difference between var, let, and const? <br/>

#### Ans: <br/>
1. var: It is a function scoped. When it is declared outside of the function, then it becomes global variable. It is hoisted and initialized with undefined. It is allowed re-declaration in same scope.It is allowed re-assigning a variable.<br/>
2. let: It is a block scoped keyword of function declaration. It is safer than var keyword. It is hoisted but not initialized. It does not support accessing before declaration. It does not allowed re-declaration in the same scope. It is allowed re-assigning.<br/>
3. const: It is a block scope keyword like let. It is hoisted like let keyword. It does not support re-declaration and re-assigning. But non-primitive data like array and object can modify.

---

### 2) What is the difference between map(), forEach(), and filter()? <br/>

#### Ans: <br/>
   1. map(): map is a method of array, which creates new array by applying callback function. It returns an transformed array, which length is same as original array. It does not modify the original array.
    <br/>
   2. forEach(): forEach is a method of array, which perform some task on each array element by applying a callback function. It does not return a new array. It can modify the original array.
    <br/>
   3. filter(): filter is a method of array, which creates new array based on condition by applying a callback function. It return a new filtered array. It does not modify the original array.
    
---

### 3) What are arrow functions in ES6? <br/>

#### Ans:<br/>
   Arrow functions: It is a shorter and cleaner way of define a function in javascript. It is different some cases than normal function. It does not has own this binding and prototype property. It does not have arguments object. It does not able to perform as constructor.

   Example - const add = (a, b) => a+b ;

---

### 4) How does destructuring assignment work in ES6? <br/>

#### Ans:<br/>
   Destructuring: Destructuring is a way of unpacking values from array or object into different variables easily and shortly.Array destructuring is extracted values by position. Object destructuring is extracted values by property name. It supports default values, renaming, nesting and rest operator.

---

### 5) Explain template literals in ES6. How are they different from string concatenation? <br/>

#### Ans:<br/>
   Template literals: Template literals is a way to define strings with backticks (`) without using single(') or double(") quotation. It support insert variables directly by dollar($) sign and curly({}) brackets without using plus (+) operator. It able to embed any mathematical expression. It is supported multiline strings.





## 🔗 Submission
- **Live Link :** YOUR_DEPLOYED_URL_HERE  
- **GitHub Private Repository:** YOUR_REPO_URL_HERE  

---