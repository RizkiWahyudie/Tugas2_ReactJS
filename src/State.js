import React, { Component } from "react";

class State extends Component {
    constructor(props) {
        super(props);
        this.state = {
            daftar: "Daftar Nama Machine search",
            dataProps: this.props.name
        };
    }
    render() {
        return (
            <div>
                <p>{this.state.daftar}</p>
                <p>{this.state.dataProps}</p>
            </div>
        )
    }
}

export default State;