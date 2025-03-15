// hide by id 
const hideById = (id) => document.getElementById(id).classList.add('hidden')

// remove hide by id 
const showById = (id) => document.getElementById(id).classList.remove('hidden')

hideById('login-page')
// hideById('navbar')

// get Element by id function 
const getById = (id) => document.getElementById(id)
// create Element by tag name function 
const createByTagName = (tagname) => document.createElement(tagname)

hideById('all-dynamic-container')

// Vocabulary Pronunciation 
function pronounceWord(word) {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-EN'; // Japanese
    window.speechSynthesis.speak(utterance);
  }