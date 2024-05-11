import { useSelector } from "react-redux";
import { selectContacts, selectNameFilter } from "../../redux/selectors";

import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const getVisibleContacts = (contacts, nameFilter) => {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase())
  );
};

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const nameFilter = useSelector(selectNameFilter);
  const visibleContacts = getVisibleContacts(contacts, nameFilter);

  return (
    <ul className={css.contacts}>
      {visibleContacts.map((contact) => {
        return (
          <li className={css.contact} key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  );
}
