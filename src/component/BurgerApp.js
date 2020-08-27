import React, { Component } from 'react'
import Burger from './Burger'
import OrderMenu from './OrderMenu'

export default class BurgerApp extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                <h3 className="text-center text-primary display-4">Bài tập Burger Cybersoft</h3>
                <div className="row d-flex justify-content-center">
                    <div className="col-6">
                        <h4 className="text-center text-danger">Bánh Burger của bạn</h4>
                        <Burger></Burger>
                    </div>
                    <div className="col-6">
                        <h4 className="text-success text-center">Chọn thức ăn</h4>
                        <OrderMenu></OrderMenu>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
