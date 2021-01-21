import { Component } from 'react';
import Layout from '../components/Layout';
import Error from '../pages/_error';
import fetch from 'isomorphic-unfetch';

export default class About extends Component {
  static async getInitialProps() {
    const res = await fetch('http://api.github.com/users/bennievanderwel');
    const statusCode = res.status;
    const data = await res.json();

    return { user: data, statusCode };
  }

  render() {
    const { user, statusCode } = this.props;
    return statusCode > 200 ? (
      <Error statusCode={statusCode} />
    ) : (
      <Layout title='About'>
        <p>{user.name}</p>
        <p>{user.bio}</p>
        <img src={user.avatar_url} alt='Bennie' height='200px' />
      </Layout>
    );
  }
}
