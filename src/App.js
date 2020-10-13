import React, { Component } from 'react';
import Buscador from './components/Buscador'
import Resultado from './components/Resultado'

class App extends Component {

  state = {
    value: '',
    imgs: [],
    page: ''
  }

  previousPage = () => {
    // saber el state de la pag actual
    let page = this.state.page;

    // restar 1 a la pag
    if (page === 1) return null;

    page--;

    // act state
    this.setState({
      page
    }, () => {
      this.handleApi();
      this.scroll();
    });

    console.log(page);
  }

  nextPage = () => {
    // saber el state de la pag actual
    let page = this.state.page;
    
    // sumar 1 a la pag actual
    page++;
    // agregar cambio al state
    this.setState({
      page
    }, () => {
      this.handleApi();
      this.scroll();
    });
    console.log(page);
  }

  scroll = () => {
    const elem = document.querySelector('.jumbotron');
    elem.scrollIntoView('smooth', 'start');
  }

  handleApi = () => {
    const url = `https://pixabay.com/api/?key=13287945-be5211a927bca00c89f186c08&q=${this.state.value}&per_page=28&page=${this.state.page}`

    //console.log(url)

    // captar resultados con fetch
    fetch(url)
      .then(response => response.json())
      .then(result => this.setState({imgs: result.hits}))
  }
  searchData = (value) => {
    this.setState({
      value: value,
      page: 1
    }, () => {
      this.handleApi();
    })
  }

  render(){
    return (
      <div className="app container">
        <div className="jumbotron">
          <h2 className="text-center my-4">Image Finder</h2>
          <Buscador 
            searchData = { this.searchData }
          />
        </div>
        <Resultado 
          imgs = {this.state.imgs}
          previousPage = {this.previousPage}
          nextPage = {this.nextPage}
        />
      </div>
    );
  }
}

export default App;
