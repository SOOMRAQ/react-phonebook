import { IconContext } from 'react-icons';
import { FcCamera, FcGoogle } from 'react-icons/fc';
import { IoIosContacts } from 'react-icons/io';
import clickMe from '../../assets/cta.png';
import { StyledCallToAction, StyledDock, StyledLine } from './Dock.styled';

const Dock = () => {
  return (
    <StyledDock>
      <StyledCallToAction>
        <img src={clickMe} alt="Call to Action: Click Me" width="40px" />
      </StyledCallToAction>
      <IconContext.Provider
        value={{ size: '3em', style: { cursor: 'pointer' } }}
      >
        <IoIosContacts className="heartbeat" />
        <StyledLine />
        <FcCamera style={{ marginRight: '5px' }} />
        <FcGoogle />
      </IconContext.Provider>
    </StyledDock>
  );
};

export default Dock;
