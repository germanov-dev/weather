import Link from 'next/link';
import Search from '../Search/Search';
import Dropdown from '../Dropdown/Dropdown';
import styles from '../../styles/Header.module.css';
import Image from 'next/image';

const Header = (props) => {
	let dropdown = props.query != '' ? <Dropdown clicked={props.clicked} /> : '';
	return (
		<header className={styles.Header}>
			<Link href='/'>
				<a className={styles.Logo}>
					<Image src='/logo.png' width={200} height={200} />
				</a>
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
