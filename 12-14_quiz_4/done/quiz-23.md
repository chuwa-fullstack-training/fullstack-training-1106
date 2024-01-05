23. Is it possible to use React without rendering HTML?





return show ? 
  (<div>Hello</div>) : null;














It is possible. Below are the possible options:

render() {
  return false
}
render() {
  return true
}
render() {
  return null
}
React version >=16.0.0:

render() {
  return []
}
render() {
  return ""
}
React version >=16.2.0:

render() {
  return <React.Fragment></React.Fragment>
}
render() {
  return <></>
}
React version >=18.0.0:

render() {
  return undefined
}