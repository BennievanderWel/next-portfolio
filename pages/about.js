import { Component } from 'react';
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';

export default class About extends Component {
  static async getInitialProps() {
    const res = await fetch('http://api.github.com/users/bennievanderwel');
    console.log(res);
    const data = await res.json();

    return { user: data };
  }

  render() {
    const { user } = this.props;
    return (
      <Layout title='About'>
        <p>{user.name}</p>
        <p>{user.bio}</p>
        <img src={user.avatar_url} alt='Bennie' height='200px' />
      </Layout>
    );
  }
}
