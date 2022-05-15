import Player from './components/player'

export const teams = [
    {
        id: '1',
        name: '85ers',
        score: '0',
        players: [
            new Player(1, 'Dawid Szwed', 9),
            new Player(4, 'Radek Piotrowski', 20),
            // new Player(5, 'Zbyszek Baguda', 17),
            // new Player(6, 'Tomasz Zając', 15),
            new Player(7, 'Marek Drobisz', 83),
        ]
    },
    {
        id: '2',
        name: 'Jorgusie',
        score: '0',
        players: [
            // new Player(2, 'Maciej Szczepańczyk', 6),
            new Player(31, 'Kamil Jabłoński', 9),
            new Player(32, 'Bartek Jabłoński', 69),
            new Player(33, 'Marek Olearczyk', 96),
            new Player(33, 'Olek Olearczyk', 0),
        ]
    },
    {
        id: '3',
        name: 'Masters',
        score: '0',
        players: [
            new Player(10, 'Bogusz Siemek', 1),
            new Player(25, 'Wojtek Cetnarski', 14),
            new Player(26, 'Tomasz Karcz', 4),
            new Player(27, 'Korneliusz Siemek', 2),
            // new Player(34, 'Szymon Bratus', 0),
        ]
    },
    {
        id: '4',
        name: 'Banda Łysego',
        score: '0',
        players: [
            new Player(11, 'Maciek Porwisz', 28),
            new Player(28, 'Wiktor Papla', 8),
            new Player(29, 'Bartosz Wojtas', 13),
            new Player(30, 'Dawid Jagoda', 0),
        ]
    },
    {
        id: '5',
        name: 'Kentuchy Bucks',
        score: '0',
        players: [
            new Player(12, 'Łukasz Cinal', 23),
            new Player(22, 'Krzysztof Szumowski', 0),
            new Player(23, 'Przemysław Gacek', 5),
            new Player(24, 'Marcin Jarosz', 21),
        ]
    },
    {
        id: '6',
        name: 'Aurochs',
        score: '0',
        players: [
            new Player(13, 'Bartek Porwisz', 0),
            new Player(18, 'Tomasz Figura', 0),
            new Player(19, 'Piotr Stolarczyk', 0),
            new Player(20, 'Krzysiek Kopacz', 24),
            // new Player(21, 'Szymon Moskal', 24),
        ]
    },
    {
        id: '7',
        name: 'The Brickers',
        score: '0',
        players: [
            // new Player(14, 'Szymon Klaja', 0),
            new Player(15, 'Szymon Kolęda', 0),
            new Player(16, 'Bartek Klaja', 0),
            new Player(17, 'Franek Stachura', 91),
        ]
    },
    {
        id: '8',
        name: 'Brick and roll',
        score: '0',
        players: [
            new Player(3, 'Paweł Ciuba', 0),
            new Player(8, 'Michał Kikla', 0),
            new Player(9, 'Oliwier Śleziak', 0),
        ]
    }
]