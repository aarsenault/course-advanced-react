import Link from 'next/link';
import NavStyles from './styles/NavStyles';
import { createSignalIfSupported } from 'apollo-link-http-common';

const Nav = () => (
  <NavStyles>
    <Link href='items'>Items</Link>
    <Link href='sell'>Sell</Link>
    <Link href='signup'>Sign Up</Link>
    <Link href='orders'>orders</Link>
    <Link href='me'>me</Link>
  </NavStyles>
);

export default Nav;
