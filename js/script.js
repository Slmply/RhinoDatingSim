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
    }
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

});

// Define the images used in the game.
monogatari.assets ('images', {
    'spaghetti' : 'Spaghet.jpg'
});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
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
        }
    },
    'rex' : {
        name: 'Rex Waldorf',
        color : "#5afc03",
        directory : "rex",
        sprites: {
            fent: 'fent.png',
        }
    },
    'krug' : {
        name: 'Cowboy Krug',
        color : '#7b03fc',
        directory: 'krug',
        sprites: {
            close: 'close.png',
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
        directory: 'duke'
    },
    'kys' : {
        name: 'Kysclade',
        color: '#1703fc',
        directory: 'kys'
    }
});

monogatari.script ({
    // The game starts here.
    'Start': [
        'show scene #000000 with fadeIn',
        'play music keg',
        'You wake up to to the scent of stale beer and old food',
        "Your head hurts, and is still swirling from last night",
        "You dont know where you are, or what happened to you",
        "A stray warm Hamms can rolls across the floor and hit your toe",
        {
            'Choice': {
                'Scream': {
                    'Text': 'Scream at the top of your lungs',
                    'Do': 'jump 000_scream'
                },
                'Lick': {
                    'Text': 'Lick the floor',
                    'Do': 'jump 000_lick'
                },
                'Open': {
                    'Text': 'Open your eyes',
                    'Do': 'jump 000_open'
                }
            }
        }
    ],

    '000_scream': [
        'You open your throat and emit an ear peircing screech',
        'Somebody sticks their finger down your throat and you throw up',
        'You feel slightly better',
        'jump 000_open'
    ],

    '000_lick': [
        'You press your tongue agaisnt the couch',
        'Mmm... tastes like sweat and beer',
        'You gain like -20 HP and lowherbenuinely die',
		'The End',
        'end'
    ],

    '000_open': [
        'show scene #cfcfcf with fadeIn',
        'show character dewalt normal',
        'A handsome man is leaning over you, smiling cutely',
        'Your headache immediately clears and your able to fully grasp the man standing over you',
        'He is perfect, with spectacularly toned muscles and pearly white teeth',
        'He smells faintly like axe body spray and burnt vape coil',
        'You feel butterflies begin to form in your stomach',
        'dewalt Hey cutie!',
        {
            'Choice': {
                'Dialog': 'dewalt did you like the couch?',
                'Yes': {
                    'Text': 'Yes',
                    'Do': 'jump 001_yes'
                },
                'No': {
                    'Text': 'No',
                    'Do': 'jump 001_no'
                },
                'Ur Cute': {
                    'Text': 'Ur Cute',
                    'Do': 'jump 001_cute'
                },
                'Bork': {
                    'Text': 'Bark at him violently',
                    'Do': 'jump 001_bark'
                }
            }
        }
    ],

    '001_yes': [
        'dewalt Yayyy im glad, the couch is so comfy uwu!',
        'jump 001_cont'
    ],

    '001_no' : [
        'dewalt Im sorry to hear that, hopefully you feel better soon.',
        'dewalt Ill beat the couch up later for hurting your delicate little spine',
        'jump 001_cont'
    ],

    '001_cute' : [
        'dewalt Aww thank u silly :3',
        "dewalt It's been so long since somebody told me that",
        'dewalt Mostly people just tell me to put a shirt on in the kitchen',
        'jump 001_cont'
    ],

    '001_bark': [
        'You look him dead in his gorgeous eyes and go WOOF WOOF ARF ARF GRRRRR BARK BARK',
        'dewalt Oh wow a feisty one!  I love that energy bestie :3 rawr xd',
        'jump 001_cont'
    ],

    '001_cont' : [
        'dewalt Anyways, i heard krug was making breakfast.',
        'Your nostril fills with the scent of burnt spaghetti and moldy alfredo sauce',
        'dewalt Come on, lets get you up.',
        'show scene #f7f6f6 with fadeIn',
        'show character krug close',
        'krug Hey sweetie, hope you slept well!',
        'Cowboy Krug is standing over a skillet wearing an apron that just says CHEF SLUT on it',
        'He fips the spaghetti in the pan, and you catch a whif of the wonderful food hes currently cooking',
        'You see a rat poke his head out of the cabinet to get a whiff',
        'krug Ill be finished in just a minute!  Why dont you go sit down over on the couch?',
        {
            'Choice': {
                'Wrap' : {
                    'Text': 'Wrap Your Arm Around His Waist',
                    'Do': 'jump 002_wrap'
                },
                'Sit Down': {
                    'Text': 'Sit Down',
                    'Do': 'jump 002_cont'
                },
                'Hat': {
                    'Text': 'Slap his cowboy hat off',
                    'Do': 'jump 002_hat'
                }
            }
        }
    ],

    '002_wrap': [
        'You walk up and wrap your arms around his waist, gripping tightly',
        'He pauses, shocked by your sudden advance, but eventually relaxes and leans into your hug',
        'You can feel his manly kitchen heat radiating into your skull',
        'krug Thank you, I needed that.',
        'krug Now sit down and let daddy cook',
        'jump 002_cont'
    ],

    '002_hat': [
        'You swat his cowboy hat directly off his head like a feral cat swatting a cup off a counter',
        'He doesnt have a cowboy hat on, schitzo.',
        'jump 002_cont'
    ],

    '002_cont' : [
        'You walk back over to the couch and take a seat',
        'show scene #cfcfcf with fadeIn',
        'show character rex fent',
        'Next to you is a cute looking man seemingly folded over himself on the couch',
        'He is folded like a tweaker on a tuesday afternoon',
        'You cant help but notice how he breathes, slowly and seductively',
        'rex ...honk... shwump... mimimimi...',
        'butts Dont mind him, he had a rough night too',
        'hide character rex',
        'show character butts feet',
        'butts He does this all the time, dont worry about him',
        'He extends his feet across the table, and you get a slight whif of sweat.  You can see tiny bits of turf still stuck on the undersides of his feet from the previous rehersal.',
        'The scent makes you feel warm and at home.',
        'butts Hopefully he will be ready for rehersal later this afternoon.  Its almost gameday and we still have a lot of work to do!',
        {
            'Choice': {
                'Dialog': 'butts How are you feeling about the show?',
                'Exited' : {
                    'Text': 'Exited',
                    'Do': 'jump 003_ex'
                },
                'Nervous': {
                    'Text': 'Nervous',
                    'Do': 'jump 003_nerv'
                },
                'Stare': {
                    'Text': 'Stare at his feet',
                    'Do': 'jump 003_feet'
                },
                'Turf': {
                    'Text': 'Pick off a crumb of turf and eat it',
                    'Do': 'jump 003_turf'
                }
            }
        }
    ],

    '003_nerv': [
        'butts Oh, theres no need to be nervous!  Im sure youll do great!',
        'butts Just like lock in so we can mog',
        'jump 003_cont'
    ],

    '003_ex' : [
        'butts Thats great!  Im sure we will be amazing out there.',
        'butts We are so locked that we will mog',
        'jump 003_cont'
    ],

    '003_feet': [
        'You stare at his feet as they wiggle on the table.  The morning light shines and reflects off his big toe, making it seem larger than life.',
        'You begin to drool...',
        'butts Are you okay?  You are drooling!',
        'You nod and turn your attention back to his face',
        'jump 003_cont'
    ],

    '003_turf': [
        'Without saying a single word you lean forward, delicately pluck a singular black rubber crumb off his arch, and pop it into your mouth like a caviar',
        'It tastes like heaven',
        'butts ...Did you just eat my feet turf???',
        'You stare at while chewing aggressively',
        'butts That...was hot',
        'jump 003_cont'
    ],

    '003_cont' : [
        'dz YOOOOOO DOES ANYONE HAVE A CHARGER',
        'dz crashes into a lamp somewhere in the hallway and then goes completely silent',
        'You begin to smell something delicious coming from the kitchen nearby.',
        'krug Breakfast is Ready!',
        'hide character butts',
        'He walks into the room with a steaming plate and sets it infront of you.',
        'show image spaghetti',
        'The spaghetti looks like charcoal twigs excavated from a radioactive Pompeii ruin.',
        'Just off the arouma alone you begin to feel alot better from the long night.',
        'krug I hope you enjoy!',
        {
            'Choice': {
                'Dialog': 'How do you consume the breakfast masterpeice?',
                'Fork': {
                    'Text': 'Twirl with fork',
                    'Do': 'jump 004_eat'
                },
                'Face': {
                    'Text': 'Faceplant directly into the bowl',
                    'Do': 'jump 004_face'
                }
            }
        }
    ],

    '004_face': [
        'You do not hesitate.  You slam your face into the plate like <insert niche reference>.',
        'Your nose crushes three brittle pasta rods on impact.',
        'krug Look whos hungry owo xd so silly <3',
        'jump 004_dust'
    ],

    '004_eat': [
        'You grab your fork and twirl some spaghetti on it.',
        'jump 004_dust'
    ],

    '004_dust': [
        'It crumbles and turns into dust',
        'You scoop up the dust and put it into your mouth.',
        'narrator The dark 🖤 charred edges of the rigatoni 🥖 shatter 💥 instantly between your teeth 🦷, fracturing into a brittle, smoky 💨 brittle dust 🌫️ that yields to an intensely savory, deeply caramelized core 🤤. It isnt just burnt 🔥; its transformed ✨. That blistered, blackened crust 🌑 carries the deep, roasted bitterness of toasted wheat 🌾, bitter cocoa 🍫, and campfire char 🪵, instantly balanced by the slick, velvety richness of reduced tomato gravy 🍅. The sauce has cooked down into an almost jammy paste 🍯, sticky and concentrated 🍷, hitting your tongue 👅 with an electric surge ⚡ of bright acidity 🍋, mellow garlic sweetness 🧄, and fragrant, sun-dried basil 🌿. As the brittle crumbles give way 🔨, they soak up the warm pools of molten, peppery olive oil 🫒 and gooey, browned parmesan crisps 🧀 that cling like golden lace 🏅 to the ridges. Every bite 👄 is a violent, glorious contrast 🎭: the jagged, crackling snap ⚡ of carbonized shell giving way to a dense, chewy starch center 🍝, all drowned in that intoxicatingly sweet, tangy marinara 🥫. The umami 🍄 blooms across your palate 🌈, surging with the caramelized sugars of slow-roasted San Marzanos 🍅 and flaky sea salt 🧂. It finishes with a linger of smoky woodsmoke 💨, fiery red pepper flakes 🌶️, and rich, roasted garlic butter 🧈, leaving behind a decadent, savory warmth ❤️ that makes you immediately scrape the bottom of the iron skillet 🍳 for the very last charred, delicious crumb 🤤🍴.',
        'You look up at krug.',
        'show character krug close',
        'He is like a nurturing mother.  You feel full and whole, like you are safe and welcome in this haus.',
        'Krug smiles softly, and looks deep into your eyes.',
        'krug Im glad you like it 🤤',
		'You hear a loud yell from the bathroom',
        'kys Yo were out of toilet paper again',
        'krug Just use the cat hes over ther somewhere',
        'A single tear rolls down your cheek as you chew on pure carbon.',
        'end'
    ]
});