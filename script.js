document.addEventListener('DOMContentLoaded', function() {
    const jokeButton = document.getElementById('jokeButton');
    const backButton = document.getElementById('backButton');
    const answer = document.getElementById('answer');

    jokeButton.addEventListener('click', function() {
        answer.classList.add('show'); // Mostrar a resposta
        backButton.classList.remove('hidden'); // Mostrar o botão de voltar
    });

    backButton.addEventListener('click', function() {
        answer.classList.remove('show'); // Esconder a resposta
        backButton.classList.add('hidden'); // Esconder o botão de voltar
    });
});
