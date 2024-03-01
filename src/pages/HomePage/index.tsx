// import React from 'react'

// function HomePage() {
//   return (
//     <div>index</div>
//   )
// }

// export { HomePage }

import Footer from "../../components/layouts/Footer";
import Navbar from "../../components/layouts/Navbar";
import Home from "../../components/partial/HomeManagement";
import style from "./style.module.scss";
export default function HomePage() {
  return (
    <div className={style.main}>
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}
