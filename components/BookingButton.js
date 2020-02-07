import { useBookingBar } from "./BookingBar";
export default () => {
  const { hidden, setHidden } = useBookingBar();
  console.log(hidden, setHidden);
  return <button onClick={() => setHidden(!hidden)}>Launch</button>;
};
