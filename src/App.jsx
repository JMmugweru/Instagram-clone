import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase";
import PageLayout from "./Layouts/PageLayout/PageLayout";
import HomePage from "./pages/HomePage.jsx"
import AuthPage from "./pages/AuthPage.jsx"
import ProfilePage from "./pages/ProfilePage.jsx"

function App() {
	const [authUser] = useAuthState(auth);

	return (
		<PageLayout>
			<Routes>
				<Route path='/' element={authUser ? <HomePage /> : <Navigate to='/auth' />} />
				<Route path='/auth' element={!authUser ? <AuthPage /> : <Navigate to='/' />} />
				<Route path='/:username' element={<ProfilePage />} />
			</Routes>
		</PageLayout>
	);
}

export default App
