import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

import styles from '../../styles/DaysWeather.module.css';

import Spinner from '../Spinner/Spinner';
import Day from '../Day/Day';

const DaysWeather = (props) => {
	const { loading, weatherIcon, cityName, countryName } = useContext(
		AppContext
	);

	const formatDate = (timestamp) => {
		const date = new Date(timestamp * 1000);
		const day = date.getDay();

		switch (day) {
			case 0:
				return 'Sunday';

			case 1:
				return 'Monday';

			case 2:
				return 'Tuesday';

			case 3:
				return 'Wednesday';

			case 4:
				return 'Thursday';

			case 5:
				return 'Friday';

			case 6:
				return 'Saturday';
			default:
				return;
		}
	};

	const daysWeather = !loading ? (
		<div className={styles.Content}>
			<div className={styles.Days}>
				{props.location.daily.data.map((day, index) => {
					let dayOfWeek = formatDate(day.time);

					if (index == 0) {
						dayOfWeek = 'Today';
					}

					if (index == 1) {
						dayOfWeek = 'Tomorrow';
					}

					return (
						<Day
							key={day.time}
							id={day.time}
							day={dayOfWeek}
							icon={weatherIcon(day.icon)}
							temperatureHigh={Math.round(day.temperatureHigh)}
							temperatureLow={Math.round(day.temperatureLow)}
							summary={day.summary}
							precipProbability={day.precipProbability}
							countryName={countryName}
							cityName={cityName}
						/>
					);
				})}
			</div>
		</div>
	) : (
		<div className={styles.Content}>
			<Spinner />
		</div>
	);

	return <div>{daysWeather}</div>;
};

export default DaysWeather;
