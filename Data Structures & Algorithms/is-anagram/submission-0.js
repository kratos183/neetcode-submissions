var Solution = class {
    isAnagram(s, t) {
        return s.split('').sort().join('') === t.split('').sort().join('');
    }
};