import PropTypes from 'prop-types';
import { ContactItem, ContactItemButton } from './ContactListItem.style';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const ContactListItem = ({ contact: { name, phone, id } }) => {
  const dispatch = useDispatch();
  const onDeleteContact = () => dispatch(deleteContact(id));
  return (
    <ContactItem>
      <p>
        {name}: {phone}
      </p>
      <ContactItemButton type="button" onClick={onDeleteContact}>
        Delete
      </ContactItemButton>
    </ContactItem>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
