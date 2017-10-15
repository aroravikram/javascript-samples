import _ from 'lodash';

let firstObject = {
    name: 'Vikram',
    surname: 'Arora'
};

console.log(_.get(firstObject,'name'));
console.log(_.get(firstObject,'surname'));
