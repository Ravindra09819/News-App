import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Entertainment = () => {
  const [data, setData] = useState([])

  const getNews = () => {
    axios.get('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=58b83ba69a6a43edac5cfbf3dd194f62&q=india')

   
      .then((response) => {
        setData(response.data.articles)

      })
  }
  return (
    <>
   
      <div className='container my-3'>
        <button className='btn btn-primary' onClick={getNews}>Fetch News</button>
      </div>
      <div className='container'>
        <div className='row'>
          {
            data.map((value) => {
              return (
                <div className='col-3'>
                  <div className="card" style={{ width: "15rem" }}>
                    <img src={value.urlToImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{value.title}</h5>
                      <p className="card-text">{value.description}</p>
                    

                    </div>
                  </div>

                </div>


              );
            })
          }
        </div>

      </div>
    </>
  )
}

export default  Entertainment

