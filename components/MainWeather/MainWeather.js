import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

import styles from '../../styles/MainWeather.module.css';

import Spinner from '../Spinner/Spinner';

const MainWeather = (props) => {
	const {
		loading,
		cityName,
		countryName,
		units,
		weatherIcon,
		formatTime,
		windDirection,
	} = useContext(AppContext);

	console.log(props.location);

	const mainWeather = !loading ? (
		<div className={styles.Current}>
			<div>
				<div className={styles.Location}>
					{cityName}, {countryName}
				</div>

				<div className={styles.Icon}>
					{weatherIcon(props.location.currently.icon)}
				</div>

				<div className={styles.Summary}>{props.location.currently.summary}</div>

				<div className={styles.Temperature}>
					{Math.round(props.location.currently.temperature)}°
				</div>
			</div>

			<ul>
				<li>
					<div>
						<span>Sunrise</span>

						<strong>
							{formatTime(props.location.daily.data[0].sunriseTime)}
						</strong>
					</div>

					<div>
						<span>Sunset</span>

						<strong>
							{formatTime(props.location.daily.data[0].sunsetTime)}
						</strong>
					</div>
				</li>

				<li>
					<div>
						<span>Chance of Rain</span>

						<strong>
							{Math.round(props.location.currently.precipProbability * 100)}%
						</strong>
					</div>

					<div>
						<span>Humidity</span>

						<strong>
							{Math.round(props.location.currently.humidity * 100)}%
						</strong>
					</div>
				</li>

				<li>
					<div>
						<span>Wind</span>

						<strong>
							<span>{windDirection(props.location.currently.windBearing)}</span>
							{Math.round(props.location.currently.windSpeed)}{' '}
							{units == 'us' ? 'mph' : 'm/s'}
						</strong>
					</div>
					<div>
						<span>Feels Like</span>

						<strong>
							{Math.round(props.location.currently.apparentTemperature)}°
						</strong>
					</div>
				</li>

				<li>
					<div>
						<span>Precipation</span>

						<strong>
							{Math.round(props.location.currently.precipIntensity * 10)} cm
						</strong>
					</div>

					<div>
						<span>Pressure</span>

						<strong>{Math.round(props.location.currently.pressure)} hPa</strong>
					</div>
				</li>

				<li>
					<div>
						<span>Visibility</span>

						<strong>
							{Math.round(props.location.currently.visibility)}{' '}
							{units == 'us' ? 'miles' : 'km'}
						</strong>
					</div>

					<div>
						<span>UV Index</span>

						<strong>{props.location.currently.uvIndex}</strong>
					</div>
				</li>
			</ul>
		</div>
	) : (
		<div className={styles.Current}>
			<Spinner />
		</div>
	);

	return <div>{mainWeather}</div>;
};

export default MainWeather;
