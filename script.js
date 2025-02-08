//Step 1: Declaring Arrays
let names=["Paul", "Peter", "Big JC", "Timothy", "TG"];
console.log(names);

//Step 2: Accessing Arrays
let [firstName,,thirdName,,fifthName]=names;
console.log(firstName,thirdName,fifthName);

//Step 3: Using Array Properties
let namesLength=names.length;
console.log(namesLength);

//Step 4: Array Methods
names.pop();
console.log(names);

names.push("John");
console.log(names);

let disciple=names.slice(0,2);
console.log(disciple);

names.sort();
console.log(names);

//Step 5: Iterating Through Arrays
for (i=0; i<names.length; i++) {
    console.log(names[i])
}

names.forEach((value, index) => {
    console.log(`${index}:${value}`);
});

//Step 6: Array Destructuring
let [firstNme, secondNme, ...restNme]=names;
console.log("First Name", firstNme);
console.log("Second Name", secondNme);
console.log("Rest Names", restNme);


