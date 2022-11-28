import Head from 'next/head';
import WeatherBox from '../components/WeatherBox/WeatherBox';
import weatherService from '../Service/weather';

export default function Weather({ data, isLoading, setIsLoading }) {
  return (
    <>
      <Head>
        <title>{data.cod === 200 ? data.name : 'Not found'} | WEATHER</title>
      </Head>
      <WeatherBox
        data={data}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </>
  );
}

export async function getServerSideProps({ query }) {
  const data = await weatherService.getByLocation(query.location);
  return {
    props: {
      data,
    },
  };
}
