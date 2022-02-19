// if else
let gender;
gender = 'L';
if (gender === 'L') {
    console.log("I'm a man");
} else {
    console.log("I'm a woman");
}

// if else if else
let username, password;
username = "Admin";
password = "qwerty";
const isSuccess = true;
const isFailed = false;
if (username === "Admin" && password === "qwerty") {
    console.log(isSuccess);
} else if (username === "Admin" && password !== "qwerty") {
    console.log(isFailed);
} else if (username !== "Admin" && password === "qwerty") {
    console.log(isFailed);
} else {
    console.log(isSuccess);
}

// nested if
if (username === "Admin") {
    if (password === "qwerty") {
        console.log(isSuccess);
    } else {
        console.log(isFailed);
    }
} else if (password === "qwerty") {
    console.log(isFailed);
} else {
    console.log(isFailed);
}