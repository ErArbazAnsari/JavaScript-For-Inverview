const p1 = {
    p1Data: "i am inside p1",
};

const p2 = {
    p2Data: "i am inside p2",
    __proto__: p1,
};

const p3 = {
    p2Data: "i am inside p3",
    __proto__: p2,
};

console.log(p3.__proto__.__proto__.__proto__);
