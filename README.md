# 🚀 Competitive Programming Laboratory Practicals

An interactive, modern static web platform converted directly from **`CP Practicals.pdf`**. Contains 17 algorithm solutions (Practicals 1.1 through 7.2) implemented in **C++** and **Java**, featuring time/space complexity analysis, one-click code copy, instant search, category filters, and an **in-browser interactive test runner**.

![GitHub Pages Deployment](https://img.shields.io/badge/Deployment-GitHub%20Pages-success?style=for-the-badge&logo=github)
![C++](https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white)
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![LeetCode](https://img.shields.io/badge/LeetCode-FFA116?style=for-the-badge&logo=leetcode&logoColor=black)

---

## 🌟 Key Features

- **🎨 Modern Glassmorphism UI**: High-contrast dark mode default with sleek light mode toggle, responsive layout, smooth micro-interactions.
- **⚡ Instant Filter & Search**: Search by practical ID (`1.1`), problem title, topic, or LeetCode number with keyboard shortcut `/` or `Ctrl+K`.
- **💻 Syntax Highlighted Code Viewer**: Clean code blocks with line numbers and one-click copy with animated feedback.
- **🧪 Interactive Algorithm Playground**: Test algorithms with custom inputs directly in the browser and trace execution step-by-step.
- **📑 Table of Contents Sidebar**: Quick jump navigation with real-time active scroll-spy indicator.
- **📄 Original Document Link**: Built-in download button for the original `CP Practicals.pdf`.
- **🚀 Ready for GitHub Pages**: Automatic CI/CD deployment via GitHub Actions (`.github/workflows/deploy.yml`) as well as compatibility with the `/docs` folder.

---

## 📋 Comprehensive Problem Directory

| Practical | Problem Title | LeetCode | Topic / Category | Language | Complexity |
| :---: | :--- | :---: | :--- | :---: | :---: |
| **Prac 1.1** | [Factorial of Trailing Zeroes](https://leetcode.com/problems/factorial-trailing-zeroes/) | #172 | Math & Number Theory | Java | $O(\log_5 n)$ time, $O(1)$ space |
| **Prac 1.2** | Extended Euclidean Distance | Bézout | Math & Number Theory | C++ | $O(\log(\min(a, b)))$ time |
| **Prac 1.3** | [Missing Number](https://leetcode.com/problems/missing-number/) | #268 | Bit Manipulation | C++ | $O(n)$ time, $O(1)$ space |
| **Prac 1.4** | [Single Number III](https://leetcode.com/problems/single-number-iii/) | #260 | Bit Manipulation | C++ | $O(n)$ time, $O(1)$ space |
| **Prac 2.1** | [Subsets](https://leetcode.com/problems/subsets/) | #78 | Recursion & Backtracking | C++ | $O(2^n)$ time, $O(n)$ space |
| **Prac 2.2** | [Permutations](https://leetcode.com/problems/permutations/) | #46 | Recursion & Backtracking | C++ | $O(n \cdot n!)$ time, $O(n)$ space |
| **Prac 3.1** | [Asteroid Collision](https://leetcode.com/problems/asteroid-collision/) | #735 | Stack & Monotonic Queue | C++ | $O(n)$ time, $O(n)$ space |
| **Prac 3.2** | [Trapping Rainwater](https://leetcode.com/problems/trapping-rain-water/) | #42 | Stack & Monotonic Queue | C++ | $O(n)$ time, $O(1)$ space |
| **Prac 4.1** | [Sort Vowels in a String](https://leetcode.com/problems/sort-vowels-in-a-string/) | #2785 | Strings & Pattern Matching | C++ | $O(n)$ time, $O(1)$ space |
| **Prac 4.2** | [Wildcard Matching](https://leetcode.com/problems/wildcard-matching/) | #44 | Strings & Pattern Matching | C++ | $O(s \cdot p)$ time, $O(1)$ space |
| **Prac 4.3** | [Longest Awesome Substring](https://leetcode.com/problems/longest-awesome-substring/) | #1542 | Bit Manipulation | C++ | $O(10 \cdot n)$ time, $O(1024)$ space |
| **Prac 5.1** | [Daily Temperatures](https://leetcode.com/problems/daily-temperatures/) | #739 | Stack & Monotonic Queue | C++ | $O(n)$ time, $O(1)$ space |
| **Prac 5.2** | [Defuse the Bomb](https://leetcode.com/problems/defuse-the-bomb/) | #1652 | Two Pointers & Sliding Window | Java | $O(n)$ time, $O(n)$ space |
| **Prac 6.1** | [Number of Provinces](https://leetcode.com/problems/number-of-provinces/) | #547 | Graph Theory & BFS/DFS | Java | $O(n^2)$ time, $O(n)$ space |
| **Prac 6.2** | [Course Schedule](https://leetcode.com/problems/course-schedule/) | #207 | Graph Theory & BFS/DFS | C++ | $O(V + E)$ time, $O(V + E)$ space |
| **Prac 7.1** | [Champagne Tower](https://leetcode.com/problems/champagne-tower/) | #799 | Dynamic Programming | Java | $O(\text{row}^2)$ time, $O(\text{row})$ space |
| **Prac 7.2** | [House Robber](https://leetcode.com/problems/house-robber/) | #198 | Dynamic Programming | C++ | $O(n)$ time, $O(1)$ space |

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
