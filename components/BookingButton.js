import { useBookingBar } from "./BookingBar";
export default () => {
  const { setHidden } = useBookingBar();
  return (
    <button type="button" onClick={() => setHidden(false)}>
      Launch
    </button>
  );
};
