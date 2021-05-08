import React from 'react'

export const LanguagePicker = (props) => (
    <div>
      	<span>language:</span>
		&nbsp;
	  	<select 
	  		value={props.language}
			onChange={(e) => props.onLanguageChange(e.target.value)}
	   	>
			<option value ="eng">eng</option>				  
			<option value ="fr">fr</option>			  
		</select>
    </div>
)


