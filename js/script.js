/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
    'Help': {
        title: 'Help',
        subtitle: 'Some useful Links',
        body: `
            <p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
            <p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
        `
    },
    'DeathEnding': {
        title: 'Death',
        subtitle: 'You got the death ending.',
        body: `
            <p>Congratulations, you somehow died.  Baka.</p>
        `
    },
    'BadPersonEnding': {
        title: 'You Are A Bad Person',
        subtitle: 'You got the Bad Person ending.',
        body: `
            <p>Congratulations, you are a bad person.  Day ToDay.</p>
        `
    },
    'SkroobMaleEnding': {
        title: 'You Are A Skroob Male™',
        subtitle: 'You got the Skroob Male™ ending.',
        body: `
            <p>Congratulations, you are a Skroob Male™.  Skroob Yourself.</p>
        `
    },
    'FriendshipEnding': {
        title: 'Friendship',
        subtitle: 'You got the friendship ending.',
        body: `
            <p>You thought you could just be friends.  Little do you know, the tubas dont do "friendships."</p>
        `
    },
    'LoveEnding': {
        title: 'Love',
        subtitle: 'You got the Love ending.',
        body: `
            <p>You have fallen in love with the section of your dreams.  Maybe, if things were a little different you could have found true love.</p>
        `
    },
    'TrueEnding': {
        title: 'True Love',
        subtitle: 'You got the True Love ending.',
        body: `
            <p>And so our story comes to a close.  You have found your one and only true love: The Wisconsin Rhinos.</p>
        `
    },
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
    'Welcome': {
        title: 'Welcome',
        body: 'This is the Monogatari VN Engine',
        icon: ''
    }
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});

// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {
    'keg': 'kegincloset.mp3'
});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {
    striebe: "TubaStriebe.mp4"
});

// Define the images used in the game.
monogatari.assets ('images', {
    'spaghetti' : 'Spaghet.jpg',
    'clock': 'RhinoClock.jpg',
    'tubas': 'TubaSection.png',
    'football': 'Football.webp',
    'ham': "hm.jpg",
    'keg': "keg.jpg",
    "blush": "TubaSectionBlush.png",
    "kiss": "TubaSectionKiss.png",
});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
    'field': 'BandField.jpg',
    'kitchen': 'Kitchen.jpg',
    'living': 'LivingRoom.jpg',
    'picnic': 'picnicPoint.jpg',
    'heaven': "heaven.jpg"
});

// Define the Characters
monogatari.characters ({
    'dewalt': {
        name: 'Dewalt',
        color: '#c41e3a',
        directory: 'dewalt',
        sprites: {
            normal: 'dewalt-reg.png',
        }
    },
    'butts' : {
        name: 'Saul C Butts',
        color: '#0373fc',
        directory: 'butts',
        sprites: {
            feet: 'feet.png',
            normal: 'normal.png',
            angry: 'angery.png',
            cute: "buttsCute.png"
        }
    },
    'rex' : {
        name: 'Rex Waldorf',
        color : "#5afc03",
        directory : "rex",
        sprites: {
            fent: 'fent.png',
            sad: 'sad.jpg'
        }
    },
    'krug' : {
        name: 'Cowboy Krug',
        color : '#7b03fc',
        directory: 'krug',
        sprites: {
            close: 'close.png',
            cook: 'KrugSpagety.png'
        }
    },
    'dz' : {
        name: 'DeeZee',
        color: '#fca103',
        directory: 'dz'
    },
    'duke' : {
        name: 'Haduken',
        color: '##fc0303',
        directory: 'duke',
        sprites: {
            death: 'pgDeath.png',
            normal: 'normal.png'
        }
    },
    'kys' : {
        name: 'Kysclade',
        color: '#1703fc',
        directory: 'kys'
    },
    'izz' : {
        name: "Izz",
        color: '#ebe834',
        directory: 'izz',
        sprites: {
            feet: 'IzzFeet.png'
        }
    },
    'bc' : {
        name: "BaChuzz",
        color: '#eb6b34',
        directory: 'bc',
        sprites: {
            point: 'BCPoint.png'
        }
    },
    'td' : {
        name: "TailsDerp",
        color: '#34d8eb',
        directory: 'td',
        sprites: {
            pose: 'Riley.png'
        }
    },
    'nick' : {
        name: "Leonardo DerpCaprio",
        color: '#34eb58',
        directory: 'nick',
        sprites: {
            salute: 'doitfornick.jpg'
        }
    },
    'bp' : {
        name: "Big Perkins",
        color: '#a89732',
        directory: 'bp',
        sprites: {
            stretch: 'Stretch.png'
        }
    },
    'brewski' : {
        name: "Derpleganger",
        color: '#32a852',
        directory: 'brewski',
        sprites: {
            cut: 'PreCut.png',
        }
    },
    'herb' : {
        name: "Dr. Herb Payung",
        color: '#ebb734',
        directory: 'herb',
        sprites: {
            smile: 'herb.png',
        }
    },
    'papa' : {
        name: "Papa",
        color: '#f55142',
        directory: 'papa',
        sprites: {
            smile: 'CPSmile.png',
            cute: 'CPCute.png',
        }
    },
    'skroob' : {
        name: "Skroob Male™",
        color: '#ebb734',
        directory: 'skroob',
        sprites: {
            male: 'scroobmale.jpg',
        }
    },
    'gd' : {
        name: "GiggleDerp",
        color: '#427bf5',
        directory: 'gd',
        sprites: {
            screenager: 'screenager.jpg',
        }
    },
    'pilar' : {
        name: "Pilaris",
        color: '#42f5ad',
        directory: 'pilar',
        sprites: {
            mog: 'mog.png',
            feet: 'PilarFeet.png'
        }
    },
    'bebop' : {
        name: "Bebop",
        color: '#a83285',
        directory: 'bebop',
        sprites: {
            angel: 'angel.png',
        }
    },
    'rhinos' : {
        name: "Rhinos",
        color: '#C41E3A',
        directory: 'rhino',
    }
});