// hide by id 
const hideById = (id) => document.getElementById(id).classList.add('hidden')

// remove hide by id 
const showById = (id) => document.getElementById(id).classList.remove('hidden')
hideById('navbar')
hideById('all-content')
hideById('faq')
hideById('all-dynamic-container')
hideById('spinner')

// get Element by id function 
const getById = (id) => document.getElementById(id)
// create Element by tag name function 
const createByTagName = (tagname) => document.createElement(tagname)

// Vocabulary Pronunciation (Japanese)
function pronounceWord(word) {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = 'en-EN';
  utterance.rate = 0.75;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}
// spinner
const showSpinner = () => {
  showById('spinner')
  hideById('all-dynamic-container')
}
const hideSpinner = () => {
  hideById('spinner')
  showById('all-dynamic-container')
}
