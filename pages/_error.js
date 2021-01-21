import Layout from '../components/Layout';

const Error = ({ statusCode }) => {
  return (
    <Layout title='Error!'>
      <p>
        {statusCode
          ? `Oops, we ran into an error while fetching your data. Statuscode: ${statusCode}`
          : `Oops, something went wrong! We could not find that page.`}
      </p>
    </Layout>
  );
};

export default Error;
