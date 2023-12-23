import { FaLinkedin } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';
import { MdMarkEmailUnread } from 'react-icons/md';
import {
  ContactsContainerStyled,
  MainTitleStyled,
  ContactsListStyled,
  ContactsItemStyled,
} from './Contacts.styled';

const iconStyle = { width: '37px', height: 'auto', fill: '#551A8B' };
const Contacts = () => {
  return (
    <ContactsContainerStyled id="contacts">
      <MainTitleStyled>contacts</MainTitleStyled>
      <ContactsListStyled>
        <li>
          <ContactsItemStyled
            href="https://www.linkedin.com/in/hanna-kolesnichenko-frontend-developer/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedin style={iconStyle} />
            <span></span>
          </ContactsItemStyled>
        </li>
        <li>
          <ContactsItemStyled
            href="https://github.com/AnnaKolesnichenko"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaGithub style={iconStyle} />
            <span></span>
          </ContactsItemStyled>
        </li>
        <li>
          <ContactsItemStyled href="mailto:a.040816.a@gmail.com">
            <MdMarkEmailUnread style={iconStyle} />
            <span></span>
          </ContactsItemStyled>
        </li>
      </ContactsListStyled>
    </ContactsContainerStyled>
  );
};

export default Contacts;
