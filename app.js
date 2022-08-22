
class App extends React.Component {
  constructor(props) { //every time you add a component, you NEED to bind it
      super()
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
  }
  state = {
      products: products,
      item: '',
      units: '',
      quantity: 0
      // value: ''
  }
  handleChange = (event) => {
      // this.state.value = e.target.value // this is wrong, we cannot mutate state directly
      this.setState({ [event.target.id]: event.target.value })
  }
  handleSubmit = (event) => {
      event.preventDefault()
      const newItem = {
          item: this.state.item,
          units: this.state.units,
          quantity: this.state.quantity
      }
      this.setState({
          products: [newItem, ...this.state.products],
          item: '',
          units: '',
          quantity: 0
      })
  }
  toggleHiring = () => {
      this.setState({isPurchased: !isPurchased})
    }
  render() {
      return (
          <div className="App">
              <h1 onClick={this.toggleHiring}> Welcome to Groceries store! </h1>
              {!this.state.isPurchased ? <button className="btn" type="submit">
            Delete
          </button> : <h2>Sorry, try again tomorrow</h2>}
              <form onSubmit={this.handleSubmit}>
                  <label htmlFor='item'>Item name</label>
                  <input type='text'  className="input" value={this.state.item} onChange={this.handleChange} id='item' placeholder='item of product' />
                  <br />
                  <label htmlFor='units'>Units</label>
                  <input type='number'  className="input" value={this.state.units} onChange={this.handleChange} id='units' />
                  <br />
                  <label htmlFor='quantity'>Quantity</label>
                  <input type='textarea'  className="input" value={this.state.quantity} onChange={this.handleChange} id='quantity' />
                  <input type="submit" className="btn" /> 

              </form>
              <div>
                  <h2>Preview our new item</h2>
                  <h3>{this.state.item}</h3>
                  <h4>{this.state.units}</h4>
                  <h5>{this.state.quantity}</h5>
              </div>
              <ul>
                  {this.state.products.map(product => {
                      return (
                          <li>{product.item}  {product.units}</li>)
                  }
                  )
                  }
              </ul>
          </div>
      )
  }
}
ReactDOM.render(
  <App />,
  document.querySelector('.container')
)