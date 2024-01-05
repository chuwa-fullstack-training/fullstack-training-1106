13. What is the lifecycle methods order in mounting?

















The lifecycle methods are called in the following order when an instance of a component is being created and inserted into the DOM.

constructor()
static getDerivedStateFromProps()
render()
componentDidMount() {
  axios(url, post).then(() => {
    this.setState();
  })
}








