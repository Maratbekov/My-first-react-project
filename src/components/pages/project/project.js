import React, {useEffect, useState} from 'react';
import "./project.css"

const Project = () => {
    const limit = 8
    const [countries, setCountries] = useState([])
    const [page, setPage] = useState(0)
    const [start, setStart] = useState(limit * page)
    const [end, setEnd] = useState((page + 1) * limit)
    const last = Math.ceil(countries.length / 8)


    const getCountries = async () => {
        const url = await fetch("https://restcountries.com/v3.1/all")
        const data = await url.json()
        const result = await data.slice(0,50)
        setCountries(data)

    }

    const handleNext = () => {
        setPage(page + 1)


    }


    const handlePrev = () => {
        setPage(page - 1)

    }

    // useEffect()

    useEffect(() => {
        getCountries()

         setStart(limit * page)
         setEnd((page + 1) * limit)

        // setTimeout(()=> {
        //     setCounter(counter + 1)
        //     console.log(`useEffect иштеди ${counter}`)
        // },1000)

    }, [page,end,start])
    console.log(countries)
    return (
        <div className="container">
            <div className="row">
                {
                    countries.slice(start, end).map(country => (
                        <div className="col-3">
                            <div className="country">

                                   <img className="country-img" src={country.flags.png} alt=""/>
                              
                                <p>{country.name.common}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div>
                <button onClick={handlePrev}>prev</button>
                <button onClick={handleNext}>next</button>
            </div>
        </div>
    );
};

export default Project;