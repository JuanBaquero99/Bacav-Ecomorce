import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const activeStyle = "underline"
    //Objeto para darle estilos y dirección al texto al nuevo elemento

    return (
        <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink //Classname para los estilos y comparativa para determinar si el vinculo esta activo o no, con respectiva redirección
                        to='/'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Bacav
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/all'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/clothes'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/others'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li>
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        feid@example.com
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/my-orders'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/my-account'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/sign-in'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Sign In
                    </NavLink>
                </li>
                <li>
                    🛒
                </li>
            </ul>
        </nav>
    )
}

export default Navbar