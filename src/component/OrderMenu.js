import React, { Component } from 'react'
import { connect } from 'react-redux';


class OrderMenu extends Component {

   
    renderBurgerOrder = () => {
        return this.props.burger.map((item, index) => {
            return <tr key={index}>
                <td>{item.name}</td>
                <td><button onClick={()=>{this.props.updateAmount(item.name,true)}} className="btn btn-success mr-2">+</button>
                {item.amount}
                <button onClick = {()=>{this.props.updateAmount(item.name,false)}}className="btn btn-danger ml-2">-</button></td>
                <td>{item.price}</td>
                <td>{(item.price *item.amount).toLocaleString()}</td>
            </tr>
        })
    }
    sumTotal = ()=>{
        return this.props.burger.reduce((total,burger)=>{
            return total+= burger.amount * burger.price
    },0).toLocaleString();
}
    render() {
        return (
            <div>
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th>Tên món</th>
                            <th>Số lượng</th>
                            <th>Đơn giá</th>
                            <th>Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                            {this.renderBurgerOrder()}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan='3' className="text-right pr-5">Tổng tiền:</td>
                            <td>{this.sumTotal()}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        burger: state.BurgerReducer.burger,
        // menu:state.BurgerReducer.menu
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateAmount :(name,number)=>{
            let action = {
                type: 'UPDATE_AMOUNT',
                name,
                number
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(OrderMenu)