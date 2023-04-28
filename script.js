//your code here
function countLetters() {
  // Get the text from the textbox
  const text = document.getElementById('evaluatedText').value;

  // Get the length of the text
  const length = text.length;

  // Update the letter count in the h3 tag
  document.getElementById('letterCount').innerText = length;
}