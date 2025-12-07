import { Crop } from '../types';

export const CROP_DATA: Crop[] = [
  {
    id: 'milho',
    name: 'Milho',
    imageUrl: 'https://images.unsplash.com/photo-1598164074330-85f5439169a3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600',
    plantingSeason: 'Centro-Sul: Setembro a Novembro (safra) e Fevereiro a Março (safrinha). Nordeste: Março a Abril.',
    pests: [
      {
        name: 'Lagarta-do-cartucho (Spodoptera frugiperda)',
        description: 'Uma das pragas mais destrutivas, ataca o cartucho da planta, folhas e espigas, causando grandes perdas de produtividade.',
        controlMethods: {
          chemical: ['Piretroides (ex: Cipermetrina)', 'Espinossinas (ex: Espinosade)', 'Diamidas (ex: Clorantraniliprole)'],
          organic: ['Controle biológico com vespas (Trichogramma)', 'Aplicação de óleo de Neem', 'Bacillus thuringiensis (Bt)'],
        },
        applicationGuide: 'Pulverizar o inseticida diretamente no cartucho da planta, preferencialmente ao final da tarde. Para controle biológico, liberar os agentes predadores no início da infestação. Seguir sempre a recomendação de um engenheiro agrônomo e as instruções do rótulo.'
      },
      {
        name: 'Percevejo-barriga-verde (Dichelops melacanthus)',
        description: 'Ataca as plântulas de milho, sugando a seiva na base do colmo, o que pode causar a morte da planta ou o "perfilhamento", reduzindo o potencial produtivo.',
        controlMethods: {
          chemical: ['Tratamento de sementes com Neonicotinoides', 'Pulverização com mistura de Neonicotinoide + Piretroide em pós-emergência.'],
          organic: ['Controle biológico com a vespa Telenomus podisi', 'Manejo de palhada para reduzir abrigo do percevejo.'],
        },
        applicationGuide: 'O tratamento de sementes é a principal medida preventiva. Realizar o monitoramento constante após a emergência das plantas e aplicar inseticidas se o nível de dano for atingido, preferencialmente nas horas mais frescas do dia.'
      }
    ],
  },
  {
    id: 'feijao',
    name: 'Feijão',
    imageUrl: 'https://images.unsplash.com/photo-1620201201732-f62275a356b2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600',
    plantingSeason: 'Depende da região e regime de chuvas. Safra das águas (Set-Nov), safra da seca (Jan-Mar), safra de inverno (Abr-Jul).',
    pests: [
      {
        name: 'Mosca-branca (Bemisia tabaci)',
        description: 'Além de sugar a seiva e enfraquecer a planta, é vetor do vírus do mosaico dourado, uma das piores doenças do feijoeiro.',
        controlMethods: {
          chemical: ['Neonicotinoides (ex: Tiametoxam)', 'Piretroides para controle de adultos', 'Reguladores de crescimento de insetos (ex: Piriproxifem)'],
          organic: ['Aplicação de óleo de Neem', 'Uso de extrato de pimenta com sabão', 'Controle biológico com Encarsia formosa'],
        },
        applicationGuide: 'Monitorar a presença de adultos e ninfas. Aplicar os produtos em rotação para evitar resistência. Dar preferência a produtos seletivos aos inimigos naturais.'
      },
      {
        name: 'Cigarrinha-verde (Empoasca kraemeri)',
        description: 'Suas ninfas e adultos sugam a seiva das folhas, que ficam amarelas nas bordas (enfezamento) e se curvam para baixo, reduzindo a fotossíntese.',
        controlMethods: {
            chemical: ['Tratamento de sementes com Neonicotinoides', 'Pulverizações com inseticidas sistêmicos.'],
            organic: ['Uso de caldas a base de alho e pimenta', 'Cobertura do solo com palha para dificultar o acesso da praga.'],
        },
        applicationGuide: 'O controle deve ser iniciado logo no início da infestação para evitar danos severos. O tratamento de sementes oferece proteção inicial à cultura.'
      }
    ],
  },
  {
    id: 'soja',
    name: 'Soja',
    imageUrl: 'https://images.unsplash.com/photo-1596704017254-9b1210a89b43?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600',
    plantingSeason: 'Região Sul/Sudeste: Setembro a Dezembro. Cerrado: Outubro a Dezembro.',
    pests: [
      {
        name: 'Percevejo-marrom (Euschistus heros)',
        description: 'Suga os grãos em formação nas vagens, causando chochamento, redução de peso e má qualidade dos grãos.',
        controlMethods: {
          chemical: ['Misturas de Neonicotinoide + Piretroide', 'Acefato'],
          organic: ['Controle biológico com a vespa Telenomus podisi', 'Uso de extrato de Neem.'],
        },
        applicationGuide: 'Realizar o monitoramento com pano-de-batida. Aplicar quando atingir o nível de 2 percevejos por metro. Pulverizar preferencialmente no final da tarde.',
      },
      {
        name: 'Lagarta-da-soja (Anticarsia gemmatalis)',
        description: 'Causa desfolha intensa, podendo reduzir drasticamente a área foliar e, consequentemente, a produtividade da lavoura.',
        controlMethods: {
          chemical: ['Diamidas (ex: Clorantraniliprole)', 'Inibidores de crescimento (ex: Diflubenzuron)'],
          organic: ['Baculovirus anticarsia (agente de controle biológico específico)', 'Bacillus thuringiensis (Bt).'],
        },
        applicationGuide: 'O controle biológico com Baculovirus é altamente eficaz e seletivo. Aplicar quando as lagartas estiverem pequenas. Monitorar o nível de desfolha para decidir sobre o controle.',
      },
    ],
  },
  {
    id: 'cafe',
    name: 'Café',
    imageUrl: 'https://images.unsplash.com/photo-1551788340-e1b6d0c73a8e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600',
    plantingSeason: 'O plantio das mudas é feito no período chuvoso, geralmente de Outubro a Março.',
    pests: [
      {
        name: 'Broca-do-café (Hypothenemus hampei)',
        description: 'Pequeno besouro que perfura o grão de café (fruto), onde deposita seus ovos. As larvas se alimentam do interior do grão, destruindo-o.',
        controlMethods: {
          chemical: ['Ciantraniliprole (via solo ou pulverização)', 'Clorantraniliprole'],
          organic: ['Controle biológico com o fungo Beauveria bassiana', 'Manejo da colheita (não deixar frutos na planta/chão).'],
        },
        applicationGuide: 'Monitorar a infestação com armadilhas. A aplicação de Beauveria bassiana deve ser feita com alta umidade relativa do ar. Realizar colheita bem feita é a principal forma de controle.',
      },
      {
        name: 'Bicho-mineiro (Leucoptera coffeella)',
        description: 'A larva desta mariposa se desenvolve no interior da folha, formando "minas" ou galerias, que necrosam e reduzem a capacidade fotossintética da planta.',
        controlMethods: {
          chemical: ['Inseticidas sistêmicos aplicados via solo (drench) ou foliar.', 'Cartape'],
          organic: ['Controle biológico com vespas predadoras', 'Adubação equilibrada para manter as plantas fortes.'],
        },
        applicationGuide: 'O controle químico via solo no início das chuvas oferece um longo período de proteção. Monitorar a porcentagem de folhas minadas para decidir sobre a aplicação foliar.',
      },
    ],
  },
  {
    id: 'tomate',
    name: 'Tomate',
    imageUrl: 'https://images.unsplash.com/photo-1598512752271-33f913a5af13?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600',
    plantingSeason: 'Pode ser plantado o ano todo em cultivo protegido (estufas). A campo, em épocas de clima ameno e baixa umidade.',
    pests: [
      {
        name: 'Traça-do-tomateiro (Tuta absoluta)',
        description: 'Microlepidóptero cujas larvas abrem galerias nas folhas, brotos, flores e frutos, causando danos diretos e inviabilizando os frutos.',
        controlMethods: {
          chemical: ['Diamidas (Clorantraniliprole)', 'Espinossinas', 'Abamectina'],
          organic: ['Uso de feromônios para confusão sexual', 'Controle biológico com Bacillus thuringiensis (Bt) ou predadores como a vespa Trichogramma.'],
        },
        applicationGuide: 'Rotacionar os inseticidas para manejar a resistência. O uso de armadilhas com feromônio é essencial para monitoramento. Eliminar restos culturais após a colheita.',
      },
      {
        name: 'Mosca-branca (Bemisia tabaci)',
        description: 'Além de sugar seiva e enfraquecer a planta, é o principal vetor de viroses (geminivírus) que podem devastar a produção.',
        controlMethods: {
          chemical: ['Neonicotinoides (aplicação no solo)', 'Reguladores de crescimento de insetos.'],
          organic: ['Uso de óleos vegetais e extratos de Neem', 'Instalação de telas anti-afídeos nas estufas.', 'Controle biológico com predadores (ex: Chrysoperla).'],
        },
        applicationGuide: 'O controle deve ser preventivo, focando em impedir a entrada do inseto na área de cultivo e a transmissão do vírus. Rotação de produtos é crucial.',
      },
    ],
  },
  {
    id: 'batata',
    name: 'Batata',
    imageUrl: 'https://images.unsplash.com/photo-1597479732023-932d84a754f3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600',
    plantingSeason: 'Sul/Sudeste: Safra das águas (Ago-Nov), Safra das secas (Jan-Mar), Safra de inverno (Abr-Jul).',
    pests: [
      {
        name: 'Traça-da-batatinha (Phthorimaea operculella)',
        description: 'A larva ataca folhas e caules, mas o principal dano é nos tubérculos (batatas), onde abre galerias que os apodrecem e inviabilizam.',
        controlMethods: {
          chemical: ['Pulverizações com inseticidas à base de Diamidas ou Espinossinas.'],
          organic: ['Uso de feromônio para monitoramento e captura massal', 'Cobrir bem os tubérculos com terra (amontoa)', 'Armazenamento em local protegido.'],
        },
        applicationGuide: 'A amontoa é uma prática cultural essencial para proteger os tubérculos. O monitoramento com armadilhas de feromônio indica o momento certo para o controle.',
      },
      {
        name: 'Pulgão-verde (Myzus persicae)',
        description: 'Sugar a seiva e enfraquecer a planta. Seu principal dano é a transmissão de vírus, como o PVY e PLRV, que degeneram a cultura.',
        controlMethods: {
          chemical: ['Inseticidas sistêmicos como Neonicotinoides ou Pirimicarbe.'],
          organic: ['Aplicação de óleo de Neem', 'Uso de inimigos naturais como joaninhas.', 'Eliminar plantas doentes (roguing).'],
        },
        applicationGuide: 'O controle visa principalmente evitar a transmissão de vírus. Usar batata-semente certificada e sadia é o passo mais importante. Eliminar plantas com sintomas de virose rapidamente.',
      },
    ],
  },
  {
    id: 'quiabo',
    name: 'Quiabo',
    imageUrl: 'https://images.unsplash.com/photo-1551892569-231350a40a5a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600',
    plantingSeason: 'Pode ser plantado o ano todo em regiões de clima quente. Prefere temperaturas entre 20°C e 30°C.',
    pests: [
      {
        name: 'Pulgões (Aphis gossypii)',
        description: 'Formam colônias nos brotos e folhas novas, sugando a seiva e podendo transmitir viroses. Deixam as folhas pegajosas ("fumagina").',
        controlMethods: {
          chemical: ['Piretroides de baixo impacto', 'Inseticidas a base de Acetamiprido'],
          organic: ['Calda de sabão de coco', 'Controle biológico com joaninhas', 'Jatos de água para derrubar os pulgões'],
        },
        applicationGuide: 'Aplicar as caldas no final da tarde. Inspecionar as plantas regularmente. Em caso de ataque severo, utilizar inseticidas registrados para a cultura.'
      },
      {
        name: 'Vaquinha (Diabrotica speciosa)',
        description: 'O adulto se alimenta das folhas, flores e frutos, causando perfurações e danos estéticos que desvalorizam o produto.',
        controlMethods: {
            chemical: ['Inseticidas de contato do grupo dos Piretroides.'],
            organic: ['Catação manual dos insetos', 'Uso de armadilhas amarelas adesivas para monitoramento e captura.'],
        },
        applicationGuide: 'Realizar o controle no início da infestação para evitar o aumento da população. Pulverizar no final da tarde, quando os insetos estão mais ativos.'
      }
    ],
  },
  {
    id: 'laranja',
    name: 'Laranja',
    imageUrl: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600',
    plantingSeason: 'O plantio pode ser feito em qualquer época do ano, mas prefere-se o período chuvoso para melhor pegamento das mudas.',
    pests: [
      {
        name: 'Psilídeo-dos-citros (Diaphorina citri)',
        description: 'É o inseto vetor da bactéria do Greening (HLB), a doença mais destrutiva da citricultura mundial, que causa a morte da planta.',
        controlMethods: {
          chemical: ['Pulverizações com Neonicotinoides, Piretroides e outros grupos químicos em rotação.', 'Aplicação sistêmica via solo ou tronco.'],
          organic: ['Controle biológico com a vespinha Tamarixia radiata', 'Eliminação de plantas doentes para reduzir fonte de inóculo.'],
        },
        applicationGuide: 'O controle é rigoroso e contínuo. Exige monitoramento constante e aplicações coordenadas regionalmente. A eliminação de plantas sintomáticas é fundamental.'
      },
      {
        name: 'Ácaro-da-leprose (Brevipalpus phoenicis)',
        description: 'Vetor do vírus da leprose dos citros, que causa lesões em folhas, ramos e frutos, levando à queda de produção e morte dos ramos.',
        controlMethods: {
            chemical: ['Acaricidas específicos como Espirodiclofeno, Propargito, ou Abamectina.'],
            organic: ['Podas de limpeza para melhorar a aeração da copa', 'Aplicação de enxofre ou óleos minerais.'],
        },
        applicationGuide: 'As pulverizações devem atingir bem o interior da planta (tronco e ramos), onde o ácaro se aloja. Alternar os produtos para evitar resistência.'
      }
    ],
  },
  {
    id: 'couve',
    name: 'Couve',
    imageUrl: 'https://images.unsplash.com/photo-1554118331-dec5c7a40b08?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600',
    plantingSeason: 'Pode ser cultivada o ano todo, mas se desenvolve melhor em climas amenos, com temperaturas entre 15°C e 20°C.',
    pests: [
      {
        name: 'Lagarta-da-couve (Ascia monuste orobia)',
        description: 'As lagartas se alimentam vorazmente das folhas, deixando grandes buracos e podendo destruir completamente a planta.',
        controlMethods: {
          chemical: ['Inseticidas registrados para hortaliças, de baixa carência.'],
          organic: ['Catação manual das lagartas e ovos', 'Aplicação de Bacillus thuringiensis (Bt)', 'Uso de telas para proteger os canteiros.'],
        },
        applicationGuide: 'Inspecionar a parte de baixo das folhas para encontrar ovos e lagartas pequenas. O controle é mais eficaz quando as lagartas ainda são pequenas.'
      },
      {
        name: 'Pulgão-da-couve (Brevicoryne brassicae)',
        description: 'Formam colônias cerosas e acinzentadas, sugam a seiva, encarquilham as folhas e podem inutilizar a planta para consumo.',
        controlMethods: {
            chemical: ['Piretrinas, Acetamiprido'],
            organic: ['Calda de fumo ou sabão', 'Controle biológico com joaninhas e crisopídeos.'],
        },
        applicationGuide: 'O controle deve ser preventivo. Eliminar plantas hospedeiras alternativas ao redor. Aplicar os produtos no final da tarde, cobrindo bem as colônias.'
      }
    ],
  },
  {
    id: 'maracuja',
    name: 'Maracujá',
    imageUrl: 'https://images.unsplash.com/photo-1621873495934-8789d338f08f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600',
    plantingSeason: 'O plantio é recomendado no início da estação chuvosa. Em regiões com irrigação, pode ser plantado o ano todo.',
    pests: [
      {
        name: 'Lagartas-das-folhas (Dione juno juno)',
        description: 'As lagartas vivem em grupos e podem desfolhar completamente a planta em poucos dias, comprometendo a produção.',
        controlMethods: {
          chemical: ['Inseticidas biológicos a base de Bacillus thuringiensis (Bt).'],
          organic: ['Catação manual dos cachos de lagartas', 'Poda de ramos muito atacados.'],
        },
        applicationGuide: 'O monitoramento deve ser semanal. O controle com Bt é muito eficaz e deve ser feito quando as lagartas são pequenas. Evitar inseticidas químicos para preservar os polinizadores (mamangavas).'
      },
      {
        name: 'Percevejo-do-maracujá (Diactor bilineatus)',
        description: 'Adultos e ninfas sugam a seiva de botões florais, flores e frutos, causando sua queda ou deformação, o que inviabiliza a comercialização.',
        controlMethods: {
            chemical: ['Não há muitos produtos registrados. Usar com cautela para não afetar polinizadores.'],
            organic: ['Catação manual dos percevejos (coletar no início da manhã)', 'Uso de caldas repelentes a base de alho e pimenta.'],
        },
        applicationGuide: 'A catação manual é o método mais seguro e eficaz para pequenas áreas. Evitar o uso de inseticidas durante a floração para proteger as abelhas mamangavas, essenciais para a polinização.'
      }
    ],
  },
];
