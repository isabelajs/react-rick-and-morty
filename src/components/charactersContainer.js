/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect}from 'react'
import Character from './character.js'
import Loader from './Loader.js'
import PageError from './PageError.js'

function useFetchData(){
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const[data, setData]= useState([])
  const[nextPage,setNextPage] = useState(`https://rickandmortyapi.com/api/character`)

  const fetchData = async ()=>{
    setLoading(true)
    setError(null)
    
    try{
      const res = await fetch(nextPage)
      const dataC = await res.json()

      setData([].concat(data,dataC.results))
      setLoading(false)
      setNextPage(dataC.info.next)

    }catch(error){
      setLoading(false)
      setError(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, []);

  return {loading,error,data,nextPage,fetchData}
}



function CharactersContainer (){

  const {loading,data,error,nextPage,fetchData} = useFetchData()

  console.log(data);


  return (
  <React.Fragment>
    {error && <PageError/>}
    <ul className="row">
      {data.map(c=>
        <Character  key={c.id} character= {c}/>
        )}
    </ul>
    {loading && <Loader/>}
    {nextPage !== null && <button onClick={()=>{fetchData()}}>Loading More</button> }
  </React.Fragment> 
  )
}
export default CharactersContainer




