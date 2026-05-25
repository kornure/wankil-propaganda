const locations = [

{
    title: "Fanny Fiori - Martigues",
    coords: [43.4050, 5.0470],
    image: "images/fanny-martigues.jpg",
    description: `
        Fanny Fiori
        Lycée Paul Langevin, Martigues (13), France
    `
},

{
    title: "Theo - Shinjuku (1)",
    coords: [35.6938, 139.7034],
    image: "images/theo-tokyo-1.jpeg",
    description: `
        Theo
        Shinjuku, Tokyo, Japon
    `
},

{
    title: "Theo - Shinjuku (2)",
    coords: [35.6955, 139.7052],
    image: "images/theo-tokyo-2.jpeg",
    description: `
        Theo
        Shinjuku, Tokyo, Japon
    `
},

{
    title: "Theo - Kyoto",
    coords: [35.0116, 135.7681],
    image: "images/theo-kyoto.jpeg",
    description: `
        Theo
        Kyoto, Japon
        Samedi 9 Mai
    `
},

{
    title: "Pablo - Cherbourg",
    coords: [49.6337, -1.6220],
    image: "images/pablo-cherbourg.jpeg",
    description: `
        Pablo
        Théâtre du Trident, Cherbourg, Normandie, France
        Mercredi 6 Mai, 18:37
    `
},

{
    title: "Louise - Rennes",
    coords: [48.1173, -1.6778],
    image: "images/louise-rennes.jpg",
    description: `
        Louise
        Rennes, France
        Mardi 5 Mai - 12:23
    `
},

{
    title: "Saradps - Mont-de-Marsan",
    coords: [43.8915, -0.5003],
    image: "images/saradps-mont-de-marsan.jpg",
    description: `
        Saradps
        Mont-de-Marsan, Landes, France
        Lundi 4 Mai - 21:44
    `
},

{
    title: "Nolann - Cholet",
    coords: [47.0580, -0.8790],
    image: "images/nolann-cholet.jpg",
    description: `
        Nolann
        Cholet, Maine-et-Loire, France
    `
},

{
    title: "Trystan - Île d'Oléron",
    coords: [46.0380, -1.3840],
    image: "images/trystan-oleron.jpg",
    description: `
        Trystan
        Port de Saint-Denis d’Oléron, Île d’Oléron, France
        Mardi 28 avril - 2:44
    `
},

{
    title: "Misato - Bollène",
    coords: [44.2830, 4.7480],
    image: "images/misato-bollene.jpg",
    description: `
        Misato
        Bollène (84), Vaucluse, France
        Leclerc - poteau
        Wed, Apr 22 - 5:18 PM
    `
},

{
    title: "Maya - Bilbao",
    coords: [43.2687, -2.9300],
    image: "images/maya-bilbao.jpg",
    description: `
        Maya
        Puente Colgante (Puente Euskalduna), Bilbao, Espagne
        Face au musée Guggenheim
    `
},

{
    title: "Antoine - Draguignan (1)",
    coords: [43.5333, 6.4667],
    image: "images/antoine-draguignan.jpg",
    description: `
        Antoine
        Draguignan, Var (83), Provence-Alpes-Côte d’Azur, France
        Avril 2026
        Sur un plafond
    `
},

{
    title: "Boudididoup - Québec",
    coords: [46.8139, -71.2080],
    image: "images/boudididoup-quebec.jpg",
    description: `
        Boudididoup
        Québec, province de Québec, Canada
        Avril 2026
        Sortie de toilettes
    `
},

{
    title: "Crazybloody18 - Rouen",
    coords: [49.4432, 1.0993],
    image: "images/crazybloody18-rouen.jpg",
    description: `
        Crazybloody18
        Rouen, Seine-Maritime (76), Normandie, France
        Avril 2026
        Sur un poteau
    `
},

{
    title: "Doony - Disneyland Paris",
    coords: [48.8674, 2.7830],
    image: "images/doony-disneyland-paris.jpg",
    description: `
        Doony
        Disneyland Paris, Marne-la-Vallée, Seine-et-Marne (77), Île-de-France, France
        Avril 2026
        Dans des toilettes
    `
},

{
    title: "Doony - Paris (Louvre)",
    coords: [48.8606, 2.3376],
    image: "images/doony-louvre-paris.jpg",
    description: `
        Doony
        Musée du Louvre, Paris (75), Île-de-France, France
        Avril 2026
    `
},

{
    title: "Galich - Dieppe",
    coords: [49.9220, 1.0771],
    image: "images/galich-dieppe.jpg",
    description: `
        Galich
        Dieppe, Seine-Maritime (76), Normandie, France
        Avril 2026
    `
},

{
    title: "Inconnu - Chiang Mai",
    coords: [18.7883, 98.9853],
    image: "images/inconnu-chiang-mai.jpg",
    description: `
        Inconnu
        Chiang Mai, Thaïlande
        Avril 2026
    `
},

{
    title: "Kuromy - Nevers",
    coords: [46.9892, 3.1590],
    image: "images/kuromy-nevers.jpg",
    description: `
        Kuromy
        Nevers, Nièvre (58), Bourgogne-Franche-Comté, France
        Avril 2026
    `
},

{
    title: "Lapoobel - Reims",
    coords: [49.2583, 4.0317],
    image: "images/lapoobel-reims.jpg",
    description: `
        Lapoobel
        Reims, Marne (51), Grand Est, France
        Avril 2026
    `
},

{
    title: "Louiguane - Marseille",
    coords: [43.2965, 5.3698],
    image: "images/louiguane-marseille.jpg",
    description: `
        Louiguane
        Marseille, Bouches-du-Rhône (13), Provence-Alpes-Côte d’Azur, France
        Avril 2026
    `
},

{
    title: "Mema - Caen",
    coords: [49.1829, -0.3707],
    image: "images/mema-caen.jpg",
    description: `
        Mema
        Caen, Calvados (14), Normandie, France
        Avril 2026
    `
},

{
    title: "Mema - Caurel",
    coords: [48.2794, -3.0636],
    image: "images/mema-caurel.jpg",
    description: `
        Mema
        Caurel, Côtes-d’Armor (22), Bretagne, France
        Avril 2026
    `
},

{
    title: "Mema - Deauville",
    coords: [49.3596, 0.0747],
    image: "images/mema-deauville.jpg",
    description: `
        Mema
        Deauville, Calvados (14), Normandie, France
        Avril 2026
    `
},

{
    title: "Mema - Lion-sur-Mer",
    coords: [49.3006, -0.3155],
    image: "images/mema-lion-sur-mer.jpg",
    description: `
        Mema
        Lion-sur-Mer, Calvados (14), Normandie, France
        Avril 2026
    `
},

{
    title: "Triksel - Boston",
    coords: [42.3601, -71.0589],
    image: "images/triksel-boston.jpg",
    description: `
        Triksel
        Boston, Massachusetts, États-Unis
        Avril 2026
    `
},

{
    title: "Wowy - Rennes",
    coords: [48.1173, -1.6728],
    image: "images/wowy-rennes.jpg",
    description: `
        Wowy
        Rennes, Ille-et-Vilaine (35), Bretagne, France
        Avril 2026
    `
}
];
