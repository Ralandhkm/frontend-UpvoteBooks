import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserLayout from './layout/UserLayout';
import LoginLayout from './layout/LoginLayout';
import AdminLayout from './layout/AdminLayout';
import Home from './pages/Home/Home';
import Browse from './pages/Browse/Browse';
import Purchased from './pages/Purchased/Purchased';
import Vote from './pages/Vote/Vote';
import About from './pages/About/About';
import UserProfile from './pages/Profile/UserProfile';
import RegisterUser from './pages/Auth/Register';
import BrowseDetails from './pages/Browse/BrowseDetails';
import ForgotPassword from './pages/Auth/ForgotPassword';
import JoinUniversity from './pages/Auth/JoinUniversity';
import VerificationUniv from './pages/Auth/VerificationUniv';
import AdminProfile from './pages/Profile/AdminProfile';
import LoginUser from './pages/Auth/LoginUser';
import LoginAdmin from './pages/Auth/LoginAdmin';
import RegisterAdmin from './pages/Auth/RegisterAdmin';
import LoginSuper from './pages/Auth/LoginSuper';
import SuperProfile from './pages/Profile/SuperProfile';
import RegisterSuper from './pages/Auth/RegisterSuper';

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<UserLayout />}>
                        <Route index Component={Home} />
                        <Route path="/browse" Component={Browse} />
                        <Route path="/book/:bookId" Component={BrowseDetails} />
                        <Route path="/purchased" Component={Purchased} />
                        <Route path="/vote" Component={Vote} />
                        <Route path="/about" Component={About} />
                        <Route path="/profile" Component={UserProfile} />
                        <Route path="/profile/request" Component={UserProfile} />
                    </Route>

                    <Route element={<LoginLayout />}>
                        <Route path="/login" Component={LoginUser} />
                        <Route path="/join">
                            <Route index Component={JoinUniversity} />
                            <Route path=":universityId" Component={VerificationUniv} />
                        </Route>
                        <Route path="/signup" Component={RegisterUser} />
                        <Route path="/forgot" Component={ForgotPassword} />
                        <Route path="/admin/login" Component={LoginAdmin} />
                        <Route path="/admin/signup" Component={RegisterAdmin} />
                        <Route path="/super/login" Component={LoginSuper} />
                        <Route path="/super/signup" Component={RegisterSuper} />
                    </Route>

                    <Route element={<AdminLayout />}>
                        <Route path="/admin" Component={AdminProfile} />
                        <Route path="/admin/purchased" Component={AdminProfile} />
                        <Route path="/super" Component={SuperProfile} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}
