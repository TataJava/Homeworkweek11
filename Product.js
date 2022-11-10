import React, { useState } from 'react';
import { Link } from 'react-router-dom';
let nextID = 1;
let total =0;
const Product = () => {
    const myInputRef = React.createRef();
    const [productState, setProductState] = useState({
        product_list: [
            { id: 1, name: 'Jordan Air 200E', price: 3190, description: 'desribe of Jordan Air 200E' },
            { id: 2, name: 'Nike Flex Experience Run 10', price: 1789, description: 'describe Nike Flex Experience Run 10' },
            { id: 3, name: 'Nike Venture Runner', price: 2159 , description: 'desribe of Nike Venture Runner' },
            { id: 4, name: 'Nike MD Runner 2', price: 1499, description: 'desribe of Nike MD Runner 2' },
            { id: 5, name: 'Nike Downshifter 11', price: 1789, description: 'desribe of Nike Downshifter 11' },
            { id: 6, name: 'Nike Air Max Pre-Day SE', price: 3179, description: 'desribe of Nike Air Max Pre-Day SE' },
            { id: 7, name: 'Nike Go FlyEase', price: 4079, description: 'desribe of Nike Go FlyEase' },
            { id: 8, name: 'Nike Air VaporMax 2021 FK SE', price: 5919, description: 'desribe of Nike Air VaporMax 2021 FK SE' },
            { id: 9, name: 'Nike Renew Ride 3', price: 2159, description: 'desribe of Nike Renew Ride 3' },
            { id: 10, name: 'LeBron 19', price: 5919, description: 'desribe of LeBron 19' }
        ]
    });
    const [carts, setCarts] = useState([]);
    const onDeleteProduct = (deleteKey) => {
        const product_list = [...productState.product_list];
        const deleteIndex = product_list.findIndex((item) => {
            return item.id === deleteKey;
        });
        product_list.splice(deleteIndex, 1);
        setProductState({
            product_list: product_list
        });
    }
    const onDeleteCart = (id, price) => {
        setCarts(current =>
            current.filter(employee => {
                return employee.id !== id;
            }),
        );
        total -= price;
        nextID--;
    }

    const onUpdateProduct = (updateKey, data) => {
        console.log(data);
        const product_list = [...productState.product_list];
        const updateIndex = product_list.findIndex((item) => {
            return item.id === updateKey;
        });
        product_list[updateIndex] = data;
        setProductState({
            product_list: product_list
        });
    }
    const onCart = (name, price) => {
        console.log(carts.length)
        setCarts([
            ...carts,
            {
                id: nextID++,
                name: name,
                price: price,
            }
        ]);
        total += price;
    }

    const onOkClick = (item) => {
        const updatedata = {
            id: item.id,
            name: myInputRef.current.value,
            price: item.price
        };
        console.log(myInputRef.current.value);
        onUpdateProduct(item.id, updatedata);
    }

    const show_cart = carts.map((item) => {
        return (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td><button onClick={onDeleteCart.bind(this, item.id, item.price)}>Delete</button></td>
            </tr>
        )
    })


    const show_product = productState.product_list.map((item) => {
        let prod = "/posts?name="
        prod += item.name;
        prod += "&price=";
        prod += item.description;
        return (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td><Link to={prod}>{item.name}</Link></td>
                <td>{item.price}</td>
                <td><button onClick={onDeleteProduct.bind(this, item.id, item.price)}>Delete</button></td>
                <td><button onClick={onCart.bind(this, item.name, item.price)}>Cart</button></td>
            </tr>
        )
    })
    return (
        <div>
            <h2>Product</h2>
            <table border={'1'}>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>name</td>
                        <td>price</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>{show_product}</tbody>
            </table>

            <h2>Cart</h2>
            <table border={'1'}>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>name</td>
                        <td>price</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>{show_cart}</tbody>
            </table>
            <h4>Total: {total}</h4>
        </div>
    );
}
export default Product;