# Bitcoin Price Viewer and Currency Converter

This small web application is designed to display real-time Bitcoin prices and provide a currency conversion calculator. The project utilises Next.js for the front-end and fetches Bitcoin prices from the [Blockchain.info API](https://www.blockchain.com/api/exchange_rates_api).

## Deployment
The app is deployed on Vercel and can be accessed at https://bitcoin-test-sigma.vercel.app/.

## Features

**Bitcoin Price Display:**

- The main page of the application shows a table with real-time Bitcoin prices for various currencies.

- The app retrieves the latest Bitcoin prices from the Blockchain.info ticker endpoint and displays them in a user-friendly table format on the main page. The information is updated regularly to ensure accurate and current prices.

- To view the Bitcoin prices, simply visit the app's home page. The displayed table provides the 15-minute, last, buy, and sell prices for each supported currency.

**Currency Converter:** 

- Users can input an amount in their local currency and use the built-in calculator to convert it to Bitcoin.

- To access the currency converter, click on the calculator button located in the top-right corner of the page. The converter allows users to input a specific amount of a currency and convert it to Bitcoin. It's important to note the following constraints:

  - Users can only select currencies returned by the first endpoint.
  - Conversion of 0 or negative values is not allowed.
  - The form displays appropriate error messages if the user violates any constraints.
  - The conversion process is handled using the Blockchain.info toBTC endpoint.

 **Accessibility and UI Enhancements:** 
 
 - For an enhanced user experience, the app provides a dark and light mode toggle button in the top-right corner. Users can choose their preferred mode for improved accessibility.

  
## Getting Started

Follow these steps to run the project locally:

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/arazabedi/bitcoin-test.git
    ```

2. **Install Dependencies:**

    ```bash
    cd bitcoin-test
    npm install
    ```

3. **Run the Development Server:**

    ```bash
    npx next dev
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

- Visit the main page to view real-time Bitcoin prices for various currencies.
- Use the currency converter to input an amount and convert it to Bitcoin.

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for building web applications.
- [Blockchain.info API](https://www.blockchain.com/api/exchange_rates_api) - API for fetching real-time Bitcoin prices.

## Contributing

If you find a bug, have a feature request, or would like to contribute, please open an issue or create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---

Feel free to customize the README to fit the specific details of your project. Include any additional information you think is relevant or necessary.
