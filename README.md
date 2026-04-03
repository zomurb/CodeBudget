# 💸 CodeBudget

**Estimate your code's cloud execution cost before you deploy.**

CodeBudget is a professional CLI tool designed to bridge the gap between algorithm complexity and cloud billing. It analyzes your JavaScript functions, determines their Big O complexity, and estimates the real-world monetary cost of running them on AWS Lambda.

[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](https://opensource.org/licenses/ISC)
[![Author: zomurb](https://img.shields.io/badge/Author-zomurb-blue.svg)](https://github.com/zomurb)
[![Telegram](https://img.shields.io/badge/Telegram-Contact-blue.svg)](https://t.me/zomurb)

---

## 🚀 Why CodeBudget?

In the era of serverless computing, **code efficiency = money**. 
A sub-optimal nested loop might look harmless in local development, but at a scale of 100M requests, it can cost thousands of dollars in surprise bills. 

CodeBudget helps you:
- **Visualize Costs:** See the dollar sign next to your function names.
- **FinOps Ready:** Identify expensive logic during the coding phase, not the billing phase.
- **Complexity Analysis:** Automatically detect `O(1)`, `O(n)`, `O(n^2)` and more.

## 🛠 Installation

```bash
git clone https://github.com/zomurb/CodeBudget.git
cd CodeBudget
npm install
npm run build
```

## 💻 Usage

Run the analysis on any JavaScript file:

```bash
npm start <path-to-your-file.js>
```

### Example Output:
```text
=== CODEBUDGET ESTIMATION REPORT ===
File: sample.js
------------------------------------
Function: matrixMultiply
- Complexity: O(n^2)
- Est. Duration: 110ms
- Memory: 128MB
- Est. Cost (per 1M calls): $0.4292 USD
------------------------------------
```

## 🧠 How It Works

1. **AST Parsing:** Uses `acorn` to build an Abstract Syntax Tree of your source code.
2. **Static Analysis:** Traverses the tree to identify function declarations and measure loop nesting depth.
3. **Complexity Heuristics:** Maps AST patterns to time-complexity models.
4. **Cloud Pricing Engine:** Applies current AWS Lambda rates (Duration + Invocations) to provide a cost estimate.

## 🗺 Roadmap

- [ ] **Python Support:** Expanding analysis to `.py` files.
- [ ] **Multi-Cloud:** Support for Google Cloud Functions and Azure Functions.
- [ ] **VS Code Extension:** Real-time cost hints in your editor.
- [ ] **CI/CD Integration:** Fail builds if execution cost exceeds a budget.

---

## 👤 Author

**zomurb**
- GitHub: [@zomurb](https://github.com/zomurb)
- Telegram: [@zomurb](https://t.me/zomurb)

## 📄 License

This project is licensed under the ISC License.
