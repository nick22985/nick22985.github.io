import React from "react";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { DevelopmentPage } from "./pages/DevelopmentPage";

import Navbar from "./components/Navbar";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</>
	);
}

export default App;
