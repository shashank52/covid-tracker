import React  from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

import coronaImage from './images/covid.png';
class App extends React.Component {

    state ={
        data: {},
        country: ''
    }
    async componentDidMount(){
        const fetch = await fetchData();
        this.setState({data: fetch});

    }
    handleCountryChange = async (country) =>{
        const fetch = await fetchData(country);
        this.setState({data: fetch, country: country});
    }
    render(){
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                <img src={coronaImage} className={styles.image} alt="COVID-19"/>
                <Cards data = {data}/>
                <CountryPicker handleCountryChange = { this.handleCountryChange} />
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App;