import React, {useState} from 'react';
import update from 'immutability-helper';
import logo from './logo.svg';
import './App.css';
import Test from './components/Test';

/*img как импортировать все изображения с папки?*/
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';


function App() {

  // const [1, 2] = useState(3);
  // 1- название стейта, 2- функция чтобы менять стейт, 3- значение по умолчанию
  /* click */
  const [showPassword, setShowPassword] = useState(false);
  const [toDo, setToDo] = useState([]);
  const handlerPushToDo = (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    const content = formData.get('content');

    const newToDo = update(toDo, { $push: [content] });
    setToDo(newToDo);
  }

  console.log('showPassword', showPassword);

  const handlerToogleShow = (ev) => {
    console.log('show');
    setShowPassword(!showPassword);
     
  }

  /*photoList*/
  const arrayList = [
    img1,
    img2,
    img3,
    img4
  ];
  const [photoList, setList] = useState(arrayList);
  /*Level1*/
  /*избыточность list?*/
  const list = () => {
    const pushList = update(photoList);
    setList(pushList);
  }
  /*Level2*/
  const handlerDeletePhoto = (ev) => {
    const pushList = update(photoList, { $splice: [[0, 1]] });
    setList(pushList);
     
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Test />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input type={showPassword ? 'password' : 'text'} />
        <button type="button" onClick={handlerToogleShow}>Show</button>

        <ul>
        {toDo.map((val, key) => (
          <li key={key}>
            {val}
          </li>
        ))}
        </ul>
        <form onSubmit={handlerPushToDo}>
          <input type="text" name="content" />
          <button type="submit">Push</button>
        </form>
        <hr />
        
        <ul>
        {photoList.map((val, key) => (
            <img src={val} className="" alt={key} />
        ))}
        </ul>
        <button type="button" onClick={handlerDeletePhoto}>Delete</button>
      </header>
    </div>
  );
}

export default App;
