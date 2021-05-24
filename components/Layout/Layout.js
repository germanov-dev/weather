import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AppContext } from '../../context/AppContext';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Splash from '../Splash/Splash';

import styles from '../../styles/Layout.module.css';

const Layout = ({ children }) => {
	const {
		setLong,
		setLat,
		search,
		setSearch,
		query,
		setQuery,
		getUserLocation,
		updateSearch,
		getSearch,
		dropdownLoading,
		setDropdownLoading,
		updateCheckbox,
		classBackground,
		setBackgroundStyle,
		backgroundStyle,
		loading,
	} = useContext(AppContext);

	const router = useRouter();

	const locationFromDropdown = (lat, lng) => {
		setLong(lng);
		setLat(lat);
		setQuery('');
		setSearch('');
		router.push('/');
	};

	const splash = loading ? <Splash /> : '';

	useEffect(() => {
		weatherClassBackground(classBackground);
	}, [classBackground]);

	const weatherClassBackground = (icon) => {
		switch (icon) {
			case 'clear-day':
				setBackgroundStyle((prevState) => ({
					...prevState,
					color: '#B2FEFA',
					gradient: 'linear-gradient(to top, #0ED2F7, #B2FEFA)',
				}));
				break;
			case 'clear-night':
				setBackgroundStyle((prevState) => ({
					...prevState,
					color: '#232526',
					gradient: 'linear-gradient(to top, #3498db, #2c3e50)',
				}));
				break;
			case 'rain':
				setBackgroundStyle((prevState) => ({
					...prevState,
					color: '#314755',
					gradient: 'linear-gradient(to top, #26a0da, #314755)',
				}));
				break;
			case 'snow':
				setBackgroundStyle((prevState) => ({
					...prevState,
					color: '#ADA996',
					gradient:
						'linear-gradient(to top, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996)',
				}));
				break;
			case 'sleet':
				setBackgroundStyle((prevState) => ({
					...prevState,
					color: '#0575E6',
					gradient: 'linear-gradient(to top, #021B79, #0575E6)',
				}));
				break;
			case 'wind':
				setBackgroundStyle((prevState) => ({
					...prevState,
					color: '#acb6e5',
					gradient: 'linear-gradient(to top, #86fde8, #acb6e5)',
				}));
				break;
			case 'fog':
				setBackgroundStyle((prevState) => ({
					...prevState,
					color: '#ECE9E6',
					gradient: 'linear-gradient(to top, #FFFFFF, #ECE9E6)',
				}));
				break;
			case 'cloudy':
				setBackgroundStyle((prevState) => ({
					...prevState,
					color: '#4CA1AF',
					gradient: 'linear-gradient(to top, #C4E0E5, #4CA1AF)',
				}));
				break;
			case 'partly-cloudy-day':
				setBackgroundStyle((prevState) => ({
					...prevState,
					color: '#4CA1AF',
					gradient: 'linear-gradient(to top, #C4E0E5, #4CA1AF)',
				}));
				break;
			case 'partly-cloudy-night':
				setBackgroundStyle((prevState) => ({
					...prevState,
					color: '#B2FEFA',
					gradient: 'linear-gradient(to top, #525252, #3d72b4)',
				}));
				break;
			case 'hail':
				setBackgroundStyle((prevState) => ({
					...prevState,
					color: '#F0F2F0',
					gradient: 'linear-gradient(to top, #000C40, #F0F2F0)',
				}));
				break;
			case 'thunderstorm':
				setBackgroundStyle((prevState) => ({
					...prevState,
					color: '#C33764',
					gradient: 'linear-gradient(to top, #1D2671, #C33764)',
				}));
				break;
			case 'tornado':
				setBackgroundStyle((prevState) => ({
					...prevState,
					color: '#bdc3c7',
					gradient: 'linear-gradient(to top, #2c3e50, #bdc3c7)',
				}));
				break;
			default:
				return;
		}
	};

	return (
		<div
			className={styles.Layout}
			style={{
				backgroundColor: backgroundStyle.color,
				background: backgroundStyle.gradient,
				transition: 'all .5s',
			}}>
			{splash}

			<div style={{ maxWidth: '1024px', margin: '0 auto' }}>
				<Header
					getLocation={getUserLocation}
					updateSearch={updateSearch}
					search={search}
					getSearch={getSearch}
					clicked={locationFromDropdown}
					dropdownLoading={dropdownLoading}
					setDropdownLoading={setDropdownLoading}
					query={query}
					updateCheckbox={updateCheckbox}
				/>
				{children}
			</div>
		</div>
	);
};

export default Layout;
