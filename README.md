# Country Currency Finder

A simple Node.js + Express app that lets you enter a **country name** and returns the country’s **currency name, code, and symbol** using the [REST Countries API](https://restcountries.com/).

---

## Live Locally Only

This app is meant to be run locally on your machine (e.g. at `http://localhost:3000`).

---

## Getting Started

### 1. Prerequisites

Make sure you have:

- [Node.js](https://nodejs.org/) (v16+ recommended)
- npm (comes with Node)

Check versions:

```bash
node -v
npm -v


2. clone the repository
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>

3. Install Dependencies

From inside the project folder:

npm install

4. Run the App

Start the server:

node index.js

You should see something like:

Server running on port 3000


Open your browser and go to:

http://localhost:3000

5. Using the App

Open http://localhost:3000 in your browser.

You’ll see a form titled “What is the Country Currency?”.

Type a country name (for example: Nigeria, Canada, Japan).

Click “Find currency”.

The page will reload and show something like:

Currency of Nigeria: Nigerian naira (NGN), symbol: ₦


If the country is not found or the API fails, an error message will be displayed.
