import { createContext, useContext, useState, useEffect } from 'react';
import Image from 'next/image';

export const AppContext = createContext();

const AppWrapper = ({ children }) => {
	const [long, setLong] = useState(23.319941);
	const [lat, setLat] = useState(42.698334);
	const [search, setSearch] = useState('');
	const [query, setQuery] = useState('');
	const [dropdownItems, setDropdownItems] = useState([]);
	const [dropdownLoading, setDropdownLoading] = useState(false);
	const [units, setUnits] = useState('si');
	const [loading, setLoading] = useState(true);
	const [countryName, setCountryName] = useState('');
	const [cityName, setCityName] = useState('');
	const [location, setLocation] = useState();
	const [weather, setWeather] = useState([]);
	const [classBackground, setClassBackground] = useState();
	const [backgroundStyle, setBackgroundStyle] = useState({ color: '#B2FEFA', gradient: 'linear-gradient(to top, #0ED2F7, #B2FEFA)' });

	useEffect(() => {
		if (!query == '') {
			forwardGeocoding();
		}
	}, [query]);

	const getUserLocation = () => {
		navigator.geolocation.getCurrentPosition((position) => {
			setLong(position.coords.longitude);
			setLat(position.coords.latitude);
		});
	};

	const updateSearch = (event) => {
		setSearch(event.target.value);
	};

	const getSearch = (event) => {
		event.preventDefault();
		setQuery(search);
		setDropdownLoading(true);
	};

	const updateCheckbox = (event) => {
		if (event.target.checked == true) {
			setUnits('us');
		} else {
			setUnits('si');
		}
	};

	const reverseGeocoding = async () => {
		const reverseAPI = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=d6d274c390434a5da83e82945466c21a`;
		const response = await fetch(reverseAPI);

		if (response.ok) {
			const data = await response.json();

			if (
				!data.results[0].components.city &&
				!data.results[0].components.village
			) {
				setCityName(data.results[0].components.town);
				setCountryName(data.results[0].components.country);
			}

			if (
				!data.results[0].components.city &&
				!data.results[0].components.town
			) {
				setCityName(data.results[0].components.village);
				setCountryName(data.results[0].components.country);
			}

			if (
				!data.results[0].components.town &&
				!data.results[0].components.village
			) {
				setCityName(data.results[0].components.city);
				setCountryName(data.results[0].components.country);
			}
		}
	};

	const forwardGeocoding = async () => {
		const forwardAPI = `https://api.opencagedata.com/geocode/v1/json?q=${query}&key=d6d274c390434a5da83e82945466c21a`;
		const response = await fetch(forwardAPI);

		if (response.ok) {
			const data = await response.json();

			const filteredResults = data.results.filter(
				(result) =>
					result.components._type == 'town' ||
					result.components._type == 'city' ||
					result.components._type == 'village'
			);

			const newResults = filteredResults.filter(
				(result) =>
					result.components.town != undefined ||
					result.components.village != undefined ||
					result.components.city != undefined
			);

			setDropdownItems(newResults);
			setDropdownLoading(false);
		}
	};

	const weatherIcon = (icon) => {
		switch (icon) {
			case 'clear-day':
				return <Image src='/clear-day.svg' width={150} height={150} />;
			case 'clear-night':
				return <Image src='/clear-night.svg' width={150} height={150} />;
			case 'rain':
				return <Image src='/rain.svg' width={150} height={150} />;
			case 'snow':
				return <Image src='/snow.svg' width={150} height={150} />;
			case 'sleet':
				return <Image src='/sleet.svg' width={150} height={150} />;
			case 'wind':
				return <Image src='/wind.svg' width={150} height={150} />;
			case 'fog':
				return <Image src='/fog.svg' width={150} height={150} />;
			case 'cloudy':
				return <Image src='/cloudy.svg' width={150} height={150} />;
			case 'partly-cloudy-day':
				return <Image src='/partly-cloudy-day.svg' width={150} height={150} />;
			case 'partly-cloudy-night':
				return (
					<Image src='/partly-cloudy-night.svg' width={150} height={150} />
				);
			case 'hail':
				return <Image src='/hail.svg' width={150} height={150} />;
			case 'thunderstorm':
				return <Image src='/thunderstorm.svg' width={150} height={150} />;
			case 'tornado':
				return <Image src='/tornado.svg' width={150} height={150} />;
			default:
				return;
		}
	};

	const formatTime = (timestamp) => {
		const date = new Date(timestamp * 1000);
		const hours = date.getHours();
		let minutes = date.getMinutes();

		minutes = minutes <= 9 ? `0${minutes}` : minutes;

		return `${hours}:${minutes}`;
	};

	const windDirection = (degrees) => {
		switch (true) {
			case degrees >= 350 && degrees <= 360:
				return 'N';
			case degrees >= 0 && degrees <= 11:
				return 'N';
			case degrees >= 12 && degrees <= 34:
				return 'NNE';
			case degrees >= 35 && degrees <= 56:
				return 'NE';
			case degrees >= 57 && degrees <= 79:
				return 'ENE';
			case degrees >= 80 && degrees <= 101:
				return 'E';
			case degrees >= 102 && degrees <= 124:
				return 'ESE';
			case degrees >= 125 && degrees <= 146:
				return 'SE';
			case degrees >= 147 && degrees <= 169:
				return 'SSE';
			case degrees >= 170 && degrees <= 191:
				return 'S';
			case degrees >= 192 && degrees <= 214:
				return 'SSW';
			case degrees >= 215 && degrees <= 236:
				return 'SW';
			case degrees >= 237 && degrees <= 259:
				return 'WSW';
			case degrees >= 260 && degrees <= 281:
				return 'W';
			case degrees >= 282 && degrees <= 304:
				return 'WNW';
			case degrees >= 305 && degrees <= 326:
				return 'NW';
			case degrees >= 327 && degrees <= 349:
				return 'NNW';
			default:
				break;
		}
	};

	return (
		<AppContext.Provider
			value={{
				long,
				setLong,
				lat,
				setLat,
				search,
				setSearch,
				query,
				setQuery,
				getUserLocation,
				updateSearch,
				getSearch,
				dropdownItems,
				dropdownLoading,
				setDropdownLoading,
				units,
				setUnits,
				updateCheckbox,
				loading,
				setLoading,
				countryName,
				setCountryName,
				cityName,
				setCityName,
				location,
				setLocation,
				weatherIcon,
				reverseGeocoding,
				formatTime,
				windDirection,
				weather,
				setWeather,
				classBackground,
				setClassBackground,
				backgroundStyle,
				setBackgroundStyle,
			}}>
			{children}
		</AppContext.Provider>
	);
};

export default AppWrapper;
