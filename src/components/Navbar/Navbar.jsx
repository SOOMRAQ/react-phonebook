import { IoIosWifi, IoIosBatteryFull } from 'react-icons/io';
import { FaSignal } from 'react-icons/fa';
import { StyledIconsList, StyledName, StyledNavbar } from './Navbar.styled';

const navbarIcons = [
  { id: 'signal', type: <FaSignal /> },
  { id: 'wifi', type: <IoIosWifi /> },
  { id: 'battery', type: <IoIosBatteryFull /> },
];

const Navbar = () => {
  return (
    <StyledNavbar className="navbar">
      <StyledName>MyPad</StyledName>

      <StyledIconsList style={{}}>
        {navbarIcons.map(({ id, type }) => (
          <li key={id}>{type}</li>
        ))}
      </StyledIconsList>
    </StyledNavbar>
  );
};

export default Navbar;
