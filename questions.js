const questions_easy = [
    {
        question: "Qual é a definição de média aritmética?",
        answers: [
            { text: "O valor mais frequente em um conjunto de dados.", correct: false },
            { text: "A soma de todos os valores dividida pelo número de valores.", correct: true },
            { text: "O valor central quando os dados são ordenados.", correct: false },
            { text: "A diferença entre o maior e o menor valor em um conjunto de dados.", correct: false }
        ]
    },
    {
        question: "O que é a mediana de um conjunto de dados?",
        answers: [
            { text: "O valor mais frequente em um conjunto de dados.", correct: false },
            { text: "O valor que aparece mais vezes.", correct: false },
            { text: "O valor central quando os dados são ordenados.", correct: true },
            { text: "A soma de todos os valores dividida pelo número de valores.", correct: false }
        ]
    },
    {
        question: "Qual é a definição de moda em estatística?",
        answers: [
            { text: "O valor mais frequente em um conjunto de dados.", correct: true },
            { text: "O valor central quando os dados são ordenados.", correct: false },
            { text: "A soma de todos os valores dividida pelo número de valores.", correct: false },
            { text: "A diferença entre o maior e o menor valor em um conjunto de dados.", correct: false }
        ]
    },
    {
        question: "Como é calculada a amplitude de um conjunto de dados?",
        answers: [
            { text: "Subtraindo o menor valor do maior valor.", correct: true },
            { text: "Calculando a média dos valores.", correct: false },
            { text: "Encontrando o valor central quando os dados são ordenados.", correct: false },
            { text: "Somando todos os valores e dividindo pelo número de valores.", correct: false }
        ]
    },
    {
        question: "O que é desvio padrão?",
        answers: [
            { text: "A soma de todos os valores dividida pelo número de valores.", correct: false },
            { text: "A diferença entre o maior e o menor valor em um conjunto de dados.", correct: false },
            { text: "Uma medida da dispersão dos valores em relação à média.", correct: true },
            { text: "O valor central quando os dados são ordenados.", correct: false }
        ]
    },
    {
        question: "Como é definida a variância em estatística?",
        answers: [
            { text: "A soma de todos os valores dividida pelo número de valores.", correct: false },
            { text: "A diferença entre o maior e o menor valor em um conjunto de dados.", correct: false },
            { text: "A média dos quadrados dos desvios em relação à média.", correct: true },
            { text: "O valor central quando os dados são ordenados.", correct: false }
        ]
    },
    {
        question: "Quando todos os valores em um conjunto de dados são iguais, qual é o valor do desvio padrão?",
        answers: [
            { text: "Zero.", correct: true },
            { text: "Igual à média.", correct: false },
            { text: "Igual à variância.", correct: false },
            { text: "Um.", correct: false }
        ]
    },
    {
        question: "Se a média de um conjunto de dados é 50 e todos os dados são aumentados em 10 unidades, qual é a nova média?",
        answers: [
            { text: "50", correct: false },
            { text: "60", correct: true },
            { text: "70", correct: false },
            { text: "80", correct: false }
        ]
    },
    {
        question: "Qual é a principal vantagem de usar a mediana ao invés da média em um conjunto de dados com valores extremos?",
        answers: [
            { text: "A mediana é mais fácil de calcular.", correct: false },
            { text: "A mediana é menos afetada por valores extremos.", correct: true },
            { text: "A mediana leva em consideração todos os valores.", correct: false },
            { text: "A mediana é sempre maior que a média.", correct: false }
        ]
    },
    {
        question: "Qual é a amplitude do conjunto de dados {3, 7, 9, 15, 21}?",
        answers: [
            { text: "3", correct: false },
            { text: "18", correct: true },
            { text: "6", correct: false },
            { text: "15", correct: false }
        ]
    }
];

const questions_normal = [
    {
        question: "Para o conjunto de dados {1, 2, 2, 3, 4, 4, 4, 5}, qual é a moda?",
        answers: [
            { text: "2", correct: false },
            { text: "3", correct: false },
            { text: "4", correct: true },
            { text: "5", correct: false }
        ]
    },
    {
        question: "Qual é a mediana do conjunto de dados {7, 3, 1, 6, 8}?",
        answers: [
            { text: "7", correct: false },
            { text: "3", correct: false },
            { text: "6", correct: true },
            { text: "5", correct: false }
        ]
    },
    {
        question: "Se um conjunto de dados tem uma média de 20 e um desvio padrão de 5, qual é o valor padronizado (z-score) de um dado que é 25?",
        answers: [
            { text: "1", correct: true },
            { text: "-1", correct: false },
            { text: "0", correct: false },
            { text: "2", correct: false }
        ]
    },
    {
        question: "Qual é a amplitude do conjunto de dados {15, 22, 8, 13, 7, 19}?",
        answers: [
            { text: "7", correct: false },
            { text: "15", correct: false },
            { text: "14", correct: true },
            { text: "12", correct: false }
        ]
    },
    {
        question: "Se a variância de um conjunto de dados é 16, qual é o desvio padrão?",
        answers: [
            { text: "2", correct: false },
            { text: "4", correct: true },
            { text: "8", correct: false },
            { text: "16", correct: false }
        ]
    },
    {
        question: "Para o conjunto de dados {5, 8, 10, 10, 15}, qual é a média?",
        answers: [
            { text: "10", correct: false },
            { text: "9.6", correct: true },
            { text: "8.5", correct: false },
            { text: "7.5", correct: false }
        ]
    },
    {
        question: "Qual é a mediana do conjunto de dados {2, 3, 6, 8, 11, 13, 15}?",
        answers: [
            { text: "6", correct: false },
            { text: "8", correct: true },
            { text: "11", correct: false },
            { text: "13", correct: false }
        ]
    },
    {
        question: "Qual é a amplitude do conjunto de dados {9, 11, 5, 7, 10}?",
        answers: [
            { text: "4", correct: false },
            { text: "5", correct: false },
            { text: "6", correct: true },
            { text: "7", correct: false }
        ]
    },
    {
        question: "Se o desvio padrão de um conjunto de dados é 10, qual é a variância?",
        answers: [
            { text: "5", correct: false },
            { text: "10", correct: false },
            { text: "50", correct: false },
            { text: "100", correct: true }
        ]
    },
    {
        question: "Para o conjunto de dados {2, 4, 4, 4, 5, 5, 7, 9}, qual é a moda?",
        answers: [
            { text: "4", correct: true },
            { text: "5", correct: false },
            { text: "7", correct: false },
            { text: "9", correct: false }
        ]
    }
];

const questions_hard = [
    {
        question: "Calcule a média do conjunto de dados {3, 7, 8, 5, 12, 14, 21, 13, 18}.",
        answers: [
            { text: "11.22", correct: false },
            { text: "11.33", correct: true },
            { text: "12.33", correct: false },
            { text: "13.22", correct: false }
        ]
    },
    {
        question: "Qual é a variância do conjunto de dados {2, 4, 4, 4, 5, 5, 7, 9}?",
        answers: [
            { text: "4", correct: false },
            { text: "4.57", correct: false },
            { text: "4.79", correct: true },
            { text: "5", correct: false }
        ]
    },
    {
        question: "Calcule o desvio padrão do conjunto de dados {10, 12, 23, 23, 16, 23, 21, 16}.",
        answers: [
            { text: "4.62", correct: true },
            { text: "4.82", correct: false },
            { text: "5.62", correct: false },
            { text: "5.82", correct: false }
        ]
    },
    {
        question: "Qual é a mediana do conjunto de dados {13, 21, 21, 40, 55, 60, 63, 70, 75, 83, 91}?",
        answers: [
            { text: "55", correct: false },
            { text: "60", correct: true },
            { text: "63", correct: false },
            { text: "70", correct: false }
        ]
    },
    {
        question: "Para o conjunto de dados {8, 12, 16, 20, 24, 28}, qual é a amplitude?",
        answers: [
            { text: "16", correct: false },
            { text: "20", correct: false },
            { text: "24", correct: false },
            { text: "20", correct: true }
        ]
    },
    {
        question: "Qual é a média do conjunto de dados {2, 5, 9, 7, 10, 5, 3}?",
        answers: [
            { text: "5.86", correct: false },
            { text: "6.14", correct: true },
            { text: "6.57", correct: false },
            { text: "6.86", correct: false }
        ]
    },
    {
        question: "Calcule a variância do conjunto de dados {4, 8, 6, 5, 3, 9}.",
        answers: [
            { text: "4.66", correct: false },
            { text: "5.56", correct: true },
            { text: "6.25", correct: false },
            { text: "7.33", correct: false }
        ]
    },
    {
        question: "Para o conjunto de dados {7, 15, 14, 10, 18, 19, 13, 12}, qual é a mediana?",
        answers: [
            { text: "13", correct: false },
            { text: "13.5", correct: false },
            { text: "14", correct: true },
            { text: "15", correct: false }
        ]
    },
    {
        question: "Qual é o desvio padrão do conjunto de dados {3, 6, 7, 11, 15, 16, 19}?",
        answers: [
            { text: "5.26", correct: true },
            { text: "5.46", correct: false },
            { text: "5.66", correct: false },
            { text: "5.86", correct: false }
        ]
    },
    {
        question: "Para o conjunto de dados {9, 11, 13, 15, 17, 19, 21, 23, 25}, qual é a moda?",
        answers: [
            { text: "9", correct: false },
            { text: "13", correct: false },
            { text: "17", correct: false },
            { text: "Nenhum", correct: true }
        ]
    }
];