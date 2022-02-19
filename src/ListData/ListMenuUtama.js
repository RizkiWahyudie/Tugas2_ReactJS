import React, { Component } from "react";

class ListMenuUtama extends Component {
    render () {
        return (
            <div>
                <center>
                <h2>Selamat Datang Di Warung Nusantara</h2>
                <img src={this.props.linkImg} alt="Makanan" width="350" />
                </center>
            </div>
        )
    }
}

export default ListMenuUtama;