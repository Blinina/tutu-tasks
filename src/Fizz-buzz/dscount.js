const fn = {
    string: (smb) => smb.toLowerCase(),
    number: (smb) => smb,
    undefined: () => undefined,
};

export default function dscount(str, s1, s2) {
    let res = 0;
    for (let i = 0; i < str.length; i++) {
        if (fn[(typeof str[i])](str[i]) === s2 && fn[(typeof str[i - 1])](str[i - 1]) === s1) {
            res += 1;
        }
    }
    return res;
}
