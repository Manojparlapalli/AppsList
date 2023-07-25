import './index.css'

const AppItem = props => {
  const {apps} = props
  const {appName, imageUrl} = apps

  return (
    <li>
      <div className="cart">
        <img src={imageUrl} alt={appName} className="image" />
        <p className="app-name">{appName}</p>
      </div>
    </li>
  )
}

export default AppItem
