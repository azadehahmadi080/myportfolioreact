import { useEffect, useState } from "react";

export default function useTyping(words, { typingSpeed = 100, deletingSpeed = 50, pause = 2000 } = {}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [text, setText] = useState("");
  const [pauseAfterDelete, setPauseAfterDelete] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;

    const currentWord = words[wordIndex];
    let timeout;

    if (!deleting && subIndex <= currentWord.length) {
      setText(currentWord.slice(0, subIndex));
      if (subIndex < currentWord.length) {
        timeout = setTimeout(() => setSubIndex((s) => s + 1), typingSpeed);
      } else {
        timeout = setTimeout(() => setDeleting(true), pause);
      }
    } else if (deleting && subIndex >= 0) {
      setText(currentWord.slice(0, subIndex));
      if (subIndex > 0) {
        timeout = setTimeout(() => setSubIndex((s) => s - 1), deletingSpeed);
      } else {
        timeout = setTimeout(() => {
          setDeleting(false);
          setWordIndex((w) => (w + 1) % words.length);
          setSubIndex(0);
        }, pause);
      }
    }

    return () => clearTimeout(timeout);
  }, [words, wordIndex, subIndex, deleting, typingSpeed, deletingSpeed, pause]);

  return text;
}
