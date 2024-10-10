import React from "react";

function CountryCard({ country }) {
  console.log(country);

  return (
    <figure className="country">
      <img
        src={country?.flags?.png}
        alt={`Flag of ${country.name.common}`}
        className="country__flag"
      />
      <figcaption className="country__info">
        <h3 className="country__name">{country.name.common}</h3>
        <dl className="country__description">
          <dt>Population:</dt>
          <dd>{country.population.toLocaleString()}</dd>
          <dt>Region:</dt>
          <dd>{country.region}</dd>
          <dt>Capital:</dt>
          <dd>{country.capital?.[0] || "N/A"}</dd>
        </dl>
      </figcaption>
    </figure>
  );
}

function CountriesList({ countries }) {
  if (!countries || countries.length === 0) {
    return <div className="countries wrapper">No countries to display</div>;
  }

  return (
    <div className="countries wrapper">
      {countries.map((country) => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </div>
  );
}

export default CountriesList;
