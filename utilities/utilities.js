// hide by id 
const hideById = (id) => document.getElementById(id).classList.add('hidden')

// remove hide by id 
const showById = (id) => document.getElementById(id).classList.remove('hidden')

hideById('navbar')
hideById('all-content')
hideById('faq')
hideById('all-dynamic-container')

// get Element by id function 
const getById = (id) => document.getElementById(id)
// create Element by tag name function 
const createByTagName = (tagname) => document.createElement(tagname)

// Vocabulary Pronunciation (Japanese)
function pronounceWord(word) {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = 'en-EN';
  window.speechSynthesis.speak(utterance);
}