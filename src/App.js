import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Consult } from "./pages/Consult";
import { Form } from "./pages/Form";
import { Inform } from "./pages/Inform";
import { Login } from "./pages/Login";
import { Results } from "./pages/Results";
import { SelectCourse } from "./pages/SelectCourse";
import { Navbar } from "./components/Navbar";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Inicio</div>} />
          <Route path="/login" element={<Login />} />
          <Route path="/select-course" element={<SelectCourse />} />
          <Route path="/form" element={<Form />} />
          <Route path="/consult" element={<Consult />} />
          <Route path="/results" element={<Results />} />
          <Route path="/inform" element={<Inform />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
