# 💸 CodeBudget

**Estimate your code's cloud execution cost before you deploy.**

CodeBudget is a professional CLI tool designed to bridge the gap between algorithm complexity and cloud billing. It analyzes your JavaScript functions, determines their Big O complexity, and estimates the real-world monetary cost of running them on AWS Lambda.

---

## 🌍 Language / Язык
- [English](#-english-version)
- [Русский](#-русская-версия)

---

## 🇺🇸 English Version

### 🚀 Why CodeBudget?
In the era of serverless computing, **code efficiency = money**. 
A sub-optimal nested loop might look harmless in local development, but at a scale of 100M requests, it can cost thousands of dollars in surprise bills. 

CodeBudget helps you:
- **Visualize Costs:** See the dollar sign next to your function names.
- **FinOps Ready:** Identify expensive logic during the coding phase, not the billing phase.
- **Complexity Analysis:** Automatically detect `O(1)`, `O(n)`, `O(n^2)` and more.

### 🧠 How It Works
1. **AST Parsing:** Uses `acorn` to build an Abstract Syntax Tree of your source code.
2. **Static Analysis:** Traverses the tree to identify function declarations and measure loop nesting depth.
3. **Cloud Pricing Engine:** Applies current AWS Lambda rates ($0.0000166667 per GB-second) to provide a cost estimate.

### 🛠 Installation & Usage
```bash
npm install
npm run build
npm start <path-to-your-file.js>
```

### 👶 ELI5 (Explain Like I'm 5)
Imagine your computer is a toy car that runs on batteries. 
- Some commands (like "turn on lights") use very little battery.
- Some commands (like "pull a heavy trailer") drain the battery fast.
**CodeBudget** is like a pair of magic glasses. When a programmer looks at their commands through these glasses, they can see exactly how many "candies" (money) they will have to spend on "batteries" to run that command. It helps them choose the cheapest way to play!

---

## 🇷🇺 Русская Версия

### 🚀 Зачем нужен CodeBudget?
В эпоху облачных вычислений **эффективность кода = деньги**.
Неоптимальный вложенный цикл может выглядеть безобидно при локальной разработке, но на масштабе в 100 миллионов запросов он может стоить компании тысячи долларов лишних расходов.

CodeBudget помогает:
- **Визуализировать расходы:** Увидеть знак доллара рядом с именами ваших функций.
- **Инструмент FinOps:** Выявлять дорогую логику на этапе написания кода, а не после получения счета.
- **Анализ сложности:** Автоматически определять `O(1)`, `O(n)`, `O(n^2)` и другие уровни сложности.

### 🧠 Как это работает?
1. **AST Парсинг:** Использует библиотеку `acorn` для построения абстрактного синтаксического дерева вашего кода.
2. **Статический анализ:** Обходит дерево, находит объявления функций и измеряет глубину вложенности циклов.
3. **Ценовой движок:** Применяет актуальные тарифы AWS Lambda ($0.0000166667 за ГБ-секунду) для расчета стоимости.

### 🛠 Установка и запуск
1. **Клонируйте репозиторий:**
   ```bash
   git clone https://github.com/zomurb/CodeBudget.git
   cd CodeBudget
   ```
2. **Установите зависимости:**
   ```bash
   npm install
   ```
3. **Соберите проект:**
   ```bash
   npm run build
   ```
4. **Запустите анализ:**
   ```bash
   npm start <путь-к-файлу.js>
   ```

Пример:
```bash
npm start tests/sample.js
```

### 👶 Объяснение для 5-летнего
Представь, что твой компьютер — это игрушечная машинка на батарейках.
- Одни команды (например, «включи фары») тратят совсем чуть-чуть батарейки.
- Другие команды (например, «вези тяжелый прицеп») тратят батарейку очень быстро.
**CodeBudget** — это как волшебные очки. Программист надевает их, смотрит на свои команды и сразу видит, сколько «конфет» (денег) ему придется потратить на «батарейки», чтобы эта команда выполнилась. Это помогает ему выбирать самые экономные команды для игры!

---

## 🗺 Roadmap
- [ ] **Python Support:** Expanding analysis to `.py` files.
- [ ] **Multi-Cloud:** Support for Google Cloud Functions and Azure Functions.
- [ ] **VS Code Extension:** Real-time cost hints in your editor.

---

## 👤 Author
**zomurb**
- GitHub: [@zomurb](https://github.com/zomurb)
- Telegram: [@zomurb](https://t.me/zomurb)

## 📄 License
This project is licensed under the ISC License.
