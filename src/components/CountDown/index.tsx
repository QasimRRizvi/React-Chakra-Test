import { Text } from '@chakra-ui/react';
import Countdown, { CountdownRendererFn } from 'react-countdown';
import { ICountDown } from '../../@type/CountDown';
import { addStartPad } from '../../Utils/common';

export const CountDown: React.FC<ICountDown> = ({ startDate }) => {
  const renderer: CountdownRendererFn = ({ days, hours, minutes, seconds }) => (
    <Text fontWeight='bold' fontSize={['md', 'lg']}>
      {`
      ${addStartPad(days)} : ${addStartPad(hours)} : ${addStartPad(
        minutes
      )} : ${addStartPad(seconds)}s`}
    </Text>
  );
  return (
    <Countdown zeroPadDays={3} date={new Date(startDate)} renderer={renderer} />
  );
};
