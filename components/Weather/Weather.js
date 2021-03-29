import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../context/AppContext';

import styles from '../../styles/WeatherBlock.module.css';

import MainWeather from '../MainWeather/MainWeather';
import DaysWeather from '../DaysWeather/DaysWeather';

const Weather = () => {
	const {
		long,
		lat,
		units,
		setLoading,
		location,
		setLocation,
		reverseGeocoding,
		setClassBackground,
	} = useContext(AppContext);

	useEffect(() => {
		reverseGeocoding();
		getLocationData();
	}, [lat, long, units]);

	const getLocationData = async () => {
		const API = `${process.env.REACT_APP_WEATHER_API_KEY}`;

		const weatherAPI = `https://api.darksky.net/forecast/${API}/${lat},${long}?units=${units}`;
		const response = await fetch(weatherAPI);

		if (response.ok) {
			const data = await response.json();
			setLocation(data);
			setClassBackground(data.currently.icon);
			setLoading(false);
		}
	};

	return (
		<main className={styles.WeatherBlock}>
			<MainWeather location={location} />

			<DaysWeather location={location} />
		</main>
	);
};

export default Weather;
