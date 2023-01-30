import { IconContext } from 'react-icons';

import {
  FcCamera,
  FcCurrencyExchange,
  FcFilmReel,
  FcWikipedia,
} from 'react-icons/fc';

import {
  generalApps,
  messengers,
  workApps,
  relaxApps,
} from 'constants/appsIcons';

import {
  StyledApp,
  StyledAppItem,
  StyledAppsList,
  StyledIconsList,
  StyledNotification,
} from './Applications.styled';

const Applications = () => {
  return (
    <StyledAppsList>
      <StyledAppItem>
        <StyledIconsList>
          {generalApps.map(icon => (
            <li>{icon}</li>
          ))}
        </StyledIconsList>
      </StyledAppItem>
      <StyledAppItem>
        <StyledIconsList>
          {messengers.map(icon => (
            <li>{icon}</li>
          ))}
        </StyledIconsList>
        <StyledNotification>4</StyledNotification>
      </StyledAppItem>
      <StyledAppItem>
        <StyledIconsList>
          {workApps.map(icon => (
            <li>{icon}</li>
          ))}
        </StyledIconsList>
      </StyledAppItem>
      <StyledAppItem>
        <StyledIconsList>
          {relaxApps.map(icon => (
            <li>{icon}</li>
          ))}
        </StyledIconsList>
      </StyledAppItem>
      <StyledApp>
        <IconContext.Provider value={{ size: '3em' }}>
          <FcCamera />
        </IconContext.Provider>
      </StyledApp>
      <StyledApp>
        <IconContext.Provider value={{ size: '3em' }}>
          <FcCurrencyExchange />
        </IconContext.Provider>
      </StyledApp>
      <StyledApp>
        <IconContext.Provider value={{ size: '3em' }}>
          <FcFilmReel />
        </IconContext.Provider>
      </StyledApp>
      <StyledApp>
        <IconContext.Provider value={{ size: '3em' }}>
          <FcWikipedia />
        </IconContext.Provider>
      </StyledApp>
    </StyledAppsList>
  );
};

export default Applications;
