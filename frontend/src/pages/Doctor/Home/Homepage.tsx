// Dashboard.js

import React, { Suspense } from 'react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const loadSettingsComponent = () => import('./Settings'); 

  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardTab />;
      case 'settings':
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <SettingsTab />
          </Suspense>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <button onClick={() => setActiveTab('dashboard')}>Dashboard</button>
      <button onClick={() => setActiveTab('settings')}>Settings</button>
      {renderTabContent()}
    </div>
  );
};

export default Dashboard;
