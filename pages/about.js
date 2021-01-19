import Link from 'next/link';

export default () => {
  return (
    <div>
      <h1>About</h1>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <p>A javascript programmer</p>
      <img src='/static/js-logo.png' height='200px' />
    </div>
  );
};
