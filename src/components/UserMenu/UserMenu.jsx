import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useLogOutMutation } from 'redux/auth';
import defaultAvatar from './default-avatar.png';
import { logoutSuccess } from 'redux/auth';
// import { MdLogout } from 'react-icons/md';
import {
  Container,
  IMG,
  UserName,
  LogOutBtn,
  LogOutIcon,
} from './UserMenu.styled';

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
      <UserName>Herzlich wilkommen, {name}</UserName>
      <LogOutBtn type="button" onClick={handleLogOutClick}>
        <LogOutIcon />
      </LogOutBtn>
    </Container>
  );
}
