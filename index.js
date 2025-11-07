import express from "express";
import axios from "axios";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// EJS setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "templates"));

// Body parser
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log("Incoming:", req.method, req.url);
  next();
});


// GET: show empty form
app.get("/", (req, res) => {
  res.render("index", {
    countryName: null,
    currencyName: null,
    currencyCode: null,
    currencySymbol: null,
    error: null,
  });
});


// POST: handle form submit and call API
app.post("/", async (req, res) => {
  const country = req.body.country?.trim();

  console.log("POST / hit, body:", req.body);  // <--- check this first

  if (!country) {
    return res.render("index", {
      countryName: null,
      currencyName: null,
      currencyCode: null,
      currencySymbol: null,
      error: "Please enter a country name.",
    });
  }

  try {
    const apiUrl =
      "https://restcountries.com/v3.1/name/" +
      encodeURIComponent(country) +
      "?fullText=true";

    const response = await axios.get(apiUrl);

    // console.log("API response data:", response.data);  // <--- this is what you expect

    const countryData = response.data[0];

    const currencies = countryData.currencies; // object
    const code = Object.keys(currencies)[0];   // e.g. "USD"
    const currency = currencies[code];

    res.render("index", {
      countryName: countryData.name.common,
      currencyName: currency.name,
      currencyCode: code,
      currencySymbol: currency.symbol,
      error: null,
    });
  } catch (err) {
    console.error(err.message);
    res.render("index", {
      countryName: null,
      currencyName: null,
      currencyCode: null,
      currencySymbol: null,
      error: "Country not found or API error.",
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
