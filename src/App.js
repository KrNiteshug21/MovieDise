import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import About from "./component/About";
import Contacts from "./component/Contacts";
import Homepage from "./component/Homepage";
import MoviePage from "./component/MoviePage";
import ShowPage from "./component/ShowPage";
import IndexPage from "./component/IndexPage";
import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./Context/DataContext";

function App() {
  return (
    <main className="App">
      <DataProvider>
        <Header />
        <Routes>
          <Route index element={<IndexPage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/movie/:id" element={<MoviePage />} />
          <Route path="/show/:id" element={<ShowPage />} />
        </Routes>
        <Footer />
      </DataProvider>
    </main>
  );
}

export default App;
