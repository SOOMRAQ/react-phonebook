const ContactsList = ({ contacts }) => {
  return (
    <>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <p>{name}</p>
            <p>{number}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactsList;
