import { useSelector } from 'react-redux';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { getFiltredContacts } from 'redux/selectors';
import { ContacListStyled } from './ContactList.styled';

export const ContactList = () => {
  const filtredContacts = useSelector(getFiltredContacts);

  return (
    <ContacListStyled>
      {filtredContacts.map(contact => {
        return <ContactListItem key={contact.id} contact={contact} />;
      })}
    </ContacListStyled>
  );
};
