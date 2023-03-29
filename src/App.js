import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Initialize } from './utils';
import { CustomDialog } from './components/Dialog';
import Welcome from './modules/Welcome';
import Home from './modules/Home';
import Summary from './modules/Summary';
import NavBar from './components/NavBar';

function App() {
  var state = Initialize();

  return (
    <div style={styles._app}>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/book" element={<Home />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </Router>
      <CustomDialog
        isOpen={state.isOpen}
        summary={state.summary}
        buttons={state.buttons.length === 0 ? ['ok'] : state.buttons}
        handleClose={state.handleClose}
        handleExit={state.handleExit}
      />
    </div>
  );
}

const styles = {
  _app: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
};

export default App;
