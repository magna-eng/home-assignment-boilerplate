import { gql, useQuery } from '@apollo/client';

const SAMPLE_QUERY = gql(`
  query sample {
    sample {
      id
      name
    }
  }
`);

const IndexPage = () => {
  const { data } = useQuery(SAMPLE_QUERY, {});

  return <>Magna Home Assignment BoilerPlate: {data?.sample?.id}</>;
};

export default IndexPage;
