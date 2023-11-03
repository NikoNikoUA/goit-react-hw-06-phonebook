import { BtnDeleteItem, ListItem } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { remove } from '../../../src/redux/contactsSlice';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

Notify.init({
  borderRadius: '11px',
  position: 'top-right',
  width: '400px',
  timeout: 4000,
  clickToClose: true,
  cssAnimationStyle: 'zoom',
});

export const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const onRemoveContact = () => {
    dispatch(remove(id));
    Notify.success('The contact has been successfully removed');
  };

  return (
    <ListItem key={id}>
      {name}: {number}
      <BtnDeleteItem onClick={() => onRemoveContact(id)}>Remove</BtnDeleteItem>
    </ListItem>
  );
};
