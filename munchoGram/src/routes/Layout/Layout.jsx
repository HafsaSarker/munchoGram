import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import './Layout.css'

export default function Layout({setSearchInput}) {
    return (
        <div className="layout">
            <Navbar setSearchInput={setSearchInput}/>
            <div className="outlet">
                <Outlet />
            </div>
        </div>
    )
}