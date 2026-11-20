(function () {
  // Diccionario editorial completo: Español (clave normalizada) -> [Inglés (EN), Francés (FR)]
  const DICT = {
    // --- NAVBAR & FOOTER ---
    "La biografía": ["The biography", "La biographie"],
    "Cómo funciona": ["How it works", "Comment ça marche"],
    "Ejemplos": ["Examples", "Exemples"],
    "Precios": ["Pricing", "Tarifs"],
    "Nosotros": ["About us", "À propos"],
    "Iniciar sesión": ["Log in", "Connexion"],
    "Crear biografía": ["Create biography", "Créer une biographie"],
    "Idioma": ["Language", "Langue"],
    "Preservamos la memoria viva de las familias españolas mediante biografías cuidadas, entrevistas pausadas y edición editorial de lujo.": [
      "We preserve the living memory of families through crafted biographies, unhurried conversations, and luxury editorial design.",
      "Nous préservons la mémoire vivante des familles grâce à des biographies soignées, des échanges apaisés et une édition d'exception."
    ],
    "Atención directa: contacto@legadosvela.com": [
      "Direct support: contacto@legadosvela.com",
      "Contact direct : contacto@legadosvela.com"
    ],
    "Explorar": ["Explore", "Explorer"],
    "Precios y planes": ["Pricing & plans", "Tarifs et formules"],
    "Sobre nosotros": ["About us", "À propos"],
    "Muestras y 3D": ["Samples & 3D", "Exemples et 3D"],
    "Legal": ["Legal", "Mentions légales"],
    "Política de privacidad": ["Privacy policy", "Politique de confidentialité"],
    "Términos de servicio": ["Terms of service", "Conditions d'utilisation"],
    "Política de cookies": ["Cookie policy", "Politique de cookies"],
    "Aviso legal": ["Legal notice", "Mentions légales"],
    "Presentación física": ["Physical presentation", "Présentation physique"],
    "Envío a toda España del sobre marfil con sello lacrado y tarjeta de dedicatoria personalizada con código QR.": [
      "Delivery of our ivory wax-sealed envelope and personalized dedication card with QR code.",
      "Envoi de l'enveloppe ivoire cachetée à la cire et de la carte de dédicace personnalisée avec QR code."
    ],
    "Ver opciones de biografías →": ["View biography plans →", "Voir les formules →"],
    "© 2026 VELA. Todos los derechos reservados.": [
      "© 2026 VELA. All rights reserved.",
      "© 2026 VELA. Tous droits réservés."
    ],
    "Edición editorial artesanal para familias": [
      "Artisanal editorial editions for families",
      "Édition éditoriale artisanale pour les familles"
    ],

    // --- HOME (INDEX) ---
    "Su vida, convertida": ["Their life, turned", "Leur vie, transformée"],
    "en una historia": ["into a story", "en une histoire"],
    "para siempre.": ["forever.", "pour toujours."],
    "Biografías digitales personalizadas, con sobre de regalo y tarjeta QR física.": [
      "Personalized digital biographies, presented with a gift envelope and physical QR card.",
      "Biographies numériques personnalisées, accompagnées d'une enveloppe cadeau et d'une carte QR physique."
    ],
    "Crear mi biografía": ["Create my biography", "Créer ma biographie"],
    "Ver ejemplos": ["View examples", "Voir les exemples"],
    "Audios y textos guiados": ["Guided audio & text", "Audios et textes guidés"],
    "Voz de toda la familia": ["Whole family's voices", "La voix de toute la famille"],
    "3 colecciones editoriales": ["3 editorial collections", "3 collections éditoriales"],
    "Lectura privada con QR": ["Private reading via QR", "Lecture privée avec QR"],
    "Toda vida deja huellas. VELA las convierte en": [
      "Every life leaves traces. VELA turns them into",
      "Chaque vie laisse des traces. VELA en fait des"
    ],
    "capítulos": ["chapters", "chapitres"],
    "Desde la infancia hasta hoy, cada etapa encuentra su lugar sin reducir una vida a una lista de fechas.": [
      "From childhood to today, every chapter finds its place without reducing a life to a list of dates.",
      "De l'enfance à aujourd'hui, chaque étape trouve sa place sans réduire une vie à une liste de dates."
    ],
    "Infancia": ["Childhood", "Enfance"],
    "La casa donde empezó todo y las primeras historias que Carmen aún cuenta de memoria.": [
      "The home where it all began and the first stories Carmen still tells by heart.",
      "La maison où tout a commencé et les premières histoires que Carmen raconte encore par cœur."
    ],
    "Decisiones": ["Decisions", "Décisions"],
    "El día que eligió estudiar lejos de casa y descubrió una vida que todavía estaba por escribir.": [
      "The day she chose to study far from home and discovered a life yet to be written.",
      "Le jour où elle a choisi d'étudier loin de chez elle et découvert une vie encore à écrire."
    ],
    "Familia": ["Family", "Famille"],
    "Las costumbres, las sobremesas y las personas que fueron dando forma a su manera de mirar.": [
      "The traditions, long table talks, and people who shaped the way she sees the world.",
      "Les coutumes, les repas partagés et les visages qui ont façonné sa manière de regarder le monde."
    ],
    "Oficio": ["Vocation", "Métier"],
    "Treinta años enseñando y una colección de aprendizajes que nunca aparecieron en los libros.": [
      "Thirty years of teaching and a lifetime of lessons that never appeared in textbooks.",
      "Trente années d'enseignement et une collection de leçons qui n'ont jamais figuré dans les livres."
    ],
    "Ahora": ["Now", "Aujourd'hui"],
    "Hoy": ["Today", "Aujourd'hui"],
    "Carmen sigue añadiendo capítulos, corrigiendo detalles e invitando nuevas voces.": [
      "Carmen keeps adding chapters, refining details, and inviting new family voices.",
      "Carmen continue d'ajouter des chapitres, d'affiner les détails et d'inviter de nouvelles voix."
    ],
    "Cuando una voz se escucha, una vida deja de ser una lista de fechas.": [
      "When a voice is heard, a life stops being a list of dates.",
      "Lorsqu'une voix est écoutée, une vie cesse d'être une liste de dates."
    ],
    "Hay recuerdos que viven en una conversación, en una fotografía o en las palabras que alguien repite desde hace años. Escucharlos es el primer paso para conservarlos.": [
      "Some memories live in a conversation, a photograph, or the words someone has repeated for years. Listening is the first step to keeping them.",
      "Certains souvenirs vivent dans une conversation, une photographie ou des mots répétés depuis des années. Les écouter est le premier pas pour les préserver."
    ],
    "Historias de la vida, con Rita (80 años, Barcelona)": [
      "Life stories, with Rita (80 years old, Barcelona)",
      "Histoires de vie, avec Rita (80 ans, Barcelone)"
    ],
    "Fuente: Cuideo ®": ["Source: Cuideo ®", "Source : Cuideo ®"],
    "Una historia íntima merece un": ["An intimate story deserves a", "Une histoire intime mérite un"],
    "espacio seguro.": ["safe space.", "espace sûr."],
    "La memoria familiar no es contenido para redes ni material de entrenamiento público. Cuidamos cada archivo con el respeto de un archivo privado de casa.": [
      "Family memory is not social media content or public training data. We care for every file with the respect of a private family archive.",
      "La mémoire familiale n'est ni du contenu pour les réseaux ni des données d'entraînement publiques. Nous protégeons chaque fichier comme une archive familiale privée."
    ],
    "Acceso privado bajo enlace familiar": ["Private access via family link", "Accès privé par lien familial"],
    "Solo leen y escuchan la biografía las personas a las que decidas entregar el enlace o la tarjeta QR.": [
      "Only the people you choose to share the link or physical QR card with can read and listen to the biography.",
      "Seules les personnes à qui vous remettez le lien ou la carte QR peuvent lire et écouter la biographie."
    ],
    "Propiedad íntegra para tu familia": ["Full ownership for your family", "Propriété intégrale pour votre famille"],
    "Nunca cedemos ni vendemos vuestros relatos, voces o fotografías. Puedes descargar o eliminar tu archivo en cualquier momento.": [
      "We never share or sell your stories, voices, or photographs. You can download or delete your archive at any time.",
      "Nous ne cédons ni ne vendons jamais vos récits, voix ou photographies. Vous pouvez télécharger ou supprimer votre archive à tout moment."
    ],
    "Sin suscripciones mensuales": ["No monthly subscriptions", "Sans abonnement mensuel"],
    "Pago único desde 25 € según la extensión que necesites, para que puedas regalar y construir el relato sin prisas.": [
      "One-time payment from €25 depending on the length you need, so you can gift and build the story at your own pace.",
      "Paiement unique dès 25 € selon la longueur souhaitée, pour offrir et construire le récit sans précipitation."
    ],
    "Entrega física incluida en cada biografía": ["Physical delivery included with every biography", "Envoi physique inclus avec chaque biographie"],
    "Sobre lacrado artesanal con tarjeta y QR directo para regalar en mano el día que elijas.": [
      "Handcrafted wax-sealed envelope with dedication card and direct QR to gift on the day you choose.",
      "Enveloppe artisanale cachetée à la cire avec carte et QR direct à offrir le jour de votre choix."
    ],
    "Antes de empezar a contar.": ["Before you begin.", "Avant de commencer."],
    "Las dudas importantes suelen ser sencillas: precio, privacidad, participación y qué pasa cuando la biografía está lista.": [
      "The important questions are usually simple: pricing, privacy, participation, and what happens once the biography is ready.",
      "Les questions essentielles sont simples : tarif, confidentialité, participation et ce qui se passe une fois la biographie prête."
    ],
    "¿Tienes una consulta específica?": ["Have a specific question?", "Vous avez une question précise ?"],
    "Estamos aquí para acompañarte en cada paso del proceso.": [
      "We are here to guide you through every step of the process.",
      "Nous sommes là pour vous accompagner à chaque étape."
    ],
    "Hablar con nosotros →": ["Talk to us →", "Nous contacter →"],
    "1. ¿Qué incluye el precio de la biografía?": ["1. What is included in the price?", "1. Que comprend le prix de la biographie ?"],
    "Incluye la maquetación editorial completa organizada en capítulos, el acceso digital multiplataforma (móvil, tablet, PC), la descarga de la biografía en PDF de alta calidad, y la entrega física a domicilio de un sobre marfil VELA con tarjeta personalizada de dedicatoria y código QR de acceso.": [
      "It includes complete editorial layout organized into chapters, multi-device digital access (mobile, tablet, computer), high-resolution PDF download, and physical delivery of an ivory VELA envelope with a personalized dedication card and QR access code.",
      "Il comprend la mise en page éditoriale complète par chapitres, l'accès numérique multi-supports (mobile, tablette, ordinateur), le téléchargement en PDF haute qualité et l'envoi physique d'une enveloppe ivoire VELA avec carte de dédicace personnalisée et QR code."
    ],
    "2. ¿Puedo crear mi propia autobiografía?": ["2. Can I create my own autobiography?", "2. Puis-je créer ma propre autobiographie ?"],
    "Sí. Puedes redactar tus propias memorias en primera persona. VELA te formulará preguntas de apoyo para inspirarte y ayudarte a estructurar tus recuerdos etapa a etapa.": [
      "Yes. You can write or record your own memories in the first person. VELA asks thoughtful prompts to inspire you and organize your memories chapter by chapter.",
      "Oui. Vous pouvez rédiger ou enregistrer vos propres mémoires à la première personne. VELA vous propose des questions bienveillantes pour structurer vos souvenirs étape par étape."
    ],
    "3. ¿Puedo crear la biografía de otra persona?": ["3. Can I create a biography for someone else?", "3. Puis-je créer la biographie d'un proche ?"],
    "Por supuesto. Es el uso más habitual: hijos o nietos que quieren homenajear y regalar la biografía a sus padres o abuelos reuniendo anécdotas y fotos familiares.": [
      "Of course. That is the most common use: children or grandchildren honoring and gifting a biography to their parents or grandparents by gathering family stories and photos.",
      "Bien sûr. C'est l'usage le plus courant : des enfants ou petits-enfants qui offrent une biographie à leurs parents ou grands-parents en réunissant anecdotes et photos de famille."
    ],
    "4. ¿La historia será pública?": ["4. Will the story be public?", "4. L'histoire sera-t-elle publique ?"],
    "No. Todas las biografías en VELA son estrictamente privadas. Sólo tienen acceso tú y las personas con quienes decidas compartir el enlace o la tarjeta QR física.": [
      "No. Every VELA biography is strictly private. Only you and the people you choose to share the private link or physical QR card with have access.",
      "Non. Toutes les biographies VELA sont strictement privées. Seuls vous et les proches avec qui vous partagez le lien ou la carte QR y avez accès."
    ],
    "5. ¿Los colaboradores necesitan una cuenta?": ["5. Do contributors need an account?", "5. Les proches doivent-ils créer un compte ?"],
    "No. Tus familiares y amigos pueden enviar notas de voz, textos y fotografías a través de un enlace privado directo, sin registros obligatorios ni contraseñas.": [
      "No. Family and friends can send voice notes, texts, and photographs through a direct private link—no sign-ups or passwords required.",
      "Non. Vos proches peuvent envoyer des notes vocales, textes et photos via un lien privé direct, sans inscription ni mot de passe."
    ],
    "6. ¿Qué hace exactamente VELA?": ["6. What exactly does VELA do?", "6. Que fait exactement VELA ?"],
    "VELA es un asistente editorial inteligente. Te escucha, transcribe testimonios orales, sugiere temas de conversación, organiza los recuerdos en capítulos narrativos y maqueta la biografía en el estilo editorial que elijas. Tú siempre tienes el control final.": [
      "VELA is an intelligent editorial companion. It listens, transcribes voice memories, suggests conversation prompts, organizes stories into chapters, and designs the biography in your chosen editorial style. You always have final control.",
      "VELA est un assistant éditorial attentif. Il écoute, transcrit les témoignages vocaux, suggère des thèmes, organise les souvenirs en chapitres et met en page la biographie dans le style de votre choix. Vous gardez toujours le contrôle final."
    ],
    "7. ¿Qué ocurre cuando vence el plazo?": ["7. What happens when the collection period ends?", "7. Que se passe-t-il à la fin de la période de collecte ?"],
    "El plazo se refiere al tiempo para recopilar testimonios de tus colaboradores. Al finalizar ese periodo, la biografía se consolida, se genera la edición definitiva y permanece disponible para siempre en formato digital y PDF.": [
      "The collection period is the window for gathering contributions from family members. Once it ends, the final edition is generated and stays available forever in digital and PDF formats.",
      "Le délai correspond au temps de collecte des témoignages. Une fois terminé, l'édition définitive est générée et reste accessible pour toujours en version numérique et PDF."
    ],
    "8. ¿Qué diferencia hay entre las tres opciones de biografía?": ["8. What is the difference between the plans?", "8. Quelle est la différence entre les formules ?"],
    "Los planes varían en la extensión de la biografía (de 15 a 75 páginas), el número de fotografías incluidas y los días disponibles para recibir colaboraciones familiares. Todos comparten la misma calidad editorial y el sobre físico con QR.": [
      "Plans differ in biography length (from 15 to 75 pages), number of photographs included, and days available to collect family contributions. Every plan includes the same editorial quality and physical wax-sealed QR envelope.",
      "Les formules varient selon la longueur (de 15 à 75 pages), le nombre de photos incluses et la durée de collecte familiale. Toutes offrent la même qualité éditoriale et l'enveloppe physique avec QR."
    ],
    "De los recuerdos a una biografía": ["From memories to a biography", "Des souvenirs à une biographie"],
    "que permanecerá.": ["that lasts forever.", "qui demeurera."],
    "No necesitas tener la vida ordenada antes de empezar. Una voz abre el camino y VELA te guía hasta el resultado final.": [
      "You don't need an entire life organized before you start. One voice opens the path and VELA guides you to the final edition.",
      "Pas besoin d'avoir toute une vie ordonnée avant de commencer. Une voix ouvre le chemin et VELA vous guide jusqu'au résultat final."
    ],
    "Empieza": ["Begin", "Commencez"],
    "Responde a preguntas sencillas por escrito o con tu voz. Añade fotografías cuando quieras.": [
      "Answer simple questions in writing or with your voice. Add photographs whenever you like.",
      "Répondez à des questions simples par écrit ou à la voix. Ajoutez des photos quand vous le souhaitez."
    ],
    "¿Cuál es el primer lugar que recuerdas?": ["What is the first place you remember?", "Quel est le premier lieu dont vous vous souvenez ?"],
    "Invita": ["Invite", "Invitez"],
    "Comparte un enlace privado. Familiares y amistades pueden participar sin crear una cuenta.": [
      "Share a private link. Family and friends can contribute without creating an account.",
      "Partagez un lien privé. Famille et amis peuvent participer sans créer de compte."
    ],
    "3 voces han añadido un recuerdo": ["3 voices have added a memory", "3 proches ont ajouté un souvenir"],
    "Da forma": ["Shape it", "Donnez forme"],
    "VELA organiza el material y propone un borrador. Tú revisas cada capítulo antes de conservarlo.": [
      "VELA organizes everything and crafts a draft. You review every chapter before keeping it.",
      "VELA organise le contenu et propose un brouillon. Vous relisez chaque chapitre avant de le valider."
    ],
    "Capítulo listo para revisar": ["Chapter ready to review", "Chapitre prêt à relire"],
    "Una primera pregunta puede abrir una vida entera.": [
      "A single first question can unlock an entire lifetime.",
      "Une première question peut ouvrir toute une vie."
    ],
    "Ver ejemplos reales": ["View real examples", "Voir de vrais exemples"],

    // --- LA BIOGRAFÍA ---
    "Una historia única,": ["A unique story,", "Une histoire unique,"],
    "en digital y para regalar.": ["in digital and ready to gift.", "en numérique et prête à offrir."],
    "VELA transforma recuerdos, fotografías y testimonios en una biografía digital personalizada, cuidada y lista para leer en cualquier dispositivo.": [
      "VELA transforms memories, photographs, and stories into a crafted digital biography ready to read on any device.",
      "VELA transforme souvenirs, photographies et témoignages en une biographie numérique soignée, prête à être lue sur tout appareil."
    ],
    "¿Qué es?": ["What is it?", "Qu'est-ce que c'est ?"],
    "Una biografía digital personalizada sobre ti o sobre alguien querido, redactada y organizada por capítulos.": [
      "A personalized digital biography about you or a loved one, thoughtfully written and organized into chapters.",
      "Une biographie numérique personnalisée sur vous ou un être cher, rédigée et organisée en chapitres."
    ],
    "¿Qué incluye?": ["What does it include?", "Que comprend-elle ?"],
    "Maquetación editorial, acceso digital en tablet, móvil y ordenador, descarga en PDF y entrega física con sobre VELA y tarjeta QR.": [
      "Editorial layout, digital access on tablet, mobile, and desktop, PDF download, and physical delivery with a VELA envelope and QR card.",
      "Mise en page éditoriale, accès numérique sur tablette, mobile et ordinateur, téléchargement PDF et envoi physique avec enveloppe VELA et carte QR."
    ],
    "¿Qué recibe el cliente?": ["What do you receive?", "Que reçoit le destinataire ?"],
    "La biografía lista para leer y compartir en familia, junto con un sobre de regalo con sello de lacre que convierte la entrega en un momento inolvidable.": [
      "The biography ready to read and share with family, paired with a wax-sealed gift envelope that turns giving into an unforgettable moment.",
      "La biographie prête à lire et partager en famille, accompagnée d'une enveloppe cadeau cachetée à la cire pour un moment inoubliable."
    ],
    "Un recuerdo para leer.": ["A memory to read.", "Un souvenir à lire."],
    "Un regalo para guardar.": ["A gift to keep.", "Un cadeau à garder."],
    "Una biografía personalizada en formato digital, creada con los recuerdos, fotografías y testimonios de una persona, y presentada con un sobre y una tarjeta QR para regalar.": [
      "A personalized digital biography crafted from a person's memories, photos, and stories, presented with an envelope and QR card ready to gift.",
      "Une biographie personnalisée au format numérique, créée à partir des souvenirs, photos et témoignages d'une personne, présentée avec une enveloppe et une carte QR."
    ],
    "Crear mi biografía ↗": ["Create my biography ↗", "Créer ma biographie ↗"],
    "Explorar estilos ↗": ["Explore styles ↗", "Explorer les styles ↗"],
    "Así se transforma una vida": ["How a life becomes", "Comment une vie devient"],
    "en una biografía.": ["a biography.", "une biographie."],
    "VELA convierte el material aportado en una historia organizada por capítulos, con fotografías y recuerdos familiares que se pueden leer con comodidad y guardar en PDF.": [
      "VELA turns your shared material into a structured story organized into chapters, with family photographs you can read comfortably and save as a PDF.",
      "VELA transforme les éléments partagés en un récit organisé en chapitres, enrichi de photos de famille faciles à lire et à conserver en PDF."
    ],
    "Portada personalizada": ["Personalized cover", "Couverture personnalisée"],
    "Capítulos sobre momentos y personas": ["Chapters on key moments & people", "Chapitres sur les moments et les proches"],
    "Fotografías y recuerdos familiares": ["Family photographs & keepsakes", "Photographies et souvenirs familiaux"],
    "Descarga en PDF y lectura digital": ["PDF download & digital reading", "Téléchargement PDF et lecture numérique"],
    "Una historia íntima y bien maquetada que permanece siempre accesible.": [
      "An intimate, beautifully typeset story that remains accessible forever.",
      "Une histoire intime et soigneusement mise en page, toujours accessible."
    ],
    "La misma emoción.": ["The same emotion.", "La même émotion."],
    "Tres formas de contarla.": ["Three ways to tell it.", "Trois façons de la raconter."],
    "Letter, Noir y Nude son diseños editoriales independientes del plan que elijas. Explora su personalidad y decide cuál representa mejor a la persona protagonista.": [
      "Letter, Noir, and Nude are editorial designs available with any plan. Explore each personality and choose the one that best reflects your loved one.",
      "Letter, Noir et Nude sont des styles éditoriaux disponibles dans toutes les formules. Découvrez leur personnalité pour choisir celui qui correspond le mieux."
    ],
    "Comparar precios ↗": ["Compare plans ↗", "Comparer les tarifs ↗"],
    "Elegir biografía ↗": ["Choose biography ↗", "Choisir la biographie ↗"],
    "Clásico, cercano y lleno de memoria.": ["Classic, warm, and full of memory.", "Classique, chaleureux et plein de mémoire."],
    "El encanto de las cartas antiguas, el papel con textura y una caligrafía que recuerda a los archivos familiares.": [
      "The charm of handwritten letters, textured paper, and calligraphy inspired by treasured family archives.",
      "Le charme des lettres anciennes, du papier texturé et d'une calligraphie inspirée des archives familiales."
    ],
    "Ver ejemplo Letter →": ["View Letter example →", "Voir l'exemple Letter →"],
    "Gráfico, sobrio y con carácter.": ["Graphic, refined, and bold.", "Graphique, sobre et de caractère."],
    "Una propuesta audaz y contemporánea, con contrastes definidos en negro carbón y una presencia muy marcada.": [
      "A contemporary, striking layout with charcoal contrasts and unmistakable editorial presence.",
      "Une proposition audacieuse et contemporaine, aux contrastes noir charbon et à la présence affirmée."
    ],
    "Ver ejemplo Noir →": ["View Noir example →", "Voir l'exemple Noir →"],
    "Sereno, delicado y atemporal.": ["Serene, delicate, and timeless.", "Serein, délicat et intemporel."],
    "Una maquetación suave y elegante, con tonos empolvados, márgenes amplios y una presencia cálida y silenciosa.": [
      "A soft, graceful layout in powdery neutrals with generous margins and a calm, luminous feel.",
      "Une mise en page douce et élégante, aux tons poudrés, marges généreuses et présence chaleureuse."
    ],
    "Ver ejemplo Nude →": ["View Nude example →", "Voir l'exemple Nude →"],
    "Los tres estilos editoriales están disponibles en todos los planes, listos para lectura digital y descarga en PDF.": [
      "All three editorial styles are included in every plan, ready for digital reading and PDF download.",
      "Les trois styles éditoriaux sont disponibles dans toutes les formules, prêts pour la lecture numérique et le téléchargement PDF."
    ],
    "Tu biografía,": ["Your biography,", "Votre biographie,"],
    "siempre contigo.": ["always with you.", "toujours avec vous."],
    "En móvil, tablet y ordenador.": ["On mobile, tablet, and desktop.", "Sur mobile, tablette et ordinateur."],
    "La biografía puede leerse con comodidad en cualquier momento y desde cualquier dispositivo. Está pensada para acompañarte en ordenador, tablet o móvil y para compartirla fácilmente con quienes forman parte de la historia.": [
      "Read comfortably anytime from any device. Designed to travel with you on computer, tablet, or phone and to be shared effortlessly with everyone in the story.",
      "Lisez confortablement à tout moment depuis n'importe quel appareil. Pensée pour vous accompagner sur ordinateur, tablette ou mobile et être partagée facilement."
    ],
    "Móvil": ["Mobile", "Mobile"],
    "Lectura vertical ágil y cómoda allá donde vayas.": ["Smooth, effortless vertical reading wherever you go.", "Lecture verticale fluide et confortable où que vous soyez."],
    "Tablet": ["Tablet", "Tablette"],
    "Sensación de libro abierto y pliego editorial completo.": ["Open-book feel with full editorial double spreads.", "Sensation de livre ouvert en double page éditoriale."],
    "Ordenador": ["Desktop", "Ordinateur"],
    "Vista panorámica, navegación por índice y descarga en PDF.": ["Panoramic view, chapter navigation, and PDF download.", "Vue panoramique, navigation par sommaire et téléchargement PDF."],
    "Disponible en PC · móvil · tablet": ["Available on desktop · mobile · tablet", "Disponible sur PC · mobile · tablette"],
    "Una historia para entregar.": ["A story to hand over.", "Une histoire à offrir."],
    "Un regalo para recordar.": ["A gift to remember.", "Un cadeau inoubliable."],
    "VELA convierte una biografía digital en algo que se puede entregar en persona. Un sobre especial, una dedicatoria y un acceso mediante código QR para descubrir toda la historia.": [
      "VELA turns a digital biography into a tangible gift. A crafted envelope, a personal dedication, and instant QR access to discover the entire story.",
      "VELA transforme une biographie numérique en un présent tangible. Une enveloppe raffinée, une dédicace personnelle et un accès QR immédiat."
    ],
    "Sobre físico VELA": ["Physical VELA envelope", "Enveloppe physique VELA"],
    "Presentación cuidada en papel verjurado con sello de lacre burdeos para entregar un recuerdo tangible.": [
      "Fine laid-paper presentation with a burgundy wax seal for a truly tangible keepsake.",
      "Présentation soignée sur papier vergé avec sceau de cire bordeaux pour un souvenir tangible."
    ],
    "Tarjeta con dedicatoria": ["Dedication card", "Carte de dédicace"],
    "Un mensaje personal pensado especialmente para quien recibe su legado.": [
      "A personal message written especially for the person receiving their legacy.",
      "Un message personnel pensé spécialement pour celui ou celle qui reçoit son héritage."
    ],
    "Acceso mediante QR": ["Instant QR access", "Accès par QR code"],
    "Una forma inmediata de abrir la biografía en digital desde cualquier teléfono.": [
      "An immediate way to open the digital biography from any smartphone.",
      "Une façon immédiate d'ouvrir la biographie numérique depuis n'importe quel téléphone."
    ],
    "«Hay regalos que se guardan. Otros se vuelven parte de la familia.»": [
      "“Some gifts are kept. Others become part of the family.”",
      "« Certains cadeaux se gardent. D'autres deviennent membres de la famille. »"
    ],

    // --- CÓMO FUNCIONA ---
    "Un proceso sencillo,": ["A simple process,", "Un processus simple,"],
    "acompañado en todo momento.": ["guided at every step.", "accompagné à chaque instant."],
    "Recopila recuerdos, anécdotas y fotografías, y VELA los transforma en una biografía cuidada, estructurada y lista para compartir.": [
      "Gather memories, anecdotes, and photos, and VELA turns them into a crafted, structured biography ready to share.",
      "Rassemblez souvenirs, anecdotes et photos, et VELA les transforme en une biographie soignée, structurée et prête à partager."
    ],
    "Empezar una biografía": ["Start a biography", "Commencer une biographie"],
    "Ver biografías reales": ["View real biographies", "Voir de vraies biographies"],
    "Recopila los recuerdos": ["Gather the memories", "Rassemblez les souvenirs"],
    "Regístrate y comparte un enlace con familiares y amigos para que puedan aportar historias, textos, audios y fotografías en un mismo lugar.": [
      "Sign up and share a private link with family and friends so everyone can contribute stories, texts, voice notes, and photos in one place.",
      "Inscrivez-vous et partagez un lien avec vos proches pour réunir histoires, textes, audios et photographies au même endroit."
    ],
    "Grabar audio": ["Record audio", "Enregistrer un audio"],
    "Escribir recuerdo": ["Write memory", "Écrire un souvenir"],
    "Subir fotos": ["Upload photos", "Ajouter des photos"],
    "Añadir documento": ["Add document", "Ajouter un document"],
    "VELA organiza tu historia": ["VELA organizes your story", "VELA organise votre histoire"],
    "Nuestra IA analiza todo el material, resume, ordena la información en capítulos y te propone una estructura coherente y personalizada.": [
      "Our AI reviews all material, arranges it into chapters, and proposes a coherent, personalized narrative structure.",
      "Notre IA analyse tous les éléments, les ordonne en chapitres et vous propose une structure cohérente et personnalisée."
    ],
    "01. Orígenes": ["01. Origins", "01. Origines"],
    "02. Infancia": ["02. Childhood", "02. Enfance"],
    "03. Crecer": ["03. Growing up", "03. Grandir"],
    "Revisa, personaliza y disfruta": ["Review, personalize & enjoy", "Relisez, personnalisez et profitez"],
    "Tú supervisas cada capítulo, puedes modificar lo que necesites y eliges el estilo de maquetación. VELA lo maquetará todo con un diseño profesional y único.": [
      "You review every chapter, edit anything you like, and pick your editorial style. VELA typesets everything into a timeless edition.",
      "Vous supervisez chaque chapitre, modifiez ce que vous souhaitez et choisissez le style éditorial. VELA met le tout en page avec soin."
    ],
    "Descarga en PDF y sobre físico con tarjeta QR para regalar.": [
      "PDF download and physical gift envelope with QR card.",
      "Téléchargement PDF et enveloppe physique avec carte QR à offrir."
    ],
    "tu guía en cada paso.": ["your guide at every step.", "votre guide à chaque étape."],
    "Nuestra IA te acompaña durante todo el proceso de creación, te hace preguntas, te sugiere temas, organiza la información y te ayuda a dar forma a una biografía única y completa.": [
      "Our AI accompanies you throughout the entire journey—asking thoughtful questions, suggesting themes, organizing stories, and shaping a complete biography.",
      "Notre IA vous accompagne tout au long de la création, pose des questions, suggère des thèmes, ordonne le récit et donne forme à une biographie unique."
    ],
    "Te hace preguntas": ["Asks thoughtful questions", "Vous pose des questions"],
    "para despertar recuerdos y rescatar momentos olvidados.": [
      "to spark memories and bring back forgotten moments.",
      "pour éveiller les souvenirs et faire ressurgir des instants oubliés."
    ],
    "Te da ideas y recomendaciones": ["Suggests ideas & themes", "Vous propose idées et thèmes"],
    "de temas, capítulos, personas y contenido a incorporar.": [
      "for chapters, milestones, people, and memories to include.",
      "de chapitres, proches et moments marquants à intégrer."
    ],
    "Ordena y resume": ["Organizes & refines", "Ordonne et structure"],
    "toda la información aportada respetando la voz y expresiones del protagonista.": [
      "all shared material while preserving the protagonist's authentic voice and expressions.",
      "tous les récits partagés tout en respectant la voix et les expressions authentiques."
    ],
    "Te ayuda a personalizar": ["Helps you personalize", "Vous aide à personnaliser"],
    "el estilo, las fotografías y la estructura de tu biografía final.": [
      "the visual style, photographs, and flow of your final edition.",
      "le style, les photos et la structure de votre biographie finale."
    ],
    "¿Cómo era la cocina de tu casa cuando eras pequeña y quién se sentaba siempre en la misma silla?": [
      "What was your family kitchen like when you were little, and who always sat in the same chair?",
      "Comment était la cuisine de votre enfance, et qui s'asseyait toujours sur la même chaise ?"
    ],
    "Recuerdo el olor a pan tostado y a café de puchero a las siete de la mañana. Mi abuelo nunca perdonaba leer su cuaderno ahí...": [
      "I remember the smell of toasted bread and fresh coffee at seven in the morning. My grandfather never missed reading his notebook there...",
      "Je me souviens de l'odeur du pain grillé et du café à sept heures du matin. Mon grand-père ne manquait jamais d'y lire son carnet..."
    ],
    "Qué imagen tan viva. He guardado ese detalle en «Infancia en el pueblo». ¿Tienes alguna foto de esa casa para incluirla?": [
      "What a vivid image. I've saved that detail in “Childhood in the village”. Do you have a photo of that house to include?",
      "Quelle image vivante. J'ai enregistré ce détail dans « Enfance au village ». Avez-vous une photo de cette maison à inclure ?"
    ],
    "Grabar Audio": ["Record Audio", "Enregistrer"],
    "Subir Audio": ["Upload Audio", "Audio"],
    "Subir Doc": ["Upload Doc", "Document"],
    "Escribe tu respuesta o pulsa para dictar...": ["Write your answer or tap to dictate...", "Écrivez votre réponse ou dictez..."],
    "Avance de la biografía": ["Biography progress", "Avancement de la biographie"],
    "01 · Prólogo y raíces": ["01 · Prologue & roots", "01 · Prologue et racines"],
    "Listo": ["Done", "Prêt"],
    "02 · Infancia en el pueblo": ["02 · Childhood in the village", "02 · Enfance au village"],
    "03 · Primer oficio": ["03 · First vocation", "03 · Premier métier"],
    "04 · Amor y familia": ["04 · Love & family", "04 · Amour et famille"],
    "En curso": ["In progress", "En cours"],
    "05 · Viajes y aprendizajes": ["05 · Travels & lessons", "05 · Voyages et leçons"],
    "Pendiente": ["Pending", "En attente"],
    "06 · Carta a los nietos": ["06 · Letter to grandchildren", "06 · Lettre aux petits-enfants"],
    "Tu historia merece ser contada.": ["Your story deserves to be told.", "Votre histoire mérite d'être racontée."],
    "Empieza hoy con un primer recuerdo.": ["Start today with a first memory.", "Commencez aujourd'hui par un premier souvenir."],
    "Elige el plan que mejor encaje con vuestra familia y da el primer paso desde casa, acompañado en todo momento.": [
      "Choose the plan that best fits your family and take the first step from home, guided all the way.",
      "Choisissez la formule la plus adaptée à votre famille et faites le premier pas depuis chez vous, accompagné à chaque étape."
    ],
    "Ver biografías y precios": ["View plans & pricing", "Voir les tarifs"],
    "Ver biografías de ejemplo": ["View sample biographies", "Ouvrir les exemples"],

    // --- EJEMPLOS ---
    "Tres vidas reales.": ["Three lifelike stories.", "Trois récits de vie."],
    "Tres formas de conservarlas.": ["Three ways to preserve them.", "Trois façons de les préserver."],
    "Haz clic sobre cualquier biografía o elige un protagonista para abrir sus páginas y hojearla con comodidad.": [
      "Click any biography or choose a protagonist to open its pages and browse comfortably.",
      "Cliquez sur une biographie ou choisissez un protagoniste pour ouvrir ses pages et la feuilleter librement."
    ],
    "Selecciona una portada para abrir el libro o usa las flechas para pasar páginas.": [
      "Select a cover to open the book or use the arrows to turn pages.",
      "Sélectionnez une couverture pour ouvrir le livre ou utilisez les flèches pour tourner les pages."
    ],
    "Haz clic en una portada para leer": ["Click a cover to read", "Cliquez sur une couverture pour lire"],
    "Explora tres ediciones y entra en la historia que quieras conocer.": [
      "Explore three editions and step into the story you wish to discover.",
      "Explorez trois éditions et plongez dans l'histoire de votre choix."
    ],
    "Galería editorial disponible": ["Editorial gallery ready", "Galerie éditoriale prête"],
    "Selecciona una pieza para entrar": ["Select an edition to enter", "Sélectionnez une édition pour ouvrir"],
    "Preparando el archivo": ["Preparing the archive", "Préparation de l'archive"],
    "Elige una vida": ["Choose a life", "Choisissez une vie"],
    "Tres formas de conservar una vida": ["Three ways to preserve a life", "Trois façons de préserver une vie"],
    "Selecciona una edición para entrar en su memoria.": [
      "Select an edition to step into their memory.",
      "Sélectionnez une édition pour entrer dans sa mémoire."
    ],
    "Abre un sobre para entrar en su memoria.": ["Open an edition to enter their memory.", "Ouvrez une édition pour entrer dans sa mémoire."],
    "Nude · cálida y atemporal": ["Nude · warm & timeless", "Nude · chaleureux et intemporel"],
    "Noir · sobria y con carácter": ["Noir · bold & refined", "Noir · sobre et de caractère"],
    "Letter · clásica e íntima": ["Letter · classic & intimate", "Letter · classique et intime"],
    "Biografía familiar": ["Family biography", "Biographie familiale"],
    "Ampliar pliego": ["Zoom spread", "Agrandir la double page"],
    "← Volver al archivo": ["← Back to archive", "← Retour à l'archive"],
    "Tres protagonistas,": ["Three protagonists,", "Trois protagonistes,"],
    "tres formas de contar una vida.": ["three ways to tell a life.", "trois façons de raconter une vie."],
    "Conoce a Carlota, Juan y Carmen: tres trayectorias distintas para mostrar el tono, la profundidad y el acabado real de nuestras tres colecciones editoriales.": [
      "Meet Carlota, Juan, and Carmen: three distinct life journeys showcasing the tone, depth, and authentic finish of our three editorial collections.",
      "Découvrez Carlota, Juan et Carmen : trois parcours de vie distincts illustrant le ton, la profondeur et la finition réelle de nos trois collections."
    ],
    "Carlota Medina García · Valencia, 1946 (80 años) · Colección Nude": [
      "Carlota Medina García · Valencia, 1946 (80 years old) · Nude Collection",
      "Carlota Medina García · Valence, 1946 (80 ans) · Collection Nude"
    ],
    "La vida familiar, el oficio artesanal y la tradición": [
      "Family life, craftsmanship, and tradition",
      "La vie de famille, l'artisanat et la tradition"
    ],
    "«La vida se hace grande cuando aprendemos a cuidar de lo pequeño.»": [
      "“Life grows great when we learn to care for the little things.”",
      "« La vie devient grande quand on apprend à prendre soin des petites choses. »"
    ],
    "Nacida en Valencia el 18 de mayo de 1946 entre el barrio de Russafa y l'Horta. Compartió casi cinco décadas junto a Juan Ferrer Vidal, dirigió su propio taller de arreglos de ropa en Campanar y atesoró viajes por Mallorca, París, Roma, Florencia, Lisboa, Praga y Viena.": [
      "Born in Valencia on May 18, 1946 between Russafa and l'Horta. She shared nearly five decades with Juan Ferrer Vidal, ran her own sewing atelier in Campanar, and treasured travels to Mallorca, Paris, Rome, Florence, Lisbon, Prague, and Vienna.",
      "Née à Valence le 18 mai 1946 entre Russafa et l'Horta. Elle a partagé près de cinq décennies avec Juan Ferrer Vidal, tenu son propre atelier de couture à Campanar et voyagé à Majorque, Paris, Rome, Florence, Lisbonne, Prague et Vienne."
    ],
    "Capítulos: Orígenes · Infancia · Construir una vida · Viajes · La costura · Lo que permanece": [
      "Chapters: Origins · Childhood · Building a life · Travels · Sewing · What remains",
      "Chapitres : Origines · Enfance · Construire une vie · Voyages · La couture · Ce qui demeure"
    ],
    "Ver la biografía de Carlota en el visor": ["View Carlota's biography in viewer", "Voir la biographie de Carlota"],
    "Pliego 1 de 3 · Orígenes en Valencia y viajes (Mallorca, Madrid, París)": [
      "Spread 1 of 3 · Origins in Valencia & travels (Mallorca, Madrid, Paris)",
      "Double page 1 sur 3 · Origines à Valence et voyages (Majorque, Madrid, Paris)"
    ],
    "Juan Román Ortiz · Cádiz, 1943 (83 años) · Colección Noir": [
      "Juan Román Ortiz · Cádiz, 1943 (83 years old) · Noir Collection",
      "Juan Román Ortiz · Cadix, 1943 (83 ans) · Collection Noir"
    ],
    "El trabajo portuario, el mar y la constancia": [
      "Port work, the sea, and quiet perseverance",
      "Le travail portuaire, la mer et la constance"
    ],
    "«El mar enseña que no todo se puede controlar, pero siempre se puede aprender a navegar.»": [
      "“The sea teaches us that you cannot control everything, but you can always learn to sail.”",
      "« La mer enseigne qu'on ne peut pas tout contrôler, mais qu'on peut toujours apprendre à naviguer. »"
    ],
    "Nacido en Cádiz el 7 de febrero de 1943 y criado en el barrio de La Viña entre carpinteros de ribera y astilleros. Su trayectoria profesional vinculada al puerto y al mantenimiento naval se entrelaza con su vida familiar junto a Isabel Moreno Castaño y la camaradería de toda una vida.": [
      "Born in Cádiz on February 7, 1943 and raised in La Viña among shipwrights and shipyards. His career in port and naval maintenance intertwines with family life alongside Isabel Moreno Castaño and lifelong camaraderie.",
      "Né à Cadix le 7 février 1943 et élevé dans le quartier de La Viña parmi les charpentiers de marine et chantiers navals. Sa carrière portuaire s'entrelace avec sa vie familiale auprès d'Isabel Moreno Castaño."
    ],
    "Capítulos: Prólogo · Orígenes gaditanos · Infancia · Crecer · Construir una vida · Momentos clave": [
      "Chapters: Prologue · Cádiz origins · Childhood · Growing up · Building a life · Key moments",
      "Chapitres : Prologue · Origines à Cadix · Enfance · Grandir · Construire une vie · Moments clés"
    ],
    "Ver la biografía de Juan en el visor": ["View Juan's biography in viewer", "Voir la biographie de Juan"],
    "Pliego 1 de 3 · Cádiz 1943 y prólogo de Juan Román Ortiz": [
      "Spread 1 of 3 · Cádiz 1943 & prologue by Juan Román Ortiz",
      "Double page 1 sur 3 · Cadix 1943 et prologue de Juan Román Ortiz"
    ],
    "Carmen Rodríguez Sánchez · San Sebastián, 1975 (51 años) · Colección Letter": [
      "Carmen Rodríguez Sánchez · San Sebastián, 1975 (51 years old) · Letter Collection",
      "Carmen Rodríguez Sánchez · Saint-Sébastien, 1975 (51 ans) · Collection Letter"
    ],
    "La independencia, la evolución profesional y los nuevos comienzos": [
      "Independence, career evolution, and new beginnings",
      "L'indépendance, l'évolution professionnelle et les nouveaux départs"
    ],
    "«La vida no siempre nos lleva por el camino previsto, pero siempre podemos elegir cómo recorrerlo.»": [
      "“Life does not always follow the planned path, but we can always choose how to walk it.”",
      "« La vie ne suit pas toujours le chemin prévu, mais nous pouvons toujours choisir comment le parcourir. »"
    ],
    "Criada en el barrio de Amara entre libros y música, estudió Arquitectura con una estancia decisiva en Florencia y desarrolló su carrera en rehabilitación urbana entre Bilbao y San Sebastián. Apasionada por el piano, la fotografía, el Cantábrico y las rutas de montaña por Pirineos y Dolomitas.": [
      "Raised in Amara surrounded by books and music, she studied Architecture with a pivotal stay in Florence and built her career in urban restoration between Bilbao and San Sebastián. Passionate about piano, photography, the Cantabrian Sea, and hiking in the Pyrenees and Dolomites.",
      "Élevée dans le quartier d'Amara entre livres et musique, elle a étudié l'Architecture avec un séjour décisif à Florence et mené sa carrière en réhabilitation urbaine entre Bilbao et Saint-Sébastien. Passionnée de piano, photographie, mer Cantabrique et montagne."
    ],
    "Capítulos: Prólogo · Parte 1: Orígenes en Amara · Arquitectura y Bilbao · Montaña, viajes y nuevos comienzos": [
      "Chapters: Prologue · Part 1: Origins in Amara · Architecture & Bilbao · Mountains, travels & new beginnings",
      "Chapitres : Prologue · Partie 1 : Origines à Amara · Architecture et Bilbao · Montagne, voyages et nouveaux départs"
    ],
    "Ver la biografía de Carmen en el visor": ["View Carmen's biography in viewer", "Voir la biographie de Carmen"],
    "Pliego 1 de 3 · Portada interior y prólogo de Carmen Rodríguez Sánchez": [
      "Spread 1 of 3 · Title page & prologue by Carmen Rodríguez Sánchez",
      "Double page 1 sur 3 · Page de titre et prologue de Carmen Rodríguez Sánchez"
    ],
    "Usa las flechas del teclado o los botones para pasar de pliego": [
      "Use keyboard arrows or buttons to turn pages",
      "Utilisez les flèches du clavier ou les boutons pour tourner les pages"
    ],
    "Elegir este estilo y empezar →": ["Choose this style & start →", "Choisir ce style et commencer →"],
    "¿Listo para empezar a escribir su legado?": ["Ready to start writing their legacy?", "Prêt à écrire leur héritage ?"],
    "Nuestra inteligencia artificial te acompañará paso a paso para reunir recuerdos familiares y convertirlos en una edición para siempre.": [
      "Our AI companion guides you step by step to gather family memories and turn them into a lasting edition.",
      "Notre assistant vous accompagne pas à pas pour réunir les souvenirs de famille et en faire une édition éternelle."
    ],
    "Ver cómo funciona": ["See how it works", "Voir comment ça marche"],

    // --- PRECIOS ---
    "Una vida única.": ["One unique life.", "Une vie unique."],
    "Elige cuánto espacio y tiempo necesitas para reunir sus recuerdos. Todas nuestras biografías incluyen una edición digital y una presentación física para regalar.": [
      "Choose how much space and time you need to gather their memories. Every biography includes a digital edition and a physical gift presentation.",
      "Choisissez l'espace et le temps dont vous avez besoin pour réunir leurs souvenirs. Toutes nos biographies incluent l'édition numérique et la présentation physique."
    ],
    "Biografía Esencial": ["Essential Biography", "Biographie Essentielle"],
    "pago único": ["one-time payment", "paiement unique"],
    "Para recoger los recuerdos más especiales en una biografía breve, íntima y significativa.": [
      "To gather the most meaningful memories in a concise, intimate biography.",
      "Pour rassembler les souvenirs les plus précieux dans une biographie courte et intime."
    ],
    "Entre 15 y 30 páginas": ["15 to 30 pages", "De 15 à 30 pages"],
    "Hasta": ["Up to", "Jusqu'à"],
    "12 fotografías": ["12 photographs", "12 photographies"],
    "incluidas": ["included", "incluses"],
    "7 días": ["7 days", "7 jours"],
    "para recopilar testimonios": ["to collect family stories", "pour recueillir les témoignages"],
    "2 intentos de generación VELA IA": ["2 VELA AI editorial generations", "2 générations éditoriales VELA IA"],
    "Biografía digital descargable en PDF": ["Downloadable digital PDF biography", "Biographie numérique téléchargeable en PDF"],
    "con tarjeta QR": ["with QR card", "avec carte QR"],
    "Crear biografía Esencial": ["Create Essential Biography", "Créer la biographie Essentiellele"],
    "Opción más elegida · Biografía Memoria · Hasta 50 páginas": [
      "Most popular · Memory Biography · Up to 50 pages",
      "La plus choisie · Biographie Mémoire · Jusqu'à 50 pages"
    ],
    "Para reunir anécdotas, fotografías y recuerdos de diferentes etapas de una vida.": [
      "To bring together anecdotes, photographs, and memories across every stage of life.",
      "Pour réunir anecdotes, photographies et souvenirs des différentes étapes d'une vie."
    ],
    "Entre 35 y 50 páginas": ["35 to 50 pages", "De 35 à 50 pages"],
    "15 fotografías": ["15 photographs", "15 photographies"],
    "35 días": ["35 days", "35 jours"],
    "para recopilar": ["to collect stories", "pour collecter"],
    "Crear biografía Memoria": ["Create Memory Biography", "Créer la biographie Mémoire"],
    "Biografía Legado": ["Legacy Biography", "Biographie Héritage"],
    "Para contar una historia con mayor profundidad y reunir las voces de toda una familia.": [
      "To tell a life story in greater depth and gather voices from across the entire family.",
      "Pour raconter une vie en profondeur et réunir les voix de toute la famille."
    ],
    "Entre 50 y 75 páginas": ["50 to 75 pages", "De 50 à 75 pages"],
    "20 fotografías": ["20 photographs", "20 photographies"],
    "65 días": ["65 days", "65 jours"],
    "Crear biografía Legado": ["Create Legacy Biography", "Choisir Héritage"],
    "Cualquier estilo editorial": ["Any editorial style", "Tous les styles éditoriaux"],
    "Los tres planes te permiten elegir libremente entre Letter, Noir o Nude según la personalidad de la persona.": [
      "All three plans let you freely choose Letter, Noir, or Nude to match your loved one's personality.",
      "Les trois formules vous permettent de choisir librement Letter, Noir ou Nude selon la personnalité de votre proche."
    ],
    "Sin suscripciones ni cuotas": ["No subscriptions or recurring fees", "Sans abonnement ni frais cachés"],
    "Un único pago por proyecto. Los colaboradores invitados participan gratis y sin crear cuenta.": [
      "One single payment per project. Invited contributors participate for free with no account needed.",
      "Un paiement unique par projet. Les proches invités participent gratuitement et sans créer de compte."
    ],
    "Envío a toda España": ["Fast physical delivery", "Livraison soignée"],
    "Entrega física del sobre marfil con sello lacrado y dedicatoria personalizada en 1-3 días hábiles.": [
      "Physical delivery of our ivory wax-sealed envelope and personalized dedication card in 1–3 business days.",
      "Envoi physique de l'enveloppe ivoire cachetée à la cire et de la dédicace personnalisée en 1 à 3 jours ouvrés."
    ],
    "Próximamente: edición impresa en tapa dura": ["Coming soon: hardcover printed edition", "Bientôt : édition imprimée reliée"],
    "Estamos ultimando la encuadernación artesanal en tela y papel verjurado para quienes deseen sumar ejemplares impresos de biblioteca a su biografía digital.": [
      "We are finalizing our artisanal linen hardcover binding on laid paper for families who wish to add library-grade printed copies to their digital biography.",
      "Nous finalisons une reliure artisanale en toile sur papier vergé pour celles et ceux qui souhaitent ajouter des exemplaires imprimés à leur biographie numérique."
    ],
    "Todos los planes actuales ya incluyen la biografía digital completa y el sobre físico lacrado con tarjeta QR.": [
      "All current plans already include the complete digital biography and the physical wax-sealed envelope with QR card.",
      "Toutes les formules actuelles incluent déjà la biographie numérique complète et l'enveloppe physique cachetée avec carte QR."
    ],

    // --- NOSOTROS ---
    "No hacemos esto por la tecnología.": ["We don't do this for technology.", "Nous ne faisons pas cela pour la technologie."],
    "Lo hacemos porque cada vida merece ser recordada.": ["We do it because every life deserves to be remembered.", "Nous le faisons parce que chaque vie mérite d'être racontée."],
    "Hay historias que nunca aparecerán en los libros de texto, pero que cambiaron para siempre la vida de quienes vinieron después. Las vidas de nuestros padres, de nuestras abuelas, de quienes sacaron adelante un hogar trabajando con las manos y dejando una huella que no se borra.": [
      "Some stories will never appear in history books, yet they forever shaped the lives of those who came after—the lives of our parents and grandparents, who built homes with their hands and left an indelible mark.",
      "Certaines histoires n'apparaîtront jamais dans les livres d'histoire, mais elles ont changé à jamais la vie de ceux qui ont suivi : celles de nos parents et grands-parents, qui ont bâti un foyer de leurs mains."
    ],
    "VELA nació de una certeza que nos encogió el corazón: la verdadera herencia familiar no son las cosas que dejamos, sino las risas en la cocina, los silencios cómplices, los consejos dados a tiempo y las voces que nos enseñaron a vivir.": [
      "VELA was born from a quiet certainty: a family's true inheritance is not the objects left behind, but the laughter in the kitchen, shared silences, timely advice, and the voices that taught us how to live.",
      "VELA est né d'une certitude : le véritable héritage familial ne sont pas les objets laissés, mais les rires en cuisine, les silences complices, les conseils justes et les voix qui nous ont appris à vivre."
    ],
    "Guardar una historia familiar": ["Preserve a family story", "Préserver une histoire familiale"],
    "Ver biografías de ejemplo": ["View sample biographies", "Voir des biographies exemples"],
    "Una sobremesa tranquila donde cada anécdota encuentra quien la escuche con cariño.": [
      "An unhurried afternoon around the table where every story finds someone listening with love.",
      "Un moment apaisé autour de la table où chaque anecdote trouve une oreille attentive."
    ],
    "«Cuando una persona mayor se va sin contar su historia, se apaga una biblioteca entera.»": [
      "“When an elder leaves without telling their story, an entire library goes dark.”",
      "« Quand un aîné s'en va sans avoir raconté son histoire, c'est toute une bibliothèque qui s'éteint. »"
    ],
    "Un domingo cualquiera nos dimos cuenta de algo que nos heló: conocíamos los nombres de nuestros bisabuelos, pero apenas sabíamos qué les hacía reír cuando eran jóvenes, cómo se enamoraron o qué sintieron el día que salieron de su pueblo con una maleta de cartón.": [
      "One ordinary Sunday we realized something sobering: we knew our great-grandparents' names, yet barely knew what made them laugh in their youth, how they fell in love, or what they felt leaving their village with a cardboard suitcase.",
      "Un dimanche ordinaire, nous avons réalisé quelque chose de saisissant : nous connaissions le nom de nos arrière-grands-parents, mais ignorions ce qui les faisait rire jeunes ou comment ils s'étaient rencontrés."
    ],
    "Entendimos que el mayor peligro para la memoria no es el olvido intencionado, sino la prisa. La falsa creencia de que «ya habrá tiempo de preguntarle a los abuelos». Y un día el tiempo se acaba.": [
      "We understood that memory's greatest threat is not forgetting, but haste—the illusion that there will always be time to ask our grandparents. Until one day, time runs out.",
      "Nous avons compris que le plus grand danger pour la mémoire n'est pas l'oubli, mais la hâte : croire qu'il y aura toujours le temps de demander à nos grands-parents."
    ],
    "Creamos VELA para que ninguna familia vuelva a sentir que llegó tarde a escuchar. Para que cualquier hijo o nieto pueda acercarle un teléfono a sus padres y decirles: «Cuéntame otra vez cómo fue, que quiero guardarlo para siempre».": [
      "We created VELA so no family ever feels they arrived too late to listen—so any child or grandchild can hold out a phone and say: “Tell me again how it happened, I want to keep it forever.”",
      "Nous avons créé VELA pour qu'aucune famille n'ait le regret d'arriver trop tard. Pour que chacun puisse dire à ses parents : « Raconte-moi encore, je veux le garder pour toujours »."
    ],
    "Custodia y responsabilidad ética": ["Stewardship & ethical care", "Protection et responsabilité éthique"],
    "El legado digital:": ["Digital legacy:", "L'héritage numérique :"],
    "proteger la memoria en un mundo que olvida rápido.": [
      "protecting memory in a fast-forgetting world.",
      "protéger la mémoire dans un monde qui oublie vite."
    ],
    "Durante generaciones, los recuerdos familiares se guardaban en cajas de zapatos, cartas escritas a mano y álbumes de fotos de tapa dura. Hoy, los recuerdos viven en audios de WhatsApp que se borran, fotografías en la nube sin clasificar y teléfonos que se apagan para siempre.": [
      "For generations, family memories lived in shoeboxes, handwritten letters, and hardcover photo albums. Today they live in disappearing voice notes, unsorted cloud folders, and phones that eventually turn off forever.",
      "Pendant des générations, les souvenirs vivaient dans des boîtes à chaussures, des lettres manuscrites et des albums photo. Aujourd'hui, ils se perdent dans des messages vocaux éphémères et des téléphones oubliés."
    ],
    "En VELA entendemos que la memoria oral y las vivencias de nuestros mayores son un": [
      "At VELA we believe our elders' oral history and lived experiences are an",
      "Chez VELA, nous savons que la mémoire orale de nos aînés est un"
    ],
    "patrimonio inmaterial de valor incalculable": [
      "intangible heritage of priceless value",
      "patrimoine immatériel d'une valeur inestimable"
    ],
    ". Por eso aplicamos los principios de concienciación promovidos internacionalmente por la": [
      ". That is why we follow the awareness principles promoted internationally by the",
      ". C'est pourquoi nous appliquons les principes portés à l'international par la"
    ],
    ", la entidad global de referencia dedicada a educar sobre la importancia de planificar, cuidar y proteger la herencia digital y los recuerdos familiares antes de que sea tarde.": [
      ", the leading global organization dedicated to educating families on planning, caring for, and protecting digital heritage before it is too late.",
      ", l'organisation internationale de référence dédiée à la préservation et à la transmission du patrimoine numérique familial."
    ],
    "«Planificar y ordenar los recuerdos digitales es el mayor acto de amor y respeto hacia las generaciones que vendrán después.»": [
      "“Organizing and preserving digital memories is the greatest act of love and respect for the generations to come.”",
      "« Organiser et préserver les souvenirs numériques est le plus beau geste d'amour envers les générations futures. »"
    ],
    "— En consonancia con las directrices de la Digital Legacy Association": [
      "— In alignment with the Digital Legacy Association guidelines",
      "— En accord avec les recommandations de la Digital Legacy Association"
    ],
    "De audios efímeros a un libro eterno": ["From fleeting audio to an eternal book", "D'audios éphémères à un livre éternel"],
    "Organizamos la memoria dispersa en una edición accesible para siempre": [
      "We organize scattered memories into an edition accessible forever",
      "Nous rassemblons la mémoire dispersée dans une édition durable"
    ],
    "Privacidad absoluta y propiedad familiar": ["Absolute privacy & family ownership", "Confidentialité absolue et propriété familiale"],
    "Tus archivos nunca se ceden ni se usan para entrenar algoritmos públicos": [
      "Your files are never shared or used to train public algorithms",
      "Vos fichiers ne sont jamais cédés ni utilisés pour entraîner des algorithmes publics"
    ],
    "El puente entre lo físico y lo digital": ["The bridge between physical & digital", "Le pont entre le physique et le numérique"],
    "Un sobre verjurado con lacre y tarjeta QR para entregar en mano y tocar": [
      "A laid-paper wax-sealed envelope and QR card you can hold and gift",
      "Une enveloppe en papier vergé cachetée à la cire et une carte QR à offrir"
    ],
    "Referente en legado digital": ["Global digital legacy reference", "Référence en patrimoine numérique"],
    "Conoce la asociación ↗": ["Visit the association ↗", "Découvrir l'association ↗"],
    "Compromiso intergeneracional": ["Intergenerational commitment", "Engagement intergénérationnel"],
    "Ningún mayor debería sentirse solo.": ["No elder should ever feel alone.", "Aucun aîné ne devrait se sentir seul."],
    "Un porcentaje de cada biografía, destinado a su compañía.": [
      "A share of every biography goes toward companionship.",
      "Un pourcentage de chaque biographie consacré à leur accompagnement."
    ],
    "En España más de dos millones de personas mayores viven solas, y muchas pasan semanas enteras sin que nadie les pregunte cómo están o qué hicieron hoy. En VELA creemos que escuchar no puede ser un privilegio, sino un acto de dignidad básica.": [
      "Millions of older adults live alone, often going weeks without anyone asking how they are. At VELA, we believe being listened to is not a privilege, but a basic act of dignity.",
      "Des millions de personnes âgées vivent seules, parfois des semaines sans que personne ne prenne de leurs nouvelles. Chez VELA, écouter est un acte essentiel de dignité."
    ],
    "Colaboración solidaria con Adopta / Apadrina un Abuelo": [
      "Social partnership with Adopta un Abuelo",
      "Partenariat solidaire avec Adopta un Abuelo"
    ],
    "Por eso colaboramos activamente con la iniciativa social de": [
      "That is why we actively partner with the social initiative",
      "C'est pourquoi nous soutenons activement l'initiative sociale"
    ],
    "(popularmente conocida como Apadrina un Abuelo). Destinamos un": [
      ". We allocate a",
      ". Nous reversons un"
    ],
    "porcentaje de lo recaudado en cada biografía contratada": [
      "percentage of every biography created",
      "pourcentage de chaque biographie réalisée"
    ],
    "a financiar programas de acompañamiento, llamadas telefónicas periódicas y visitas presenciales de jóvenes voluntarios a ancianos que no tienen a nadie.": [
      "to fund companionship programs, regular phone calls, and in-person visits by young volunteers to isolated seniors.",
      "pour financer des programmes d'accompagnement, des appels réguliers et des visites de jeunes bénévoles auprès des personnes âgées isolées."
    ],
    "Al guardar la historia de tus padres o abuelos con VELA, estás regalando al mismo tiempo compañía, escucha y cariño a otra persona mayor que lo necesita.": [
      "By preserving your parents' or grandparents' story with VELA, you are also gifting companionship, listening, and warmth to another elder in need.",
      "En préservant l'histoire de vos parents ou grands-parents avec VELA, vous offrez aussi présence et écoute à un autre aîné qui en a besoin."
    ],
    "Tu biografía multiplica compañía": ["Your biography multiplies companionship", "Votre biographie multiplie la présence"],
    "Acompañamiento intergeneracional contra la soledad no deseada en residencias y hogares.": [
      "Intergenerational companionship against unwanted loneliness in care homes and residences.",
      "Accompagnement intergénérationnel contre la solitude des personnes âgées."
    ],
    "Quiénes cuidamos cada historia.": ["Who cares for every story.", "Qui prend soin de chaque histoire."],
    "Detrás de VELA no hay una plataforma distante ni un algoritmo frío, sino tres personas que tratan cada recuerdo ajeno con el mismo cuidado y respeto con el que guardarían el de su propia madre o de su propio abuelo.": [
      "Behind VELA there is no distant platform or cold algorithm—just three people who treat every memory with the same care and respect they would give their own mother or grandfather.",
      "Derrière VELA, il n'y a ni plateforme froide ni algorithme distant, mais trois personnes qui prennent soin de chaque souvenir comme de celui de leur propre famille."
    ],
    "Detrás de VELA no hay una plataforma distante ni un algoritmo frío, sino tres personas que tratan cada recuerdo ajeno con el mismo cuidado y respeto con el que guardarían el de su propia madre o su propio abuelo.": [
      "Behind VELA there is no distant platform or cold algorithm—just three people who treat every memory with the same care and respect they would give their own mother or grandfather.",
      "Derrière VELA, il n'y a ni plateforme froide ni algorithme distant, mais trois personnes qui prennent soin de chaque souvenir comme de celui de leur propre famille."
    ],
    "Lo que nos une en este proyecto": ["What unites us in this project", "Ce qui nous unit dans ce projet"],
    "Nos unió una misma inquietud: comprobar cuántas historias de nuestros abuelos y padres se quedan sin escribir por falta de tiempo, de método o porque nunca parece llegar el momento adecuado. Aunque venimos de caminos distintos —la mirada editorial, la tecnología humana y la docencia—, compartimos una misma convicción:": [
      "We were united by a shared concern: seeing how many stories of our parents and grandparents go unwritten for lack of time, method, or the right moment. Though we come from different paths—editorial craft, humane technology, and teaching—we share one conviction:",
      "Une même inquiétude nous a réunis : voir tant d'histoires de nos parents et grands-parents rester non écrites faute de temps ou de méthode. Venus de l'édition, de la technologie humaine et de l'enseignement, nous partageons une conviction :"
    ],
    "escuchar con calma a una persona mayor es uno de los actos de cariño más grandes que existen": [
      "listening unhurriedly to an elder is one of the greatest acts of love there is",
      "écouter patiemment un aîné est l'un des plus beaux gestes d'amour qui soient"
    ],
    "Por eso diseñamos VELA juntos desde cero: para que la tecnología permanezca siempre en segundo plano y el protagonismo absoluto sea la voz real, el ritmo y la memoria de cada familia.": [
      "That is why we built VELA together from scratch—so technology always stays quietly in the background, leaving full center stage to each family's real voice, rhythm, and memory.",
      "C'est pourquoi nous avons conçu VELA ensemble de A à Z : pour que la technologie reste discrète et laisse toute la place à la voix et à la mémoire de chaque famille."
    ],
    "Custodia del legado & Vocación editorial": ["Legacy stewardship & Editorial vision", "Sauvegarde de la mémoire & Vision éditoriale"],
    "Creció en Valencia fascinado por las historias que sus abuelos contaban al terminar los almuerzos de domingo. De ellos aprendió que cada anécdota dicha al paso encierra una dignidad profunda. Impulsó VELA con una misión clara: devolver a las personas mayores el lugar de honor que merecen en la memoria de sus familias.": [
      "Raised in Valencia, fascinated by the stories his grandparents shared after Sunday lunches. From them he learned that even a passing anecdote holds deep dignity. He founded VELA with a clear mission: restoring elders to the place of honor they deserve in family memory.",
      "Élevé à Valence, fasciné par les récits de ses grands-parents après les déjeuners du dimanche, il a fondé VELA avec une mission claire : redonner aux aînés la place d'honneur qu'ils méritent dans la mémoire familiale."
    ],
    "«No hay vidas comunes; solo vidas que nadie se sentó a escuchar con el tiempo y el cariño suficientes.»": [
      "“There are no ordinary lives—only lives no one sat down to listen to with enough time and love.”",
      "« Il n'y a pas de vies ordinaires ; seulement des vies que personne n'a pris le temps d'écouter avec tendresse. »"
    ],
    "Escucha activa & Protección de la memoria": ["Active listening & Memory protection", "Écoute active & Protection de la mémoire"],
    "Comprometido con que las herramientas digitales trabajen siempre en silencio y con profunda ética: ordenando grabaciones y recuerdos familiares dispersos sin alterar un ápice la forma de hablar, las pausas y la emoción real de quien los comparte en voz alta.": [
      "Committed to making digital tools work quietly and ethically—organizing scattered recordings and memories without altering a single pause, turn of phrase, or real emotion of the speaker.",
      "Engagé pour que les outils numériques travaillent en silence et avec éthique : organiser les enregistrements et souvenirs sans jamais altérer la voix, les pauses ni l'émotion de celui qui raconte."
    ],
    "«La herramienta más valiosa no es la que deslumbra, sino la que sabe apartarse para dejar brillar la voz de una persona.»": [
      "“The most valuable tool is not the one that dazzles, but the one that steps aside so a person's voice can shine.”",
      "« L'outil le plus précieux n'est pas celui qui éblouit, mais celui qui sait s'effacer pour laisser briller la voix d'une personne. »"
    ],
    "Acompañamiento a familias": ["Family guidance & care", "Accompagnement des familles"],
    "Docente y comunicador con una vocación innata por la palabra sincera y el trato humano. Francisco atiende a cada familia desde el primer momento, guiándola con paciencia y asegurando que regalar una biografía sea un proceso sereno, reconfortante y lleno de afecto.": [
      "Educator and communicator with an innate calling for sincere words and human warmth. Francisco supports every family from day one, guiding them patiently so gifting a biography is serene and deeply moving.",
      "Enseignant et communicant passionné par la parole sincère et le lien humain. Francisco accompagne chaque famille dès le premier jour avec patience et bienveillance."
    ],
    "«Entregar una biografía es abrazar a quien quieres a través de sus propias palabras.»": [
      "“Gifting a biography is embracing someone you love through their own words.”",
      "« Offrir une biographie, c'est enlacer un être cher à travers ses propres mots. »"
    ],
    "Asociación de Mayores Digitales": ["Association of Digital Seniors", "Association des Aînés Numériques"],
    "VELA comparte y respalda la misión de acercar la tecnología de forma sencilla, respetuosa y accesible a las personas mayores, convirtiendo lo digital en un puente para preservar su memoria y su voz dentro de la familia.": [
      "VELA shares and supports the mission of bringing technology closer to older adults in a simple, respectful, and accessible way—turning digital tools into a bridge that preserves their voice and memory within the family.",
      "VELA partage et soutient la mission de rendre la technologie simple, respectueuse et accessible aux aînés, en faisant du numérique un pont pour préserver leur mémoire et leur voix."
    ],
    "Toda familia tiene una historia que merece no ser olvidada.": [
      "Every family has a story that deserves never to be forgotten.",
      "Chaque famille possède une histoire qui mérite de ne jamais être oubliée."
    ],
    "No dejes que el tiempo borre las palabras de quienes más quieres. Empieza hoy mismo a construir un recuerdo para siempre.": [
      "Don't let time fade the words of those you love most. Start building a forever keepsake today.",
      "Ne laissez pas le temps effacer les mots de ceux que vous aimez. Commencez aujourd'hui à bâtir un souvenir éternel."
    ],
    "Ver planes desde 25 €": ["View plans from €25", "Voir les formules dès 25 €"],
    "Descubrir cómo funciona": ["Discover how it works", "Découvrir comment ça marche"]
  };

  const TITLES = {
    "/": {
      en: "VELA | Personalized digital biographies to gift",
      fr: "VELA | Biographies numériques personnalisées à offrir"
    },
    "/la-biografia": {
      en: "The Biography | VELA",
      fr: "La Biographie | VELA"
    },
    "/como-funciona": {
      en: "How VELA Works — From spoken memories to an eternal legacy",
      fr: "Comment fonctionne VELA — D'un souvenir parlé à un héritage éternel"
    },
    "/ejemplos": {
      en: "Biography Examples | VELA — Three ways to tell a life",
      fr: "Exemples de Biographies | VELA — Trois façons de raconter une vie"
    },
    "/precios": {
      en: "Pricing | VELA",
      fr: "Tarifs | VELA"
    },
    "/nosotros": {
      en: "About Us | VELA",
      fr: "À propos | VELA"
    }
  };

  const originals = new WeakMap();
  const originalTitle = document.title;

  function normalize(str) {
    return str.replace(/\s+/g, " ").trim();
  }

  function applyLanguage(langCode) {
    const code = (langCode || "ES").toUpperCase();
    const lang = code === "EN" ? "en" : code === "FR" ? "fr" : "es";
    const idx = lang === "en" ? 0 : lang === "fr" ? 1 : -1;

    try {
      localStorage.setItem("vela_lang", code);
    } catch (e) {}

    document.documentElement.lang = lang;
    document.documentElement.setAttribute("data-lang", lang);

    // Update page title
    const pathKey = window.location.pathname.replace(/\/+$/, "") || "/";
    if (lang === "es") {
      document.title = originalTitle;
    } else if (TITLES[pathKey] && TITLES[pathKey][lang]) {
      document.title = TITLES[pathKey][lang];
    }

    // Walk all text nodes cleanly preserving HTML structure & formatting
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    let node;
    while ((node = walker.nextNode())) {
      const parentTag = node.parentElement ? node.parentElement.tagName : "";
      if (parentTag === "SCRIPT" || parentTag === "STYLE") continue;

      if (!originals.has(node)) {
        originals.set(node, node.nodeValue);
      }
      const orig = originals.get(node);
      const norm = normalize(orig);
      if (!norm) continue;

      if (idx === -1) {
        if (node.nodeValue !== orig) node.nodeValue = orig;
      } else if (DICT[norm]) {
        const leading = orig.match(/^\s*/)[0];
        const trailing = orig.match(/\s*$/)[0];
        node.nodeValue = leading + DICT[norm][idx] + trailing;
      }
    }

    // Sync desktop & mobile switcher buttons
    document.querySelectorAll(".vela-lang-btn").forEach((btn) => {
      const active = btn.getAttribute("data-lang") === code;
      btn.classList.toggle("is-selected", active);
      btn.setAttribute("aria-pressed", String(active));
    });
    document.querySelectorAll("[data-mobile-lang]").forEach((btn) => {
      const active = btn.getAttribute("data-mobile-lang") === code;
      btn.className = active
        ? "px-2.5 py-1 text-xs font-semibold rounded-sm bg-vela-chocolate text-white"
        : "px-2.5 py-1 text-xs font-semibold rounded-sm text-vela-chocolate/75 hover:bg-vela-crema";
    });
  }

  window.VelaI18n = {
    setLanguage: applyLanguage,
    getLanguage: () => {
      try {
        return localStorage.getItem("vela_lang") || "ES";
      } catch (e) {
        return "ES";
      }
    }
  };

  // Auto-apply saved or URL-parameter language on load
  const urlLang = new URLSearchParams(window.location.search).get("lang");
  let initial = "ES";
  if (urlLang && /^(es|en|fr)$/i.test(urlLang)) {
    initial = urlLang.toUpperCase();
  } else {
    try {
      const saved = localStorage.getItem("vela_lang");
      if (saved && /^(ES|EN|FR)$/.test(saved)) initial = saved;
    } catch (e) {}
  }

  if (initial !== "ES") {
    applyLanguage(initial);
  }
})();
