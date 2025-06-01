// frontend/src/App.jsx
import HeaderBreadcrumb from './components/HeaderBreadcrumb';
import ServerTitle from './components/ServerTitle';
import ActionButtons from './components/ActionButtons';
import ServerStatsBar from './components/ServerStatsBar';
import ServerDetailsColumns from './components/ServerDetailsColumns';
import FooterActions from './components/FooterActions';
import './App.css'; // We created this for App specific layout

function App() {
  return (
    <div className="app-container">
      {/* You can add a background image here via CSS if desired */}
      <div className="content-wrapper">
        <HeaderBreadcrumb />
        <ServerTitle />
        <ActionButtons />
        <ServerStatsBar />
        <ServerDetailsColumns /> {/* This is the green highlighted section */}
        <FooterActions />
      </div>
    </div>
  );
}

export default App;