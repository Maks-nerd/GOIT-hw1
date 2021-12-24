//Модули
import React from 'react';
import PropTypes from 'prop-types';
import defaultImg from './100x100.png';

//Стили
import styles from './FriendListItem.module.css';

const FriendListItem = ({avatar, name, isOnline, id}) => 
<>
  <span className={isOnline ? styles.online : styles.offline} 
	// style={{
	// 	width: 20,
	// 	height: 20,
	// 	display: 'inline-block',
	// 	verticalAlign: 'top',
	// 	backgroundColor: isOnline ? 'green' : 'red'
	// 	}}
		></span>
  <img className={styles.avatar} src={avatar} alt={name} width="48" />
  <p className={styles.name}>{name}</p>
</>;

FriendListItem.defaultProps = {
	avatar: defaultImg,
};

FriendListItem.propTypes = {
	avatar: PropTypes.string,
	name: PropTypes.string.isRequired,
	isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;