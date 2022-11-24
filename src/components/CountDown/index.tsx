import Countdown, { CountdownRendererFn } from 'react-countdown';

interface props {
  startDate: Date;
}

export const CountDown: React.FC<props> = ({ startDate }) => {
  const addStartPad = (num: number) => {
    return num.toString().padStart(2, '0');
  };
  const renderer: CountdownRendererFn = ({ days, hours, minutes, seconds }) => {
    return (
      <span>
        {addStartPad(days)}:{addStartPad(hours)}:{addStartPad(minutes)}:
        {addStartPad(seconds)}s
      </span>
    );
  };
  return (
    <Countdown zeroPadDays={3} date={new Date(startDate)} renderer={renderer} />
  );
};
