import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem'; 
import { List } from "./FriendList.styled";


export const FriendList = ({friends})=>{
    return <List>
        {friends.map(({avatar,name,isOnline,id}) => {
        return <FriendListItem avatar={avatar} name={name} isOnline={isOnline} key={id}/>
        })
        }
    </List>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object),
}