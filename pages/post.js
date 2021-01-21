import { withRouter } from 'next/router';
import Layout from '../components/Layout';

const Post = ({ router }) => (
  <Layout title={router.query.title}>Test message</Layout>
);

export default withRouter(Post);
