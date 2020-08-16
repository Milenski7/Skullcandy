import React, { useState, useEffect } from 'react';
import SortBy from '../../components/sortBy/sortBy';
import http from '../../services/http';
import * as config from '../../config/config.json';
import { toast } from 'react-toastify';
import Loader from 'react-loader-spinner'
import './shop.css';

const Shop = ({ history }) => {
    const [products, setProducts] = useState(null);
    const [sortedProducts, setSortedProducts] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [curCat, setCurCat] = useState('view-all');

    const getProducts = async () => {
        try {
            const { data } = await http.get(`${config.apiEndpoint}/product`);
            setProducts(data);
            setSortedProducts(data);
            setLoaded(true);
        } catch (ex) {
            console.error(ex);
            toast.error('Something failed while getting products...');
        }
    };

    const changeCategory = cat => {
        if (cat === 'view-all') { setSortedProducts(products); setCurCat('view-all'); document.getElementById('select').value = "default"; }
        else {
            setCurCat(cat);
            const newSortedProducts = [...products];
            const newArray = [];
            newSortedProducts.map(i => { if (i.category === cat) { newArray.push(i) } else { return null } });
            setSortedProducts(newArray);
            document.getElementById('select').value = "default";
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="shop-container">
            <div className="shop">
                <h1 className="shop-header">SHOP</h1>
                {!loaded && (<div className="loader-container">
                    <h1 className="loader-title">LOADING PRODUCTS...</h1>
                    <Loader type="puff" color="darkgreen" /></div>)}
                {loaded && (<React.Fragment>
                    <div className="shop-categories">
                        <button onClick={() => changeCategory('view-all')} className="shop-category">VIEW ALL</button>
                        <button onClick={() => changeCategory('TrueWireless')} className="shop-category">TRUE WIRELESS</button>
                        <button onClick={() => changeCategory('Earbuds')} className="shop-category">EARBUDS</button>
                        <button onClick={() => changeCategory('Headphones')} className="shop-category">HEADPHONES</button>
                        <button onClick={() => changeCategory('Sale')} className="shop-category">SALE</button>
                        <SortBy
                            category={curCat}
                            products={products}
                            sortedProducts={sortedProducts}
                            setSortedProducts={setSortedProducts} />
                    </div>
                    <div className="shop-products">
                        {sortedProducts && sortedProducts.map(prod => (
                            <div key={prod._id} className="product">
                                <img
                                    onClick={() => history.push(`/shop/${prod.link}`)}
                                    src={`${config.apiEndpoint}/product/get-photo/${prod._id}`} alt="product"
                                    className="product-img" />
                                <h1 className="product-title">{prod.title}</h1>
                                <h1 className="product-price">${prod.price}</h1>
                            </div>
                        ))}
                    </div></React.Fragment>)}
            </div>
        </div>
    );
};

export default Shop;