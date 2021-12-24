//Модули
import React from 'react';
import PropTypes from 'prop-types';

//Компоненты
import FriendListItem from './FriendListItem';

// Стили
import styles from './FriendList.module.css';

const FriendList = ({FriendListItems}) =>
		<ul className={styles.friendlist}>
			{
				FriendListItems.map(({avatar, name, isOnline, id}) => (
					<li className={styles.item} key={id}>
						<FriendListItem
						avatar = {avatar}
						name = {name}
						isOnline = {isOnline}
						/>
					</li>
				))
			}
		</ul>;

FriendList.propTypes = {
	FriendListItems: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
		})
	).isRequired,
};

export default FriendList;