import React, { Component } from "react";
import s from "./whishes.module.css";


class Whishes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };

    }
    componentDidMount() {
        fetch("http://php.reasavings.top/getWish.php")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });

                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <p>Error {error.message}</p>
        } else if (!isLoaded) {
            return <p>Loading...</p>
        } else {
            return (
                <div>
                    <div className={s.whishesHeader}><h1><span>My Whishes</span></h1></div>
                    <ul>
                        {items.map(item => (
                            <li key={item.name}>
                                {item.ID} | {item.wishName} | <a href={item.wishLink}>link</a> | {item.wishPrice}
                            </li>
                        ))}
                    </ul>
                </div>

            )
        }
    }
}

export default Whishes;