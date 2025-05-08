import https from "https";
import Readline from "readline";
import chalk from "chalk";

const rl = Readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

const apiKey = `c0e4651455bb1b1672349f0d`;
const url = `https://v6.exchangerate-api.com/v6/c0e4651455bb1b1672349f0d/latest/USD`;

const convertCurrency = (amount, rate) => {
    return (amount * rate).toFixed(2)
}

https.get(url, (response) => {
    let data = "";
    response.on("data", (chunk) => {
        data += chunk;
    });

    response.on("end", () => {
        const rates = JSON.parse(data).conversion_rates;

        // amount = 90
        // currency = inr
        // 90usd = how much inr
        // 1usd = 84.9667 inr
        // 90usd = ?

        // 90 * 84.9667

        rl.question("Enter the amount in USD: ", (amount) => {
            rl.question("Enter the target currency (e.g., INR, EUR, NPR): ", (currency) => {
                const rate = rates[currency.toUpperCase()];
                if (rate) {
                    console.log(chalk.blue.bgRed.bold(`${amount} USD is approximately ${convertCurrency(amount, rate)} ${currency}`));
                }else {
                    console.log(`Invalid Currency Code`);
                }
                rl.close()
            })
        })

    })
})