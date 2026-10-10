
// Chapter 3 of the story
monogatari.script ({
    "014_start" : [
        'show scene picnic',
        'Finally, you can be alone for a bit.',
        'Maybe, marching band wasnt for you.  Maybe you dont have this.',
        'show image tubas',
        'All these amazing people, all supporting you, and you let them down.',
        'hide image tubas',
        {
            'Dialog' : "What should I do?",
            'Choice': {
                'goodTimes': {
                    'Text': 'Think of all the good times',
                    'Do': 'jump 014_good_times'
                },
                'giveUp': {
                    'Text': 'Give Up',
                    'Do': 'jump 015_give_up'
                },
            }
        },
    ],

    "014_good_times" : [
        {
            'Function': {
                'Apply': () => {
                    monogatari.storage().love += 1;
                },
                'Reverse': () => {
                    monogatari.storage().love -= 1;
                }
            }
        },
        'You think back to all the good times you had with the rhinos...',
        'show character dewalt normal left',
        'The sweet wake-up with a gorgeus old man...',
        'show character krug cook center',
        'The delicious breakfast mommy krug made for you...',
        'show character izz feet right',
        'The amazing rhinoball pass I recieved from Izz...',
        'These tubas have been so good to me.  But have I been good enough?',
        'hide character dewalt',
        'hide character krug',
        'hide character izz',
        {
            'Dialog' : "Am I good enough?",
            'Choice': {
                'favoriteThings': {
                    'Text': 'Think of your favorite things.',
                    'Do': 'jump 014_favorite_things'
                },
                'giveUp': {
                    'Text': 'Give Up.',
                    'Do': 'jump 015_give_up'
                },
            }
        },
    ],

    "014_favorite_things" : [
        {
            'Function': {
                'Apply': () => {
                    monogatari.storage().love += 1;
                },
                'Reverse': () => {
                    monogatari.storage().love -= 1;
                }
            }
        },
        "You let your mind wander to your favorite things...",
        "show image ham left",
        "An ice cold ham...",
        "show character pilar feet center",
        "mmmmmmmmmmmmmhhhhhh, feeettttt....",
        "show image keg right",
        'Keg in the closet...',
        "Seeing all of your favorite things makes you happy.",
        "Tears run down my thighs (get it we play this song)",
        "But am I really deserving of all of this?",
        "hide image ham",
        "hide character pilar",
        "hide image keg",
        {
            'Dialog' : "Am I Deserving?",
            'Choice': {
                'papa': {
                    'Text': 'Think of Papa.',
                    'Do': 'jump 014_papa'
                },
                'giveUp': {
                    'Text': 'Give Up.',
                    'Do': 'jump 015_give_up'
                },
            }
        },
    ],

    "014_papa" : [
        {
            'Function': {
                'Apply': () => {
                    monogatari.storage().love += 1;
                },
                'Reverse': () => {
                    monogatari.storage().love -= 1;
                }
            }
        },
        "show character papa smile",
        "What would papa do?  Im sure he saw that run through.  It was terrible.",
        "Everything in Dr. Corey Pompey's life has led to this moment...",
        "And I let him down...",
        "hide characte papa",
        "Maybe, just maybe, this marching band Isn't right for me.",
        {
            'Dialog' : "I should give up.",
            'Choice': {
                'giveUP1': {
                    'Text': 'Give Up.',
                    'Do': 'jump 015_give_up'
                },
                'giveUp': {
                    'Text': 'Give Up.',
                    'Do': 'jump 015_give_up'
                },
            }
        },
    ],

    "015_give_up" : [
        "Im right.  I never should have made it into this band.",
        "The Tubas, I loved them.",
        "But I never deserved any of this.  They shouldnt have to deal with someone like me.",
        "show scene #000000",
        "You close your eyes and try to forget about everything.",
        "You forget the marching step and your 8-5",
        "You forget the brutal memories of reg week.",
        "You forget your first game day in (historic) camp randall",
        "You even try to forget the fact that you had fallen in love....",
        "show scene heaven",
        "What????",
        "Where am I?",
        "show character bebop angel with fadeIn",
        "bebop Dont worry my child.  What ails you?",
        "An angel stands before you.",
        "His pure angelic aura nearly blinds you.",
        "bebop I know, seeing an angel face to face is quite shocking.",
        "bebop I've been watching you for quite some time, young one.",
        "bebop Out on the field, is that run through what caused this?",
        "You nod slowly, still in awe at his pure beauty.",
        "bebop Its okay.  Everyone makes mistakes.",
        "bebop What truly matters is your recovery.",
        "bebop There are people back on the field who are waiting for you.",
        "bebop These people, which you have a special bond with, want you to suceed.  They want YOU, to eat the chicken.",
        "His words resonate with you.  Never have you heard such a well spoken sentence.",
        "bebop Breathe with me, for a moment.",
        "He begins leading you through breathing exercises.",
        "After each breath, you feel calmer and calmer.",
        "Finally, with one loud AARRRRRGGGHHHHH, you touch your toes and feel a wave of relief.",
        "Clarity strikes your mind.  You know what you must do.",
        "'Thank you Bebop'",
        "bebop Of course my child.  Now, Go do what you must.",
        "hide character bebop with fadeOut",
        "The angel flys away into the sky, soaring through the clouds up through the gates of heaven.",
        "You close your eyess and try to remember everything.",
        "show scene #000000",
        "You remember how to stop at the top",
        "You remember the burn of your legs after your marching audition",
        "You remember the cheers of (historic) Camp Randall",
        "You remember your love for the wisconsin rhinos",
        "show scene field",
        "You wake up back on the band field.  Rehersal seems to have ended.",
        "show image tubas",
        "The tubas find you and all run over",
        "butts Where have you been?  Weve been so worried about you!",
        "skroob Never leave like that again.  Youll give me a Skroob Male™ attack.",
        "rex I was so worried.",
        "krug I thought I had killed you with my spaghetti this morning.  Luckly that wasnt the case.",
        "dz Dont run away from me like that",
        "duke I never forgot about this morning.  I coulndt stop thinking about it while we looked for you.",
        "kys I made this game im exempt from having to say this stuff",
        "izz Im so glad we found you, we cant lose our best rhinoball player!",
        "bc And ive always said that.",
        "td Hmmmmphhh, Welcome back, its not like i liked you or anything.",
        "nick Have you heard of that one linebacker noah ....",
        "bp I was looking all over for you.  Do you want to go off to mem u to get a tub of ice cream.",
        "brewski Im a stupid dummy idiot.",
        "gd I would say something but im so busy with whatever is going on with my phone that I didnt notice you were gone.",
        "pilar guhhhhhhhhhhhh",
        "show character butts normal",
        "butts I know that run through wasnt perfect, but Its okay.",
        "butts Its okay, we will have the show ready for tomorrow.",
        "butts Its been hard on everyone, but these past few days have been the best for all of us.",
        "butts Having you around, has made the section better.",
        "butts I speak for the whole tuba section when I say this",
        "butts You are amazing.  From the bottom of our hearts, thank you.",
        {
            'Choice': {
                'ily': {
                    'Text': 'I love you',
                    'Do': 'jump 016_love'
                },
                'friends': {
                    'Text': 'You are my best friends',
                    'Do': 'jump 016_friends'
                },
            }
        },
    ],

    "016_love" : [
        "hide image tubas",
        "show image blush",
        "hide character butts",
        "butts Whaaa... You really mean that//",
        "butts ...",
        "butts I....I want to kiss you right now...",
        "skroob ...I also want to kiss you",
        "td ...its not like I want to , uughhhh, but I guess ill join...",
        "rhino WE, yes WE, want to kiss you.",
        "hide image blush",
        "show image kiss",
        "You and the tubas embrace in a tight hug",
        "You pucker your lips and lean in for a wet smooch",
        "Yor lips touch slowly and the taste of hamms overwhelms your senses",
        "You continue to kiss, and the overwhelming force of 24 tongues making out with you sends you into shock.",
        "Everyting starts to fade.....",
        "show scene #000000 with fadeIn",
        "As your mind rests, you reflect on everything that has happened today.",
        "Did you say everything you wanted to say? Do everything you wanted to do?",
        "Have you shown your true love to the tuba section?",
        {
            'Conditional': {
                'Condition': () => {
                    return monogatari.storage().love >= 8;
                },
                'True': 'jump true_finale',
                'False': 'jump finale',
            }
        }
    ],

    "016_friends" : [
        "butts Grrrr",
        "butts I thought we were something.",
        "hide image tubas",
        "show character butts angry",
        "butts Day today yourself",
        "butts You know, I hope your pillow is piss warm",
        "rhino WE, yes WE, all hate you now.",
        "He grabs a paddle and lifts it above his head.",
        "butts TUBAAAASSS, CHARGEEE!!!!!",
        "The full force of the tuba section sprints in your direction.",
        "You have no time to think.  No time to run.",
        "They reach you and tear you apart.",
        "show scene #FF0000 with fadeIn",
        "Limb from limb, you are shredded to bits.",
        "Your body was never found.",
        "show message FriendshipEnding",
        "end"
    ],

    "finale": [
        "show scene field with fadeIn",
        "show character butts cute",
        "butts Morning sleepyhead.",
        "butts I saw you got quite flustered during our kiss earlier.",
        "butts Im glad.",
        "butts Thank you, again for everything.",
        "butts You have the rhinos the happiest and horniest section of the band.",
        "butts I look forward to a bright future together.",
        "butts But maybe, if something had gone differently, we could have had a little more.",
        "butts Super secret ending????",
        "butts Anyways, lets get you back up.  Weve got to get ready for game day tomorrow.",
        "You take his hand and stand up.",
        "hide character butts",
        "show image tubas",
        "Off in the distance, you see the Wisconsin rhinos waiting for you, each with a smile on their faces.",
        "You smile, and know you have found your love.",
        "show message LoveEnding",
        "end"
    ],

    "true_finale" : [
        "show scene field with fadeIn",
        "show character papa cute",
        "papa Good morning sleepyhead",
        "papa Ive been watching you.  The things you have done for these tubas... is just incredible.",
        "papa Well, Ive got a proposition for you.  Take my hand.",
        "You take his hand and get up on your feet.",
        "papa Look over there, at those tubas.",
        "hide character papa",
        "show image tubas",
        "The tubas are off on the sidelines waiting for you.  They seem eager.",
        "papa The pride of wisconsin.  Without them, I dont know what kind of band we would be.",
        "papa With the sections love, you have become the most important person in the world.",
        "hide image tubas",
        "show character papa cute",
        "He extends his hand to you one last time.",
        "papa Come with me, and together We can love the Wisconsin Rhinos.",
        "You hold papas hand and together, arm in arm, walk to the sidelines to the loves of your life.",
        "show message TrueEnding",
        "end"
    ],
 });