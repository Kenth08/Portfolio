import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * Types and deletes each word in turn. With reduced motion on,
 * it simply swaps whole words every few seconds.
 */
export function useTypewriter(words, { typeSpeed = 70, deleteSpeed = 35, pause = 1700 } = {}) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  const word = words[index % words.length];

  useEffect(() => {
    if (reduceMotion) {
      setText(word);
      const timer = setTimeout(() => setIndex((i) => (i + 1) % words.length), 2600);
      return () => clearTimeout(timer);
    }

    const finishedTyping = !deleting && text === word;
    const finishedDeleting = deleting && text === '';
    let delay = deleting ? deleteSpeed : typeSpeed;
    if (finishedTyping) delay = pause;
    if (finishedDeleting) delay = 250;

    const timer = setTimeout(() => {
      if (finishedTyping) {
        setDeleting(true);
      } else if (finishedDeleting) {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [text, deleting, word, words.length, reduceMotion, typeSpeed, deleteSpeed, pause]);

  return text;
}
