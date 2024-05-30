import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';

const Navbar = () => {
    const { count } = useContext(ShoppingCartContext);

    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink to='/'>
                        Bacav
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/all' activeClassName='active'>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clothes' activeClassName='active'>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/others' activeClassName='active'>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li>
                    <NavLink to='/my-orders' activeClassName='active'>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-account' activeClassName='active'>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in' activeClassName='active'>
                        Sign In
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/checkout' activeClassName='active'>
                        🛒 {count}
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;