import styles from '../../../styles/DropdownItem.module.css';

const DropdownItem = (props) => {
	return (
		<div className={styles.DropdownItem} lat={props.lat} lng={props.lng}>
			<button onClick={() => props.clicked(props.lat, props.lng)}>
				<div>{props.flag}</div>
				<div>
					<strong>{props.city}</strong>
				</div>
				<div>
					{props.country}, {props.continent}
				</div>
			</button>
		</div>
	);
};

export default DropdownItem;
