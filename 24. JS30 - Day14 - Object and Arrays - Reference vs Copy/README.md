# Object and Arrays : Reference vs Copy - #Javascript30(Day - 14)

---

## Things I learned

- Copying Numbers, strings and booleans
    - Assigning is enough.
        ```javascript
        let a = 10;
        let b = a;

        // Here "b" is a copy of "a"
        ```
- Copying Arrays
    - Assigning wont do it.
    ```javascript
        let keywords = ["hello", "world"];
        let keys = keywords;

        keys[0] = "HELLO";

        /* This changes the keywords array too, 
            keywords ==> ["HELLO", "world"];
            keys ==> ["HELLO", "world"]

            This is because, keys is a reference to keywords, not a copy
        */  
    ```
    - How to make copies:
        1. `players.slice()`
        2. `Array.from(players)`
        3. `[...players]`

- Copying Objects
    - Assigning wont do it.
    ```javascript
        let ashwin = {
            name: "ashwin",
            age: 19,
        }

        let person = ashwin;
        person.age = 100;

        /*
            This changes the ashwin object too,

            ashwin ===> {name: "ashwin", age: 100}
            person ===> {name: "ashwin", age: 100}
        */
    ```
    - How to make copies
        1. `Object.assign({}, ashwin)`
        2. `{...ashwin}`
    

>  Copying Methods shown above for **Arrays and Objects** work only for **1 level deep**  - (*Refer the .js file*)
    

