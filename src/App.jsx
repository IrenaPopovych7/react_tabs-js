import '@fortawesome/fontawesome-free/css/all.css';
import 'bulma/css/bulma.css';
import React, { useState } from 'react';
import './App.scss';
import { Tabs } from './components/Tabs/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export function App() {
  const [selectedId, setSelectedId] = useState(tabs[0].id);

  const handleIdSelection = tabId => {
    setSelectedId(tabId);
  };

  const selectedTab = tabs.find(tab => tab.id === selectedId) || tabs[0];

  return (
    <div className="section">
      <h1 className="title">Selected tab is {selectedTab.title}</h1>
      <Tabs
        tabs={tabs}
        activeTabId={selectedId}
        onTabSelected={handleIdSelection}
      />
    </div>
  );
}
