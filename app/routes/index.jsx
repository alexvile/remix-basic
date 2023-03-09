import { Link } from '@remix-run/react'
import homeStyles from '~/styles/home.css'

export default function Index() {
  return (
  <main id="content">
    <h1 className='text-white'>A better way to keeping notes</h1>
    <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <p id="cta">
      <Link to="/notes"> Try now !</Link>
    </p>
  </main>
  );
}

export function links() {
  return [{rel: 'stylesheet', href: homeStyles}]
}