+++
title = "Formation au LSCE et séminaire de l'IPEV"
date = 2021-10-20
+++

{{ image_apercu(path="starting/images/formation/brest.jpg", width=1000, height=250, quality=100) }}

Avant de partir pour un an toute seule à l'autre bout du monde, je dois me former sur les manips et les instruments dont je vais avoir la charge pendant ma mission. Je suis cette formation au [LSCE](https://www.lsce.ipsl.fr/ "Laboratoire des Sciences du Climat et Environnement"), à Gif-sur-Yvette (78) avec mon responsable de programme, Marc Delmotte.

<!-- more -->

Lundi 20 septembre 2021, c'est mon premier jour au laboratoire. Comme il se situe dans l'enceinte du CEA, il faut toute une procédure pour avoir l'autorisation d'y entrer. L'administratif réglé, je reçois mon badge et la formation peut commencer. Rémi, un ancien hivernant sur le projet [ICOS-RAMCES](/science/icos-416) de la mission 71, m'accueille et assurera ma formation pour ces trois prochaines semaines. La formation, plutôt complète, couvre toutes les problématiques que je vais rencontrer pendant mon hivernage. Un tuilage d'un mois est également prévu sur place avec mon prédécesseur, Yaël.


## Les Picarros

Pour commencer, je vois le fonctionnement des Picarros, qui analysent l'air en continu. 

{{ resize_image(path="starting/images/formation/picarros.jpg", width=1000, height=450, op="fit", author="R. Nespoulet", date="2022", quality=100, title="Les Picarros à Amsterdam") }}


Je passerai la majorité de mon temps sur la maintenance et le suivi de ces appareils. Il y en a trois sur la station, deux qui mesurent les gaz à effet de serre : **CO2**, **CH4**, **CO**, **H2O** et un qui mesure plus spécifiquement le **N2O**. Les Picarros se basent sur une technique de mesure optique, par absorption infrarouge, un peu comme un *LiCor*. Un laser émet un rayonnement d'une longueur d'onde dans le spectre d'absorption du gaz que l'on veut mesurer. Contrairement au *LiCor* qui mesure une intensité de signal, le Picarro mesure la décroissance du signal au cours d'un long chemin optique. Au bout du compte, le Picarro calcule une concentration du gaz en **ppm** (parties par millions - 0,0404% = 404ppm) grâce à la loi de Beer-Lambert. 

Les Picarros sont constitués de deux parties : une partie "analyse" et une partie "hardware". La partie "analyse" se compose de deux cellules, une chambre qui contient l'air à analyser, et une cellule de gestion des lasers. La partie "hardware" est similaire à un PC, ce sont deux cartes mères qui permettent de contrôler les lasers et de calculer les différentes concentrations en gaz. 

Un quatrième Picarro est installé sur base, il permet de mesurer les isotopes de la vapeur d'eau contenue dans l'air. Ce Picarro isotopique nécessite une calibration une fois par mois avec des standards liquides qui sont vaporisés grâce à un vaporisateur.

## Les lignes de prélèvement de l'air

À Pointe B, l'air analysé par les Picarros est prélevé à deux endroits : en haut du mât et sur le toit de la cabane. 

{{ resize_image(path="starting/images/formation/mat_pointe_B.jpg", width=1000, height=450, op="fit" author="R. Nespoulet", date="2022", quality=100, title="Le mât de Pointe Bénédicte et les cloches de prélèvement sur le toit") }}

Une pompe dite "*KNF*" gère le flux d'air dans toute la ligne. L'air passe dans un premier temps au travers d'un filtre céramique M&C pour protéger les instruments des particules et autres poussières. Une vanne multi-position, que l'on appelle "*Valco*", permet de gérer séquentiellement les arrivées d'air. Elle permet de passer automatiquement de la ligne de prélèvement de l'air extérieur, à l'air contenu dans les différents cylindres d'air comprimé servant aux calibrations. L'air contenu dans ces cylindres de calibration est géré par un jeu de manomètres dont il faut relever la pression régulièrement.
Ensuite, l'air prélevé dans l'atmosphère doit être séché avant d'être analysé par le Picarro. Il existe deux méthodes pour débarrasser l'air de la vapeur d'eau : **le piège à eau** et le **Nafion**. Le piège à eau est un bain d'éthanol à environ -40°C et l'eau contenue dans l'air est gelée dans un "piège" en verre qui est changé et séché regulièrement. Le Nafion ne nécessite aucun entretien : c'est un serpentin dans lequel l'air circule en double flux inversé et l'eau est piégée dans une membrane en polymère spécial. Puis, l'air passe au travers du Picarro où il est analysé et mesuré. Une pompe située en aval du Picarro, que l'on appelle "pompe instrument" permet de gérer les flux d'air au sein de la cellule de mesure du Picarro.

Ces lignes nécessitent d'être "*flushées*" (= purgées) de temps en temps et des tests de fuite doivent également être réalisés régulièrement, pour s'assurer qu'il n'y ait pas de contamination de l'air tout au long de la ligne de prélèvement.

## Changement de cylindre

Un ensemble de cylindres d'air comprimé servent à la calibration des Picarros, appelés aussi *target*. Ces calibrations permettent de vérifier la bonne qualité des données mesurées par les Picarros, et de faire le suivi de qualité.

{{ resize_image(path="starting/images/formation/cylindres.jpg", width=1000, height=450, op="fit", author="R. Lambert/M. Delmotte", date="2019", quality=100, title="Les cylindres d'air comprimé") }}

Ces cylindres contiennent un air standardisé avec un mélange de gaz à la concentration connue. Ils sont à changer plus ou moins régulièrement. Un cylindre neuf peut peser jusqu'à 80kg, et est à manipuler avec une vigilance accrue. 

## <span id="em27">EM27 et station météo Raspberry Pi</span>

Nouveauté de cette année : je vais devoir installer un nouvel appareil sur Amsterdam, l'**EM27**. C'est un instrument qui vise le soleil et qui analyse le spectre dans toute la colonne d'air. Cette installation est doublement importante : la plupart des mesures de ce type sont réalisées grâce à des instruments embarqués sur satellite. Une mesure au sol permet de valider les mesures satellitaires. Mais aussi, il n'y a que très peu de mesures en hémisphère Sud. L'intérêt d'un site comme l'île d'Amsterdam est sa position d'ilot unique entouré d'océan. L'albédo y est différent que sur un continent et cela a un impact sur les mesures. L'EM27 est installé dans une caisse à roulettes car il est à sortir dès que le soleil pointe le bout de son nez. Il est associé avec une mini station météo supervisée par une Raspberry Pi, qui donne l'heure absolue grâce à la position GPS, la vitesse et la direction du vent, la pression et la température de l'air atmosphérique.

## Radon particulaire

Le dernier appareil dont j'aurais la charge est celui qui permet la mesure du radon particulaire. Le principe est simple : on aspire de l'air à travers un filtre en papier, le radon particulaire s'y dépose et un photomultiplicateur mesure la décroissance du signal radioactif. En général, le signal est plutôt faible sur l'île d'Amsterdam, mais il peut arriver des évènements ponctuels que l'on appelle **orages radoniques** pendant lesquels on observe une forte augmentation du radon dans l'atmosphère. Ces orages radoniques proviennent des masses d'air arrivant d'Afrique du Sud qui transportent beaucoup de radon issu des activités minières.

## <span id="prel_manuels">Prélèvements manuels d'air</span>

{{ resize_image(path="starting/images/formation/prelevement_manuel.jpg", width=1000, height=450, op="fit", author="R. Nespoulet", date="2022", quality=100, title="Le dispositif de prélèvement manuel") }}

Pour compléter la mesure en temps réel, des prélèvements manuels sont prévus. Il s'agit d'une bouteille en verre que l'on installe dans une malette conçue spécialement et associée à une pompe. On active ensuite la pompe et après quelques instants d'attente pour purger l'ensemble de la ligne et du système, on met les bouteilles sous pression et on les ferme. Puis, elles sont stockées à l'abri dans des malles en attendant d'être renvoyées en métropole afin d'être analysées. 

## Séminaire à Brest

Traditionnellement, la formation de tous les [VSC](/lexique/#vsc "Volontaire en Service Civique") IPEV se termine par une semaine de séminaire au siège de l'Institut Polaire à Plouzané. Cette année, à cause du Covid, nous n'avons le droit qu'à 5 demi-journées. C'est court, mais intense et c'est aussi l'occasion de rencontrer l'équipe qui travaille en coulisses à l'IPEV, les gars de la [Log-Ipev](/lexique/#logipev "Plateforme logistique pour les opérations Subantarctiques de l'IPEV") qui ont réceptionné nos précieuses malles mais aussi et surtout tous les autres hivernants des différents districts ! Kerguelen, Crozet et Amsterdam, on se retrouve tous lors de ce séminaire (dans le respect des gestes barrière, bien entendu).

{{ resize_image(path="starting/images/formation/groupe_ipev.jpg", width=1000, height=450, op="fit", author="", date="2021", quality=100, title="La traditionnelle photo de groupe lors du séminaire à l'IPEV") }}

Et pour finir, voici la team IPEV qui hivernera avec moi sur Amsterdam ! Nous sommes beaux avec nos supers polaires Institut Polaire ! De gauche à droite : 
 - **Luc**, informaticien 
 - **Maxime**, [gener](/lexique/#gener "Logisticien de la base")/électronicien 
 - **Marie**, l'ornitho (qui s'occupera des otaries aussi) 
 - **moi**, projet ICOS-RAMCES 
 - **Juliette**, projet Ecopath 
 - **Solène**, projet GMostral 

{{ resize_image(path="starting/images/formation/team_ams.jpg", width=1000, height=450, op="fit", author="", date="2021", quality=100, title="Et voici la tête des collègues qui hiverneront avec moi sur Amsterdam !") }}

