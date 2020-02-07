import {
  createContext,
  useContext,
  useState,
  useRef,
  useCallback
} from "react";

import useOnClickOutside from "../hooks/useOnClickOutside";
import styles from "./BookingBar.module.css";
import cx from "classnames";

const BookingBarContext = createContext();

export const BookingBarContextProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  return (
    <BookingBarContext.Provider value={{ hidden, setHidden }}>
      {children}
    </BookingBarContext.Provider>
  );
};

export const useBookingBar = () => useContext(BookingBarContext);

const BookingBar = () => {
  const wrapperRef = useRef();
  const { hidden, setHidden } = useBookingBar();
  const handler = useCallback(() => {
    if (!hidden) {
      setHidden(true);
    }
  }, [hidden]);

  useOnClickOutside(wrapperRef, handler);

  const className = cx(styles.wrapper, { [styles.hidden]: hidden });

  return (
    <div ref={wrapperRef} aria-hidden={hidden} className={className}>
      <iframe
        className={styles.squareContainer}
        src="https://squareup.com/appointments/buyer/widget/12if2srm1q33bv/22BVQ3WPQER8X"
      />
    </div>
  );
};

export default BookingBar;
