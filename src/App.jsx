import { useState } from 'react';
import data from './data';
import { nanoid } from 'nanoid';

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    const newArray = data.slice(0, amount);
    setText(newArray);
    setCount(1);
  };

  return (
    <section className='section-center'>
      <h4>tired of boring lorem ipsum?</h4>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          min='1'
          step='1'
          max='8'
          placeholder='1'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className='btn' type='submit'>
          generate
        </button>
      </form>
      <article className='lorem-text'>
        {text.map((para, id) => {
          return <p key={nanoid()}>{para}</p>;
        })}
      </article>
    </section>
  );
};
export default App;
