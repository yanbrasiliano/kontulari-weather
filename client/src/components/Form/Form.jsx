import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';
import local from '../../list.txt';
import style from './Suggestion.css';





let list = [];
fetch(local).then(
	t => t.text()).then(t => {
		list = t.split('\n');

	})


const Form = ({ submitSearch }) => {






	const [location, setLocation] = useState('');
	const [suggestions, setSuggestions] = useState([]);

	const changeHandler = (txt) => {




		if (txt.length > 0) {
			const filter = list.filter((cidade, index) => {


				return cidade.toUpperCase().match(txt.toUpperCase());
			}



			)
			setLocation(txt);
			setSuggestions(filter.slice(0,10));
			
		} else {
			setLocation(txt);
			setSuggestions([]);


		}
	}

	const selectSuggestion = (text) => {

		setLocation(text);
		setSuggestions([]);
	}
	const onSubmit = e => {
		e.preventDefault();
		if (!location || location === '') return;
		submitSearch(location);
	};

	return (


		<form onSubmit={onSubmit}>
			{suggestions && suggestions.map((value, index) => {

				return (<div className={`suggestion col-md-12 justify-content-md-center`} key={index} onClick={() => selectSuggestion(value)}>


					{value}

				</div>)


			})}
			<input

				aria-label="location"
				type="text"
				className={`${styles.input} form-control`}
				placeholder="Pesquise sua cidade"
				required
				value={location}
				onChange={e => changeHandler(e.target.value)}

			/>

			<button type="submit" className={styles.button} onClick={onSubmit}>
				PESQUISAR

			</button>
		</form>
	);
};

Form.propTypes = {
	submitSearch: PropTypes.func.isRequired,
};

export default Form;
