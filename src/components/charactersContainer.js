import React from 'react'
import Character from './character.js'
import PageLoading from './PageLoading.js'
import PageError from './PageError.js'

class CharactersContainer extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      loading:true,
      error:null,
      data: {
        page:0,
        characters: []
      }
    }
  }

  async componentDidMount(){
    this.fetchData()
  }

  async fetchData(){ 

    this.setState({
      loading:true,
      error:null
    })

    try{
      let numPage = this.state.data.page + 1
      const url = `https://rickandmortyapi.com/api/character/?page=${numPage}`
      const res = await fetch(url)
      const data = await res.json()
      this.setState({
        loading:false,
        data:{
          characters: [].concat(this.state.data.characters, data.results),
          page: numPage
        }})

    }catch(error){
      this.setState({
        loading:false,
        error:error
      })
    }
    
  }

  render(){
    if(this.state.loading){
      return <PageLoading/>
    }

    if(this.state.error){
      return <PageError error={this.state.error}/>
    }

    return(
      <React.Fragment>
        <ul className="row">
          {this.state.data.characters.map(c=>
            <Character  key={c.id} character= {c}/>
          )}
        </ul>
        <button onClick={()=>{this.fetchData()}}>Loading More</button>
      </React.Fragment> 

      
    )
  }

}

export default CharactersContainer

