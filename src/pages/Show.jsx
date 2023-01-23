import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { apiGet } from '../misc/config';

const Show = () => {
  const [show, setShow] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(results => {
      setShow(results);
    });
  }, [id]);
  console.log(show);

  return <div>Show</div>;
};

export default Show;
