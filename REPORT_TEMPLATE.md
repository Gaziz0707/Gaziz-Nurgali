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
| Monthly income | USD$ | Total money earned per month |
| Monthly expenses | USD$ | Total money spent per month |
| Monthly savings | USD$ | Amount of money saved during the month |

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


- If saving rate < 5% → Poor saving habits
- If saving rate is between 5% and 10% → Good financial management
- If saving rate ≥ 10% → Excellent financial discipline

Additionally:
 - If balance < 0  – The user is spending more than they earn.
 - If balance ≥ 0 – The user has a positive monthly balance.


I chose these ranges based on general personal finance recommendations. Financial advisors often recommend setting aside at least 10% of monthly income to build a financial safety net and ensure long-term stability. A savings rate below 5% may indicate a person is saving too little and may be at financial risk.
A range of 5% to 10% indicates a moderate level of financial discipline—the person is trying to save, but this may not be enough for serious goals or unexpected situations.
Savings of 10% or more reflect a responsible approach to finances and a commitment to long-term financial stability.


---

## 5. Output

  It shows:
  
  - A personalized message, such as:
  “Hello, [Name]!”
  - The calculated monthly balance (income − expenses).
  - The calculated saving rate as a percentage. 
  - The financial category based on the saving rate (Poor, Good, or Excellent financial discipline).
    
Example
- Hello, Gaziz!
- Your monthly balance is: $250
- Your saving rate is: 9%
- Financial status: Good


---

## 6. Edge Cases / Unusual Inputs

What happens if:

- The program performs basic data validation before performing calculations.
- If the user leaves any field blank, the program displays a message asking the user to fill in all fields.
- If the monthly income is zero, the program indicates that the income must be greater than zero to calculate the savings percentage.
- If the user enters negative values, the program displays an error message, as income, expenses, and savings cannot be negative within the -scope of this calculator.


---

## 7. How to Run the Project

1. Download or clone repository  
2. Open `index.html` in browser  
3. Enter input values  
4. Click calculate button  

---

## 8. AI Usage (If Used)

Did you use AI tools?  
(Yes / No)
-Yes, I used AI tools 

I turned to the AI ​​for tips on project structure, JavaScript syntax, and the overall logic of the calculator. I learned some things I didn't know (there were many, especially in JS) through chatgpt and gemini. When I didn't understand something, I asked the AI ​​or watched YouTube tutorials. I also clarified how to properly implement data validation and HTML output. Sometimes there were errors in the code that were so difficult to understand, I also turned to the AI. I also turned to the AI ​​for how to convert string values ​​to numbers using Number(), and how to use the toFixed() method for rounding percentages. I'd forgotten the values ​​that should be used in CSS, like cursor or padding, but now that I've practiced, I've remembered them.
I also adapted the code to my own calculation formula, changed the category ranges, configured the conditional logic, and fully understood how variables, calculations, and conditional operators work
I now understand my code and can explain how data is retrieved, indicators are calculated, if/else conditions are applied, and the results are displayed on the page. Along the way, I've learned how the relationship between HTML and JavaScript works, how data flows from input to processing to output, and how the program makes decisions based on conditions.
After receiving hints, I adapted the code to my own formula, chose my own category ranges, simplified the structure, and fully understood the program's logic.

---

## 9. Reflection

What did you learn from this assignment?

(2–4 sentences)
