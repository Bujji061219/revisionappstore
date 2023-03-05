import './index.css'

const AppItem = props => {
  const {appsList} = props
  const {appName, imageUrl} = appsList
  return (
    <li className="container">
      <img className="images" src={imageUrl} alt={appName} />
      <h1 className="heading">{appName}</h1>
    </li>
  )
}

export default AppItem
