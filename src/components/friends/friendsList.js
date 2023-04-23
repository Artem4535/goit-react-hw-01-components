
export default function FriendsList({ friends }) {
    return (

    <ul className="friends-list">
            {friends.map(friend =>
 <li className="item" key={friend.id}>
  <span className="status">d</span>
  <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
    <p className="name">{friend.name}</p>
</li>)}
  </ul>
    )
}