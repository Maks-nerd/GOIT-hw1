//Модули
import React from 'react';

//Компоненты
import FriendList from './components/FriendList';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import TransactionHistory from './components/TransactionHistory';

// Данные
import FriendListItems from './components/FriendList/friends.json';
import User from './components/Profile/user.json';
import StatisticData from './components/Statistics/statistical-data.json';
import Transactions from './components/TransactionHistory/transactions.json';

const App = () => (
  <>
    <FriendList FriendListItems={FriendListItems} />

    <Profile
      name={User.name}
      tag={User.tag}
      location={User.location}
      avatar={User.avatar}
      stats={User.stats}
    />
		
		<Statistics title="Upload stats" stats={StatisticData} />

		<TransactionHistory items={Transactions} />
  </>
);

export default App;
