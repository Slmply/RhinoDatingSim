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
    'spaghetti' : 'Spaghet.jpg',
    'clock': 'RhinoClock.jpg',
    'tubas': 'TubaSection.png',
    'football': 'Football.webp'
});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
    'field': 'BandField.jpg',
    'kitchen': 'Kitchen.jpg',
    'living': 'LivingRoom.jpg'
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
            normal: 'normal.png'
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
    'papa' : {
        name: "Papa",
        color: '#4934eb',
        directory: 'papa'
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
            stretch: 'Stretch.jpg'
        }
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
                    'Text': 'Lick the couch',
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
        'show message DeathEnding',
        'end'
    ],

    '000_open': [
        'show scene living with fadeIn',
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
        'show scene kitchen with fadeIn',
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
        'show scene living with fadeIn',
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
                    'Text': 'Eat like caveman',
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
        'hide image spaghetti',
        'You look up at krug.',
        'show character krug close',
        'He is like a nurturing mother.  You feel full and whole, like you are safe and welcome in this haus.',
        'Krug smiles softly, and looks deep into your eyes.',
        'krug Im glad you like it 🤤',
		'You hear a loud yell from the bathroom',
        'kys Yo were out of toilet paper again',
        'krug Just use the cat hes over ther somewhere',
        'A single tear rolls down your cheek as you chew on delicious pasta.',
        'You continue to devour the plate until its been fully licked clean',
        'krug Im glad you liked it sweetie',
        'He blushes and swiftly walks away to the kitchen',
        'hide character krug',
        'Oh would you look at the time!',
        'show image clock',
        'You look at the beutiful clock sitting on the dresser and realize its almost time for rehersal!',
        'Oh no!  Its friday and you dont know if your ready for the show this weekend.',
        'hide image clock',
        'You get up to find your bag sitting right next to you',
        'show character butts normal',
        'butts I got this for you, sugar.',
        {
            'Choice': {
                'Dialog': 'butts Are you ready to go to rehersal?',
                'yes': {
                    'Text': 'Yes',
                    'Do': 'jump 005_yes'
                },
                'no': {
                    'Text': 'No',
                    'Do': 'jump 005_no'
                }
            }
        },
    ],

    "005_yes" : [
        'butts Great, lets go then!',
        'hide character butts',
        'The two of you begin to walk out of Tuba Haus',
        'show character duke normal',
        'BAM!',
        'You run into duke while walking out the door.  His flip folder and music flies everywhere.',
        'duke OMG im so sorry',
        {
            'Choice': {
                'Dialog': 'Duke gets on his knees and begins to pick up his music',
                'help': {
                    'Text': 'Help',
                    'Do': 'jump 006_help'
                },
                'no_help': {
                    'Text': 'Dont Help',
                    'Do': 'jump 006_dont_help'
                }
            }
        },
    ],

    "006_help" : [
        'You get on your knees as well and begin to help pick up',
        // 'show character duke close',
        'You grab his show music when you suddenly lock eyes',
        'Your noses are less than a centimeter away from eachother, and you can feel eachothers breath.',
        'duke Thhh...Thhan...Thank You!',
        'Duke blushes heavily',
        'show character duke normal',
        'Duke stands up straight',
        'I will see you at rehersal!',
        'He runs away.',
        'hide character duke',
        'show character butts normal',
        'butts Huh, odd.  Ive never seen him so flustered.  Must be your cute face.',
        'You blush from being teased.',
        'butts Come on, lets get to rehersal.',
        'The two of you leave haus and go to rehersal',
        'jump 007'
    ],

    "006_dont_help" : [
        'Being the evil, heartless, demon that you are, you dont help duke.',
        'In fact, since you are such a terrible person, you kick him while he is grabbing his stuff.',
        'show character duke death',
        'I hope you feel good about yourself.  Actually, I hope you never play a game like this again',
        'Who in their right mind would not help him pick up his stuff',
        'do better',
        'please dont play my game again',
        'your a disgrace to the band and whatever section you are in',
        'dont come back',
        'show message BadPersonEnding',
        'end'
    ],

    "005_no" : [
        'butts Oh, i guess you can go with krug.  Dont be late.',
        'hide character butts',
        'You hear krug shuffling around in the kitchen.',
        'You wait.',
        'show character krug close',
        'After 30 minutes, krug finaly comes out into the living room',
        'krug Oh wait are you ready to go?',
        'hide character krug',
        'Krug leaves again',
        'you wait another 30 minutes.  Practice started 25 minutes ago.',
        'show character krug close',
        'krug Alright im ready now lets go!',
        'The two of you make your way out of the door and head to the band field.',
        'jump 007'
    ],

    "007" : [
        'show scene field with fadeIn',
        'The practice field is bright, and the sun shines down casting a shadow of the tower onto the sidelines.',
        'People begin to shuffle in through the gates and into the field.',
        'butts Over Here!',
        'show image tubas',
        'There they are.  The Wisconsin Tubas.',
        'Widely regarded as the best tuba players in the Americas, and the sexiest college students in the big 10.',
        'Look at them. Just bask in the sheer, unbridled, god-tier aura radiating off every single bell.',
        'They do not simply march on the turf; the earth willingly flattens itself in humble reverence beneath their thunderous footfalls.',
        'Each member looks like they were hand-chiseled out of solid Greek marble by Michelangelo himself after he took a masterclass in peak physical perfection.',
        'Their lungs possess the catastrophic air capacity of a jet turbine, exhaling pure, concentrated raw sex appeal directly through twenty pounds of polished brass.',
        'Not a single drop of sweat dare ruin their pristine foreheads—only a celestial dew of raw athletic supremacy.',
        'Scientists at MIT have tried for decades to quantify their jawlines, but modern supercomputers literally overheat trying to process such lethal symmetry.',
        'Their pedal tones are so profound, so earth-shattering, that they could effortlessly alter the tectonic plates of North America and cure every known disease in a single measure.',
        'Legends say that when the Wisconsin Tubas breathe in unison, the wind patterns of the Northern Hemisphere shift just to catch a whiff of their immaculate greatness.',
        'Kings bow. Greek deities weep bitter tears of inadequacy. Camp Randall only exists as a crude sacrificial altar for their bass lines.',
        'They are not mere brass players; they are golden stallions, angelic paragons of virtue, and the undisputed apex predators of the Western Hemisphere.',
        'To merely stand within breathing distance of their majestic horn carriages is an honor you will spend the rest of your mortal life failing to deserve.',
        'I am so glad to be a guest tuba for this upcoming show',
        'butts Get over here, its time for rhinoball!',
        'hide image tubas',
        'You run to the 1 and get into position.',
        'show character izz feet',
        'izz Are you ready to go, big dawg?',
        'I want you to run the best route of your life.  Ill be looking for you out on the field.',
        'izz Seettttt, seeet, HIKE!',
        'You begin to run.',
        'hide character izz',
        'jump 008_dodge1'
    ],

    '008_dodge1': [
        'You sprint forward with the speed of a startled raccoon on slippery kitchen tile.',
        'show character bc point',
        'Suddenly, BaChuzz materializes right in your path, arms out wide like a rabid windmill!',
        {
            'Choice': {
                'Dialog': 'BaChuzz approaches at terminal velocity! What evasive maneuver do u pull?!',
                'Cartwheel': {
                    'Text': 'Nakedly aggressive tactical cartwheel',
                    'Do': 'jump 008_d1_cartwheel'
                },
                'Slide': {
                    'Text': 'Aggressive crotch slide between their legs',
                    'Do': 'jump 008_d1_slide'
                },
                'Worm': {
                    'Text': 'Drop and perform the aggressive inchworm',
                    'Do': 'jump 008_d1_worm'
                }
            }
        }
    ],

    '008_d1_cartwheel': [
        'You hurl your body sideways into a violently off-tempo gymnastics cartwheel.',
        'Your left shoe grazes BaChuzz directly in the collarbone as you twirl with unholy momentum.',
        'BaChuzz is so utterly stunned by your raw gymnastic dominance that they trip over their own laces and hit the rubber turf like a sack of damp laundry.',
        'jump 008_dodge2'
    ],

    '008_d1_slide': [
        'You drop flat to your knees and slide directly between BaChuzz legs like a human bowling ball at 35 miles per hour.',
        'The sheer frictional heat from the turf creates a tiny puff of synthetic grass smoke.',
        'You pop back up to your feet behind them like a greasy meerkat, leaving them clutching empty air.',
        'jump 008_dodge2'
    ],

    '008_d1_worm': [
        'You literally belly-flop onto the turf and ripple across the ground like a terrified earthworm.',
        'BaChuzz stares down at you in horrified confusion for three entire Mississippi seconds.',
        'Before they can comprehend your benthic majesty, you spring upright and keep hauling ass.',
        'jump 008_dodge2'
    ],

    '008_dodge2': [
        'hide character bc',
        'You hit the 30-yard line at full throttle, lungs bellowing like a clogged diesel engine.',
        'show character td pose',
        'Out of nowhere, TailsDerp lunges toward you, eyes locked onto your hip flags with predatory hunger!',
        {
            'Choice': {
                'Dialog': 'TailsDerp is about to snatch your flags! React now!',
                'Spin': {
                    'Text': 'Beyblade spin until dizzy',
                    'Do': 'jump 008_d2_spin'
                },
                'Meow': {
                    'Text': 'Hiss violently and skitter sideways',
                    'Do': 'jump 008_d2_meow'
                },
                'FakeHeart': {
                    'Text': 'Fake a spontaneous heart palpitation',
                    'Do': 'jump 008_d2_fake'
                }
            }
        }
    ],

    '008_d2_spin': [
        'You tuck your arms in and unleash a hyper-sonic 720-degree Beyblade spin.',
        'The centrifugal force whips your jerseys fringes into TailsDerp face with devastating whipping action.',
        'They stagger backward, legally blinded by sheer centrifugal aura, while you stumble forward completely cross-eyed.',
        'jump 008_dodge3'
    ],

    '008_d2_meow': [
        'You arch your back, hiss like an angry alley cat, and crab-scuttle laterally at a terrifying 45-degree angle.',
        'TailsDerp freezes, instantly questioning every life choice that brought them to this football field today.',
        'You slip right past their personal space bubble while making continuous spitting sounds.',
        'jump 008_dodge3'
    ],

    '008_d2_fake': [
        'You clutch your chest, gasp "OH LORD SHE COMMIN FOR ME", and dramatically faint into a tactical limp noodle.',
        'TailsDerp instinctively halts to perform emergency triage and look for an athletic trainer.',
        'The moment their hands drop, you spring back to life like a spring-loaded jack-in-the-box and blast past them.',
        'jump 008_dodge3'
    ],

    '008_dodge3': [
        'hide character td',
        'The end zone is in sight! The scent of glory and stale beer fills the autumn wind!',
        'show character nick salute',
        'Standing directly between you and destiny is the final guardian: Leonardo DerpCaprio, massive and unyielding.',
        {
            'Choice': {
                'Dialog': 'The final boss Leonardo DerpCaprio blocks the end zone! Choose your finishing maneuver!',
                'Hurdle': {
                    'Text': 'Leap directly over their head',
                    'Do': 'jump 008_d3_leap'
                },
                'Moonwalk': {
                    'Text': 'Backpedal moonwalk with aggressive eye contact',
                    'Do': 'jump 008_d3_moon'
                },
                'Flirt': {
                    'Text': 'Blow an aggressive air kiss at them',
                    'Do': 'jump 008_d3_kiss'
                }
            }
        }
    ],

    '008_d3_leap': [
        'You stomp down on the turf and launch your entire mass into the upper stratosphere.',
        'You sail over Leonardo DerpCaprios head like an airborne bowling ball with zero regard for earthly gravity.',
        'You graze their scalp with your sock before sticking a wobbly, three-point superhero landing behind them.',
        'jump 008_catch'
    ],

    '008_d3_moon': [
        'You slam on the brakes, spin around 180 degrees, and begin furiously moonwalking directly into their face.',
        'The psychic damage from this display completely short-circuits Leonardo DerpCaprios central nervous system.',
        'They swipe at your waist and end up grabbing only the gust of air left in your funky smooth wake.',
        'jump 008_catch'
    ],

    '008_d3_kiss': [
        'You point both finger guns at Leonardo DerpCaprio, deliver a loud dramatic mwah kiss, and flash a wink.',
        'Their brain hits an unrecoverable 404 error and their legs turn entirely to lukewarm cottage cheese.',
        'They topple sideways into the sideline cones like an abandoned folding lawn chair.',
        'jump 008_catch'
    ],

    '008_catch': [
        'hide character nick',
        'You break wide open into the end zone, panting like an exhausted golden retriever.',
        'show character izz feet',
        'izz LOOK ALIVE BIG DAWG!!',
        'hide character izz',
        'show image football',
        'The rhinoball arcs through the azure sky, spinning with the majestic trajectory of a dying duck.',
        'Time slows down to an absolute crawl.',
        'Every single member of the Wisconsin Tuba section stops breathing. The universe holds its breath.',
        {
            'Choice': {
                'Dialog': 'The ball is descending from the heavens! How do you snag it?!',
                'Teeth': {
                    'Text': 'Catch it with your bare teeth',
                    'Do': 'jump 009_teeth'
                },
                'Backflip': {
                    'Text': 'Blind backwards scorpion kick catch',
                    'Do': 'jump 009_flip'
                },
                'Chest': {
                    'Text': 'Trap it like a soccer ball with your sternum',
                    'Do': 'jump 009_chest'
                }
            }
        }
    ],

    '009_teeth': [
        'You open your jaw as wide as a Burmese python and clamp down on the leather laces with raw unhinged fury.',
        'The force nearly rattles your fillings loose, but you lock your jaw tight like a snapping turtle on a mission.',
        'TOUCHDOWN!!',
        'jump 009_celebrate'
    ],

    '009_flip': [
        'You fling your head backward, blindly throwing your heels into the air like a circus contortionist on energy drinks.',
        'The ball somehow pinches perfectly between the soles of your shoes upside down in midair.',
        'You crash flat onto your shoulder blades, still clasping the pigskin aloft like an Olympic trophy.',
        'TOUCHDOWN!!',
        'jump 009_celebrate'
    ],

    '009_chest': [
        'You puff your chest out like a proud silverback gorilla welcoming the divine projectile.',
        'THWACK! The ball hits your sternum with the sound of a wet pool noodle slapped against drywall.',
        'The breath is fully evacuated from your lungs, but your arms snap closed around it like an iron bear trap.',
        'TOUCHDOWN!!',
        'jump 009_celebrate'
    ],

    '009_celebrate': [
        'hide image football',
        'The entire band field erupts into deafening cheers of raw, primal testosterone.',
        'show character izz feet',
        'izz YOOOOOOOOOOOO THAT WAS THE MOST DIABOLICAL ROUTE IVE EVER SEEN IN MY LIFE!!',
        'izz You really are that dog, sugar!',
        'You lie on the rubber turf, tasting little specks of synthetic turf pellets and pure glory.',
        'hide character izz',
        'papa Alright everybody, lets go!',
        'butts Looks like its time to block up!',
        'You walk over to the sidelines and grab your horn, then run to your spot in the block.',
        'You start with jumping jacks, then begin to stretch.',
        'show character bp stretch',
        'You spot big perkins on the ground stretching.  Its curious how he got so big.',
        'Maybe if this guy laid off on the food or ice cream (yes, the ice cream) he wouldnt be so big.',
        'Did you know that Big Perkins can consistently eat half a gallon of ice cream per week?',
        'Seems crazy, but its true',
        'This big back will make the mecca to Memorial Union and terrorize the employees by ordering a half gallon of mocha macchiato.',
        'Genuinely (genuinely btw (short for btw btw (short for btw))) like once a week',
        'Everyone make sure to tell him to stop being such a biggie and save some yummy ice cream for the rest of us.',
        'Anyways....',
        'Big perkins stretch dat ass toward you.  Your not used to such forward motions from people.',
        'bp OOHhhh thats the spot',
        'He seems to be really enjoying his stretch',
        'Before you can do anything, Ponty whistles and its time to get back into block.',
        'hide character bp',
        ''
    ]

});