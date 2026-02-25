# Personal Assignment 1 Report Template

## 1. Project Overview

**Project Name:**  
Monthly Money Control Calculator


**What does your calculator do?**  
This calculator helps users understand their monthly financial situation. It calculates the difference between income and expenses and determines the percentage of income saved. Based on the results, it classifies the user’s financial habits as poor, good, or excellent.


---

## 2. Inputs

List and explain all inputs you used.

| Input Name | Unit | What it Represents |
|---|---|---|
| Example: Monthly income | USD$ | Total money earned per month |
| Example: Monthly expenses | USD$ | Total money spent per month |
| Example: Monthly savings | USD$ | Amount of money saved during the month |

Explain in words:  
I chose these parameters because they represent the basic elements of personal finance management. Monthly income shows how much money a person earns, expenses show how much they spend, and savings show how much they can save. These parameters are important because they allow the calculator to determine financial balance and savings levels, which helps assess financial discipline.

---

## 3. Process (Calculation Logic)

**Formula or Calculation Used:**  


Formula:  
SavingRate = weight / (height in meters)^2
Balance = Income - Expenses 

**Steps:**
1. Get input values from HTML  
2. Convert values if needed (example: cm → meters)  
3. Perform calculation  
4. Store result in variable  

---

## 4. Conditional Logic (if / else)

The program interprets the financial situation based on the saving rate percentage and balance.


If saving rate < 5% → Poor saving habits
If saving rate is between 5% and 10% → Good financial management
If saving rate ≥ 10% → Excellent financial discipline

Additionally:
 If balance < 0  – The user is spending more than they earn.
 If balance ≥ 0 – The user has a positive monthly balance.


Explain why you chose these ranges (if using real model, mention it).

---

## 5. Output

What does your program show to the user?

- Calculated value  
- Category or interpretation  
- Personalized message (if used)  
- Optional: binary output (if implemented)

---

## 6. Edge Cases / Unusual Inputs

What happens if:

- User enters zero?  
- User enters negative number?  
- User leaves input empty?  

Explain how your program handles this.

---

## 7. Optional Features (If You Added Any)

Examples:
- Binary conversion  
- Extra calculations  
- Extra UI features  
- Validation messages  

---

## 8. How to Run the Project

1. Download or clone repository  
2. Open `index.html` in browser  
3. Enter input values  
4. Click calculate button  

---

## 9. AI Usage (If Used)

Did you use AI tools?  
(Yes / No)

If yes, explain briefly:
- What you asked AI for  
- What you modified yourself  
- What you fully understand now  

---

## 10. Reflection

What did you learn from this assignment?

(2–4 sentences)
