import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })
      return (
        <>
          <div>
            <h1>
              <span>Order Total:</span>
              Rs {total} /-
            </h1>
            <p>{cartList.length} Items in cart</p>
            <button type="button">Checkout</button>
          </div>
          <button type="button">Checkout</button>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
