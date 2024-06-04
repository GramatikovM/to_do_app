import "reset-css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Homepage from "./pages/Homepage/Homepage";
import NotePage from "./pages/NotePage/NotePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path=":title" element={<NotePage />} />
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
