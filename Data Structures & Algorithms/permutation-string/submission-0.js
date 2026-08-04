const Solution = class {
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;
        
        const need = Array(26).fill(0), have = Array(26).fill(0);
        for (const c of s1) need[c.charCodeAt(0) - 97]++;
        
        let matches = 0;
        for (let i = 0; i < 26; i++) {
            if (have[i] === need[i]) matches++;
        }

        for (let r = 0; r < s2.length; r++) {
            // Add right char
            const ri = s2.charCodeAt(r) - 97;
            have[ri]++;
            if (have[ri] === need[ri]) matches++;
            else if (have[ri] === need[ri] + 1) matches--;
            
            // Remove left char when window exceeds s1 length
            if (r >= s1.length) {
                const li = s2.charCodeAt(r - s1.length) - 97;
                if (have[li] === need[li]) matches--;
                else if (have[li] === need[li] + 1) matches++;
                have[li]--;
            }
            
            if (matches === 26) return true;
        }
        return false;
    }
};