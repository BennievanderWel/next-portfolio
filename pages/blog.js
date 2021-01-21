import Layout from '../components/Layout';
import Link from 'next/link';

const PostLink = ({ title }) => {
  return (
    <li>
      <Link href={`/post?title=${title}`}>{title}</Link>
    </li>
  );
};

const Blog = () => (
  <Layout title='Blog'>
    <ul>
      <PostLink title='React' />
      <PostLink title='Vue' />
      <PostLink title='Angular' />
    </ul>
  </Layout>
);

export default Blog;
