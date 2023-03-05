import './index.css'

const TabItem = props => {
  const {tabs, setActiveTabId} = props
  const {displayText, tabId} = tabs

  const onClickTab = () => {
    setActiveTabId(tabId)
  }

  return (
    <li className="tabs">
      <button className="tab-button" type="button" onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
