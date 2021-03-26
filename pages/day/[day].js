import { useContext, useEffect, useState, useRef } from 'react';
import { AppContext } from '../../context/AppContext';
import { useRouter } from 'next/router';
import Image from 'next/image';

import Spinner from '../../components/Spinner/Spinner';

import styles from '../../styles/DetailedWeather.module.css';

const DetailedWeather = () => {
	const {
		lat,
		long,
		units,
		cityName,
		countryName,
		reverseGeocoding,
		weatherIcon,
		formatTime,
		windDirection,
		weather,
		setWeather,
		setClassBackground,
	} = useContext(AppContext);
	const [loading, setLoading] = useState(true);
	const [hourIndex, setHourIndex] = useState(0);
	const router = useRouter();
	const { day } = router.query;
	const chartSelector = useRef();
	const chartContainer = useRef();
	const chartBlock = useRef();

	useEffect(() => {
		if (day != undefined) {
			getDetailedWeather();
			reverseGeocoding();
		}
	}, [day, units]);

	const getDetailedWeather = async () => {
		const res = await fetch(
			`https://api.darksky.net/forecast/d090ad71e840a71b480a0e2443977dab/${lat},${long},${day}?units=${units}`,
			{
				credentials: false,
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		if (res.ok) {
			const data = await res.json();

			setWeather(data);
			setClassBackground(data.hourly.icon);
			setLoading(false);
		}
	};

	const formatDate = (timestamp) => {
		const fullDate = new Date(timestamp * 1000);
		let day = fullDate.getDay();
		const date = fullDate.getDate();
		let month = fullDate.getMonth();
		const year = fullDate.getFullYear();

		switch (day) {
			case 0:
				day = 'Sunday';
				break;
			case 1:
				day = 'Monday';
				break;
			case 2:
				day = 'Tuesday';
				break;
			case 3:
				day = 'Wednesday';
				break;
			case 4:
				day = 'Thursday';
				break;
			case 5:
				day = 'Friday';
				break;
			case 6:
				day = 'Saturday';
			default:
				break;
		}

		switch (month) {
			case 0:
				month = 'January';
				break;
			case 1:
				month = 'February';
				break;
			case 2:
				month = 'March';
				break;
			case 3:
				month = 'April';
				break;
			case 4:
				month = 'May';
				break;
			case 5:
				month = 'June';
				break;
			case 6:
				month = 'July';
				break;
			case 7:
				month = 'August';
				break;
			case 8:
				month = 'September';
				break;
			case 9:
				month = 'October';
				break;
			case 10:
				month = 'November';
				break;
			case 11:
				month = 'December';
				break;
			default:
				break;
		}

		return `${day}, ${date} ${month} ${year}`;
	};

	const moonPhaseHandler = (phase) => {
		switch (true) {
			case phase > 0 && phase <= 0.12:
				return <Image src='/moon-phase-1.svg' width={21} height={21} />;
			case phase > 0.12 && phase <= 0.25:
				return <Image src='/moon-phase-2.svg' width={21} height={21} />;
			case phase > 0.25 && phase <= 0.37:
				return <Image src='/moon-phase-3.svg' width={21} height={21} />;
			case phase > 0.37 && phase <= 0.5:
				return <Image src='/moon-phase-4.svg' width={21} height={21} />;
			case phase > 0.5 && phase <= 0.62:
				return <Image src='/moon-phase-5.svg' width={21} height={21} />;
			case phase > 0.62 && phase <= 0.75:
				return <Image src='/moon-phase-6.svg' width={21} height={21} />;
			case phase > 0.75 && phase <= 0.87:
				return <Image src='/moon-phase-7.svg' width={21} height={21} />;
			case phase > 0.87 && phase <= 1:
				return <Image src='/moon-phase-8.svg' width={21} height={21} />;
			default:
				break;
		}
	};

	const mouseMoveSelector = (event) => {
		chartSelector.current.style.left = `${
			event.pageX - chartBlock.current.getBoundingClientRect().left
		}px`;
	};

	const dotMouseOverHandler = (index) => {
		setHourIndex(index);
	};

	const detailedWeather = !loading ? (
		<>
			<div className={styles.DetailedWeather}>
				<div>
					<button onClick={router.back} className={styles.Back}>
						Back
					</button>

					<div className={styles.Date}>
						{formatDate(weather.daily.data[0].time)}
					</div>

					<div className={styles.Location}>
						{cityName}, {countryName}
					</div>

					<div>{weatherIcon(weather.daily.data[0].icon)}</div>

					<div className={styles.Summary}>{weather.daily.data[0].summary}</div>

					<div className={styles.Row}>
						<div className={styles.Temp}>
							<Image src='/temp-high.svg' width={70} height={70} />
							High:{' '}
							<strong>
								{Math.round(weather.daily.data[0].temperatureHigh)}°
							</strong>{' '}
							at{' '}
							<strong>
								{formatTime(weather.daily.data[0].temperatureHighTime)}
							</strong>
						</div>

						<div className={styles.Temp}>
							<Image src='/temp-low.svg' width={70} height={70} />
							Low:{' '}
							<strong>
								{Math.round(weather.daily.data[0].temperatureLow)}°
							</strong>{' '}
							at{' '}
							<strong>
								{formatTime(weather.daily.data[0].temperatureLowTime)}
							</strong>
						</div>
					</div>
				</div>

				<ul className={styles.DetailedList}>
					<li>
						<div>
							<span>Sunrise</span>

							<strong>{formatTime(weather.daily.data[0].sunriseTime)}</strong>
						</div>

						<div>
							<span>Sunset</span>

							<strong>{formatTime(weather.daily.data[0].sunsetTime)}</strong>
						</div>
					</li>

					<li>
						<div>
							<span>Chance of Rain</span>

							<strong>
								{Math.round(weather.daily.data[0].precipProbability * 100)}%
							</strong>
						</div>
						<div>
							<span>Humidity</span>

							<strong>
								{Math.round(weather.daily.data[0].humidity * 100)}%
							</strong>
						</div>
					</li>

					<li>
						<div>
							<span>Precipation</span>

							<strong>
								{Math.round(weather.daily.data[0].precipIntensity * 10)} cm
							</strong>
						</div>

						<div>
							<span>Maximum Precipation</span>

							<strong>
								{Math.round(weather.daily.data[0].precipIntensityMax * 10)} cm
							</strong>
						</div>
					</li>

					<li>
						<div>
							<span>Wind</span>

							<strong>
								<span>{windDirection(weather.daily.data[0].windBearing)}</span>{' '}
								{Math.round(weather.daily.data[0].windSpeed)}{' '}
								{units == 'us' ? 'mph' : 'm/s'}
							</strong>
						</div>
						<div>
							<span>Wind Gust</span>

							<strong>
								{Math.round(weather.daily.data[0].windGust)}{' '}
								{units == 'us' ? 'mph' : 'm/s'}
							</strong>
						</div>
					</li>

					<li>
						<div>
							<span>Visibility</span>

							<strong>{Math.round(weather.daily.data[0].visibility)} km</strong>
						</div>

						<div>
							<span>UV Index</span>

							<strong>{weather.daily.data[0].uvIndex}</strong>
						</div>
					</li>

					<li>
						<div>
							<span>Ozone</span>

							<strong>{weather.daily.data[0].ozone} DU</strong>
						</div>
						<div>
							<span>Cloud Cover</span>

							<strong>
								{Math.round(weather.daily.data[0].cloudCover * 100)}%
							</strong>
						</div>
					</li>

					<li>
						<div>
							<span>Pressure</span>

							<strong>{Math.round(weather.daily.data[0].pressure)} hPa</strong>
						</div>

						<div>
							<span>Moon Phase</span>

							<strong>
								{moonPhaseHandler(weather.daily.data[0].moonPhase)}
							</strong>
						</div>
					</li>
				</ul>
			</div>

			<div className={styles.HoursHolder}>
				<div>
					<h3>Hourly</h3>

					<div ref={chartContainer} className={styles.Chart}>
						<div className={styles.Temperatures}>
							<div className={styles.First}>
								{Math.round(weather.daily.data[0].temperatureHigh) + 3}°
							</div>
							<div>{Math.round(weather.daily.data[0].temperatureHigh)}°</div>
							<div>
								{Math.round(
									(weather.daily.data[0].temperatureHigh +
										weather.daily.data[0].temperatureLow) /
										2
								)}
								°
							</div>
							<div>{Math.round(weather.daily.data[0].temperatureLow)}°</div>
							<div className={styles.Last}>
								{Math.round(weather.daily.data[0].temperatureLow) - 3}°
							</div>
						</div>

						<div
							className={styles.ChartBody}
							onMouseMove={mouseMoveSelector}
							ref={chartBlock}>
							<div ref={chartSelector} className={styles.Selector}></div>

							{weather.hourly.data.map((hour, index) => {
								const degrees =
									hour.temperature < 0
										? Math.round(weather.daily.data[0].temperatureLow) +
										  -Math.round(weather.daily.data[0].temperatureHigh + 1)
										: Math.round(weather.daily.data[0].temperatureHigh) -
										  Math.round(weather.daily.data[0].temperatureLow);

								const degree = Math.round(200 / Math.abs(degrees));
								const position =
									(Math.round(hour.temperature) -
										Math.round(weather.daily.data[0].temperatureLow)) *
									degree;

								return (
									<div
										onMouseOver={() => dotMouseOverHandler(index)}
										className={styles.DotHolder}
										key={hour.time}
										style={{
											left: `${4.1 * index + 2}%`,
										}}>
										<div
											style={{
												bottom: `${position / 2 + 40}px`,
											}}
											className={styles.ChartDot}>
											{/* {Math.round(hour.temperature)} */}
											{weatherIcon(hour.icon)}
										</div>
									</div>
								);
							})}
						</div>
					</div>

					<ul className={styles.HourlyDetails}>
						<li>
							<div>
								<span>Time</span>

								<strong>
									{formatTime(weather.hourly.data[hourIndex].time)}
								</strong>
							</div>

							<div>
								<span>Summary</span>

								<strong>{weather.hourly.data[hourIndex].summary}</strong>
							</div>
						</li>

						<li>
							<div>
								<span>Temperature</span>
								<strong>
									{Math.round(weather.hourly.data[hourIndex].temperature)}°
								</strong>
							</div>

							<div>
								<span>Feels Like</span>
								<strong>
									{Math.round(
										weather.hourly.data[hourIndex].apparentTemperature
									)}
									°
								</strong>
							</div>
						</li>

						<li>
							<div>
								<span>Chance of Rain</span>
								<strong>
									{Math.round(
										weather.hourly.data[hourIndex].precipProbability * 100
									)}
									%
								</strong>
							</div>

							<div>
								<span>Precipation</span>
								<strong>
									{Math.round(
										weather.hourly.data[hourIndex].precipIntensity * 10
									)}{' '}
									cm
								</strong>
							</div>
						</li>

						<li>
							<div>
								<span>Humidiy</span>
								<strong>
									{Math.round(weather.hourly.data[hourIndex].humidity * 100)}%
								</strong>
							</div>

							<div>
								<span>Wind</span>
								<strong>
									<span>
										{windDirection(weather.hourly.data[hourIndex].windBearing)}
									</span>
									{Math.round(weather.hourly.data[hourIndex].windSpeed)}{' '}
									{units == 'us' ? 'mph' : 'm/s'}
								</strong>
							</div>
						</li>

						<li>
							<div>
								<span>Cloud Cover</span>
								<strong>
									{Math.round(weather.hourly.data[hourIndex].cloudCover * 100)}%
								</strong>
							</div>

							<div>
								<span>UV Index</span>
								<strong>{weather.hourly.data[hourIndex].uvIndex}</strong>
							</div>
						</li>

						<li>
							<div>
								<span>Pressure</span>
								<strong>
									{Math.round(weather.hourly.data[hourIndex].pressure)} hPa
								</strong>
							</div>

							<div>
								<span>Visibility</span>

								<strong>
									{Math.round(weather.hourly.data[hourIndex].visibility)} km
								</strong>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</>
	) : (
		<Spinner />
	);

	return <main>{detailedWeather}</main>;
};

export default DetailedWeather;
