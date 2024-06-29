const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: 'ruby'
}

for (const key in myObject) {
    // console.log(myObject[key]);
    // console.log(`${key} file name is for ${myObject[key]}`);
}

const programming = ["js","rb","py","java","cpp"]

for (const key in programming) {
    console.log(programming[key]);
}

