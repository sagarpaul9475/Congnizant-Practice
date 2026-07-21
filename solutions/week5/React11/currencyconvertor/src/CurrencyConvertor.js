import React, { Component } from "react";

class CurrencyConvertor extends Component {

    constructor() {
        super();

        this.state = {
            amount: "",
            currency: ""
        };
    }

    handleAmount = (event) => {
        this.setState({
            amount: event.target.value
        });
    };

    handleCurrency = (event) => {
        this.setState({
            currency: event.target.value
        });
    };

    handleSubmit = (event) => {

        event.preventDefault();

        let euro = this.state.amount * 80;

        alert(
            "Converting to Euro Amount is " + euro
        );
    };

    render() {

        return (
            <div>

                <h1 style={{ color: "green" }}>
                    Currency Convertor!!!
                </h1>

                <form onSubmit={this.handleSubmit}>

                    <table>

                        <tbody>

                            <tr>

                                <td>Amount:</td>

                                <td>
                                    <input
                                        type="number"
                                        value={this.state.amount}
                                        onChange={this.handleAmount}
                                    />
                                </td>

                            </tr>

                            <tr>

                                <td>Currency:</td>

                                <td>
                                    <input
                                        type="text"
                                        value={this.state.currency}
                                        onChange={this.handleCurrency}
                                    />
                                </td>

                            </tr>

                            <tr>

                                <td></td>

                                <td>
                                    <button type="submit">
                                        Submit
                                    </button>
                                </td>

                            </tr>

                        </tbody>

                    </table>

                </form>

            </div>
        );
    }
}

export default CurrencyConvertor;