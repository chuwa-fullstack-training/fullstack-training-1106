import { useRef } from 'react';
import './styles.css';

export default function App() {
  const firstRef = useRef();
  const secondRef = useRef();

  const handleClick = position => () => {
    if (position === 'first') {
      firstRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    } else if (position === 'second') {
      secondRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  };

  return (
    <>
      <nav>
        <button onClick={handleClick('first')}>Cotton de Tulear</button>
        <button onClick={handleClick('second')}>Bernese Mountain Dog</button>
      </nav>
      <main className="images">
        <img
          src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/20175536/Coton-de-Tulear-standing-in-the-grass.jpg"
          alt="cotton de tulear"
          width={600}
          ref={firstRef}
        />
        <img
          src="https://www.dailypaws.com/thmb/jXERURui6TZGzfRzNLgGl-Y6pKM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bernese-mountain-dog-sitting-puppy-204356895-2000-a0b4b9470f5c44b5b50967c465d89153.jpg"
          alt="bernese mountain dog"
          width={600}
          ref={secondRef}
          class="second"
        />
      </main>
    </>
  );
}
