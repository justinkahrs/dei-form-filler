# Form Filler

This project automates form filling using Puppeteer and the GoogleGenAI (Gemini API). The script navigates to a designated webpage, generates realistic and structured data via AI, and fills out the form fields automatically.

## Setup Instructions

1. **Generate Gemini API Key:**
   - Visit [Google AI Studio API Key Generator](https://aistudio.google.com/apikey) to generate your Gemini API key.
   - Open the `formfill.js` file and replace the placeholder `"YOUR_KEY_HERE"` with your generated key.

2. **Install Dependencies:**
   - Run the following command to install the necessary packages:
     ```
     npm i
     ```
   - If you encounter issues with Chrome installation for Puppeteer, install Chrome using:
     ```
     npx puppeteer browsers install chrome
     ```

3. **Running the Script:**
   - To run the form filler, execute:
     ```
     npm run resist
     ```
   - **Optional:** If you want the form to auto-submit:
     - Uncomment the code that clicks the submit button in `formfill.js`.
   - **Optional:** To run in headless mode (without a visible browser window), change the Puppeteer launch configuration in `formfill.js` by setting `headless: true`.

## Script Details

- **formfill.js**
  - **Purpose:** Navigates to the target web form, generates data using Gemini API, fills out the form fields, and optionally submits the form.
  - **Data Generation:** The AI generates a realistic email address, a school name, a valid US zipcode, and a satirical description about diversity, equity, and inclusion.
  - **Form Interaction:** The generated data is filled into corresponding form fields using Puppeteer.

- **package.json**
  - Lists project dependencies such as `puppeteer` and `@google/genai`.
  - Defines the custom script `resist` to run the form filler.

## Additional Notes

- **Security:** Keep your Gemini API key secure and do not share it publicly.
- **Customization:** Adjust the form field selectors in `formfill.js` if the target webpage uses different IDs or classes.
- **Puppeteer Configuration:** Modify settings like `headless` mode or timeouts as needed based on your testing requirements.

Enjoy automating your form filling tasks!