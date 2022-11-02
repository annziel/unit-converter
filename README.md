## Unit Converter - Scrimba Solo Project

### Short description and what were the requirements:
It is the app that converts between different lengths, volumes, and mass units whenever a button is clicked. **Click [here](https://annziel.github.io/unit-converter/) to use it!**
	
I built this project after the third (and last) module of Learn JavaScript for free Course on Scrimba. To follow Figma design, I removed the arrows showing up by default in the `<input type="number">` element. Another requirement was to round the numbers to three decimal places. After researching an optimal way to do that, I ended up using the `.toFixed()` method. I took many opportunities to create clear, succinct, and reusable code.

### My customizations beyond the course material:
- Restrict the accepted input values to positive numbers with up to three digits
- Display units in the correct plural or singular form, e.g., 1 meter but 3 meters
- Converse after pressing the enter key
- Clear the input field after the conversion

### What it looks like:
| Before Conversion | After Conversion |
| --- | --- |
| <p align="middle"> <img width="100%" alt="unit converter empty input" src="https://user-images.githubusercontent.com/115597522/195952147-575ad420-2930-4602-94c9-709dab0e6953.png"> </p>| <p align="middle"> <img width="100%" alt="unit converter after conversion" src="https://user-images.githubusercontent.com/115597522/195954349-48f07363-6106-4b6b-8672-3f0f086bbbdd.png">
 </p>
