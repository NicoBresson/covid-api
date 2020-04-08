import { useState } from 'react';
import useStats from '../utils/useStats';
import Stats from './Stats';

const CountrySelector = () => {
  const { stats: countries, loading, error } = useStats('https://covid19.mathdro.id/api/countries');

  const [selectedCountry, setSelectedCountry] = useState('USA');

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>

  const CountryStats = ()=>{
    if (selectedCountry) return <Stats url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`} />
    return ''
  }

  return (
    <div>
      <h2>Currently showing {selectedCountry}</h2>
      <select
        onChange={e => {
          setSelectedCountry(e.target.value);
        }}
        defaultValue={selectedCountry}
      >
        {countries.countries.map((
          country, index) => {
          return <option key={index} value={country.iso3}>{country.name}</option>
        })}
      </select>
      <CountryStats/>
    </div>
  )
}

export default CountrySelector;
