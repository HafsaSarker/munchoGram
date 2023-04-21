import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import './Layout.css'

export default function Layout({setSearchInput, isLoggedIn}) {
    return (
        <div className="layout">
            <Navbar setSearchInput={setSearchInput} isLoggedIn={isLoggedIn} />
            <div className="outlet">
                <Outlet />
            </div>
        </div>
    )
}