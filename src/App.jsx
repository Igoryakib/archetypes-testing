import React from "react";
import { Routes, Route } from "react-router-dom";
import path from "./services/routerPath.json";
import "./translations/i18nReact";
// import i18n from "i18next";
// import { useTranslation } from "react-i18next";
import { firstBlock } from "./services/questions/firstBlock.json";

import "./styles/App.scss";

import HomePage from "./pages/HomePage/HomePage";
import ArchetypesPage from './pages/ArchetypesPage/ArchetypesPage';
import ArchetypeDetailPage from "./pages/ArchetypeDetailPage/ArchetypeDetailPage";
import TestPage from "./pages/TestPage/TestPage";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Block2 from "./components/Block2/Block2";
import Block1 from "./components/Block1/Block1";
import GradientWrapper from "./components/GradientWrapper/GradientWrapper";

const App = () => {
  return (
    <>
      <Header></Header>
      <GradientWrapper>
        <main className="main">
          <Routes>
            <Route path={path.home} element={<HomePage />} />
            <Route path={path.archetypes} element={<ArchetypesPage />}/>
            <Route path={path.ArchetypeDetailPage} element={<ArchetypeDetailPage />}/>
            <Route path={path.test} element={<TestPage />}>
              <Route path={"block1"} element={<Block1 props={firstBlock} />} />
              <Route path={"block2"} element={<Block2 />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </GradientWrapper>
    </>
  );
};

export default App;
