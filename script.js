document.addEventListener('DOMContentLoaded', function() {
    const jokeButton = document.getElementById('jokeButton');
    const backButton = document.getElementById('backButton');
    const answer = document.getElementById('answer');
    const jokeElement = document.querySelector('.joke');

    // Lista de piadas
    const jokes = [
        {
            question: "Sabe qual é a cidade que não tem taxi?",
            answer: "Uberlândia."
        },
        {
            question: "Qual é o animal que anda com uma perna só?",
            answer: "O pinguim."
        },
        {
            question: "Por que o livro de matemática se suicidou?",
            answer: "Porque tinha muitos problemas."
        },
        {
            question: "O que o zero disse para o oito?",
            answer: "Belo cinto!"
        },
        {
            question: "Qual é o cúmulo da paciência?",
            answer: "Esperar um leão se pentear com um pente."
        },
        {
            question: "Por que o café foi para a escola?",
            answer: "Para melhorar a formação."
        },
        {
            question: "O que o tomate foi fazer no banco?",
            answer: "Tirar extrato."
        },
        {
            question: "Como se chama um boomerang que não volta?",
            answer: "Pau."
        },
        {
            question: "Qual é o lugar mais frio do planeta?",
            answer: "A geladeira."
        },
        {
            question: "O que é um vegetariano que come carne?",
            answer: "Um ex-vegetariano."
        }
    ];

    // Seleciona uma piada aleatória
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    
    // Define a piada no elemento da página
    jokeElement.textContent = randomJoke.question;

    jokeButton.addEventListener('click', function() {
        answer.classList.add('show'); // Mostrar a resposta
        backButton.classList.remove('hidden'); // Mostrar o botão de voltar
    });

    backButton.addEventListener('click', function() {
        answer.classList.remove('show'); // Esconder a resposta
        backButton.classList.add('hidden'); // Esconder o botão de voltar
    });

    // Define a resposta
    answer.querySelector('p').textContent = randomJoke.answer;
});
