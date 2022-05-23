import React from 'react';
import {QUERY_RESULT} from '../utils/queries';
import { useQuery} from '@apollo/client';

export default function Home(props) {
  const { loading, data } = useQuery(QUERY_RESULT);
  const numberOfResults = data?.result || [];

  console.log(numberOfResults);

  return (
      <div className="flex-row justify-center">
        number of results
      </div>
  );
}
