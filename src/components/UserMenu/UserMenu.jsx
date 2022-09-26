import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useLogOutMutation } from 'redux/auth';
import defaultAvatar from './default-avatar.png';
import { Container, IMG, UserName } from './UserMenu.styled';
import { logoutSuccess } from 'redux/auth';

export function UserMenu() {
  const dispatch = useDispatch();
  const [logout] = useLogOutMutation();

  const name = useSelector(state => state.auth.user.name);
  const avatar = defaultAvatar;

  const handleLogOutClick = () => {
    dispatch(logoutSuccess(logout()));
  };

  return (
    <Container>
      <IMG src={avatar} alt="avatar" width="32" />
      {/* <UserName>Herzlich wilkommen, {name}</UserName> */}
      <button type="button" onClick={handleLogOutClick}>
        Log Out
      </button>
    </Container>
  );
}
