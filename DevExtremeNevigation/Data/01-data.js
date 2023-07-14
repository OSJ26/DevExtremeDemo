const menuData = [{
    id: '1',
    name: 'Video Players',
    items: [{
        id: '1_1',
        name: 'HD Video Player',
        icon: '../img/video.png',
        price: 220,
    }, {
        id: '1_2',
        name: 'SuperHD Video Player',
        icon: '../img/video.png',
        price: 270,
    }],
}, {
    id: '2',
    name: 'Televisions',
    items: [{
        id: '2_1',
        name: 'SuperLCD 42',
        icon: '../img/television.png',
        price: 1200,
    }, {
        id: '2_2',
        name: 'SuperLED 42',
        icon: '../img/television.png',

        price: 1450,
    }, {
        id: '2_3',
        name: 'SuperLED 50',
        icon: '../img/television.png',

        price: 1600,
    }, {
        id: '2_4',
        name: 'SuperLCD 55 (Not available)',
        icon: '../img/television.png',

        price: 1350,
        disabled: true,
    }, {
        id: '2_5',
        name: 'SuperLCD 70',
        icon: '../img/television.png',

        price: 4000,
    }],
}, {
    id: '3',
    name: 'Monitors',
    items: [{
        id: '3_1',
        name: '19"',
        icon: '../img/19.png',
        items: [{
            id: '3_1_1',
            name: 'DesktopLCD 19',
            icon: '../img/monitor.png',
            price: 160,
        }],
    }, {
        id: '3_2',
        name: '21"',
        icon: '../img/21.png',
        items: [{
            id: '3_2_1',
            name: 'DesktopLCD 21',
            icon: '../img/monitor.png',
            price: 170,
        }, {
            id: '3_2_2',
            icon: '../img/monitor.png',
            name: 'DesktopLED 21',
            price: 175,
            selectable: false
        }],
    }],
}, {
    id: '4',
    name: 'Projectors',
    items: [{
        id: '4_1',
        icon: '../img/projector.png',
        name: 'Projector Plus',
        price: 550,
    }, {
        id: '4_2',
        icon: '../img/projector.png',
        name: 'Projector PlusHD',
        price: 750,
    }],
}];
