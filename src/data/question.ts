export type Question = {
    id: string;
    text: string;
    options: string[];
    correctAnswerIndex: number;
  };
  
  export const MOCK_QUESTIONS: Question[] = [
    {
      id: "q1",
      text: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswerIndex: 2,
    },
    {
      id: "q2",
      text: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswerIndex: 1,
    },
    {
      id: "q3",
      text: "Who wrote the play 'Romeo and Juliet'?",
      options: [
        "Charles Dickens",
        "William Shakespeare",
        "Mark Twain",
        "Jane Austen",
      ],
      correctAnswerIndex: 1,
    },
    {
      id: "q4",
      text: "What is the largest mammal on Earth?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      correctAnswerIndex: 1,
    },
    {
      id: "q5",
      text: "In what year did the Titanic sink?",
      options: ["1905", "1912", "1918", "1923"],
      correctAnswerIndex: 1,
    },
  ];
  