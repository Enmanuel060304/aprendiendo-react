import { createRoot } from "react-dom/client";
import "./index.css";
import MyButton from "./components/MyButton.tsx";

createRoot(document.getElementById("root")!).render(
  <>
    <MyButton></MyButton>
  </>
);
