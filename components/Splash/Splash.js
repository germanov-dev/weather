import Image from 'next/image';

import styles from '../../styles/Splash.module.css';

const Splash = () => {
	return (
		<div className={styles.Splash}>
			<Image src='/logo.png' width={200} height={200} />
		</div>
	);
};

export default Splash;
