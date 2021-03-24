import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

import styles from '../../styles/Hour.module.css';

const Hour = (props) => {
	const { formatTime, weatherIcon, units, windDirection } = useContext(
		AppContext
	);

	return (
		<div className={styles.Hour}>
			<div className={styles.Time}>{formatTime(props.time)}</div>

			<div className={styles.Icon}>{weatherIcon(props.icon)}</div>

			<div className={styles.Summary}>{props.summary}</div>

			<div>
				<span>Temperature</span>

				<strong>{Math.round(props.temp)}°</strong>
			</div>

			<div>
				<span>Feels Like</span>
				<strong>{Math.round(props.feels)}°</strong>
			</div>

			<div>
				<span>Chance of Rain</span>
				<strong>{Math.round(props.chance * 100)}%</strong>
			</div>

			<div>
				<span>Precipation</span>
				<strong>{Math.round(props.precip * 10)} cm</strong>
			</div>

			<div>
				<span>Humidiy</span>
				<strong>{Math.round(props.humidity * 100)}%</strong>
			</div>

			<div>
				<span>Wind</span>
				<strong>
					{`${windDirection(props.windBearing)} ${Math.round(
						props.windSpeed
					)} ${units == 'us' ? 'mph' : 'm/s'}`}
				</strong>
			</div>

			<div>
				<span>Cloud Cover</span>
				<strong>{Math.round(props.cloudCover * 100)}%</strong>
			</div>

			<div>
				<span>UV Index</span>
				<strong>{props.uvIndex}</strong>
			</div>

			<div>
				<span>Pressure</span>
				<strong>{Math.round(props.pressure)} hPa</strong>
			</div>
		</div>
	);
};

export default Hour;
