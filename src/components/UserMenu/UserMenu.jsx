import { useLogOutMutation } from 'redux/auth';
import defaultAvatar from './default-avatar.png';
import { Container, IMG, UserName } from './UserMenu.styled';

export function UserMenu() {
  const [logout] = useLogOutMutation();
  const avatar = defaultAvatar;

  const handleLogOutClick = () => {
    logout();
  };

  return (
    <Container>
      <IMG src={avatar} alt="avatar" width="32" />
      <UserName>Herzlich wilkommen, ...</UserName>
      <button type="button" onClick={handleLogOutClick}>
        Log Out
      </button>
    </Container>
  );
}
