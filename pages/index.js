import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function HomePage() {
  const { data, error } = useSWR('/api/random-character', fetcher);

  if (error) return <div>Error fetching data</div>;
  if (!data) return <div> is loading...</div>;

  return (
    <>
      <h1>Hello from Next.js!</h1>

      <h2>Random Character:</h2>
      <p>{data.firstName} {data.lastName}</p>
      <p>{data.gender} </p>
      <p>{data.age} </p>
      <p>{data.email} </p>
      <p>{data.twitter} </p>
      <p>{data.geohash}</p>
    </>
  );
}