import React from 'react';
import {QUERY_RESULT} from '../utils/queries';
import { useQuery} from '@apollo/client';

export default function Home() {
  const { loading, data } = useQuery(QUERY_RESULT);
  const numberOfResults = data?.length || [];

  console.log(data);

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
           <div>{numberOfResults}</div>
          )}
        </div>
      </div>
    </main>
  );
}
