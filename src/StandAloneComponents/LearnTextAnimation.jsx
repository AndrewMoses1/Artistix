import React, { useState, useEffect } from 'react';
// import '../App.css'

const LearnTextAnimation = () => {
  // Array of words to replace in the animation.
  const wordsToReplace = ["Portraits", "Cartoons", "Calligraphy", "Animations"];
  
  const [currentWordIndex, setCurrentWordIndex] = useState(0); // Index of the current word to display.
  const [currentText, setCurrentText] = useState(""); // Current text being displayed.
  const [isTyping, setIsTyping] = useState(true); // Boolean to track if text is currently being typed.

  useEffect(() => {
    const typeInterval = setInterval(() => {
      if (isTyping) {
        // If typing, get the next character from the current word.
        const nextChar = wordsToReplace[currentWordIndex][currentText.length];
        if (nextChar !== undefined) {
          setCurrentText((prevText) => prevText + nextChar); // Append the character to the current text.
        } else {
          // If the word is fully typed, wait for 1 second and then set 'isTyping' to false.
          setTimeout(() => {
            setIsTyping(false);
          }, 1000);
        }
      } else {
        // If not typing, remove the last character from the current text.
        setCurrentText((prevText) => prevText.slice(0, -1));
        if (currentText === "") {
          // If the current text is empty, clear the typing interval.
          clearInterval(typeInterval);
        }
        if (currentText === "") {
          // If the current text is still empty after clearing, reset for the next word.
          setTimeout(() => {
            setIsTyping(true); // Set 'isTyping' back to true.
            setCurrentText(""); // Clear the current text.
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % wordsToReplace.length); // Increment to the next word.
          }, 1000);
        }
      }
    }, 50); // Typing speed, 50 milliseconds between each character.
    // Cleanup function: Clear the typing interval when the component unmounts or if dependencies change.
    return () => {
      clearInterval(typeInterval);
    };
    // eslint-disable-next-line
  }, [currentWordIndex, currentText, isTyping]);
  return (
    <div class="learn-textAnimation-container" style={{position: 'relative', display: 'flex', flexDirection: 'row', 
    justifyContent: 'flex-end', width: '25vw', marginTop: '.3vw', marginLeft: '53vw', fontSize: '1.4vw', 
    fontFamily: 'Cinzel, serif', fontWeight: '400', gap: '.8vw', color: 'white', zIndex: '10'}}>
      <span class="learn-textAnimation-static">Learn to Draw</span>
      <span class="learn-textAnimation-dynamic">{currentText}</span>
    </div>
  );
};
export default LearnTextAnimation;