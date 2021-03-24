import styles from '../../styles/Search.module.css';
import Image from 'next/image';

const Search = (props) => {
	return (
		<div className={styles.Search}>
			<form onSubmit={props.getSearch}>
				<input
					id='autocomplete'
					type='text'
					placeholder='Search'
					onChange={props.updateSearch}
					value={props.search}
					autoComplete='off'
				/>
			</form>

			<button onClick={props.clicked} onClick={props.getLocation}>
				<Image src='/location.svg' width={50} height={50} />
			</button>

			<span className={styles.Switcher}>
				<input
					type='checkbox'
					id='switcher-1'
					onChange={props.updateCheckbox}
				/>
				<label htmlFor='switcher-1'></label>
			</span>
		</div>
	);
};

export default Search;
