import { BrowserRouter } from "react-router-dom";
import LayoutSection from "./components/layout/LayoutSection";

function App() {
  return (
    <>
      <BrowserRouter>
        <LayoutSection />
      </BrowserRouter>
    </>
  );
}

export default App;
