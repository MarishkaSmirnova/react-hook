import React, { useState } from 'react'
import './App.css'
import { LanguagePicker } from './components/LanguagePicker'
import { UIStrings } from './components/UIStrings'
import strings from './data/strings'

function App() {
	const [language, setLanguage] = useState('eng')
	
  	return (
		<div className="App">
			<LanguagePicker 
				language={language} 
				onLanguageChange={setLanguage} 
			/>
			<UIStrings strings={strings[language]} />
		</div>
	)
}

export default App

