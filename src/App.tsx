import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
//import SlidePage from "./pages/TestPage/";
// import TestPage from "./pages/TestPage";

function App() {
  return (
    <>
      <BrowserRouter future={{ v7_startTransition: true }}>
        <Routes>
          {/* <Route path="/login" element={<LoginPage />}></Route> */}
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/vi" element={<HomePage />}></Route>
          <Route path="/vi/about" element={<AboutPage />}></Route>
          {/* <Route path="/vi/test" element={<SlidePage />}></Route> */}
          {/* <Route path="/vi/test" element={<TestPage />}></Route> */}

          {/* <Route
            path="/user-management"
            element={
              <ChakraProvider>
                <UserManagement />
              </ChakraProvider>
            }
          /> */}
          {/* More routes later */}
          {/* <Route path="/syllabus" element={<SyllabusPage />}></Route> */}
          {/* <Route path="/test" element={<TestingPage />}></Route>
          <Route path="/classList" element={<ClassPage />}></Route> */}
          {/* <Route path="/calendar" element={<CalendarPage />}></Route> */}
          {/* <Route path="/trainingprogram" element={<TrainingProgramPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
