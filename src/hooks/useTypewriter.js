import {useEffect, useState} from "react";

/**
 * Cycles through a list of words with a type / pause / delete rhythm.
 * Returns the currently visible slice of text.
 */
export function useTypewriter(
  words,
  {typeSpeed = 80, deleteSpeed = 40, holdTime = 1600} = {}
) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) {
      return;
    }
    const word = words[wordIndex % words.length];

    let delay = isDeleting ? deleteSpeed : typeSpeed;
    if (!isDeleting && text === word) {
      delay = holdTime;
    } else if (isDeleting && text === "") {
      delay = 400;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && text === word) {
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex(i => (i + 1) % words.length);
      } else {
        setText(word.slice(0, text.length + (isDeleting ? -1 : 1)));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, holdTime]);

  return text;
}
