const puppeteer = require("puppeteer");
const { GoogleGenAI } = require("@google/genai");

(async () => {
  try {
    // Launch Puppeteer (set headless: false for debugging)
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
    });
    const page = await browser.newPage();

    // Navigate to the page with your form
    await page.goto("https://enddei.ed.gov");

    // Gemini API configuration using GoogleGenAI package
    const geminiApiKey = "YOUR_KEY_HERE";
    const ai = new GoogleGenAI({ apiKey: geminiApiKey });

    // Generate content using the AI model with structured JSON output
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `Generate a realistic email address, a school name, a valid US zipcode, and a short satrical description in JSON format. The description should be a funny thing someone might say about how "bad" diversity, equity, and inclusion is.
Use the following JSON schema:
{
  "email": string,
  "school": string,
  "zipcode": string,
  "description": string
}
Return only valid JSON.`,
      config: {
        responseMimeType: "application/json",
      },
    });

    console.log({ generatedText: response.text });
    const output = response.text;
    const parsedData = JSON.parse(output);
    const email = parsedData.email;
    const school = parsedData.school;
    const zipcode = parsedData.zipcode;
    const description = parsedData.description;

    // Fill out the form fields using your selectors.
    await page.type("#email", email);
    await page.type("#location", school);
    await page.type("#zipcode", zipcode);
    await page.type("#description", description);

    // Submit the form (adjust the selector as necessary).
    // await page.click("#submitButton");

    // Optionally wait for navigation or a confirmation element.
    await page.waitForNavigation();

    console.log("Form submitted successfully with Gemini-generated data.");
    await browser.close();
  } catch (error) {
    console.error("An error occurred:", error);
  }
})();
