# 🚀 Competitive Programming Laboratory Practicals (HackerRank Style)

An interactive, modern static web platform converted directly from **`CP Practicals.pdf`** and updated with **HackerRank-style standalone C++17 solutions** (`all_pages.txt`). Contains 17 algorithm solutions (Practicals 1.1 through 7.2) implemented with `main()`, standard stream I/O (`cin` / `cout`), explicit input format specifications, time/space complexity analysis, one-click code copy, instant search, category filters, and an **in-browser interactive test runner**.

![GitHub Pages Deployment](https://img.shields.io/badge/Deployment-GitHub%20Pages-success?style=for-the-badge&logo=github)
![C++17](https://img.shields.io/badge/C++17-Standalone-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white)
![HackerRank Style](https://img.shields.io/badge/Style-HackerRank%20Ready-00EA64?style=for-the-badge&logo=hackerrank&logoColor=black)
![LeetCode](https://img.shields.io/badge/LeetCode-FFA116?style=for-the-badge&logo=leetcode&logoColor=black)

---

## 🌟 Key Features

- **⚡ HackerRank & Exam Ready**: Every solution is a standalone C++17 program with `main()`, `#include <bits/stdc++.h>`, `cin >>`, and `cout <<`—ready to copy-paste into competitive coding portals or compile directly.
- **📥 Explicit Input Formats**: Clear specification of required input formatting directly on each card and code header.
- **🎨 Modern Glassmorphism UI**: High-contrast dark mode default with sleek light mode toggle, responsive layout, smooth micro-interactions.
- **⚡ Instant Filter & Search**: Search by practical ID (`1.1`), problem title, topic, or LeetCode number with keyboard shortcut `/`.
- **💻 Syntax Highlighted Code Viewer**: Clean C++ code blocks with line highlighting and one-click copy with animated feedback.
- **🧪 Interactive Algorithm Playground**: Test algorithms with custom inputs directly in the browser and trace execution step-by-step.
- **📑 Table of Contents Sidebar**: Quick jump navigation with real-time active scroll-spy indicator.
- **🚀 Ready for GitHub Pages**: Automatic CI/CD deployment via GitHub Actions (`.github/workflows/deploy.yml`) as well as compatibility with the `/docs` folder.

---

## 📋 Comprehensive Problem Directory

| Practical | Problem Title | LeetCode | Topic / Category | Style | Complexity |
| :---: | :--- | :---: | :--- | :---: | :---: |
| **Prac 1.1** | [Factorial of Trailing Zeroes](https://leetcode.com/problems/factorial-trailing-zeroes/) | #172 | Math & Number Theory | C++17 Standalone | $O(\log_5 n)$ time, $O(1)$ space |
| **Prac 1.2** | Extended Euclidean Distance (GCD) | Bézout | Math & Number Theory | C++17 Standalone | $O(\log(\min(a, b)))$ time |
| **Prac 1.3** | [Missing Number](https://leetcode.com/problems/missing-number/) | #268 | Bit Manipulation | C++17 Standalone | $O(n)$ time, $O(1)$ space |
| **Prac 1.4** | [Single Number III](https://leetcode.com/problems/single-number-iii/) | #260 | Bit Manipulation | C++17 Standalone | $O(n)$ time, $O(1)$ space |
| **Prac 2.1** | [Subsets](https://leetcode.com/problems/subsets/) | #78 | Recursion & Backtracking | C++17 Standalone | $O(2^n)$ time, $O(n)$ space |
| **Prac 2.2** | [Permutations](https://leetcode.com/problems/permutations/) | #46 | Recursion & Backtracking | C++17 Standalone | $O(n \cdot n!)$ time, $O(n)$ space |
| **Prac 3.1** | [Asteroid Collision](https://leetcode.com/problems/asteroid-collision/) | #735 | Stack & Monotonic Queue | C++17 Standalone | $O(n)$ time, $O(n)$ space |
| **Prac 3.2** | [Trapping Rainwater](https://leetcode.com/problems/trapping-rain-water/) | #42 | Stack & Monotonic Queue | C++17 Standalone | $O(n)$ time, $O(1)$ space |
| **Prac 4.1** | [Sort Vowels in a String](https://leetcode.com/problems/sort-vowels-in-a-string/) | #2785 | Strings & Pattern Matching | C++17 Standalone | $O(n)$ time, $O(1)$ space |
| **Prac 4.2** | [Wildcard Matching](https://leetcode.com/problems/wildcard-matching/) | #44 | Strings & Pattern Matching | C++17 Standalone | $O(s \cdot p)$ time, $O(1)$ space |
| **Prac 4.3** | [Longest Awesome Substring](https://leetcode.com/problems/longest-awesome-substring/) | #1542 | Bit Manipulation | C++17 Standalone | $O(10 \cdot n)$ time, $O(1024)$ space |
| **Prac 5.1** | [Daily Temperatures](https://leetcode.com/problems/daily-temperatures/) | #739 | Stack & Monotonic Queue | C++17 Standalone | $O(n)$ time, $O(1)$ space |
| **Prac 5.2** | [Defuse the Bomb](https://leetcode.com/problems/defuse-the-bomb/) | #1652 | Two Pointers & Sliding Window | C++17 Standalone | $O(n)$ time, $O(n)$ space |
| **Prac 6.1** | [Number of Provinces](https://leetcode.com/problems/number-of-provinces/) | #547 | Graph Theory & BFS/DFS | C++17 Standalone | $O(n^2)$ time, $O(n)$ space |
| **Prac 6.2** | [Course Schedule](https://leetcode.com/problems/course-schedule/) | #207 | Graph Theory & BFS/DFS | C++17 Standalone | $O(V + E)$ time, $O(V + E)$ space |
| **Prac 7.1** | [Champagne Tower](https://leetcode.com/problems/champagne-tower/) | #799 | Dynamic Programming | C++17 Standalone | $O(\text{row}^2)$ time, $O(\text{row})$ space |
| **Prac 7.2** | [House Robber](https://leetcode.com/problems/house-robber/) | #198 | Dynamic Programming | C++17 Standalone | $O(n)$ time, $O(1)$ space | | $O(n)$ time, $O(1)$ space |

---

## 🛠️ Project Structure

```text
├── index.html                  # Main static HTML5 page
├── style.css                   # Modern CSS design system (Dark/Light mode, Glassmorphism)
├── app.js                      # UI Controller, search, filtering, and playground runner
├── data.js                     # Structured practicals data, test cases & explanations
├── CP Practicals.pdf           # Original PDF reference document
├── docs/                       # Mirrored static files for GitHub Pages (/docs deployment)
│   ├── index.html
│   ├── style.css
│   ├── app.js
│   ├── data.js
│   └── CP Practicals.pdf
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Actions deployment to GitHub Pages
├── .gitignore
└── README.md
```

---

## 🚢 How to Deploy to GitHub Pages

### Option 1: Automatic Deployment with GitHub Actions (Recommended)

1. Create a new repository on GitHub (e.g., `cp-practicals`).
2. Push this repository to GitHub:
   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git branch -M main
   git push -u origin main
   ```
3. Go to **Settings** > **Pages** in your GitHub repository.
4. Under **Build and deployment** > **Source**, select **GitHub Actions**.
5. The workflow in `.github/workflows/deploy.yml` will automatically build and publish your site!

### Option 2: Deploy from `/docs` or Branch Root

1. In your GitHub repository, navigate to **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
3. Select branch: `main` and folder: `/ (root)` or `/docs`.
4. Click **Save**. Your site will be live at `https://<your-username>.github.io/<your-repo-name>/` in seconds!

---

## 💻 Local Preview

Run any lightweight HTTP server in the repository root:

```bash
# Using Python
python -m http.server 8080

# Using Node.js (npx)
npx serve .
```

Open [http://localhost:8080](http://localhost:8080) in your browser.
