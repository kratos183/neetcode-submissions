class Solution {
    minWindow(s, t) {
        const n={};for(let c of t)n[c]=(n[c]||0)+1
        let l=0,r=0,res=""
        while(r<s.length){
            n[s[r]]=(n[s[r]]||0)-1,r++
            while(Object.values(n).every(v=>v<=0)){
                res=!res||r-l<res.length?s.slice(l,r):res
                n[s[l++]]++
            }
        }
        return res
    }
}