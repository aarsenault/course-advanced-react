// ? don't actually even need to import this because next will do it automatically
// ? wonder if it's somehow using parcel.
// import React from 'react';

import Link from 'next/link';

// ? class component
// class Home extends React.Component {
// 	render () {
// 		return <p> Hey! </p>
// 	}
// }

const Home = props => (
  <div>
    <p>Hey!</p>
    <Link href="/sell">
      <a>Sell!</a>
    </Link>
  </div>
);

export default Home;
