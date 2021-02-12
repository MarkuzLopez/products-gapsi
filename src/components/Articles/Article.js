import React, { Component } from 'react';
import CarShop from './CarShop/CarShop';
import './Article.scss';

import { getProducts } from '../../services/productsService';

class Article extends Component {

    constructor() {
        super();
        this.state = {
            products: [],
            productsCarShop: [],
            loading: false,
            page: 1,
            category: 'reloj'
        }
    }

    componentDidMount(){
        this.getProductsList();
    }

    getProductsList = () => {
        const { category, page } =  this.state;
        getProducts({
            category,
            page
        }).then(({data}) => {
            const { products } = data.data;
            this.setState({
                products: products,
                loading: true,
                productsCarShop: []
            });
        });
    }

    onChangeSelectedCategory = (event) => {
        this.setState({ category: event.target.value});
    }

    addProductCarShop = (article, indexProduct) => { 
        const { products, productsCarShop } =  this.state;
        
        const addFavorites = productsCarShop.concat(article);
        const productsList = products.filter((product, index) => index != indexProduct);
        
        this.setState({
            productsCarShop: addFavorites,
            products: productsList
        });
    }

    resetValuesProducts = () => {
        this.getProductsList();
    }

    onEndOfPage = () => { 
        this.setState({ page: + 1 });
        this.getProductsList();
    }

    onScroll = (event) => {
        const { scrollHeight, scrollTop, clientHeight } = event.target;
        const scrollBottom = scrollHeight - scrollTop === clientHeight;
        if (scrollBottom) {
          this.onEndOfPage();
        }
    };

    render() {
        const { loading, products, productsCarShop } =  this.state;
        return (
            <div className='animate__animated animate__fadeIn'>

                <div className='select-category row space-between'>
                    <select class="form-select" aria-label="Default select example" onChange={this.onChange}>
                        <option value="reloj" selected>Reloj</option>
                        <option value="videojuego">videojuego</option>
                        <option value="camisa">camisa</option>
                    </select>

                    <div className='article-reset'>
                        <button className="btn btn-danger" onClick={this.resetValuesProducts}>Restaurar valores</button>
                    </div>
                </div>

                <CarShop 
                    total={productsCarShop.length}
                />
                {loading ? 
                <div className="article-scroll" onScroll={this.onScroll} >
                    <div className="card-deck">
                        {products?.map((articulo, index) => (
                            <div className="col-md-4" key={articulo.ID} >
                                <div className="card mt-3" >
                                    <img src={articulo.IMAGE} className="card-img-top img-article" alt="..." />
                                    <div className="card-body">
                                    <p className="card-title">{articulo.NAME} -
                                    ${articulo.PRICE}</p>
                                    <p className="card-text">
                                        {articulo.DESCRIPTION}
                                    </p>
                                    </div>
                                    <button className="btn btn-primary text-center" onClick={() => this.addProductCarShop(articulo, index)} >Agregar Carrito</button>
                                </div>
                                
                            </div>
                        ))}      
                    </div>
                </div>
                : 'Cargando....' }
            </div>
        )
    }
}

export default Article;