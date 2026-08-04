const Solution = class {
    encode(strs) {
        return strs.map(s => `${s.length}#${s}`).join('');
    }

    decode(s) {
        const result = [];
        let i = 0;

        while (i < s.length) {

            const j = s.indexOf('#', i);
            const len = Number(s.substring(i, j));

            result.push(s.substring(j + 1, j + 1 + len));
            i = j + 1 + len;
        }

        return result;
    }
}