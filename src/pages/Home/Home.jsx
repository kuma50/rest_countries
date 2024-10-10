import { useEffect, useState } from "react";

import Filter from "../../components/Filter/Filter";
import Header from "../../components/Header/Header";
import CountriesList from "../../components/CountriesList/CountriesList";
import countryService from "../../services/countries/countryService";
import ApiError from "../../services/Error/ApiError";

function useHome() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  async function fetchCountry() {
    try {
      const result = await countryService.getAllCountries();
      return result;
    } catch (err) {
      throw new ApiError("Request Failed", err);
    }
  }

  useEffect(() => {
    async function getAllCountries() {
      try {
        const countries = await fetchCountry();
        setData(countries);
      } catch (err) {
        setError(err.message);
        console.error("Failed to fetch countries:", err);
      }
    }

    getAllCountries();
  }, []);

  return { data, error };
}

function Home() {
  const { data, error } = useHome();

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Header />
      <Filter />
      <CountriesList countries={data} />
    </>
  );
}

export default Home;
