const u = u();
function receivesAFunction(u) {
    u();
}
function returnsANamedFunction() {
    return receivesAFunction;
}
function returnsAnAnonymousFunction() {
    return function () {
        console.log("I am anonymous");
    };
}