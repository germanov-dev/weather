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
		const weatherAPI = `https://api.darksky.net/forecast/d090ad71e840a71b480a0e2443977dab/${lat},${long}?units=${units}`;
		const response = await fetch(weatherAPI, {
			credentials: false,
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
			},
		});

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
