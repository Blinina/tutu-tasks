const obj = {
    '}': '{',
    ')': '(',
    ']': '[',
    '>': '<',
};
const open = ['{', '(', '[', '<'];

export default function checkSyntax(str) {
    const res = [];

    for (let i = 0; i < str.length; i++) {
        if (open.includes(str[i])) {
            res.push(str[i]);
        } else if (obj.hasOwnProperty(str[i])) {
            if (res[res.length - 1] === obj[str[i]]) {
                res.pop();
            }
        }
    };
    return res.length === 0 ? 0 : 1;
}