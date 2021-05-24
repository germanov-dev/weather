import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

import styles from '../../styles/Dropdown.module.css';
import DropdownItem from './DropdownItem/DropdownItem';
import Spinner from '../Spinner/Spinner';

const Dropdown = (props) => {
	const { dropdownItems, dropdownLoading } = useContext(AppContext);

	const dropdownLocations =
		dropdownItems != 0 ? (
			dropdownItems.map((item) => {
				let type = item.components._type;

				console.log(item);

				if (type == 'city' || type == 'village' || type == 'town') {
					if (
						item.components.city == undefined &&
						item.components.village == undefined
					) {
						type = 'town';
					} else if (
						item.components.village == undefined &&
						item.components.town == undefined
					) {
						type = 'city';
					} else if (
						item.components.city == undefined &&
						item.components.town == undefined
					) {
						type = 'village';
					}

					return (
						<DropdownItem
							key={item.annotations.Maidenhead}
							flag={item.annotations.flag}
							city={item.components[type]}
							country={item.components.country}
							continent={item.components.continent}
							lat={item.geometry.lat}
							lng={item.geometry.lng}
							clicked={props.clicked}
						/>
					);
				}
			})
		) : (
			<div>Not Found</div>
		);

	let dropdownContent = dropdownLoading ? <Spinner /> : dropdownLocations;

	return <div className={styles.Dropdown}>{dropdownContent}</div>;
};

export default Dropdown;
