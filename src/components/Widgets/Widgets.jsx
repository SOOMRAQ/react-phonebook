import { currentTime } from 'constants/getTime';
import {
  StyledClock,
  StyledQuoteWidget,
  StyledTimeWidget,
} from './Widgets.styled';

const Widgets = () => {
  return (
    <div>
      <StyledTimeWidget>
        <StyledClock>{currentTime()}</StyledClock>
        <p style={{ cursor: 'default' }}>Sunday, September 20</p>
      </StyledTimeWidget>
      <StyledQuoteWidget>
        <p style={{ cursor: 'default' }}>Dreams don't work unless you do</p>
      </StyledQuoteWidget>
    </div>
  );
};

export default Widgets;
