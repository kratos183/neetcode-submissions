const Solution = class {
    isPalindrome(s) {
        const clean = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
        return clean === [...clean].reverse().join('');
    }
};