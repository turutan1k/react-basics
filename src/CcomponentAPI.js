import React, { Component } from 'react';

export default class CcomponentAPI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        };
    }

    componentDidMount() {
        fetch(
            'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink'
        )
            .then((res) => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.drinks,
                    });
                },

                (error) => {
                    this.setState({
                        isLoaded: true,
                        error,
                    });
                }
            );
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <p>Error: {error.message}</p>;
        } else if (!isLoaded) {
            return <p>Loading...</p>;
        } else {
            return (
                <ul>
                    {items.map((item, index) => (
                        <li key={item.name}>
                            {item.strDrink}
                            <br />
                            <img
                                width="100"
                                height="100"
                                src={item.strDrinkThumb}
                                alt={index}
                            />
                        </li>
                    ))}
                </ul>
            );
        }
    }
}
