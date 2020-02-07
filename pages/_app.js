import "modern-normalize/modern-normalize.css";
import "../styles.css";

import BookingBar, {
  BookingBarContextProvider
} from "../components/BookingBar";

function App({ Component, pageProps }) {
  return (
    <BookingBarContextProvider>
      <Component {...pageProps} />
      <BookingBar />
    </BookingBarContextProvider>
  );
}

export default App;
