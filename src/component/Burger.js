import React, { Component } from 'react'
import {connect} from 'react-redux'
import '../component/BurgerCss.css';

class Burger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statusUpdate: fasle,
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(this.props.burger !== prevProps.burger) {
            this.setState({
                statusUpdate: !this.statusUpdate
            })
        }
    }
    // trên đây là cách để hàm render chạy lại khi có props thay đổi
    
    
    renderBurger = ()=>{
        return this.props.burger.map((item,index)=>{
            return <div key={index}>
                <div className={item.name}></div>
            </div>
        })
    }
    render() {
        console.log(this.renderBurger())
        return (
            <div>
                    <div className="burger">
                        <div className="breadTop"></div>
                        {this.renderBurger()}
                        <div className="breadBottom"></div>
                    </div>
            </div>
        )
    }
}

const mapStateToProp = (state)=>{
    return {
        burger: state.BurgerReducer.burger
    }
}

export default connect (mapStateToProp)(Burger)
