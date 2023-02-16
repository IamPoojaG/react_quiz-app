import { useEffect, useState } from 'react';
export default function Trivia({
  data,
  questionNumber,
  setQuestionNumber,
  setTimeOut,
}) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState('answer');
  const [showAnswer, setShowAnswer] = useState('');

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName('answer active');
    delay(3000, () => {
      setClassName(a.correct ? 'answer correct' : 'answer wrong');
      if (!a.correct) {
        for (let index = 0; index < question?.answers.length; index++) {
          const element = question?.answers[index];
          if (element.correct === true) {
            setShowAnswer(`The correct answer is ${element.text}`);
          }
        }
      }
    });

    delay(5000, () => {
      if (a.correct) {
        delay(1000, () => {
          setQuestionNumber((prev) => prev + 1);
          setSelectedAnswer(null);
        });
      } else {
        delay(1000, () => {
          setTimeOut(true);
        });
      }
    });
  };
  return (
    <>
      <div className='trivia'>
        <div className='question'>{question?.question}</div>
        <div className='answers'>
          {question?.answers.map((a) => (
            <div
              className={selectedAnswer === a ? className : 'answer'}
              onClick={() => !selectedAnswer && handleClick(a)}
            >
              {a.text}
            </div>
          ))}
        </div>
        <p className='correctPtag'>{showAnswer}</p>
      </div>
    </>
  );
}
