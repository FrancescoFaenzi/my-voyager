import type { HomeFeaturesContent } from '../types';

export const ptChats: HomeFeaturesContent['chats'] = {
  kyoto: {
    title: 'Três dias em Quioto',
    star: true,
    starred: [3],
    turns: [
      [
        'Vou a Quioto em novembro. Como organizo três dias?',
        'Novembro é a época alta das folhas de outono. Divida os dias por zona:\n- Dia 1, Higashiyama: Kiyomizu-dera, Ninenzaka, santuário Yasaka\n- Dia 2, Arashiyama: bosque de bambu, Tenryu-ji, o comboio panorâmico\n- Dia 3, Fushimi Inari, e à tarde o mercado Nishiki',
      ],
      [
        'A que horas o Kiyomizu-dera tem menos gente?',
        'Entre a abertura, às 6h, e as 7h. A luz da manhã sobre o terraço também é a mais bonita, e os grupos de excursão chegam depois das 9h.',
      ],
      [
        'É preciso reservar o comboio de Arashiyama?',
        'Na época das folhas, reserve no site oficial com um mês de antecedência. Sente-se do lado direito para ver o desfiladeiro do rio Hozu.',
      ],
      [
        'Qual é a zona mais prática para ficar?',
        'Perto da estação de Quioto ou de Shijo-Kawaramachi. A estação fica a caminho de Fushimi e Arashiyama; Kawaramachi é melhor para jantar e passear à noite.',
      ],
      [
        'Há sítios de ramen sem fila?',
        'Fuja das horas de ponta do meio-dia e das 18h e a maioria das casas não tem fila. Perto de Kawaramachi, os pequenos restaurantes de bairro costumam ter lugar depois das 21h.',
      ],
    ],
    extra: {
      table: [
        ['Dia', 'Manhã', 'Tarde'],
        ['1', 'Kiyomizu-dera', 'Ninenzaka, santuário Yasaka'],
        ['2', 'Bosque de bambu', 'Tenryu-ji, comboio panorâmico'],
        ['3', 'Fushimi Inari', 'Mercado Nishiki'],
      ],
      summary: [
        'Divida a viagem por zonas: Higashiyama, Arashiyama, Fushimi',
        'Kiyomizu-dera às 6h e comboio reservado com um mês de antecedência',
        'Fique perto da estação ou de Kawaramachi e coma fora das horas de ponta',
      ],
      translation:
        'Skip the noon and 6 pm rush and most ramen shops have no line. Around Kawaramachi, small neighborhood places usually have a seat after 9 pm.',
      todo: [
        'Reservar o comboio de Arashiyama (um mês antes)',
        'Reservar hotel perto da estação de Quioto',
        'Confirmar o horário do Kiyomizu-dera',
        'Comprar um cartão ICOCA',
      ],
    },
  },
  packing: {
    title: 'Lista para a mala',
    turns: [
      [
        'Preciso de um casaco grosso para Quioto em novembro?',
        'De manhã e à noite andam pelos 8 °C, durante o dia pelos 15 °C. Um casaco de penas leve ou um polar por cima de uma camisola de manga comprida chega.',
      ],
      [
        'As minhas fichas funcionam no Japão?',
        'Não. O Japão usa fichas de dois pinos chatos (tipo A) a 100 V, e as nossas são de pinos redondos. Leve um adaptador; os carregadores do telemóvel e do portátil aguentam a voltagem sem problema.',
      ],
      [
        'Suica ou ICOCA?',
        'As duas funcionam em Kansai. A ICOCA é mais comum por lá e vende-se nas máquinas da estação de Quioto.',
      ],
    ],
    extra: {
      table: [
        ['Item', 'Levar?', 'Nota'],
        ['Casaco de penas leve', 'Sim', '8 °C de manhã'],
        ['Adaptador de ficha', 'Sim', 'Tipo A, 100 V'],
        ['Cartão de transportes', 'Comprar lá', 'ICOCA'],
      ],
      summary: [
        'Um casaco de penas leve ou um polar chega',
        'Leve adaptador: tipo A, 100 V',
        'Compre o ICOCA na estação de Quioto',
      ],
      translation:
        'Both work in Kansai, but ICOCA is more common there. You can buy one from the ticket machines at Kyoto Station.',
      todo: [
        'Casaco de penas leve',
        'Duas camisolas de manga comprida',
        'Adaptador tipo A',
        'Passaporte e reserva do hotel',
      ],
    },
  },
  dinner: {
    title: 'O que jantar com o que há no frigorífico',
    turns: [
      [
        'Tenho ovos, tomate e meia cebola. O que faço para o jantar?',
        'Ovos mexidos com tomate e cebola ficam prontos em dez minutos: aloure a cebola num fio de azeite, junte o tomate até fazer molho e no fim mexa os ovos lá dentro.',
      ],
      [
        'Também queria uma sopa',
        'Com o último tomate faz uma sopa de tomate rápida: refogue-o, junte água, deixe ferver e escalfe um ovo no caldo. Sal a gosto.',
      ],
      [
        'Não tenho salsa nem coentros, faz mal?',
        'Não. Uma pitada de pimenta preta ou um fio de azeite cru mesmo antes de servir resolve.',
      ],
    ],
    extra: {
      table: [
        ['Prato', 'Ingredientes', 'Tempo'],
        ['Ovos mexidos com tomate', '3 ovos, 1 tomate, meia cebola', '10 min'],
        ['Sopa de tomate com ovo', '1 tomate, 1 ovo', '15 min'],
      ],
      summary: [
        'Prato: ovos mexidos com tomate e cebola',
        'Sopa: tomate com ovo escalfado',
        'Sem ervas? Pimenta preta ou azeite cru',
      ],
      translation:
        'Not at all. A pinch of black pepper or a drizzle of raw olive oil right before serving does the trick.',
      todo: ['Pôr o arroz ao lume', 'Alourar a cebola', 'Fazer os ovos mexidos', 'Fazer a sopa'],
    },
  },
  week: {
    title: 'Marmitas para a semana',
    turns: [
      [
        'Planeia-me uma semana de marmitas, nada complicado',
        'Ao domingo, cozinhe três pratos de uma vez: frango assado no forno, estufado de vaca com tomate e brócolos salteados com alho. Congele em doses e, em cada dia útil, leve uma com arroz acabado de fazer.',
      ],
      [
        'Consigo ficar abaixo de 4 € por dia?',
        'Consegue. Compre as coxas de frango e a carne para estufar em embalagem familiar e os brócolos da época; cada dose fica por volta de 2,50 €.',
      ],
    ],
    extra: {
      table: [
        ['Dia', 'Prato'],
        ['Seg', 'Frango assado'],
        ['Ter', 'Estufado de vaca'],
        ['Qua', 'Frango assado'],
        ['Qui', 'Estufado de vaca'],
        ['Sex', 'Brócolos com frango'],
      ],
      summary: [
        'Cozinhe três pratos ao domingo e congele',
        'Nos dias úteis, só o arroz',
        'Cerca de 2,50 € por dose',
      ],
      translation:
        'Yes. Buy the chicken thighs and stewing beef in family packs and pick broccoli in season, and each portion comes to about €2.50.',
      todo: [
        '1 kg de coxas de frango',
        '750 g de carne de vaca para estufar',
        '3 pés de brócolos',
        '10 caixas para marmita',
      ],
    },
  },
  landlord: {
    title: 'Avisar o senhorio do esquentador',
    turns: [
      [
        'O esquentador avariou. Como digo ao senhorio?',
        'Diga o que aconteceu e desde quando, peça que marque a reparação e indique quando está em casa.',
      ],
      [
        'Escreve-me a mensagem',
        'Bom dia, Sr. Fernando. O esquentador deixou de acender desde ontem à noite e estamos sem água quente. Seria possível mandar alguém arranjá-lo nos próximos dias? Estou em casa nos dias úteis ao fim da tarde e ao fim de semana. Obrigado!',
      ],
    ],
    extra: {
      table: [
        ['Ponto', 'O que dizer'],
        ['Problema', 'Não acende desde ontem à noite'],
        ['Pedido', 'Mandar alguém reparar'],
        ['Disponibilidade', 'Fim da tarde e fins de semana'],
      ],
      summary: [
        'Diga o que aconteceu e desde quando',
        'Peça que marque a reparação',
        'Indique quando está em casa',
      ],
      translation:
        "Good morning, Mr. Fernando. The water heater hasn't lit since last night and we have no hot water. Could you send someone to fix it in the next few days? I'm home on weekday evenings and at weekends. Thank you!",
      todo: ['Filmar o erro no esquentador', 'Enviar a mensagem', 'Combinar a hora da reparação'],
    },
  },
  run: {
    title: 'Dor no joelho a correr',
    turns: [
      [
        'Dói-me a parte de fora do joelho quando corro. Posso continuar?',
        'Dor no lado de fora do joelho costuma ser a banda iliotibial tensa. Descanse três a cinco dias e volte com corridas curtas e leves. Se doer a andar, vá a um médico de medicina desportiva.',
      ],
      [
        'Que alongamentos posso fazer?',
        '- Rolo de espuma na parte de fora da coxa, 2 minutos de cada lado\n- Alongamento de pé com as pernas cruzadas, 30 segundos de cada lado\n- Elevação lateral da perna deitado de lado, 15 repetições de cada lado',
      ],
    ],
    extra: {
      table: [
        ['Exercício', 'Quantidade'],
        ['Rolo de espuma', '2 min de cada lado'],
        ['Pernas cruzadas', '30 s de cada lado'],
        ['Elevação lateral', '15 de cada lado'],
      ],
      summary: [
        'Dor no lado de fora é muitas vezes a banda iliotibial',
        'Descanse três a cinco dias',
        'Rolo de espuma e reforço da anca todos os dias',
      ],
      translation:
        '- Foam-roll the outer thigh, 2 minutes per side\n- Standing cross-leg stretch, 30 seconds per side\n- Side-lying leg raises, 15 reps per side',
      todo: [
        'Descansar três dias',
        'Rolo de espuma todos os dias',
        'Três séries de elevações por dia',
        'Recomeçar com 3 km',
      ],
    },
  },
  cat: {
    title: 'A minha gata anda a comer pouco',
    turns: [
      [
        'A minha gata há dois dias que não quer a ração. É normal?',
        'Veja primeiro se está com energia, se bebe água e se usa a caixa de areia. Se estiver bem e for só esquisitice, experimente outro sabor. Se passar mais de 24 horas sem comer nada, leve-a ao veterinário.',
      ],
      [
        'Como faço a troca de ração?',
        'Em sete dias: um quarto de ração nova nos dois primeiros dias, metade nos três seguintes e três quartos nos dois últimos.',
      ],
    ],
    extra: {
      table: [
        ['Dias', 'Ração nova'],
        ['1–2', '25%'],
        ['3–5', '50%'],
        ['6–7', '75%'],
      ],
      summary: [
        'Veja a energia, a água e a caixa de areia',
        '24 horas sem comer: veterinário',
        'Troque de ração ao longo de sete dias',
      ],
      translation:
        'Switch over seven days: a quarter new food for the first two days, half for the next three, and three quarters for the last two.',
      todo: [
        'Apontar quanto come hoje',
        'Comprar um saco pequeno de outro sabor',
        'Seguir a mistura de sete dias',
      ],
    },
  },
  headphones: {
    title: 'Escolher auscultadores com cancelamento de ruído',
    turns: [
      [
        'Como escolho auscultadores com cancelamento de ruído para o metro?',
        'Defina um orçamento e depois compare cancelamento de ruído, conforto e bateria. No metro ou no comboio, dê prioridade ao cancelamento; se os usa durante horas, o conforto pesa mais.',
      ],
      [
        'Os óculos atrapalham?',
        'Sim. As conchas dos auscultadores supra-auriculares apertam as hastes dos óculos e deixam passar som. Se usa óculos, os intra-auriculares são a escolha mais fácil.',
      ],
    ],
    extra: {
      table: [
        ['Tipo', 'Cancelamento', 'Com óculos'],
        ['Supra-auriculares', 'Mais forte', 'Apertam as hastes'],
        ['Intra-auriculares', 'Suficiente', 'Sem problema'],
      ],
      summary: [
        'Defina primeiro o orçamento',
        'No metro, dê prioridade ao cancelamento',
        'Usa óculos? Intra-auriculares',
      ],
      translation:
        'Yes. Over-ear cups press on the arms of your glasses and let sound in. If you wear glasses, earbuds are the easier choice.',
      todo: [
        'Definir o orçamento',
        'Experimentar dois modelos numa loja',
        'Comparar bateria e tamanho do estojo',
      ],
    },
  },
};
