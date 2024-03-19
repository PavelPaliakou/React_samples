import './App.css';
import FeatureFlags from './components/featureFlag';
import FeatureFlagGlobalState from './components/featureFlag/context';

function App() {
  return (
    <div className="App">
      <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState>
    </div>
  );
}

export default App;
