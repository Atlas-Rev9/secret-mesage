let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 
    'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// console.log(secretMessage.length);

secretMessage.pop();
// console.log(secretMessage.length);

secretMessage.push('to', 'Program');
// console.log(secretMessage.length);

// console.log(secretMessage.indexOf('easily'));
secretMessage[7] = 'right';
// console.log(secretMessage[7]);

// console.log(secretMessage[0]);
secretMessage.shift();
// console.log(secretMessage[0]);

secretMessage.unshift('Programming');
// console.log(secretMessage[0]);

// console.log(secretMessage);
secretMessage.splice(6, 5, 'know');
// console.log(secretMessage);

console.log(secretMessage.join(' '));