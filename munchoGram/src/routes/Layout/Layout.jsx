import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import './Layout.css'

export default function Layout({setSearchInput, token}) {
    return (
        <div className="layout">
            <Navbar setSearchInput={setSearchInput} token={token}/>
            <div className="outlet">
                <Outlet />
            </div>
        </div>
    )
}