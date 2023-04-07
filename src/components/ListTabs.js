import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

export const ListTabs = ({ tabs, activeTab, onSetActiveTab }) => {
  return (
    <Tabs
      defaultActiveKey={activeTab}
      onSelect={onSetActiveTab}
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      {tabs.map((tab, index) => (
        <Tab eventKey={tab} title={tab.toUpperCase()} key={index} />
      ))}
    </Tabs>
  )
}
