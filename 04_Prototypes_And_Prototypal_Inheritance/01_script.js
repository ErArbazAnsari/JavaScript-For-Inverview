const p1 = {
    lname: "Ansari",
    fname: "Arbaz",
    getFullName: function () {
        return this.lname + this.fname;
    },
};

// console.log(p1);

const p2 = {
    __proto__: p1,
};

console.log("p1 is =>", p1.getFullName());
console.log("p2 is =>", p2.__proto__.getFullName());
