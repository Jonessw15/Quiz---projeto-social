// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Qual o nome do filme?",
    answer: "O jogo da imitação",
    options: [
      "O jogo da imitação",
      "Jogo da Vida",
      "A História de Alan Turing",
      "O Enigma"
    ]
  },
    {
    numb: 2,
    question: "Onde se passa o filme?",
    answer: "Inglaterra",
    options: [
      "Alemanha",
      "Inglaterra",
      "França",
      "Estados Unidos"
    ]
  },
    {
    numb: 3,
    question: "Allan Turing sabe falar alemão?",
    answer: "Não",
    options: [
      "Sim",
      "",
      "Não",
      ""
    ]
  },
    {
    numb: 4,
    question: "Qual o contexto histórico estava se passando naquele momento? ",
    answer: "2ª Guerra Mundial",
    options: [
      "1ª Guerra Mundial",
      "Guerra Fria",
      "2ª Guerra Mundial",
      "Guerra do Golfo"
    ]
  },
    {
    numb: 5,
    question: "Qual o nome da máquina Alemã de criptografia?",
    answer: "Enigma",
    options: [
      "Enigma",
      "Super computador",
      "Mistério",
      "Criptógrafia"
    ]
  },
  {
    numb: 6,
    question: "Qual era a profissão de Turing?",
    answer: "Matemático",
    options: [
      "Filósofo",
      "Físico",
      "Matemático",
      "Engenheiro"
    ]
  },
  {
    numb: 7,
    question: "Para que servia a máquina CHRISTOPHER?",
    answer: "Para decifrar as mensagens dos Alemães",
    options: [
      "Para decifrar as mensagens dos Alemães",
      "Para decifrar as mensagens dos Aliados",
      "Para codificar mensagens dos Aliados",
      "Para realizar cálculos"
    ]
  },
  {
    numb: 8,
    question: "Qual foi a ideia de Turing para conseguir mais pessoas para a sua equipe?",
    answer: "Por meio de uma palavra cruzada no jornal",
    options: [
      "Espalhando cartazes pelas ruas",
      "Por meio de uma palavra cruzada no jornal",
      "Prova escrita",
      "Resolução de cálculos de forma rápida"
    ]
  },
  {
    numb: 9,
    question: "Quem passou na seleção de Turing?",
    answer: "Joan Clarke",
    options: [
      "Hellen",
      "Peter Hilton",
      "Joan Clarke",
      "Moore"
    ]
  },
  {
    numb: 10,
    question: "Quais problemas eram bem perceptíveis durante o filme?",
    answer: "Homofobia e Machismo",
    options: [
      "Machismo e Xenofobia",
      "Feminismo e Racismo",
      "Xenofobia e Feminismo",
      "Homofobia e Machismo"
    ]
  },
  {
    numb: 11,
    question: "O que motivou a equipe de Alan a ajudá-lo no desenvolvimento do projeto?",
    answer: "O conselho de Joan Clarke",
    options: [
      "O conselho de Kim Kroos",
      "O conselho de Joan Clarke",
      "A ameaça de demissão de Alastair",
      "A equipe ajudou Alan por vontade própria"
    ]
  },
  {
    numb: 12,
    question: "Qual o prazo foi dado a equipe de Turing para concluir a máquina?",
    answer: "1 mês",
    options: [
      "6 meses",
      "2 meses",
      "1 mês",
      "3 meses"
    ]
  },
  {
    numb: 13,
    question: "Por qual motivo Joan Clarcke foi pedida em casamento por Alan?",
    answer: "Para ela não ir embora",
    options: [
      "Por pressão da sociedade",
      "Pedido de seu pai",
      "Por ele ser apaixonado por ela",
      "Para ela não ir embora"
    ]
  },
  {
    numb: 14,
    question: "Qual o nome do artigo escrito por Alan Turing?",
    answer: "O Jogo da Imitação",
    options: [
      "Máquina CHRISTOPHER",
      "Máquinas Decodificadoras",
      "O Jogo da Imitação",
      "Máquina de Turing"
    ]
  },
  {
    numb: 15,
    question: "Como a máquina CHRISTOPHER passou a funcionar?",
    answer: "Após descobrir uma sequência de 3 palavras que se repetiam nas mensagens alemãs",
    options: [
      "Após descobrir uma sequência de 3 palavras que se repetiam nas mensagens alemãs",
      "Após Alan aprimorar a máquina CHRISTOPHER",
      "Após a equipe de Alan esperar por um período de 1 mês",
      "Após a ajuda de Alastair no bar"
    ]
  },
  {
    numb: 16,
    question: "Quem era o espião soviético?",
    answer: "Kim Kroos",
    options: [
      "Alan Turing",
      "Kim Kroos",
      "Joane Clarke",
      "Peter Hilton"
    ]
  },
  {
    numb: 17,
    question: "Alan tornou público quando conseguiu vencer a máquina ENIGMA?",
    answer: "Não",
    options: [
      "Sim",
      "",
      "Não",
      ""
    ]
  },
  {
    numb: 18,
    question: "O nome da máquina CHRISTOPHER foi uma homenagem a quem?",
    answer: "A um amigo de infância de Alan",
    options: [
      "A um irmão de Alan",
      "A um primo de Alan",
      "A um amigo de infância de Alan",
      "Ao pai de Alan"
    ]
  }, 
  {
    numb: 19,
    question: "Ao fim da guerra, a equipe de Alan foi instruída a fazer o quê?",
    answer: "Queimar todas as provas e evidências descobertas durante a guerra e nunca mais se verem",
    options: [
      "Tornar público tudo que a equipe descobriu durante a guerra",
      "Queimar todas as provas e evidências descobertas durante a guerra e nunca mais se verem",
      "Continuar com a equipe produzindo novas máquinas",
      "Explicar o desenvolvimento do projeto durante o período da guerra"
    ]
  },
  {
    numb: 20,
    question: "Do que morreu o amigo de infância de Alan?",
    answer: "Tuberculose Bovina",
    options: [
      "Febre Amarela",
      "Tuberculose",
      "Peste Bubônica",
      "Tuberculose Bovina"
    ]
  },
  {
    numb: 21,
    question: "Vencer a máquina ENIGMA encurtou a guerra em quanto tempo?",
    answer: "2 anos",
    options: [
      "2 anos",
      "1 ano",
      "6 meses",
      "Não encurtou"
    ]
  },
  {
    numb: 22,
    question: "Do que morreu Alan Turing?",
    answer: "Suicídio",
    options: [
      "Tuberculose Bovina",
      "Injeção Letal",
      "Suicídio",
      "AIDS"
    ]
  },
  {
    numb: 23,
    question: "Como é chamado na atualidade as Máquinas de Turing?",
    answer: "Computadores",
    options: [
      "Televisão",
      "Datilógrafo",
      "Computadores",
      "Ábaco"
    ]
  },




  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];