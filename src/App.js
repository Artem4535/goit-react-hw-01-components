import Profile from './components/profile/profile'
import user from './components/profile/user.json'
import StatissticList from './components/statistics/statics'
import statisticValue from './components/statistics/statistic.json'
import FriendsList from './components/friends/friendsList'
import friends from './components/friends/friends.json'
import transactions from './components/transactions/transactions.json'
import TransactionsTable from './components/transactions/transactions'

export default function App() {
  return (<div>
   <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
    />
    <StatissticList items={statisticValue} />
    <FriendsList friends={friends} />
    <TransactionsTable transions={transactions}/>
  </div>) 
}
