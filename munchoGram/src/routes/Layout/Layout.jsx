import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import './Layout.css'

export default function Layout() {
    return (
        <div className="layout">
            <Navbar />
            <div className="outlet">
                <Outlet />
            </div>
        </div>
    )
}