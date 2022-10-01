import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CartState } from '../context/Context'
import {ACTIONS} from '../context/Context'

export default function ViewCart() {
    const { state: { cart }, dispatch } = CartState()

    const [total, settotal] = useState()
    // const [total1, settotal1] = useState()
    // console.log(quantity)
    console.log(cart)
    // console.log('total1',total1)


    
    

    useEffect(() => {
        settotal(cart.reduce((acc,curr)=> acc + Number(curr.price) *curr.qty ,0 ))
        
      
    }, [cart])


    return (
        <div>
            <div className="container">
            <table id="cart" className="table table-hover table-condensed">
                <thead>
                    <tr>
                        <th style={{ width: '50%' }}>Product</th>
                        <th style={{ width: '10%' }}>Price</th>
                        <th style={{ width: '8%' }}>Quantity</th>
                        <th style={{ width: '22%' }} className="text-center">subtotal</th>
                        <th style={{ width: '10%' }} />
                    </tr>
                </thead>
                <tbody>
                    {cart && cart.map((ViewCart) => (<tr>
                        <td data-th="Product">
                            <div className="row">
                                <div className="col-sm-2 hidden-xs"><img src={ViewCart.image} alt="..." className="img-responsive" style={{ height: '50px', width: '50px' }} /></div>
                                <div className="col-sm-10">
                                    <h4 className="nomargin">{ViewCart.description}</h4>

                                </div>
                            </div>
                        </td>
                        <td data-th="Price"> {ViewCart.price}</td>
                        <td data-th="Quantity">
                            <input type="number" className="form-control text-center" min="1" defaultValue={ViewCart.qty} onChange={(e)=>{dispatch({type:ACTIONS.CHANGE_QWT,payload:{id:ViewCart.id,qty:e.target.value}})}} />
                        </td>
                        <td data-th="Subtotal" className="text-center">{ViewCart.price * ViewCart.qty}</td>
                        <td className="actions" data-th>

                            <button className="btn btn-danger btn-sm" onClick={(e) => { dispatch({type:ACTIONS.REMOVE_CART,payload:{id:ViewCart.id}}) }}><i className="fa fa-trash-o" />Remove</button>
                        </td>
                    </tr>))}
                </tbody>
                <tfoot>
                    <tr className="visible-xs">
                        <td className="text-center"><strong>Total Rs.{total }</strong></td>
                    </tr>
                    <tr>
                        <td><Link to="/" className="btn btn-warning"><i className="fa fa-angle-left" /> Continue Shopping</Link></td>
                        <td colSpan={2} className="hidden-xs" />
                        <td className="hidden-xs text-center"><strong>Total Rs.{total }</strong></td>
                        <td><a href="#" disabled={cart.length === 0} className="btn btn-success btn-block">Checkout <i className="fa fa-angle-right" /></a></td>
                    </tr>
                </tfoot>
            </table>
        </div>
        </div>
    )
}
