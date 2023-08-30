import { Container,
         Avatar,
         Name,
         Tag,
         Location,
         Description,
         Stats,
         Label,
         Quantity,
         Items} from "./Profile.styled";

export const Profile = ({username, tag, location, avatar, stats}) => {
   return (
      <Container>
      <Description>
        <Avatar
          src={avatar}
          alt="User avatar"
        />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>
    
      <Stats>
        <Items>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </Items>
        <Items>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </Items>
        <Items>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </Items>
      </Stats>
    </Container>) 
   
    
};



