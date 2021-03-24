import styles from '../../styles/Footer.module.css';

const Footer = () => {
	return (
		<footer className={styles.Footer}>
			<a target='_blank' href='https://www.darksky.net'>
				Powered by DarkSky
			</a>
		</footer>
	);
};

export default Footer;
