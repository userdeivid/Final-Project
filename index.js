const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  {
    question: '¿Cuál es el lenguaje de programación principal en el desarrollo web?',
    options: ['Java', 'JavaScript', 'Python', 'C++'],
    correctAnswer: 'JavaScript'
  },
  {
    question: '¿Qué palabra clave se utiliza para declarar una variable en JavaScript?',
    options: ['var', 'let', 'const', 'variable'],
    correctAnswer: 'var'
  },
  {
    question: '¿Cuál es el operador de igualdad estricta en JavaScript?',
    options: ['==', '===', '='],
    correctAnswer: '==='
  }
];

let currentQuestion = 0;
let score = 0;

function askQuestion() {
  const currentQ = questions[currentQuestion];
  rl.question(`${currentQ.question}\nOpciones: ${currentQ.options.join(', ')}\nRespuesta: `, (answer) => {
    if (answer.toLowerCase() === currentQ.correctAnswer.toLowerCase()) {
      console.log('¡Correcto!\n');
      score++;
    } else {
      console.log(`Incorrecto. La respuesta correcta es: ${currentQ.correctAnswer}\n`);
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
      askQuestion();
    } else {
      console.log(`Juego terminado. Puntaje final: ${score}/${questions.length}`);
      rl.close();
    }
  });
}

console.log('Bienvenido al Quiz Game sobre JavaScript.\nResponde las siguientes preguntas:');
askQuestion();

