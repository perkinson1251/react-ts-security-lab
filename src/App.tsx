import MainPage from "pages/MainPage";
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
        </Routes>
    );
};

export default App;
