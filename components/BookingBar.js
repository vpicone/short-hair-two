import { createContext, useContext, useState } from "react";
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
  const { hidden } = useBookingBar();
  const className = cx(styles.wrapper, { [styles.hidden]: hidden });

  return (
    <div aria-hidden={hidden} className={className}>
      <div
        className={styles.squareContainer}
        dangerouslySetInnerHTML={{
          __html: `<script async="true" src="https://square.site/appointments/buyer/widget/12if2srm1q33bv/22BVQ3WPQER8X.js"></script>`
        }}
      />
    </div>
  );
};

export default BookingBar;
