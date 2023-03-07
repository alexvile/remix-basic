import { Link } from '@remix-run/react'
export default function Index() {
  return (
  <main id="content">
    <h1 className="text-3xl font-bold underline">A better way to keeping notes</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <p id="cta">
      <Link to="/notes" className='text-blue-400'> Try now !</Link>
    </p>
  </main>
  );
}
