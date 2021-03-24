import styles from '../../styles/Day.module.css';
import Link from 'next/link';

const Day = (props) => {
	return (
		<Link href={`/day/${props.id.toString()}`}>
			<a className={styles.Day}>
				<div className={styles.DayHolder}>
					<div className={styles.DayOfWeek}>{props.day}</div>

					<div className={styles.Icon}>{props.icon}</div>

					<div className={styles.TemperatureHigh}>{props.temperatureHigh}°</div>

					<div className={styles.TemperatureLow}>{props.temperatureLow}°</div>
				</div>
			</a>
		</Link>
	);
};

export default Day;
