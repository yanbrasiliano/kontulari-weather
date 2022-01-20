import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';
import local from '../../list.txt';




function convertList() {
	let list = [];
	fetch(local).then(
		t => t.text()).then(t => {
			list = t.split('\n');
			
		}); return list;
}
const words = convertList();
const Form = ({ submitSearch }) => {
	const [location, setLocation] = useState('');

	const [suggestions, setSuggestions] = useState('');

	const changeHandler = (txt) => {
		console.log(txt);

		setLocation(txt);

	}
	console.log(words);

	const onSubmit = e => {
		e.preventDefault();
		if (!location || location === '') return;
		submitSearch(location);
	};

	return (
		<form onSubmit={onSubmit}>
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
