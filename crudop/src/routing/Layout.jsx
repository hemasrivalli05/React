import { Link, Outlet, NavLink } from "react-router-dom";
import { Toaster } from "react-hot-toast"
import Navbar from "../crudfiles/Navbar";

const Layout = () => {
    return (
        <>
            <Toaster />
            <Navbar />
            <main className="sidebar">
                <section className="layout">
                    <ul>
                        <li>
                            <NavLink to="/createuser" style={({ isActive }) => {
                                return {
                                    color: isActive ? 'coral' : 'beige',
                                    background: isActive ? 'beige' : 'coral'
                                }
                            }}>Create Users</NavLink>
                        </li>
                        <li>
                            <NavLink to="/showusers" style={({ isActive }) => {
                                return {
                                    color: isActive ? 'coral' : 'beige',
                                    background: isActive ? 'beige' : 'coral'
                                }
                            }}>Users</NavLink>
                        </li>
                        <li>
                            <NavLink to="/allusers" style={({ isActive }) => {
                                return {
                                    color: isActive ? 'coral' : 'beige',
                                    background: isActive ? 'beige' : 'coral'
                                }
                            }}>All Users</NavLink>
                        </li>
                        <li>
                            <NavLink to="/registeredusers" style={({ isActive }) => {
                                return {
                                    color: isActive ? 'coral' : 'beige',
                                    background: isActive ? 'beige' : 'coral'
                                }
                            }}>Registered Users</NavLink>
                        </li>
                    </ul>
                </section>
                <Outlet />
            </main>
        </>
    )
}

export default Layout