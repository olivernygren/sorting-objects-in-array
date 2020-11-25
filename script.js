

let array = [{
    todo: 'Run a mile',
    date: "2020-11-02"
}, {
    todo: "Run two miles",
    date: "2020-11-17"
}, {
    todo: "Run three miles",
    date: "2020-11-06"
}, {
    todo: "Run four miles",
    date: "2020-11-12"
}, {
    todo: "Run five miles",
    date: "2020-11-28"
}];



array.sort(function(a, b) {
    if (a.date < b.date
        ) return -1;

    if (a.date > b.date
        ) return 1;
    return 0;
});

console.log(array[2]);

/* 
let array = [{
    todo: string = 'Run a mile',
    date: date = 2020-11-02
}, {
    todo: string = "Run two miles",
    date: date = 2020-11-05
}, {
    todo: string = "Run three miles",
    date: date = 2020-11-06
}, {
    todo: string = "Run four miles",
    date: date = 2020-11-16
}, {
    todo: string = "Run five miles",
    date: date = 2020-11-28
}];
*/