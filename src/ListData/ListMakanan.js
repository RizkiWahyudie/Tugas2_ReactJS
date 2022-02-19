import React, { Component } from "react";

class ListMakanan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: this.props.gambarMakanan
        }
    }
    render() {
        return (
            <div>
                <img src={this.state.dataList} alt="" width="150" height="100" />
            </div>
        );
    }
}

export default ListMakanan;