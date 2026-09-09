// ══════════════════════════════════════════════════════════════════
//  DONNÉES DU SITE — Guy Lagarde Photographies
//  Modifiez ce fichier pour ajouter/modifier thèmes et légendes
// ══════════════════════════════════════════════════════════════════

const BASE_API = "https://eapi.pcloud.com";
const SIGNATURE_URL = "https://eapi.pcloud.com/getpubVenisethumb?code=XZDOBiZ1EE9bXpyGwyFzsPUr70rK5xvOdX7&size=400x200&crop=0&type=auto";
const HERO_PHOTO_CODE = "XZiEtiZdnLkTurVmRpYvTSQW5olhyU8D7gV";

// ── EUROPE ────────────────────────────────────────────────────────
const EUROPE = [
  {
    id: "france",
    nom: "France",
    flagImg: "https://flagcdn.com/w40/fr.png",
    legende: "De Marseille à la Bretagne, fragments d'une France intime et festive.",
    themes: [
      { id: "tonneliers", nom: "Cimetière des Tonneliers, Baie d'Etel", legende: "", code: "kZeCavZakkjQGYUeYHQDN7BJ3EvX8hCaqSX", blog: false },
      { id: "confolens", nom: "Festival de Confolens", legende: "", code: "kZMWBiZJxgqWu4W7cVkNXhmT2C9A4VF1o1V", blog: false },
      { id: "marseille", nom: "Marseille", legende: "", code: "kZiCavZVSQptHe2wfzmJVKNsVHg87QRa2Fy", blog: false },
      { id: "musique", nom: "Musique et Concerts", legende: "", code: "kZTWBiZ6lIeDDa3du7M2PcpnBs974JBQo6X", blog: false },
      { id: "paysages-fr", nom: "Paysages", legende: "", code: "kZPWBiZV5IGbnv6NH4id3avScUdihg4ChqV", blog: false },
      { id: "barrobjectif", nom: "Exposition Barrobjectif 2023", legende: "", code: "kZg6BiZwl6C8nPXzpVgWBcDUy5USJrfok70", blog: false },
    ],
    videos: []
  },
  {
    id: "espagne",
    nom: "Espagne",
    flagImg: "https://flagcdn.com/w40/es.png",
    legende: "Cartes postales d'Espagne — de Madrid aux villes oubliées d'Estrémadure.",
    themes: [
      { id: "espagne", nom: "Paysages d'Espagne", legende: "", code: "kZuWBiZ9wW3gDBCGbfWzPRUrY6ehRwcMPiy", blog: false },
    ],
    videos: [
      { titre: "Carte postale Madrid", url: "https://youtu.be/z5nk8yZ7cE8", ytId: "z5nk8yZ7cE8" },
      { titre: "Carte postale Caceres", url: "https://youtu.be/M2HGkH2nhZA", ytId: "M2HGkH2nhZA" },
      { titre: "Carte postale Salamanca", url: "https://youtu.be/90z43Vp3bys", ytId: "90z43Vp3bys" },
      { titre: "Carte postale Trujillo", url: "https://youtu.be/F_f5Fv00eBM", ytId: "F_f5Fv00eBM" },
      { titre: "Carte postale Tolède", url: "https://youtu.be/lHJnoelLph4", ytId: "lHJnoelLph4" },
      { titre: "Carte postale Zaragoza", url: "https://youtu.be/B6UrEdiHSHw", ytId: "B6UrEdiHSHw" },
    ]
  },
  {
    id: "italie",
    nom: "Italie",
    flagImg: "https://flagcdn.com/w40/it.png",
    legende: "Îles napolitaines et sérénissime Venise — l'Italie hors des sentiers battus.",
    themes: [
      { id: "ischia", nom: "Ischia, Procida, Capri", legende: "", code: "kZBWBiZKqrJxlmRKAVNgCrTUXBENkLHSfBk", blog: false },
      { id: "venise", nom: "Venise et Burano", legende: "", code: "kZWWBiZGRQ8PQ64ENmPGieAPFRM8jksPzQX", blog: false },
    ],
    videos: [
      { titre: "Venise en images", url: "https://youtu.be/2wXnisjKQdk", ytId: "2wXnisjKQdk" },
    ]
  },
  {
    id: "grece",
    nom: "Grèce",
    flagImg: "https://flagcdn.com/w40/gr.png",
    legende: "La Crète, île aux mille visages, entre mer et montagne.",
    themes: [
      { id: "crete", nom: "La Crète", legende: "", code: "kZjWBiZ6Q8GPQPev7mOCBF1LfnbibWYtfvV", blog: false },
    ],
    videos: []
  },
  {
    id: "portugal",
    nom: "Portugal",
    flagImg: "https://flagcdn.com/w40/pt.png",
    legende: "Lisbonne et ses trams, ville mélancolique et solaire.",
    themes: [
      { id: "lisbonne", nom: "Lisbonne et ses trams", legende: "", code: "kZ1WBiZLJyxEneRx8Xnrg5w4dNfLY5uYECV", blog: false },
    ],
    videos: []
  },
  {
    id: "maroc",
    nom: "Maroc",
    flagImg: "https://flagcdn.com/w40/ma.png",
    legende: "Couleurs et contrastes d'un pays aux mille facettes.",
    themes: [
      { id: "maroc", nom: "Le Maroc", legende: "", code: "kZsWBiZQnrob8BAzRQcbvHSW5NN8JoeFe67", blog: false },
    ],
    videos: []
  },
  {
    id: "pays bas",
    nom: "Pays Bas",
    flagImg: "https://flagcdn.com/w40/nl.png",
    legende: "Le Plat Pays, ses moulins, ses canaux",
    themes: [
      { id: "Les villes", nom: "Delft, Amsterdam, Giethoorn", legende: "", code: "kZm3u77Zv25DQdTAEQS2Ig9pNRPv85oW59Tk", blog: false },
      { id: "Les moulins", nom: "Moulins de Kinderdjik", legende: "", code: "kZb3u77ZjI19zsjw16Jk4icTCIlUeLb6Ps4V", blog: false },
      { id: "Encore des moulins", nom: "Moulins de Zaanse Schans", legende: "", code: "kZh3u77ZTWeyl8qKbO7XAIx6U3QFHLmyjJ77", blog: false },
    ],
    videos: []
  },
  {
    id: "turquie",
    nom: "Turquie",
    flagImg: "https://flagcdn.com/w40/tr.png",
    legende: "Istanbul. Deux continents, une âme, mille vies qui se croisent sur les rives du Bosphore",
    themes: [
      { id: "istanbul", nom: "Istanbul", legende: "", code: "kZS0D77ZKjDsOTeKNc5FwtqxxL3mORfzqGM7", blog: false },
    ],
    videos: []
  },
];

// ── ASIE ──────────────────────────────────────────────────────────
const ASIE = [
  {
    id: "cambodge",
    nom: "Cambodge",
    flagImg: "https://flagcdn.com/w40/kh.png",
    legende: "Les temples d'Angkor et les marchés colorés du Cambodge.",
    themes: [
      { id: "cambodge-couleur", nom: "Cambodge — Couleur", legende: "", code: "kZIstiZV6wnxxo9KwkEJJawgTOVKYWPfvB7", blog: false },
      { id: "cambodge-nb", nom: "Cambodge — Noir & Blanc", legende: "", code: "kZrstiZtC1HystIQmSHPsuXr9KRBJlc5a7y", blog: false },
    ],
    videos: []
  },
  {
    id: "indonesie",
    nom: "Indonésie",
    flagImg: "https://flagcdn.com/w40/id.png",
    legende: "Bali, Java, Flores, Sumba — l'archipel aux dix mille îles.",
    themes: [
      { id: "balinaises", nom: "Festivités Balinaises", legende: "", code: "kZ5xavZ8JvhAixeDfQpaaMFuyqQXy91NUpX", blog: false },
      { id: "buffles", nom: "Courses de Buffles à Jembrana", legende: "", code: "kZ1xavZEvaqjHXnhwz5UAzIBVrmJBLurd5X", blog: false },
      { id: "flores", nom: "Flores et Komodo", legende: "", code: "kZO2BiZSYmD0jzjdOFrU8XkVWij0Fmd1RDX", blog: false },
      { id: "chasseur", nom: "Le Chasseur de Nuages", legende: "", code: "kZfEGvZErqhnfVftnh07aYPpzcNnRqIpcok", blog: true },
      { id: "ijen", nom: "Le Volcan Kawa Ijen", legende: "", code: "kZixavZmMdF8A9sl5XNHIpd9pQzwpWK5faV", blog: true },
      { id: "batur", nom: "Le Mont et le Lac Batur", legende: "", code: "kZJwavZMdQmyvMurJhn9xF4wMzcbmIAoyry", blog: true },
      { id: "femmes", nom: "Le Travail des Femmes Indonésiennes", legende: "", code: "kZ32BiZ7OsoIoDNd5SupqsRlgV1uXaJbw3X", blog: false },
      { id: "bali", nom: "Paysages et Rizières de Bali", legende: "", code: "kZr2BiZBLkvyBb6qVLWJGn7j8CvFyurukTk", blog: false },
      { id: "bali-ciel", nom: "Vues du Ciel de Bali", legende: "", code: "kZ81tiZqWeqkcOHn8HoSwTlTuoejzK0QFyy", blog: false },
      { id: "sumba-paysages", nom: "Île de Sumba — Les Paysages", legende: "", code: "kZn1tiZxvnlzmzPutFvNDBJcNqhGkEWm57k", blog: false },
      { id: "sumba-villages", nom: "Île de Sumba — Les Villages", legende: "", code: "kZC1tiZswJLXRec4gYrUkKXHCkrRBt0tPsk", blog: false },
      { id: "sumba-visages", nom: "Île de Sumba — Les Visages", legende: "", code: "kZt1tiZDg9f6Rbpo8S91HLh9LwNLkc7U0Gk", blog: false },
    ],
    videos: [
      { titre: "Flores et Komodo", url: "https://youtu.be/LPeh6BAK1ho", ytId: "LPeh6BAK1ho" },
      { titre: "L'île de Sumba", url: "https://youtu.be/B69_ffjQ3-g", ytId: "B69_ffjQ3-g" },
    ]
  },
  {
    id: "japon",
    nom: "Japon",
    flagImg: "https://flagcdn.com/w40/jp.png",
    legende: "Tokyo, Kyoto, Osaka — l'empire du soleil levant entre tradition et modernité.",
    themes: [
      { id: "cerisiers", nom: "Les Cerisiers de Minamizu", legende: "", code: "kZG1tiZVOor3jzDUwjuM6LWqMgstfmRAhuX", blog: false },
      { id: "kyoto", nom: "Kyoto", legende: "", code: "kZo1tiZ7K8cJx9G43pcsgeMpo16jk6uJfpX", blog: false },
      { id: "osaka", nom: "Osaka", legende: "", code: "kZVetiZxTWws7GuBrYY26gI7me7yJDUVgD7", blog: false },
      { id: "tokyo", nom: "Tokyo", legende: "", code: "kZJetiZ6JAMvH71RY7ijcSjr6CK6SwpEJfk", blog: false },
    ],
    videos: [
      { titre: "Le Japon en images", url: "https://youtu.be/IJAE_d1atfA", ytId: "IJAE_d1atfA" },
    ]
  },
  {
    id: "marches-asie",
    nom: "Marchés d'Asie",
    flagImg: "https://flagcdn.com/w40/th.png",
    legende: "Des marchés colorés et animés à travers toute l'Asie.",
    themes: [
      { id: "marche-jimbaran", nom: "Marché de Jimbaran, Bali", legende: "", code: "kZ4etiZxHcnoGXGhAjHbgfk4Rkc2fUKizbk", blog: false },
      { id: "marche-waingapu", nom: "Marché de Waingapu, Sumba", legende: "", code: "kZuetiZaYQ2Xu3OpWR0rh5RGBEV9YoV0hm7", blog: false },
      { id: "marche-cambodge", nom: "Marchés au Cambodge", legende: "", code: "kZBetiZlIemcGqqGAjwR1QD0tNnFzdWBRc7", blog: false },
      { id: "marche-jakarta", nom: "Marchés de Jakarta", legende: "", code: "kZnetiZ9CNT7w5TjPm2fSVuOLTAYm3f1hRV", blog: false },
    ],
    videos: []
  },
  {
    id: "malaisie",
    nom: "Malaisie",
    flagImg: "https://flagcdn.com/w40/my.png",
    legende: "Des Cameron Highlands aux grandes villes de Malaisie.",
    themes: [
      { id: "cameron", nom: "Les Cameron Hills", legende: "", code: "kZD9tiZhApVQLnoirbQWWIV2E6X0hLNsxO7", blog: false },
      { id: "kuala-lumpur", nom: "Kuala Lumpur, Malacca, Georgestown et Ipoh", legende: "", code: "kZx9tiZjWLFY2HMHRBgU3AoFPeeluvDOjKX", blog: false },
    ],
    videos: []
  },
  {
    id: "portraits-asie",
    nom: "Portraits Surpris",
    flagImg: "https://flagcdn.com/w40/id.png",
    legende: "Regards croisés — portraits saisis sur le vif à travers l'Asie.",
    themes: [
      { id: "portraits-couleur", nom: "Portraits Surpris — Couleur", legende: "", code: "kZHj2iZT9GvIP05Y4ulIhV9Jj4zL7arMuLX", blog: false },
      { id: "portraits-nb", nom: "Portraits Surpris — Noir & Blanc", legende: "", code: "kZoS2iZiCbaIURjc3j6AhrHjp5o8HajyjAy", blog: false },
    ],
    videos: []
  },
  {
    id: "vietnam",
    nom: "Viêt Nam",
    flagImg: "https://flagcdn.com/w40/vn.png",
    legende: "Ninh Binh et la baie d'Along terrestre — entre fleuve et karst.",
    themes: [
      { id: "vietnam", nom: "Viêt Nam", legende: "", code: "kZQWBiZMwRTfoI1JV5xFjFrF9CJM7rGwqk0", blog: false },
    ],
    videos: [
      { titre: "Vietnam en images", url: "https://youtu.be/pSs7iwehgkQ", ytId: "pSs7iwehgkQ" },
    ]
  },
];

// ── RÉCITS BLOG ───────────────────────────────────────────────────
const RECITS = {
  chasseur: {
    titre: "Le Chasseur de Nuages",
    date: "Bali, Indonésie",
    paragraphes: [
      "Grosse manifestation que ce festival qui se déroule chaque année sur les 3 derniers jours de décembre.",
      "Tout se passe à l'extérieur; les magnifiques défilés rivalisant d'imagination autant dans les costumes que les maquillages, les gamelans installés en plein air, les VIP assis aux premiers rangs sur les chaises d'apparat, tous sont suspendus à la compétence d'un seul homme.",
      "Il s'agit du chasseur de nuages, le pawang ujan, qui est invité à toutes les grandes manifestations en Indonésie pour diriger les nuages vers d'autres cieux moins festifs.",
      "Et ce jour-là il a eu du boulot le chasseur de nuages, car un ciel chargé menaçait depuis le milieu d'après-midi, et l'on apercevait nettement le gros nuage de fumée qui s'élevait de l'intérieur du temple, sensé perturber, voire repousser ses acolytes porteurs de pluie au-dessus de nos têtes.",
      "Quelques gouttes de pluies clairsemées sont tombées au début de soirée, mais rien de bien méchant. Les dieux balinais ont sans doute apporté leur concours au pawang ujan, comme ils le font toujours pour veiller sur leurs fidèles.",
      "Juste avant de quitter les lieux, je suis repassé devant l'entrée du temple et j'ai aperçu la frêle silhouette de celui qui venait d'accomplir l'impensable se détacher sur des volutes de fumée âcre dans une espèce de modeste révérence qui m'a semblé être le signe du devoir accompli !"
    ]
  },
  ijen: {
    titre: "Le Volcan Kawa Ijen — Plonger dans le cratère aux flammes bleues",
    date: "Bali, Indonésie",
    paragraphes: [
      "Descente en enfer par une belle journée de printemps.",
      "Bon, je passerai sous silence le trajet dans un excellent minibus super confortable mais aux mains d'un chauffeur approximatif pour ne pas gâcher les bienfaits du stage de méditation de notre organisateur Pierrick Bigot — pour les intimes, Pierriiiiiiick\u00a0!!!! pour les autres, certainement plus connu dans l'esperanto touristico-musical des groupies internationales qui partagent régulièrement ce trip avec lui.",
      "Aventure cosmopolite composée, par ordre d'apparition et de plastique, d'une tribu russo-ukraino-americano-austalo-italiano-française. Aux velléités de notre organisateur à vouloir s'équiper d'un Lada 4x4 me reviennent à l'esprit les conseils de mon garagiste favori m'expliquant la difficulté à se procurer les pièces détachées de ces véhicules, arguant, par exemple, qu'il était laborieux d'acheter des bielles aux Russes.",
      "Mais je m'égare, là, comme disait mon ami (j'aurai bien aimé\u00a0!) Pierrot, à qui j'emprunte momentanément la plume, car un magnifique clair de lune nous a accompagnés tout au long de notre ascension nocturne.",
      "3h du mat. La descente dans le cratère s'effectue sans encombre, équipés que nous sommes de lampes frontales, gants et masques à gaz, encadrés par deux autres guides indos, adorables, attentifs et prévenants. Nous croisons à intervalles réguliers des porteurs chargés de leurs paniers remplis de plaques de soufre, pesant entre 60 et 90\u00a0kg, grimpant laborieusement la pente, choisissant méthodiquement à chaque pas un appui stable au milieu des pierres branlantes pour se hisser vers le sommet.",
      "Malgré la difficulté et l'intense effort à fournir on sent une grande fierté dans leur regard et leur sourire qu'ils échangent avec nous. Un sentiment bouleversant d'admiration et d'humilité devant ces êtres ordinaires et surhommes à la fois, dans ce décor lunaire, aride et enfumé.",
      "En poursuivant la descente, on se rapproche des fameuses flammes bleues, qui rajoutent à ce lieu un éclairage irréel. Les mineurs sont au travail, scindant en plaques le soufre et remplissant les paniers, juste protégés des gaz et des fumées par des foulards enturbannés sur leur tête qu'ils ramènent sur leur bouche.",
      "4h. Le soleil, encore caché par le sommet apporte une lumière d'éclipse, pâle, grise donnant un aspect laiteux au lac que l'on vient de rejoindre en contrebas. Puis il apparaît timidement, faisant face à la lune qui l'attend patiemment sur l'autre versant. Le lac vire au vert, la roche prend des couleurs ocres et bleutées, le soufre en fusion d'un rouge-orangé se change en safran en refroidissant.",
      "Avec Chris, mon pote, on profite de toute la beauté du monde, au cœur des hommes.",
      "Le retour vers le sommet est un nouveau spectacle. À chaque pause, sur la pente très escarpée aux cailloux branlants, le paysage évolue. Les fumées changent d'orientation au gré des vents, créant des variations multiples en fonction de ce que les nuages nous laissent à voir. Sur la crête on découvre l'autre versant qui était plongé dans l'obscurité durant la montée. Une succession de plans montagneux et verdoyants descendent vers la ville de Banyuwangi. Au loin le mont Raung prépare pernicieusement sa prochaine éruption.",
      "Sur le chemin du retour nous nous retrouvons à la Cantina, petit refuge où il est possible de se reposer tout en profitant de la vue magnifique sur la vallée. Pierrick, qui boit un café, tient sa tasse à bout de bras, devant moi, comme s'il voulait trinquer avec la nature. Je ne peux m'empêcher de lui susurrer à l'oreille\u00a0: \u00ab\u00a0s'il te plaît, pousse ton kawa, y gène\u00a0\u00bb."
    ]
  },
  batur: {
    titre: "Le Mont et le Lac Batur — L'aube sur le volcan",
    date: "Bali, 29 avril 2016",
    paragraphes: [
      "29 avril 2016.",
      "Parti de Denpasar en scooter en fin de matinée, j'ai très vite rencontré une pluie battante qui m'a accompagné quasiment jusqu'à Penelokan, distillant un doute profond quant au choix de cette virée en ce tout début de saison sèche.",
      "Plusieurs fois tenté par un retour au sec, aspergé copieusement à chaque croisement de camions, j'ai poursuivi ma route, motivé par une trouée plus avenante dans le ciel, pile poil vers ce qu'il me semblait être mon point de chute.",
      "Petit hôtel sympa, belle vue sur le mont Batur quelque peu perturbée par une brume épaisse qui fait place à la pluie. Je suis apparemment le seul client de l'hôtel situé à 500\u00a0m en contrebas du village qui finit un marathon d'une semaine de cérémonies. Pas de temps à perdre, déjà 16\u00a0h, j'ai prévu d'aller à Kedisan, puis Buahan, sur le bord du lac, faire quelques photos, si le temps se découvre un peu avant que le soleil, lui, ne se couche.",
      "Mon arrivée près du lac coïncide avec un dernier effort du soleil à percer les nuages, encouragé certainement par l'arc-en-ciel qui lui fait la nique sur le bord du lac.",
      "J'ai un peu de mal à passer en mode photo, envahi par un mélange de fatigue, de bonheur, de récompense après une éprouvante journée. J'aurais aimé pouvoir pousser jusqu'à Trunyan, autre petit village au bout du lac, mais en quelques minutes les nuages se referment sur le soleil et la pluie se remet à tomber, comme si le temps m'avait laissé la chance d'assister à un beau moment, mais bon, ça suffit pour aujourd'hui\u00a0!",
      "OK, je rentre à l'hôtel, je dois me lever tôt demain pour surprendre le lever du soleil sur le mont Batur et ses potes, Abang et Agung, qui se planquent derrière lui. Agung, même s'il est au fond, s'en fout, vu sa taille il sait qu'il sera quand même sur la photo\u00a0!",
      "Réveil à 4h45, l'hôtel n'est pas encore ouvert, je déjeunerai sur la route. Il fait nuit noire, la route est en mauvais état, la température me semble ne pas dépasser les 17°C. Je n'ai pas dormi beaucoup et je n'aime pas partir le ventre creux. Penelokan non plus n'a pas beaucoup dormi me semble-t-il. Les gens rentrent chez eux, en tenue de cérémonie, le sarong un peu désajusté et le \u00ab\u00a0topi\u00a0\u00bb de travers, les visages impassibles se fendent de quelques baillements. Les boutiques qui bordent la route sont ouvertes, je pense qu'elles n'ont pas fermé elles non plus.",
      "Un café et quelques gâteaux plus tard, je reprends la route vers Penulisan, à la recherche d'un point de vue indiqué sur le Lonely Planet.",
      "Après 20\u00a0mn de route, je ne trouve pas ce spot photo indiqué sur le guide. Je reviens sur mes pas et m'engage sur un petit chemin près du Pura Puncak Penulisan. Une descente en lacets puis, d'un seul coup, masqué en partie par la végétation, le trio est là, majestueux.",
      "Le soleil a commencé son affaire\u00a0: dégager les ombres au sommet, faire ressortir les petits nuages blancs disséminés sur les flancs encore dans l'obscurité, et mettre en valeur cette superposition de plans sur un ciel qui joue avec sa palette de couleurs favorite, du jaune à l'indigo.",
      "Mais le soleil se lève vite, tout change très rapidement, j'ai envie de surprendre le Batur sous d'autres angles de vue, pousser encore un peu sur ce chemin défoncé emprunté maintenant par les écoliers à scooter, généralement 3 ou 4 par engins\u00a0; ils en connaissent le moindre caillou et remontent vers le village la poignée dans le coin d'une main, de grands gestes de bienvenue et de fierté avec l'autre.",
      "Le Batur se répand sur la plaine, comme une pieuvre géante, vers les jardins installés à ses pieds.",
      "Je poursuis ma route vers l'ouest, devinant un village en contrebas encore ouaté de brouillard. Une maison a pris possession de la vue magnifique sur ce bord de falaise. Je m'en approche discrètement cherchant un point de vue plus spectaculaire encore. Du reggae s'échappe des murs, un homme m'aperçoit et me fait signe de le rejoindre. Un bonnet sur la tête, il m'offre à voir de la main et dans un sourire discret son plus beau panoramique quotidien.",
      "Quelques mots échangés, je repars troublé par cette rencontre éphémère, dans ce bout du monde où je ne me sens ni à Bali ni ailleurs, simplement spectateur du bonheur."
    ]
  }
};
