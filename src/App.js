import './App.css';
import { useEffect, useMemo, useState } from 'react';
import Start from './components/Start.js';
import Timer from './components/Timer.js';
import Trivia from './components/Trivia.js';

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState('$ 0');

  const data = [
    {
      id: 1,
      question: 'Rolex is a company that specializes in what type of product?',
      answers: [
        {
          text: 'Phone',
          correct: false,
        },
        {
          text: 'Watches',
          correct: true,
        },
        {
          text: 'Food',
          correct: false,
        },
        {
          text: 'Cosmetic',
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: 'When did the website `Facebook` launch?',
      answers: [
        {
          text: '2004',
          correct: true,
        },
        {
          text: '2005',
          correct: false,
        },
        {
          text: '2006',
          correct: false,
        },
        {
          text: '2007',
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: 'Who played the character of harry potter in movie?',
      answers: [
        {
          text: 'Johnny Deep',
          correct: false,
        },
        {
          text: 'Leonardo Di Caprio',
          correct: false,
        },
        {
          text: 'Denzel Washington',
          correct: false,
        },
        {
          text: 'Daniel Red Cliff',
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: 'Name the National bird of India?',
      answers: [
        {
          text: 'Duck',
          correct: false,
        },
        {
          text: 'Peacock',
          correct: true,
        },
        {
          text: 'Kite',
          correct: false,
        },
        {
          text: 'Parrot',
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: 'How many days are there in a week?',
      answers: [
        {
          text: '7 days',
          correct: true,
        },
        {
          text: '6 days',
          correct: false,
        },
        {
          text: '8 days',
          correct: false,
        },
        {
          text: '5 days',
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: 'Which is the smallest month of the year?',
      answers: [
        {
          text: 'January',
          correct: false,
        },
        {
          text: 'March',
          correct: false,
        },
        {
          text: 'December',
          correct: false,
        },
        {
          text: 'February',
          correct: true,
        },
      ],
    },
    {
      id: 7,
      question: 'Name the National animal of India?',
      answers: [
        {
          text: 'Lion',
          correct: false,
        },
        {
          text: 'Tiger',
          correct: true,
        },
        {
          text: 'Elephant',
          correct: false,
        },
        {
          text: 'Horse',
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question:
        'For which of the following disciplines is Nobel Prize awarded?',
      answers: [
        {
          text: 'Physics and Chemistry',
          correct: false,
        },
        {
          text: 'Physiology or Medicine',
          correct: false,
        },
        {
          text: 'Literature,Peace and Economics',
          correct: false,
        },
        {
          text: 'All The Above',
          correct: true,
        },
      ],
    },
    {
      id: 9,
      question: 'India has largest deposites of ____ in the world ',
      answers: [
        {
          text: 'Gold',
          correct: false,
        },
        {
          text: 'Copper',
          correct: false,
        },
        {
          text: 'Mica',
          correct: true,
        },
        {
          text: 'None of the above',
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question:
        'India tallest stone statue of the Jain sage Gomateshwara is at?',
      answers: [
        {
          text: 'Mysore,Karnataka',
          correct: false,
        },
        {
          text: 'New Delhi',
          correct: false,
        },
        {
          text: 'Mandu, Madhya Pradesh',
          correct: false,
        },
        {
          text: 'Sravanabelagola,Karnataka',
          correct: true,
        },
      ],
    },
    {
      id: 11,
      question:
        'How many times has Brazil won the World Cup Football Championship?',
      answers: [
        {
          text: 'Four times',
          correct: false,
        },
        {
          text: 'Five times',
          correct: true,
        },
        {
          text: 'Twice',
          correct: false,
        },
        {
          text: 'Once',
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: 'IDA stands for',
      answers: [
        {
          text: 'Indian Development Agency',
          correct: false,
        },
        {
          text: 'International Development Agency',
          correct: true,
        },
        {
          text: 'Industrial Development Analyses',
          correct: false,
        },
        {
          text: 'None of the above',
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question:
        'In cricket, a run taken when the ball passes the batsman without touching his bat or body is called',
      answers: [
        {
          text: 'drive',
          correct: false,
        },
        {
          text: 'bosie',
          correct: false,
        },
        {
          text: 'leg bye',
          correct: false,
        },
        {
          text: 'bye',
          correct: true,
        },
      ],
    },
    {
      id: 14,
      question:
        'Indira Gandhi Centre for Atomic Research, established in 1971, is located at',
      answers: [
        {
          text: 'Indore',
          correct: false,
        },
        {
          text: 'Kalpakkam, Chenna',
          correct: true,
        },
        {
          text: 'Trombay, Maharashtra',
          correct: false,
        },
        {
          text: 'Kolkata',
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question:
        'In which year did Sir Edmund Hillary reach the summit of Mount Everest?',
      answers: [
        {
          text: '1953',
          correct: true,
        },
        {
          text: '1952',
          correct: false,
        },
        {
          text: '1954',
          correct: false,
        },
        {
          text: '1955',
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: '$ 100' },
        { id: 2, amount: '$ 200' },
        { id: 3, amount: '$ 300' },
        { id: 4, amount: '$ 500' },
        { id: 5, amount: '$ 1.000' },
        { id: 6, amount: '$ 2.000' },
        { id: 7, amount: '$ 4.000' },
        { id: 8, amount: '$ 8.000' },
        { id: 9, amount: '$ 16.000' },
        { id: 10, amount: '$ 32.000' },
        { id: 11, amount: '$ 64.000' },
        { id: 12, amount: '$ 125.000' },
        { id: 13, amount: '$ 250.000' },
        { id: 14, amount: '$ 500.000' },
        { id: 15, amount: '$ 1.000.000' },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className='app'>
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className='main'>
            {timeOut ? (
              <h1 className='endText'>You earned: {earned}</h1>
            ) : (
              <>
                <div className='top'>
                  <div className='timer'>
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className='bottom'>
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className='pyramid'>
            <ul className='moneyList'>
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? 'moneyListItem active'
                      : 'moneyListItem'
                  }
                >
                  <span className='moneyListItemNumber'>{m.id}</span>
                  <span className='moneyListItemAmount'>{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
