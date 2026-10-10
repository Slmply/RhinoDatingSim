
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
        "skroob Never leave like that again.  Youll give me a heart attack.",
        "rex I was so worried.",
        "krug I thought I had killed you with my spaghetti this morning.  Luckly that wasnt the case.",
        "dz Dont run away from me like that",
        "duke I never forgot about this morning.  I coulndt stop thinking about it while we looked for you.",
        "kys I made this game im exempt from having to say this stuff",
        "izz Im so glad we found you, we cant lose our best rhinoball player!",
        ""
    ]
 });