import './index.css'

const TabItem = props => {
  const {tabs, updateApp, isActive} = props
  const {displayText, tabId} = tabs

  const onClickTab = () => {
    updateApp(tabId)
  }

  const style = isActive ? 'bright-btn' : ''

  return (
    <li>
      <button type="button" className={`button ${style}`} onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
