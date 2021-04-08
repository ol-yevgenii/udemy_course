const log = function(a, b, ...rest) {
    console.log(a, b, rest);
};

log('basic', 'rest', 'operator', 'user');

function calcOrDuble(number, basis = 2) {
    console.log(number * basis);
}

calcOrDuble(3);
