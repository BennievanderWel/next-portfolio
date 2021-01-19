import Link from 'next/link';

export default () => {
  return (
    <div>
      <h1>Home</h1>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <p>Hello world!</p>
    </div>
  );
};
