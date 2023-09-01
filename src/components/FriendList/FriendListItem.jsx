import PropTypes from 'prop-types';
import { Item, Status, Avatar, Name } from "./FriendList.styled";

export const FriendListItem = ({avatar,name,isOnline})=> {
    return <Item>
    <Status style={{ backgroundColor: isOnline ? "green" : "red" }}></Status>
    <Avatar src={avatar} alt="{name} avatar" width="48" />
    <Name>{name}</Name>
  </Item>
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}