import Link from 'next/link';
import Search from '../Search/Search';
import Dropdown from '../Dropdown/Dropdown';
import styles from '../../styles/Header.module.css';

const Header = (props) => {
	let dropdown =
		props.query != '' ? (
			<Dropdown
				dropdownItems={props.dropdownItems}
				clicked={props.clicked}
				dropdownLoading={props.dropdownLoading}
			/>
		) : (
			''
		);
	return (
		<header className={styles.Header}>
			<Link href='/'>
				<a className={styles.Logo}>Logo</a>
			</Link>

			<Search
				getLocation={props.getLocation}
				updateSearch={props.updateSearch}
				search={props.search}
				getSearch={props.getSearch}
				updateCheckbox={props.updateCheckbox}
			/>

			{dropdown}
		</header>
	);
};

export default Header;
