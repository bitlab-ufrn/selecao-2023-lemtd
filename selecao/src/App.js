import './style/App.css';
import Welcome from './components/Header';
import Field from './components/Field';
// import Coment from './components/Coment';

function App() {
  return (
    <main className='App'>
      <Welcome />
      <Field />
      {/* <Coment /> */}
    </main>
  );
}

export default App;
