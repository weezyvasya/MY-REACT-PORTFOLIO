import ContactsCard from '../../Components/ContactsCard/ContactsCard';
import { contactsData } from '../../helpers/contactsData';
import './Contacts.css';

function Contacts() {
  return (
    <div className="contacts-container">
      <h1 className="contacts-title">Контакты</h1>
      <div className="contacts-content">
          {contactsData.map((contact) => <ContactsCard contact={contact}/>)}
      </div>
    </div>
  );
}

export default Contacts;