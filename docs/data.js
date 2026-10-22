const PRACTICALS_DATA = [
  {
    "id": "1.1",
    "unit": "Practical 1",
    "title": "Factorial of Trailing Zeroes",
    "category": "Math & Number Theory",
    "lang": "cpp",
    "difficulty": "Medium",
    "leetcode": "172",
    "summary": "Calculate the count of trailing zeroes in n! by counting factors of 5.",
    "inputFormat": "one integer n.",
    "description": "Given an integer n, return the number of trailing zeroes in n!. Note that n! = n * (n - 1) * ... * 1.\n\nA trailing zero is always formed by a pair of factors (2, 5). In any factorial sequence, multiples of 2 are far more abundant than multiples of 5. Therefore, counting how many factors of 5 contribute to the product directly yields the exact number of trailing zeroes: n/5 + n/25 + n/125 + ...",
    "complexity": {
      "time": "O(log₅ n)",
      "space": "O(1)"
    },
    "testRunner": {
      "type": "number",
      "defaultInput": 25,
      "inputLabel": "Enter n:",
      "run": (n) => {
        n = parseInt(n);
        if (isNaN(n) || n < 0) return "Please enter a non-negative integer.";
        let ans = 0, temp = n, steps = [];
        while (temp > 0) {
          temp = Math.floor(temp / 5);
          ans += temp;
          if (temp > 0) steps.push(`Multiples of 5 power contribution: +${temp}`);
        }
        return `Trailing Zeroes in ${n}! = ${ans}\n\nCalculation steps:\n${steps.join('\n') || 'n < 5, so 0 trailing zeroes.'}`;
      }
    },
    "code": `#include <bits/stdc++.h>
using namespace std;
int main() {
    long long n;
    cin >> n;
    long long ans = 0;
    while (n > 0) {
        n /= 5;
        ans += n;
    }
    cout << ans << '\n';
    return 0;
}`
  },
  {
    "id": "1.2",
    "unit": "Practical 1",
    "title": "Extended Euclidean Distance (Bézout's Identity)",
    "category": "Math & Number Theory",
    "lang": "cpp",
    "difficulty": "Medium",
    "leetcode": "Bézout's Identity",
    "summary": "Computes GCD(a, b) and coefficients x, y such that a*x + b*y = gcd(a, b).",
    "inputFormat": "two integers a and b. Output: gcd(a,b).",
    "description": "The Extended Euclidean Algorithm extends Euclid's algorithm to calculate the greatest common divisor gcd(a, b) and also the integers x and y satisfying Bézout's identity: a*x + b*y = gcd(a, b). This is fundamental in modular arithmetic, computing modular inverses, and RSA cryptography.",
    "complexity": {
      "time": "O(log(min(a, b)))",
      "space": "O(log(min(a, b))) call stack"
    },
    "testRunner": {
      "type": "two_numbers",
      "defaultInput": "30, 20",
      "inputLabel": "Enter a, b (e.g. 30, 20):",
      "run": (input) => {
        let parts = input.split(',').map(s => parseInt(s.trim()));
        if (parts.length < 2 || isNaN(parts[0]) || isNaN(parts[1])) return "Please enter two integers separated by comma (e.g. 35, 15)";
        let [a, b] = parts;
        function extGCD(a, b) {
          if (b === 0) return { g: a, x: 1, y: 0 };
          let res = extGCD(b, a % b);
          let x = res.y;
          let y = res.x - Math.floor(a / b) * res.y;
          return { g: res.g, x, y };
        }
        let res = extGCD(a, b);
        return `GCD(${a}, ${b}) = ${res.g}\nBézout Coefficients:\nx = ${res.x}, y = ${res.y}\nVerification: (${a})*(${res.x}) + (${b})*(${res.y}) = ${a * res.x + b * res.y} == ${res.g}`;
      }
    },
    "code": `#include <bits/stdc++.h>
using namespace std;
long long extendedGCD(long long a, long long b, long long &x, long long &y) {
    if (b == 0) { x = 1; y = 0; return a; }
    long long x1, y1;
    long long g = extendedGCD(b, a % b, x1, y1);
    x = y1;
    y = x1 - (a / b) * y1;
    return g;
}
int main() {
    long long a, b, x, y;
    cin >> a >> b;
    long long g = extendedGCD(llabs(a), llabs(b), x, y);
    cout << g << '\n';
    return 0;
}`
  },
  {
    "id": "1.3",
    "unit": "Practical 1",
    "title": "Missing Number",
    "category": "Bit Manipulation",
    "lang": "cpp",
    "difficulty": "Easy",
    "leetcode": "268",
    "summary": "Find the single missing number from [0, n] in an array using XOR properties.",
    "inputFormat": "n followed by n distinct integers from 0 to n, with one missing.",
    "description": "Given an array containing n distinct numbers in the range [0, n], return the only number missing from the array. By leveraging XOR properties (a ^ a = 0 and a ^ 0 = a), XORing all numbers from 0 to n with all numbers in the array eliminates all matched pairs, leaving only the missing number.",
    "complexity": {
      "time": "O(n)",
      "space": "O(1)"
    },
    "testRunner": {
      "type": "array",
      "defaultInput": "3, 0, 1",
      "inputLabel": "Enter array elements (comma separated):",
      "run": (input) => {
        let nums = input.split(',').map(s => parseInt(s.trim())).filter(n => !isNaN(n));
        if (nums.length === 0) return "Please enter a valid list of numbers.";
        let n = nums.length;
        let x1 = 0, x2 = 0;
        for (let i = 0; i <= n; i++) x1 ^= i;
        for (let num of nums) x2 ^= num;
        let missing = x1 ^ x2;
        return `Array size: ${n} (Expected range: 0 to ${n})\nInput: [${nums.join(', ')}]\nMissing Number: ${missing}`;
      }
    },
    "code": `#include <bits/stdc++.h>
using namespace std;
int main() {
    int n; cin >> n;
    int xr = 0, x;
    for (int i = 0; i <= n; ++i) xr ^= i;
    for (int i = 0; i < n; ++i) { cin >> x; xr ^= x; }
    cout << xr << '\n';
    return 0;
}`
  },
  {
    "id": "1.4",
    "unit": "Practical 1",
    "title": "Single Number III",
    "category": "Bit Manipulation",
    "lang": "cpp",
    "difficulty": "Medium",
    "leetcode": "260",
    "summary": "Find two unique numbers in an array where every other element appears twice.",
    "inputFormat": "n followed by n integers; exactly two values occur once and others occur twice.",
    "description": "Given an integer array nums where exactly two elements appear once and all others appear twice, find the two single elements. First XOR all elements to obtain (x ^ y). Then isolate the lowest set bit (diff = ext & -ext) which indicates a bit where x and y differ. Partition elements into two groups based on this bit to isolate both numbers.",
    "complexity": {
      "time": "O(n)",
      "space": "O(1)"
    },
    "testRunner": {
      "type": "array",
      "defaultInput": "1, 2, 1, 3, 2, 5",
      "inputLabel": "Enter numbers (each appearing twice except two):",
      "run": (input) => {
        let nums = input.split(',').map(s => parseInt(s.trim())).filter(n => !isNaN(n));
        let ext = 0;
        for (let num of nums) ext ^= num;
        let diff = ext & (-ext);
        let x = 0, y = 0;
        for (let num of nums) {
          if (num & diff) x ^= num;
          else y ^= num;
        }
        return `Input: [${nums.join(', ')}]\nIsolated Bit Mask: ${diff} (binary: 0b${(diff >>> 0).toString(2)})\nSingle Numbers: [${x}, ${y}]`;
      }
    },
    "code": `#include <bits/stdc++.h>
using namespace std;
int main() {
    int n; cin >> n;
    vector<int> nums(n);
    long long xr = 0;
    for (int &v : nums) { cin >> v; xr ^= v; }
    long long diff = xr & -xr, x = 0, y = 0;
    for (int v : nums) {
        if (v & diff) x ^= v;
        else y ^= v;
    }
    if (x > y) swap(x, y);
    cout << x << ' ' << y << '\n';
    return 0;
}`
  },
  {
    "id": "2.1",
    "unit": "Practical 2",
    "title": "Subsets (Power Set)",
    "category": "Recursion & Backtracking",
    "lang": "cpp",
    "difficulty": "Medium",
    "leetcode": "78",
    "summary": "Generate all possible subsets (the power set) of unique integers.",
    "inputFormat": "n followed by n integers. Prints every subset on a separate line in bitmask order ([], [1], [2], [1 2], [3], ...); the empty subset prints as an empty line.",
    "description": "Given an integer array nums of unique elements, return all possible subsets (the power set). Uses recursive backtracking exploring both branches at each index: excluding nums[i] or including nums[i], generating all 2^n combinations without duplicates.",
    "complexity": {
      "time": "O(2ⁿ)",
      "space": "O(n) recursion stack"
    },
    "testRunner": {
      "type": "array",
      "defaultInput": "1, 2, 3",
      "inputLabel": "Enter unique integers:",
      "run": (input) => {
        let nums = input.split(',').map(s => parseInt(s.trim())).filter(n => !isNaN(n));
        if (nums.length > 8) return "For performance, please enter 8 or fewer numbers.";
        let ans = [];
        function tra(i, rst) {
          if (i >= nums.length) {
            ans.push([...rst]);
            return;
          }
          tra(i + 1, rst);
          rst.push(nums[i]);
          tra(i + 1, rst);
          rst.pop();
        }
        tra(0, []);
        let formatted = ans.map(sub => `[${sub.join(', ')}]`).join(', ');
        return `Total Subsets (2^${nums.length} = ${ans.length}):\n${formatted}`;
      }
    },
    "code": `#include <bits/stdc++.h>
using namespace std;
int main() {
    int n; cin >> n;
    vector<int> a(n);
    for (int &x : a) cin >> x;
    // Subsets in bitmask order: [], [1], [2], [1 2], [3], [1 3], [2 3], [1 2 3]
    for (long long mask = 0; mask < (1LL << n); ++mask) {
        bool first = true;
        for (int j = 0; j < n; ++j) {
            if (mask >> j & 1) {
                if (!first) cout << ' ';
                cout << a[j];
                first = false;
            }
        }
        cout << '\n';
    }
    return 0;
}`
  },
  {
    "id": "2.2",
    "unit": "Practical 2",
    "title": "Permutations",
    "category": "Recursion & Backtracking",
    "lang": "cpp",
    "difficulty": "Medium",
    "leetcode": "46",
    "summary": "Generate all permutations of distinct elements using visited array backtracking.",
    "inputFormat": "n followed by n distinct integers. Prints each permutation on a separate line.",
    "description": "Given an array nums of distinct integers, return all the possible permutations. The algorithm uses a boolean visited array to track chosen elements, recursing until the temporary candidate array matches the size of nums, and backtracks by undoing choices.",
    "complexity": {
      "time": "O(n * n!)",
      "space": "O(n)"
    },
    "testRunner": {
      "type": "array",
      "defaultInput": "1, 2, 3",
      "inputLabel": "Enter distinct integers (max 5):",
      "run": (input) => {
        let nums = input.split(',').map(s => parseInt(s.trim())).filter(n => !isNaN(n));
        if (nums.length > 5) return "Please enter 5 or fewer items to avoid freezing.";
        let ans = [];
        let visited = new Array(nums.length).fill(false);
        let temp = [];
        function show() {
          if (temp.length === nums.length) {
            ans.push([...temp]);
            return;
          }
          for (let i = 0; i < nums.length; i++) {
            if (!visited[i]) {
              visited[i] = true;
              temp.push(nums[i]);
              show();
              visited[i] = false;
              temp.pop();
            }
          }
        }
        show();
        let formatted = ans.map(p => `[${p.join(', ')}]`).join('\n');
        return `Total Permutations (${nums.length}! = ${ans.length}):\n${formatted}`;
      }
    },
    "code": `#include <bits/stdc++.h>
using namespace std;
vector<int> a, cur;
vector<bool> used;
void generate() {
    if (cur.size() == a.size()) {
        for (int i = 0; i < (int)cur.size(); ++i) {
            if (i) cout << ' ';
            cout << cur[i];
        }
        cout << '\n';
        return;
    }
    for (int i = 0; i < (int)a.size(); ++i) {
        if (!used[i]) {
            used[i] = true; cur.push_back(a[i]);
            generate();
            cur.pop_back(); used[i] = false;
        }
    }
}
int main() {
    int n; cin >> n;
    a.resize(n); used.assign(n, false);
    for (int &x : a) cin >> x;
    generate();
    return 0;
}`
  },
  {
    "id": "3.1",
    "unit": "Practical 3",
    "title": "Asteroid Collision",
    "category": "Stack & Monotonic Queue",
    "lang": "cpp",
    "difficulty": "Medium",
    "leetcode": "735",
    "summary": "Simulate asteroid collisions where opposite direction asteroids crash by size.",
    "inputFormat": "n followed by n signed asteroid sizes.",
    "description": "Each asteroid's absolute value represents size, and sign represents direction (+ is right, - is left). A collision occurs only when a right-moving asteroid meets a left-moving asteroid. Utilizing a stack, we resolve collisions between the current left-moving asteroid and preceding right-moving asteroids until one survives or both explode.",
    "complexity": {
      "time": "O(n)",
      "space": "O(n)"
    },
    "testRunner": {
      "type": "array",
      "defaultInput": "5, 10, -5",
      "inputLabel": "Enter asteroid sizes/directions (+ right, - left):",
      "run": (input) => {
        let asteroids = input.split(',').map(s => parseInt(s.trim())).filter(n => !isNaN(n));
        let st = [];
        let logs = [];
        for (let curr of asteroids) {
          let alive = true;
          while (st.length > 0 && curr < 0 && st[st.length - 1] > 0) {
            let top = st[st.length - 1];
            if (Math.abs(top) < Math.abs(curr)) {
              logs.push(`Asteroid ${curr} destroys ${top}`);
              st.pop();
              continue;
            }
            if (Math.abs(top) === Math.abs(curr)) {
              logs.push(`Asteroid ${curr} and ${top} mutually destroy each other`);
              st.pop();
              alive = false;
              break;
            }
            logs.push(`Asteroid ${top} destroys ${curr}`);
            alive = false;
            break;
          }
          if (alive) {
            st.push(curr);
          }
        }
        return `Final Surviving Asteroids: [${st.join(', ')}]\n\nEvent Log:\n${logs.join('\n') || 'No collisions occurred.'}`;
      }
    },
    "code": `#include <bits/stdc++.h>
using namespace std;
int main() {
    int n; cin >> n;
    vector<int> a(n), st;
    for (int &x : a) cin >> x;
    for (int x : a) {
        bool alive = true;
        while (alive && x < 0 && !st.empty() && st.back() > 0) {
            if (abs(st.back()) < abs(x)) st.pop_back();
            else if (abs(st.back()) == abs(x)) { st.pop_back(); alive = false; }
            else alive = false;
        }
        if (alive) st.push_back(x);
    }
    for (int i = 0; i < (int)st.size(); ++i) {
        if (i) cout << ' ';
        cout << st[i];
    }
    cout << '\n';
    return 0;
}`
  },
  {
    "id": "3.2",
    "unit": "Practical 3",
    "title": "Trapping Rainwater",
    "category": "Stack & Monotonic Queue",
    "lang": "cpp",
    "difficulty": "Hard",
    "leetcode": "42",
    "summary": "Calculate total trapped rainwater above elevation bars using two pointers.",
    "inputFormat": "n followed by n non-negative heights.",
    "description": "Given n non-negative integers representing elevation bars, calculate how much water gets trapped after raining. The two-pointer approach maintains leftMax and rightMax. Since the trapped water at position i is min(leftMax, rightMax) - height[i], moving the pointer with the smaller maximum guarantees water trapped without requiring extra memory.",
    "complexity": {
      "time": "O(n)",
      "space": "O(1)"
    },
    "testRunner": {
      "type": "array",
      "defaultInput": "0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1",
      "inputLabel": "Enter elevation heights:",
      "run": (input) => {
        let height = input.split(',').map(s => parseInt(s.trim())).filter(n => !isNaN(n));
        if (height.length === 0) return "Please enter valid heights.";
        let left = 0, right = height.length - 1;
        let leftMax = height[left], rightMax = height[right];
        let water = 0;
        while (left < right) {
          if (leftMax < rightMax) {
            left++;
            leftMax = Math.max(leftMax, height[left]);
            water += leftMax - height[left];
          } else {
            right--;
            rightMax = Math.max(rightMax, height[right]);
            water += rightMax - height[right];
          }
        }
        return `Elevation Heights: [${height.join(', ')}]\nTotal Trapped Rainwater: ${water} units`;
      }
    },
    "code": `#include <bits/stdc++.h>
using namespace std;
int main() {
    int n; cin >> n;
    vector<long long> h(n);
    for (auto &x : h) cin >> x;
    if (n < 3) { cout << 0 << '\n'; return 0; }
    int l = 0, r = n - 1;
    long long leftMax = 0, rightMax = 0, water = 0;
    while (l < r) {
        if (h[l] < h[r]) {
            leftMax = max(leftMax, h[l]);
            water += leftMax - h[l++];
        } else {
            rightMax = max(rightMax, h[r]);
            water += rightMax - h[r--];
        }
    }
    cout << water << '\n';
    return 0;
}`
  },
  {
    "id": "4.1",
    "unit": "Practical 4",
    "title": "Sort Vowels in a String",
    "category": "Strings & Pattern Matching",
    "lang": "cpp",
    "difficulty": "Medium",
    "leetcode": "2785",
    "summary": "Sort all vowels in ASCII order while maintaining consonant positions.",
    "inputFormat": "one full line string.",
    "description": "Given a string s, sort vowels in non-decreasing order of ASCII values (order: 'A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u') while maintaining consonants in their exact positions. Solved efficiently in O(n) using frequency counting over the 10 vowels.",
    "complexity": {
      "time": "O(n)",
      "space": "O(1) (128-element ASCII table)"
    },
    "testRunner": {
      "type": "text",
      "defaultInput": "lEetcOde",
      "inputLabel": "Enter a string:",
      "run": (s) => {
        let freq = new Array(128).fill(0);
        let isVowel = new Array(128).fill(false);
        let vowels = "aeiouAEIOU";
        for (let v of vowels) isVowel[v.charCodeAt(0)] = true;
        for (let i = 0; i < s.length; i++) {
          let code = s.charCodeAt(i);
          if (isVowel[code]) freq[code]++;
        }
        let order = "AEIOUaeiou";
        let pos = 0;
        let arr = s.split('');
        for (let i = 0; i < arr.length; i++) {
          let code = arr[i].charCodeAt(0);
          if (isVowel[code]) {
            while (pos < order.length && freq[order.charCodeAt(pos)] === 0) {
              pos++;
            }
            arr[i] = order[pos];
            freq[order.charCodeAt(pos)]--;
          }
        }
        return `Input:  ${s}\nOutput: ${arr.join('')}`;
      }
    },
    "code": `#include <bits/stdc++.h>
using namespace std;
int main() {
    string s; getline(cin, s);
    if (!s.empty() && s.back() == '\r') s.pop_back();
    string order = "AEIOUaeiou";
    vector<int> freq(256, 0);
    vector<bool> vowel(256, false);
    for (char c : order) vowel[(unsigned char)c] = true;
    for (unsigned char c : s) if (vowel[c]) freq[c]++;
    int pos = 0;
    for (char &c : s) {
        unsigned char uc = (unsigned char)c;
        if (vowel[uc]) {
            while (pos < (int)order.size() && freq[(unsigned char)order[pos]] == 0) pos++;
            c = order[pos];
            freq[(unsigned char)order[pos]]--;
        }
    }
    cout << s << '\n';
    return 0;
}`
  },
  {
    "id": "4.2",
    "unit": "Practical 4",
    "title": "Wildcard Matching",
    "category": "Strings & Pattern Matching",
    "lang": "cpp",
    "difficulty": "Hard",
    "leetcode": "44",
    "summary": "Implement wildcard matching supporting '?' (single char) and '*' (any sequence).",
    "inputFormat": "string s on the first line and pattern p on the second line. '?' matches one character; '*' matches any sequence.",
    "description": "Given string s and pattern p, evaluate whether p matches the entire string s. '?' matches any single character, and '*' matches any sequence (including empty sequence). An optimal greedy two-pointer algorithm with back-tracking records star positions, achieving O(1) space.",
    "complexity": {
      "time": "O(m * n) worst case, O(n) average",
      "space": "O(1)"
    },
    "testRunner": {
      "type": "two_strings",
      "defaultInput": "adceb, *a*b",
      "inputLabel": "Enter string s, pattern p (e.g. adceb, *a*b):",
      "run": (input) => {
        let parts = input.split(',').map(s => s.trim());
        let s = parts[0] || "", p = parts[1] || "";
        let i = 0, j = 0, star = -1, match = 0;
        while (i < s.length) {
          if (j < p.length && (p[j] === '?' || p[j] === s[i])) {
            i++; j++;
          } else if (j < p.length && p[j] === '*') {
            star = j; match = i; j++;
          } else if (star !== -1) {
            j = star + 1; match++; i = match;
          } else {
            return `String: "${s}"\nPattern: "${p}"\nMatch Result: FALSE`;
          }
        }
        while (j < p.length && p[j] === '*') j++;
        let isMatch = (j === p.length);
        return `String: "${s}"\nPattern: "${p}"\nMatch Result: ${isMatch ? "TRUE (Matches!)" : "FALSE"}`;
      }
    },
    "code": `#include <bits/stdc++.h>
using namespace std;
int main() {
    string s, p;
    getline(cin, s); getline(cin, p);
    if (!s.empty() && s.back() == '\r') s.pop_back();
    if (!p.empty() && p.back() == '\r') p.pop_back();
    int i = 0, j = 0, star = -1, match = 0;
    while (i < (int)s.size()) {
        if (j < (int)p.size() && (p[j] == '?' || p[j] == s[i])) { i++; j++; }
        else if (j < (int)p.size() && p[j] == '*') { star = j; match = i; j++; }
        else if (star != -1) { j = star + 1; i = ++match; }
        else { cout << "false\n"; return 0; }
    }
    while (j < (int)p.size() && p[j] == '*') j++;
    cout << (j == (int)p.size() ? "true" : "false") << '\n';
    return 0;
}`
  },
  {
    "id": "4.3",
    "unit": "Practical 4",
    "title": "Longest Awesome Substring",
    "category": "Bit Manipulation",
    "lang": "cpp",
    "difficulty": "Hard",
    "leetcode": "1542",
    "summary": "Find the longest substring of digits that can be rearranged into a palindrome.",
    "inputFormat": "a string containing digits 0-9.",
    "description": "A digit substring can form a palindrome if and only if at most one digit appears an odd number of times. Using a 10-bit bitmask where each bit tracks the parity of digit (0-9) frequencies, we store the earliest occurrence of each mask. At each index, we check if the current mask or a mask differing by exactly one bit was seen earlier.",
    "complexity": {
      "time": "O(10 * n) = O(n)",
      "space": "O(2¹⁰) = O(1024) = O(1)"
    },
    "testRunner": {
      "type": "text",
      "defaultInput": "3242415",
      "inputLabel": "Enter digit string:",
      "run": (s) => {
        let dp = new Array(1024).fill(s.length);
        let res = 0, mask = 0;
        dp[0] = -1;
        for (let i = 0; i < s.length; i++) {
          mask ^= 1 << (s.charCodeAt(i) - 48);
          res = Math.max(res, i - dp[mask]);
          for (let j = 0; j <= 9; j++) {
            res = Math.max(res, i - dp[mask ^ (1 << j)]);
          }
          dp[mask] = Math.min(dp[mask], i);
        }
        return `Input Digit String: "${s}"\nLongest Awesome Substring Length: ${res}`;
      }
    },
    "code": `#include <bits/stdc++.h>
using namespace std;
int main() {
    string s; cin >> s;
    vector<int> first(1 << 10, (int)s.size() + 1);
    first[0] = -1;
    int mask = 0, ans = 0;
    for (int i = 0; i < (int)s.size(); ++i) {
        mask ^= 1 << (s[i] - '0');
        ans = max(ans, i - first[mask]);
        for (int b = 0; b < 10; ++b)
            ans = max(ans, i - first[mask ^ (1 << b)]);
        first[mask] = min(first[mask], i);
    }
    cout << ans << '\n';
    return 0;
}`
  },
  {
    "id": "5.1",
    "unit": "Practical 5",
    "title": "Daily Temperatures",
    "category": "Stack & Monotonic Queue",
    "lang": "cpp",
    "difficulty": "Medium",
    "leetcode": "739",
    "summary": "Compute wait days until a warmer day using an optimized jump pointer approach.",
    "inputFormat": "n followed by n temperatures.",
    "description": "Given daily temperatures T, return answer where answer[i] is the number of days to wait for a warmer temperature. This clever solution iterates backward from the end and reuses already computed jump distances in ans array, hopping directly across colder days in O(1) auxiliary memory.",
    "complexity": {
      "time": "O(n)",
      "space": "O(1) auxiliary"
    },
    "testRunner": {
      "type": "array",
      "defaultInput": "73, 74, 75, 71, 69, 72, 76, 73",
      "inputLabel": "Enter daily temperatures:",
      "run": (input) => {
        let T = input.split(',').map(s => parseInt(s.trim())).filter(n => !isNaN(n));
        let n = T.length;
        let ans = new Array(n).fill(0);
        for (let cur = n - 2; cur >= 0; cur--) {
          let next = cur + 1;
          while (next < n && T[next] <= T[cur]) {
            next += ans[next] ? ans[next] : n;
          }
          if (next < n) ans[cur] = next - cur;
        }
        return `Temperatures: [${T.join(', ')}]\nDays to wait:  [${ans.join(', ')}]`;
      }
    },
    "code": `#include <bits/stdc++.h>
using namespace std;
int main() {
    int n; cin >> n;
    vector<int> t(n), ans(n, 0), st;
    for (int &x : t) cin >> x;
    for (int i = 0; i < n; ++i) {
        while (!st.empty() && t[i] > t[st.back()]) {
            ans[st.back()] = i - st.back();
            st.pop_back();
        }
        st.push_back(i);
    }
    for (int i = 0; i < n; ++i) {
        if (i) cout << ' ';
        cout << ans[i];
    }
    cout << '\n';
    return 0;
}`
  },
  {
    "id": "5.2",
    "unit": "Practical 5",
    "title": "Defuse the Bomb",
    "category": "Two Pointers & Sliding Window",
    "lang": "cpp",
    "difficulty": "Easy",
    "leetcode": "1652",
    "summary": "Decrypt circular array by sliding window sum of next or previous k elements.",
    "inputFormat": "n k followed by n circular-array values.",
    "description": "Given circular array code and key k: if k > 0, replace code[i] with sum of next k numbers; if k < 0, replace with sum of previous |k| numbers; if k == 0, replace with 0. Maintained using a sliding window of size |k| updated circularly in O(n) total time.",
    "complexity": {
      "time": "O(n)",
      "space": "O(n)"
    },
    "testRunner": {
      "type": "code_k",
      "defaultInput": "5, 7, 1, 4 | k = 3",
      "inputLabel": "Enter array | k (e.g. 5, 7, 1, 4 | k = 3):",
      "run": (input) => {
        let parts = input.split('|');
        let code = parts[0].split(',').map(s => parseInt(s.trim())).filter(n => !isNaN(n));
        let k = 3;
        if (parts[1]) {
          let match = parts[1].match(/-?\d+/);
          if (match) k = parseInt(match[0]);
        }
        let len = code.length;
        let result = new Array(len).fill(0);
        if (k === 0) return `Decrypted Code (k=0): [${result.join(', ')}]`;
        let start = 1, end = k, sum = 0;
        if (k < 0) {
          start = len - Math.abs(k);
          end = len - 1;
        }
        for (let i = start; i <= end; i++) sum += code[i];
        for (let i = 0; i < len; i++) {
          result[i] = sum;
          sum -= code[(start) % len];
          sum += code[(end + 1) % len];
          start++;
          end++;
        }
        return `Input Code: [${code.join(', ')}], k = ${k}\nDecrypted Code: [${result.join(', ')}]`;
      }
    },
    "code": `#include <bits/stdc++.h>
using namespace std;
int main() {
    int n, k; cin >> n >> k;
    vector<long long> code(n), ans(n, 0);
    for (auto &x : code) cin >> x;
    if (k != 0) {
        // window for index i: positions i+1..i+k (k>0) or i+k..i-1 (k<0), circular
        long long sum = 0;
        int a = abs(k);
        for (int j = 1; j <= a; ++j) sum += code[((k > 0 ? j : -j) % n + n) % n];
        for (int i = 0; i < n; ++i) {
            ans[i] = sum;
            int removeIdx, addIdx;
            if (k > 0) { removeIdx = (i + 1) % n; addIdx = (i + k + 1) % n; }
            else       { removeIdx = ((i + k) % n + n) % n; addIdx = i; }
            sum -= code[removeIdx];
            sum += code[addIdx];
        }
    }
    for (int i = 0; i < n; ++i) cout << (i ? " " : "") << ans[i];
    cout << '\n';
    return 0;
}`
  },
  {
    "id": "6.1",
    "unit": "Practical 6",
    "title": "Number of Provinces",
    "category": "Graph Theory & BFS/DFS",
    "lang": "cpp",
    "difficulty": "Medium",
    "leetcode": "547",
    "summary": "Count connected components in an undirected graph from adjacency matrix.",
    "inputFormat": "n followed by an n x n adjacency matrix.",
    "description": "Given an n x n adjacency matrix isConnected where isConnected[i][j] = 1 indicates direct connection between city i and city j, count total provinces (connected components). Explores each unvisited node via Depth First Search (DFS), marking all transitively connected cities as visited.",
    "complexity": {
      "time": "O(n²)",
      "space": "O(n)"
    },
    "testRunner": {
      "type": "matrix",
      "defaultInput": "[[1,1,0],[1,1,0],[0,0,1]]",
      "inputLabel": "Enter adjacency matrix (JSON):",
      "run": (input) => {
        try {
          let matrix = JSON.parse(input);
          let n = matrix.length;
          let visit = new Array(n).fill(false);
          let count = 0;
          function dfs(node) {
            visit[node] = true;
            for (let i = 0; i < n; i++) {
              if (matrix[node][i] === 1 && !visit[i]) dfs(i);
            }
          }
          for (let i = 0; i < n; i++) {
            if (!visit[i]) {
              count++;
              dfs(i);
            }
          }
          return `Cities: ${n}\nConnected Components (Provinces): ${count}`;
        } catch (e) {
          return "Invalid matrix JSON format. Example: [[1,1,0],[1,1,0],[0,0,1]]";
        }
      }
    },
    "code": `#include <bits/stdc++.h>
using namespace std;
void dfs(int u, vector<vector<int>>& g, vector<bool>& seen) {
    seen[u] = true;
    for (int v = 0; v < (int)g.size(); ++v)
        if (g[u][v] && !seen[v]) dfs(v, g, seen);
}
int main() {
    int n; cin >> n;
    vector<vector<int>> g(n, vector<int>(n));
    for (auto &row : g) for (int &x : row) cin >> x;
    vector<bool> seen(n, false);
    int provinces = 0;
    for (int i = 0; i < n; ++i)
        if (!seen[i]) { provinces++; dfs(i, g, seen); }
    cout << provinces << '\n';
    return 0;
}`
  },
  {
    "id": "6.2",
    "unit": "Practical 6",
    "title": "Course Schedule (Cycle Detection)",
    "category": "Graph Theory & BFS/DFS",
    "lang": "cpp",
    "difficulty": "Medium",
    "leetcode": "207",
    "summary": "Determine if courses can be finished using DFS directed cycle detection.",
    "inputFormat": "number of courses n, number of prerequisite pairs m, then m pairs (course prerequisite).",
    "description": "Determines whether all courses can be finished given prerequisite dependencies. If the dependency graph has a cycle, completing all courses is impossible. Uses DFS with two tracking arrays: `vis` (nodes processed across any traversal) and `pathVis` (nodes currently in the active recursion call stack). A cycle exists if an edge points to a node currently in `pathVis`.",
    "complexity": {
      "time": "O(V + E)",
      "space": "O(V + E)"
    },
    "testRunner": {
      "type": "courses",
      "defaultInput": "2 courses, prerequisites: [[1,0]]",
      "inputLabel": "Enter courses & prerequisites (e.g. 2 courses, [[1,0]]):",
      "run": (input) => {
        let numCourses = 2;
        let prereqs = [[1, 0]];
        let prereqMatch = input.match(/\[\s*\[.*\]\s*\]/);
        let numMatch = input.match(/\b\d+\b/);
        if (numMatch) numCourses = parseInt(numMatch[0]);
        if (prereqMatch) {
          try { prereqs = JSON.parse(prereqMatch[0]); } catch(e){}
        }
        let adj = Array.from({length: numCourses}, () => []);
        for (let p of prereqs) {
          adj[p[1]].push(p[0]);
        }
        let vis = new Array(numCourses).fill(0);
        let pathVis = new Array(numCourses).fill(0);
        function dfs(node) {
          vis[node] = 1;
          pathVis[node] = 1;
          for (let next of adj[node]) {
            if (!vis[next]) {
              if (dfs(next)) return true;
            } else if (pathVis[next]) {
              return true;
            }
          }
          pathVis[node] = 0;
          return false;
        }
        let cycle = false;
        for (let i = 0; i < numCourses; i++) {
          if (!vis[i]) {
            if (dfs(i)) { cycle = true; break; }
          }
        }
        return `Num Courses: ${numCourses}\nPrerequisites: ${JSON.stringify(prereqs)}\nCycle Detected: ${cycle ? "YES (Deadlock!)" : "NO (Can complete all!)"}\nCan Finish: ${!cycle}`;
      }
    },
    "code": `#include <bits/stdc++.h>
using namespace std;
int main() {
    int n, m; cin >> n >> m;
    vector<vector<int>> adj(n);
    vector<int> indeg(n, 0);
    for (int i = 0; i < m; ++i) {
        int course, prerequisite; cin >> course >> prerequisite;
        adj[prerequisite].push_back(course);
        indeg[course]++;
    }
    queue<int> q;
    for (int i = 0; i < n; ++i) if (indeg[i] == 0) q.push(i);
    int done = 0;
    while (!q.empty()) {
        int u = q.front(); q.pop();
        done++;
        for (int v : adj[u]) if (--indeg[v] == 0) q.push(v);
    }
    cout << (done == n ? "true" : "false") << '\n';
    return 0;
}`
  },
  {
    "id": "7.1",
    "unit": "Practical 7",
    "title": "Champagne Tower",
    "category": "Dynamic Programming",
    "lang": "cpp",
    "difficulty": "Medium",
    "leetcode": "799",
    "summary": "Simulate pyramid champagne flow and determine fullness of glass (r, c).",
    "inputFormat": "poured query_row query_glass.",
    "description": "Glasses stacked in a pyramid shape: row 0 has 1 glass, row 1 has 2 glasses, etc. Each glass holds 1 cup. When poured, excess liquid (dp[j] - 1.0) / 2.0 spills equally to glass (j) and glass (j + 1) in the row below. Optimized using 1D DP calculated in reverse row traversal.",
    "complexity": {
      "time": "O(query_row²)",
      "space": "O(query_row)"
    },
    "testRunner": {
      "type": "champagne",
      "defaultInput": "poured: 2, row: 1, glass: 1",
      "inputLabel": "Enter poured, row, glass (e.g. poured: 2, row: 1, glass: 1):",
      "run": (input) => {
        let nums = input.match(/\d+/g);
        let poured = nums && nums[0] ? parseInt(nums[0]) : 2;
        let query_row = nums && nums[1] ? parseInt(nums[1]) : 1;
        let query_glass = nums && nums[2] ? parseInt(nums[2]) : 1;
        let dp = new Array(query_row + 1).fill(0);
        dp[0] = poured;
        for (let i = 0; i < query_row; i++) {
          for (let j = i; j >= 0; j--) {
            let excess = (dp[j] - 1.0) / 2.0;
            if (excess > 0) {
              dp[j + 1] += excess;
              dp[j] = excess;
            } else {
              dp[j] = 0;
            }
          }
        }
        let ans = Math.min(1.0, dp[query_glass]);
        return `Poured: ${poured} cups\nTarget Glass: Row ${query_row}, Glass ${query_glass}\nFullness Level: ${(ans * 100).toFixed(1)}% (${ans.toFixed(4)} cups)`;
      }
    },
    "code": `#include <bits/stdc++.h>
using namespace std;
int main() {
    int poured, query_row, query_glass;
    cin >> poured >> query_row >> query_glass;
    vector<double> dp(query_row + 2, 0.0);
    dp[0] = poured;
    for (int row = 0; row < query_row; ++row) {
        for (int j = row; j >= 0; --j) {
            double excess = max(0.0, (dp[j] - 1.0) / 2.0);
            dp[j] = excess;
            dp[j + 1] += excess;
        }
    }
    cout << fixed << setprecision(6) << min(1.0, dp[query_glass]) << '\n';
    return 0;
}`
  },
  {
    "id": "7.2",
    "unit": "Practical 7",
    "title": "House Robber",
    "category": "Dynamic Programming",
    "lang": "cpp",
    "difficulty": "Medium",
    "leetcode": "198",
    "summary": "Maximize robbed money along houses without alerting alarm on adjacent houses.",
    "inputFormat": "n followed by n non-negative house values.",
    "description": "Each house has money stashed. You cannot rob two adjacent houses. At each house i, the decision is either skip it (keep previous maximum) or rob it (current value + maximum up to house i - 2). Space is optimized to O(1) using two variables `prev` and `prev2`.",
    "complexity": {
      "time": "O(n)",
      "space": "O(1)"
    },
    "testRunner": {
      "type": "array",
      "defaultInput": "2, 7, 9, 3, 1",
      "inputLabel": "Enter cash amounts in each house:",
      "run": (input) => {
        let A = input.split(',').map(s => parseInt(s.trim())).filter(n => !isNaN(n));
        if (A.length === 0) return "Please enter valid house amounts.";
        let prev2 = 0, prev = 0, cur = 0;
        let trace = [];
        for (let i = 0; i < A.length; i++) {
          cur = Math.max(prev, A[i] + prev2);
          trace.push(`House ${i} ($${A[i]}): Max profit = $${cur}`);
          prev2 = prev;
          prev = cur;
        }
        return `House Cash: [${A.join(', ')}]\nMaximum Stolen Profit: $${cur}\n\nStep-by-step DP:\n${trace.join('\n')}`;
      }
    },
    "code": `#include <bits/stdc++.h>
using namespace std;
int main() {
    int n; cin >> n;
    long long prev2 = 0, prev = 0;
    for (int i = 0; i < n; ++i) {
        long long x; cin >> x;
        long long cur = max(prev, prev2 + x);
        prev2 = prev;
        prev = cur;
    }
    cout << prev << '\n';
    return 0;
}`
  }
];
