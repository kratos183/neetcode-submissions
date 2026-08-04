class Solution {
    evalRPN(tokens) {
        const stack = [];
        const ops = {
            '+': (a, b) => a + b,
            '-': (a, b) => a - b,
            '*': (a, b) => a * b,
            '/': (a, b) => Math.trunc(a / b)
        };
        
        for (let token of tokens) {
            if (token in ops) {
                const b = stack.pop();
                const a = stack.pop();
                stack.push(ops[token](a, b));
            } else {
                stack.push(Number(token));
            }
        }
        
        return stack[0];
    }
}