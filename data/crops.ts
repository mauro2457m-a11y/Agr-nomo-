import { Crop } from '../types';

export const CROP_DATA: Crop[] = [
  {
    id: 'milho',
    name: 'Milho',
    imageUrl: 'https://images.unsplash.com/photo-1598164074330-85f5439169a3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600',
    plantingSeason: 'Centro-Sul: Setembro a Novembro (safra) e Fevereiro a Março (safrinha). Nordeste: Março a Abril.',
    fertilization: {
        recommended_fertilizers: 'Formulação NPK (ex: 20-05-20) na base e Ureia em cobertura. Responde bem a matéria orgânica.',
        dosage_and_application: 'Plantio: 300-400 kg/ha do formulado. Cobertura: Aplicar 150-200 kg/ha de Ureia quando a planta tiver de 4 a 8 folhas (V4-V8). As doses devem ser ajustadas conforme a análise de solo.'
    },
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
    diseases: [
      {
        name: 'Ferrugem Comum (Puccinia sorghi)',
        description: 'Causa pústulas de cor marrom-alaranjada nas folhas, que liberam esporos. Em ataques severos, reduz a área fotossintética e a produtividade.',
        controlMethods: {
          chemical: ['Fungicidas do grupo dos Triazóis e Estrobilurinas, aplicados preventivamente ou no início dos sintomas.'],
          organic: ['Uso de cultivares resistentes', 'Rotação de culturas para quebrar o ciclo do patógeno.'],
        },
        applicationGuide: 'O monitoramento é chave. A aplicação de fungicidas é mais eficaz quando realizada nos estádios vegetativos finais e início do reprodutivo (VT a R2). A escolha de híbridos com boa resistência genética é a principal medida de manejo.'
      },
      {
        name: 'Mancha Branca (Phaeosphaeria maydis)',
        description: 'Caracterizada por manchas de cor palha a branca no centro, com bordas marrons e um halo amarelado. Ataca principalmente as folhas do baixeiro, subindo para o topo da planta em condições favoráveis.',
        controlMethods: {
          chemical: ['Fungicidas de mistura (Triazol + Estrobilurina) em aplicações preventivas.'],
          organic: ['Rotação de culturas', 'Manejo de restos culturais para reduzir o inóculo.'],
        },
        applicationGuide: 'Evitar o plantio de milho sobre milho (safrinha). O controle químico deve ser iniciado com base no monitoramento, geralmente a partir do florescimento. Boa cobertura de pulverização é essencial.'
      }
    ]
  },
  {
    id: 'feijao',
    name: 'Feijão',
    imageUrl: 'https://images.unsplash.com/photo-1620201201732-f62275a356b2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600',
    plantingSeason: 'Depende da região e regime de chuvas. Safra das águas (Set-Nov), safra da seca (Jan-Mar), safra de inverno (Abr-Jul).',
    fertilization: {
        recommended_fertilizers: 'Fósforo (P) e Potássio (K) são essenciais. Formulações como 04-14-08 ou 04-20-20. Evitar excesso de Nitrogênio (N) na base.',
        dosage_and_application: 'Plantio: 250-350 kg/ha do formulado NPK. A inoculação com Rhizobium é fundamental para a fixação biológica de nitrogênio. Não necessita, em geral, de adubação de cobertura nitrogenada.'
    },
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
    diseases: [
        {
          name: 'Antracnose (Colletotrichum lindemuthianum)',
          description: 'Causa lesões escuras e deprimidas em vagens, folhas e caules. É uma das doenças mais importantes da cultura, sendo disseminada por sementes contaminadas.',
          controlMethods: {
            chemical: ['Fungicidas protetores (Mancozebe) e sistêmicos (Tebuconazol, Azoxistrobina) em rotação.'],
            organic: ['Uso de sementes sadias e certificadas', 'Rotação de culturas com gramíneas', 'Eliminação de restos culturais.'],
          },
          applicationGuide: 'O tratamento de sementes é fundamental. As pulverizações devem ser iniciadas preventivamente, especialmente em condições de alta umidade e temperaturas amenas.'
        },
        {
          name: 'Mosaico Dourado',
          description: 'Virose transmitida pela mosca-branca. As folhas novas ficam amarelas com aspecto de mosaico, e a planta tem seu crescimento paralisado, resultando em nanismo e perda total da produção.',
          controlMethods: {
            chemical: ['Controle químico do inseto vetor (mosca-branca) com inseticidas sistêmicos.'],
            organic: ['Uso de cultivares resistentes ao vírus', 'Eliminação de plantas "tigrão" (com sintomas)', 'Barreiras vivas (ex: milho) ao redor da lavoura.'],
          },
          applicationGuide: 'O foco total é no controle da mosca-branca. Não há cura para a planta infectada. O controle do vetor deve ser rigoroso desde o início do ciclo da cultura.'
        }
      ]
  },
  {
    id: 'soja',
    name: 'Soja',
    imageUrl: 'https://images.unsplash.com/photo-1596704017254-9b1210a89b43?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600',
    plantingSeason: 'Região Sul/Sudeste: Setembro a Dezembro. Cerrado: Outubro a Dezembro.',
    fertilization: {
        recommended_fertilizers: 'Muito dependente da fixação biológica de nitrogênio (FBN) via inoculação com Bradyrhizobium. Adubação focada em Fósforo (P) e Potássio (K), com fórmulas como 00-20-20.',
        dosage_and_application: 'Toda a adubação de P e K é feita no plantio, na base de 300-400 kg/ha, variando com a análise de solo. A inoculação da semente é obrigatória. micronutrientes como Cobalto e Molibdênio são vitais para a FBN.'
    },
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
    diseases: [
        {
          name: 'Ferrugem Asiática (Phakopsora pachyrhizi)',
          description: 'A doença mais severa da soja no Brasil. Causa desfolha precoce, impedindo a completa formação dos grãos e resultando em perdas drásticas de produtividade.',
          controlMethods: {
            chemical: ['Aplicação sequencial e rotacionada de fungicidas (Triazóis, Estrobilurinas, Carboxamidas). O controle é principalmente preventivo.'],
            organic: ['Vazio sanitário (período sem plantas de soja no campo)', 'Uso de cultivares de ciclo precoce e com resistência genética.'],
          },
          applicationGuide: 'Seguir o calendário de semeadura e respeitar o vazio sanitário. As aplicações de fungicidas devem começar preventivamente, antes do fechamento das entrelinhas, e continuar em intervalos regulares conforme a recomendação técnica.'
        },
        {
          name: 'Mancha-alvo (Corynespora cassiicola)',
          description: 'Causa lesões circulares com um ponto escuro no centro, parecendo um "alvo". Pode infectar folhas, vagens e caules, causando desfolha e redução do rendimento.',
          controlMethods: {
            chemical: ['Fungicidas de mistura (multissítios + sítio-específicos) apresentam melhor controle.'],
            organic: ['Rotação de culturas com gramíneas', 'Uso de cultivares resistentes.'],
          },
          applicationGuide: 'A rotação de culturas é uma medida importante. O controle químico deve ser posicionado no período vegetativo/início do reprodutivo, com produtos que tenham eficácia comprovada para a doença.'
        }
    ]
  },
  {
    id: 'cafe',
    name: 'Café',
    imageUrl: 'https://images.unsplash.com/photo-1551788340-e1b6d0c73a8e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600',
    plantingSeason: 'O plantio das mudas é feito no período chuvoso, geralmente de Outubro a Março.',
    fertilization: {
        recommended_fertilizers: 'Cultura exigente. NPK com formulações ricas em Potássio (K) na fase de produção (ex: 20-05-20). Micronutrientes como Boro e Zinco são fundamentais.',
        dosage_and_application: 'Adubação parcelada ao longo do ano. Normalmente 3 a 4 aplicações no período chuvoso. Ex: 1ª em Set/Out, 2ª em Nov/Dez, 3ª em Fev/Mar. A calagem deve ser feita para corrigir a acidez do solo antes do plantio.'
    },
    pests: [
      {
        name: 'Broca-do-café (Hypothenemus hampei)',
        description: 'Pequeno besouro que perfura o grão de café (fruto), onde deposita seus ovos. As larvas se alimentam do interior do grão, destruindo-o.',
        controlMethods: {
          chemical: ['Ciantraniliprole (via solo ou pulverização)', 'Clorantraniliprole'],
          organic: ['Controle biológico com o fungo Beauveria bassiana', 'Manejo de colheita (não deixar frutos na planta/chão).'],
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
    diseases: [
        {
          name: 'Ferrugem-do-cafeeiro (Hemileia vastatrix)',
          description: 'Fungo que causa manchas amareladas na parte superior das folhas e pústulas cor de ferrugem na parte inferior, levando a uma intensa desfolha e queda de produção.',
          controlMethods: {
            chemical: ['Fungicidas à base de Cobre (preventivos) e Triazóis (curativos e preventivos). Aplicações via foliar ou via solo.'],
            organic: ['Plantio de variedades resistentes (principal medida)', 'Adubação equilibrada para maior tolerância da planta.'],
          },
          applicationGuide: 'A escolha de variedades resistentes é crucial. O controle químico deve ser iniciado antes do período chuvoso, de forma preventiva. Manter a lavoura bem nutrida e podada ajuda a reduzir a severidade.'
        },
        {
          name: 'Cercosporiose (Cercospora coffeicola)',
          description: 'Causa lesões circulares de centro claro e bordas escuras nas folhas ("olho de pavão") e manchas escuras e deprimidas nos frutos, podendo afetar a qualidade da bebida.',
          controlMethods: {
            chemical: ['Fungicidas cúpricos e Triazóis usados para ferrugem também controlam a cercosporiose.'],
            organic: ['Adubação equilibrada (a doença é mais severa em plantas desnutridas)', 'Podas para aumentar a aeração e reduzir a umidade.'],
          },
          applicationGuide: 'O manejo da nutrição da planta é fundamental para a prevenção. O controle químico é geralmente feito em conjunto com o manejo da ferrugem. Evitar ferimentos na planta.'
        }
      ]
  },
  {
    id: 'tomate',
    name: 'Tomate',
    imageUrl: 'https://images.unsplash.com/photo-1598512752271-33f913a5af13?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600',
    plantingSeason: 'Pode ser plantado o ano todo em cultivo protegido (estufas). A campo, em épocas de clima ameno e baixa umidade.',
    fertilization: {
        recommended_fertilizers: 'Exigente em nutrientes. NPK na base e fertirrigação frequente com Nitrogênio e Potássio durante o ciclo. Cálcio é crucial para evitar podridão apical nos frutos.',
        dosage_and_application: 'Plantio: NPK 04-14-08. Cobertura/Fertirrigação: Iniciar 15 dias após o transplante, aplicando soluções de Nitrato de Cálcio, Nitrato de Potássio, alternadamente, conforme a necessidade da fase da cultura.'
    },
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
    diseases: [
        {
          name: 'Requeima ou Míldio (Phytophthora infestans)',
          description: 'Doença devastadora em condições de alta umidade e temperaturas amenas. Causa manchas escuras e de aspecto aquoso em folhas, caules e frutos, que progridem rapidamente e podem destruir a lavoura em poucos dias.',
          controlMethods: {
            chemical: ['Programa de pulverização com fungicidas protetores (Mancozebe, Clorotalonil) e sistêmicos (Cimoxanil, Metalaxil) em rotação.'],
            organic: ['Uso de cultivares resistentes', 'Controle da irrigação (evitar molhamento foliar)', 'Calda bordalesa aplicada preventivamente.'],
          },
          applicationGuide: 'O controle deve ser estritamente preventivo. Iniciar as aplicações antes do início das chuvas ou com base em sistemas de previsão. Manter o espaçamento adequado para boa aeração.'
        },
        {
          name: 'Pinta Preta (Alternaria solani)',
          description: 'Causa lesões escuras com anéis concêntricos nas folhas mais velhas, caules e frutos. Leva à desfolha, queima de frutos por exposição ao sol e redução da produção.',
          controlMethods: {
            chemical: ['Fungicidas dos grupos das Estrobilurinas, Triazóis e produtos protetores como o Clorotalonil.'],
            organic: ['Rotação de culturas (não plantar tomate ou batata na mesma área)', 'Eliminação de restos de cultura', 'Adubação equilibrada, principalmente de Potássio.'],
          },
          applicationGuide: 'As pulverizações devem ser iniciadas ao observar os primeiros sintomas nas folhas baixeiras. A rotação de culturas é uma prática fundamental para reduzir o inóculo da doença na área.'
        }
    ]
  },
  {
    id: 'batata',
    name: 'Batata',
    imageUrl: 'https://images.unsplash.com/photo-1597479732023-932d84a754f3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600',
    plantingSeason: 'Sul/Sudeste: Safra das águas (Ago-Nov), Safra das secas (Jan-Mar), Safra de inverno (Abr-Jul).',
    fertilization: {
        recommended_fertilizers: 'Muito exigente em Potássio (K) para a formação de tubérculos. Formulações como 04-14-08 ou 05-20-10 são usadas no plantio.',
        dosage_and_application: 'Toda a adubação de P e K é feita no plantio, na base de 800-1200 kg/ha. A amontoa (chegamento de terra na base da planta) ajuda a proteger os tubérculos e a otimizar a adubação.'
    },
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
    diseases: [
        {
          name: 'Requeima (Phytophthora infestans)',
          description: 'A mesma doença do tomateiro, é a mais importante da cultura da batata. Causa necrose rápida das folhas e apodrecimento dos tubérculos, levando a perdas totais.',
          controlMethods: {
            chemical: ['Programa de pulverização rigoroso e preventivo com fungicidas protetores e sistêmicos, com base em sistemas de alerta.'],
            organic: ['Uso de batata-semente sadias', 'Cultivares com algum nível de resistência', 'Amontoa bem feita para proteger os tubérculos.'],
          },
          applicationGuide: 'O controle é eminentemente preventivo. A destruição da rama (folhagem) antes da colheita é uma prática importante para evitar que o fungo atinja os tubérculos.'
        },
        {
          name: 'Pinta Preta (Alternaria solani)',
          description: 'Causa lesões necróticas com anéis concêntricos nas folhas, começando pelas mais velhas. Também pode infectar os tubérculos, causando podridão seca.',
          controlMethods: {
            chemical: ['Pulverizações com fungicidas protetores e sistêmicos, muitas vezes em conjunto com o manejo da requeima.'],
            organic: ['Rotação de culturas com espécies não hospedeiras (ex: gramíneas)', 'Uso de sementes sadias.'],
          },
          applicationGuide: 'A rotação de culturas é crucial. A adubação equilibrada, sem excesso de nitrogênio, ajuda a reduzir a severidade da doença. As aplicações devem proteger as folhas baixeiras.'
        }
    ]
  },
  {
    id: 'quiabo',
    name: 'Quiabo',
    imageUrl: 'https://images.unsplash.com/photo-1551892569-231350a40a5a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600',
    plantingSeason: 'Pode ser plantado o ano todo em regiões de clima quente. Prefere temperaturas entre 20°C e 30°C.',
    fertilization: {
        recommended_fertilizers: 'Responde bem à matéria orgânica (esterco bem curtido) e a uma adubação equilibrada com NPK (ex: 10-10-10).',
        dosage_and_application: 'Plantio: Incorporar esterco ou composto orgânico e 150-200 kg/ha de NPK. Cobertura: Aplicar adubo rico em Nitrogênio (ex: sulfato de amônio) 30 e 60 dias após o plantio para estimular o crescimento vegetativo e a produção contínua.'
    },
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
    diseases: [
        {
          name: 'Oídio',
          description: 'Fungo que causa uma cobertura branca e pulverulenta nas folhas, principalmente nas mais velhas. Reduz a fotossíntese e pode levar à queda das folhas.',
          controlMethods: {
            chemical: ['Fungicidas à base de enxofre ou produtos sistêmicos específicos.'],
            organic: ['Pulverização com calda sulfocálcica ou bicarbonato de potássio', 'Aumentar o espaçamento para melhorar a ventilação.'],
          },
          applicationGuide: 'O controle deve ser iniciado aos primeiros sinais da doença. Evitar plantios muito adensados. Pulverizar ambos os lados das folhas.'
        },
        {
          name: 'Mancha-de-cercospora',
          description: 'Causa pequenas manchas circulares e escuras nas folhas, que podem se unir e causar o secamento e queda da folha. Também pode afetar os frutos.',
          controlMethods: {
            chemical: ['Fungicidas cúpricos ou protetores como Mancozebe.'],
            organic: ['Rotação de culturas', 'Eliminação de restos de plantas infectadas.'],
          },
          applicationGuide: 'Aplicar preventivamente em épocas de chuva e calor. Garantir uma boa nutrição da planta para aumentar sua resistência.'
        }
      ],
      weeds: [
        {
            name: 'Capim-alho Fino (Nothoscordum gracile / Cyperus spp.)',
            description: 'Planta daninha de difícil controle devido aos seus bulbos subterrâneos. Compete agressivamente por nutrientes e água.',
            controlMethods: {
                chemical: [
                    'Controle em pós-emergência no quiabo é MUITO difícil devido à falta de herbicidas seletivos registrados.',
                    'Dessecação pré-plantio com Glifosato é a medida mais eficaz para reduzir a população antes da semeadura.',
                    'Se for uma gramínea verdadeira (Poaceae), pode-se usar Cletodim (verificar registro local), mas para Capim-alho verdadeiro (Liliaceae/Amaryllidaceae) ou Tiririca (Cyperaceae), herbicidas graminicidas não funcionam.'
                ],
                organic: [
                    'Capina manual ou mecânica cuidadosa nas entrelinhas.',
                    'Uso de cobertura morta (mulching) espessa para inibir a emergência dos bulbos.',
                    'Solarização do solo antes do plantio.'
                ]
            },
            applicationGuide: 'O foco deve ser na limpeza da área ANTES do plantio. Durante o ciclo, a capina manual ou o cultivo mecânico nas entrelinhas são as opções mais seguras para não intoxicar o quiabeiro.'
        }
      ]
  },
  {
    id: 'laranja',
    name: 'Laranja',
    imageUrl: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600',
    plantingSeason: 'O plantio pode ser feito em qualquer época do ano, mas prefere-se o período chuvoso para melhor pegamento das mudas.',
    fertilization: {
        recommended_fertilizers: 'NPK com micronutrientes, especialmente Zinco, Boro e Manganês. Formulações como 20-05-20 para crescimento e 12-06-22 para produção.',
        dosage_and_application: 'A adubação é parcelada em 3 a 4 aplicações anuais, coincidindo com as brotações e o período chuvoso. A análise de folha é uma ferramenta importante para ajustar as doses e os nutrientes necessários.'
    },
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
    diseases: [
        {
          name: 'Greening (HLB - Huanglongbing)',
          description: 'Doença bacteriana transmitida pelo psilídeo. Causa mosqueado irregular nas folhas, maturação irregular e deformação dos frutos, que ficam amargos. Leva à morte da planta em poucos anos.',
          controlMethods: {
            chemical: ['Controle intensivo do inseto vetor (psilídeo) com rotação de inseticidas.'],
            organic: ['Plantio de mudas sadias e certificadas', 'Inspeção rigorosa e eliminação (erradicação) de plantas com sintomas.', 'Controle biológico do psilídeo.'],
          },
          applicationGuide: 'O manejo se baseia em três pilares: uso de mudas sadias, controle do psilídeo e eliminação de plantas doentes. Não há cura para a doença.'
        },
        {
          name: 'Pinta Preta dos Citros (Guignardia citricarpa)',
          description: 'Fungo que causa diversas lesões escuras na casca dos frutos, depreciando seu valor comercial, especialmente para o mercado de fruta fresca.',
          controlMethods: {
            chemical: ['Pulverizações com fungicidas (Estrobilurinas, Triazóis, Cúpricos) durante o período de suscetibilidade dos frutos.'],
            organic: ['Podas para melhorar a aeração', 'Manejo de restos culturais (folhas caídas) para reduzir o inóculo.'],
          },
          applicationGuide: 'As aplicações devem proteger os frutos desde a queda das pétalas até cerca de 4 a 5 meses de idade. A boa cobertura de pulverização é essencial.'
        }
      ]
  },
  {
    id: 'couve',
    name: 'Couve',
    imageUrl: 'https://images.unsplash.com/photo-1554118331-dec5c7a40a08?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600',
    plantingSeason: 'Pode ser cultivada o ano todo, mas se desenvolve melhor em climas amenos, com temperaturas entre 15°C e 20°C.',
    fertilization: {
        recommended_fertilizers: 'Muito exigente em Nitrogênio (N) para produção de folhas. Adubação orgânica (esterco) é altamente benéfica. NPK 20-05-20 ou similar.',
        dosage_and_application: 'Plantio: Incorporar matéria orgânica e um formulado NPK. Cobertura: Realizar adubações nitrogenadas (Ureia ou Sulfato de Amônio) a cada 20-30 dias para manter o vigor e a produção de folhas.'
    },
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
    diseases: [
        {
          name: 'Míldio (Peronospora parasitica)',
          description: 'Causa manchas amareladas na parte superior das folhas e um crescimento branco-acinzentado (mofo) na parte inferior. Ocorre em condições de alta umidade.',
          controlMethods: {
            chemical: ['Fungicidas protetores e sistêmicos registrados para brássicas.'],
            organic: ['Aumentar o espaçamento para melhorar a ventilação', 'Evitar irrigação por aspersão à noite', 'Uso de calda bordalesa.'],
          },
          applicationGuide: 'Iniciar o controle ao observar os primeiros sintomas. A ventilação entre as plantas é a principal medida preventiva.'
        },
        {
          name: 'Podridão Negra (Xanthomonas campestris)',
          description: 'Bactéria que causa lesões em forma de "V" amarelado na borda das folhas, que progridem e escurecem os vasos da planta, podendo levar à morte.',
          controlMethods: {
            chemical: ['Produtos à base de cobre têm ação preventiva.'],
            organic: ['Uso de sementes sadias', 'Rotação de culturas (3-4 anos)', 'Não trabalhar na área com as folhas molhadas.'],
          },
          applicationGuide: 'A prevenção é a única forma de controle eficaz. Não há controle curativo. Eliminar plantas doentes para evitar a disseminação.'
        }
      ]
  },
  {
    id: 'maracuja',
    name: 'Maracujá',
    imageUrl: 'https://images.unsplash.com/photo-1621873495934-8789d338f08f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600',
    plantingSeason: 'O plantio é recomendado no início da estação chuvosa. Em regiões com irrigação, pode ser plantado o ano todo.',
    fertilization: {
        recommended_fertilizers: 'Exigente em Fósforo (P) para florescimento e Potássio (K) para frutificação. Formulações como 04-14-08 na base e 10-10-20 em cobertura.',
        dosage_and_application: 'Plantio: Adubação rica em fósforo na cova. Cobertura: Após o início do florescimento, aplicar adubos ricos em potássio a cada 60-90 dias. A adubação foliar com Boro é importante para o pegamento dos frutos.'
    },
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
    diseases: [
        {
          name: 'Verrugose (Cladosporium herbarum)',
          description: 'Causa lesões salientes e corticosas (verrugas) em folhas, ramos e principalmente nos frutos, depreciando seu valor comercial.',
          controlMethods: {
            chemical: ['Pulverizações com fungicidas cúpricos ou Mancozebe, principalmente no período chuvoso.'],
            organic: ['Podas de limpeza para melhorar a aeração e insolação da planta', 'Quebra-ventos para reduzir ferimentos.'],
          },
          applicationGuide: 'As aplicações devem ser preventivas, começando antes das chuvas e focando na proteção dos frutos em desenvolvimento. A poda é fundamental.'
        },
        {
          name: 'Antracnose (Colletotrichum gloeosporioides)',
          description: 'Causa manchas escuras e deprimidas em folhas, ramos e frutos. Nos frutos, as lesões podem apodrecer e causar a queda.',
          controlMethods: {
            chemical: ['Fungicidas à base de Estrobilurinas e Triazóis em rotação com produtos protetores.'],
            organic: ['Podas para eliminar ramos doentes', 'Eliminação de frutos caídos no chão.'],
          },
          applicationGuide: 'O controle químico deve ser iniciado no florescimento, protegendo flores e frutos. A poda sanitária, removendo partes doentes, é essencial para reduzir a fonte da doença.'
        }
      ]
  },
];