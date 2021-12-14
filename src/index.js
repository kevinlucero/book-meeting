import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import App from "./App";
import BookingList from './pages/booking-list';
import BookingDetails from './pages/booking-details';

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<BookingList />} />
        <Route path="booking-details/:id" element={<BookingDetails />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);