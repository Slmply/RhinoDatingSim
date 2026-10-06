

monogatari.script ({
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
        'You start with jumping jacks, 70 to be exact.',
        'You do your best to keep count and prepare to stop...',
        'As you hit the 70th jack, a cute man walks infront of you and locks with your eyes.',
        'show character brewski cut',
        'brewski HHHHUUUUGGHGHGHUUHHHHH',
        'He yells loudly and continues to do jumping jacks in your face',
        'brewski HEEUUUHGHGHHGH',
        'His eyes dig into your body and you feel a rush of adrenaline pushing you to keep jumping',
        'brewski HUUUGUGHGHHGHGUGHGUGHGUGHGHHHHHUGUUGUGUGHHHHHGUGUGUH',
        'You continue to stare into his eyes and begin to lose count of how many youve done.',
        'brewski HOUFUUGHHGHGUGUUUUGIOGUGUGHHGHGHGUGOUGUGUOGUOGUGHGHGHGHHGHGUOUGOUUUUHGOUUGHGUGUGHGOUGUGGUHGHGHGHGHGH',
        'Suddenly he stops.',
        'You two stare at eachother, breathing heavily.  He seems to be getting ready to yell.',
        'brewski SSIIIIIIIIXXXTYYY NINNNNEEEEEEEEE!!!!!!!!',
        'He bends backwards as he screams, and the gutteral length of the yell shakes the turf which you are standing on.',
        'He pauses and stares at you, then winks.',
        {
            'Choice': {
                // 'Dialog': 'The ball is descending from the heavens! How do you snag it?!',
                'Wink': {
                    'Text': 'Wink back',
                    'Do': 'jump 010_wink'
                },
                'NoWink': {
                    'Text': 'Dont wink',
                    'Do': 'jump 010_no_wink'
                },
            }
        },
    ],

    "010_wink" : [
        'You wink back to Derpelganger.',
        'He begins to smirk and his cheeks turn slightly red.',
        'You both stop and breathe slowly, looking at eachother.',
        'His breath reaches your chest and you get a tingling feeling across it.',
        'I cant come up with any more weird descriptions so just imagine liek a super intimate moment with this person and thats what happens.  Thx, the creator.',
        'Also despite all the chemistry between you two we gotta move to the next cameo, so Derpelganger will just walk away lol.',
        'Derpelganger walks away',
        'hide character brewski',
        'jump 010_cont'
    ],

    "010_no_wink" : [
        'You dont wink back because you dont like fun and clearly have bad taste in your partners.',
        'Like just sleep away the bus ride if your going to be doing this in my game.',
        'Derpelganger walks away',
        'hide character brewski',
        'jump 010_cont',
    ],

    "010_cont" : [
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
        'You walk back to your position in block.',
        'show character herb smile',
        'herb Alright everyone get ready',
        'herb When I was walking around yesterday I found a quarter on the ground.',
        'herb ...',
        'herb Anyways, Lets get to it.',
        'herb lets start with a forward march eight, left turn, forward march 8, forward march eight, left turn, forward march 8, forward march eight, left turn, forward march 8, right turn, forward march 8, right turn, forward march 8, right turn, forward march 8, right turn.',
        'herb Oh, and you should do this all while playing.  One of those scales that we do.  What do we call that?',
        'Somebody yells out Bb scale',
        'herb Yeah that one?',
        'herb Got that, lets go!',
        'hide character herb',
        'The band waits for the countoff and executes the move.',
        'It crashes and burns.',
        'You end up making the wrong turn and come face to face with rex.',
        'show character rex sad',
        'rex Im sad I really messed up oh no',
        'rex I reaaaalalllyyyy neeed somebody to comfort me right now like if somebody were to cheer me up somehow I would be really happy yo.',
        {
            'Choice': {
                'Dialog': 'rex like pleeeassse im so sad lol',
                'Kiss on cheek': {
                    'Text': 'Kiss on his Cheek',
                    'Do': 'jump 011_rex_kiss'
                },
                'Hug': {
                    'Text': 'Hug Him',
                    'Do': 'jump 011_rex_hug'
                },
                'none': {
                    'Text': 'Dont do it (That would be so evil tho)',
                    'Do': 'jump 011_rex_evil'
                }
            }
        },
    ],

    '011_rex_kiss': [
        'You step forward into his face, tilt your head, and plant a fat, smooch directly onto his cheek.',
        'SCHWIPPP. The sound echoes across the entire practice field and everyone turns to look.',
        'rex :O',
        'rex Im like so wet right now.',
        'His eyes glow with the sheer, unbridled wattage of a thousand Camp Randall stadium floodlights. (Thank you gemini for this line)',
        'rex Im so glad i met you... thank you so much',
        'This guy is such a cutie hes like blushing and everything after that.',
        'jump 011_rex_cont'
    ],

    '011_rex_hug': [
        'You drop your tuba and run at rex and give him a big warm hug.',
        'Your bodies fuse together like two peas in a pod.',
        'rex *crying in your big strong shoulders*',
        'You hear him whimpering and crying away all the beer from last night.',
        'rex Wow... that felt like being wrapped in a weighted blanket made entirely of lead aprons and unconditional love. (Thank you gemini for this line)',
        'rex My heart is full and my panties are soaked',
        'He softly nuzzles the bell of your tuba, leaving a thin imprint of his lips on your practice horn permanantly.',
        'jump 011_rex_cont'
    ],

    '011_rex_evil': [
        'You look him dead in his puppy-dog eyes, scoff violently, and hit him with the most stone-cold, soulless face.',
        'You do not comfort him. You do not even blink.',
        'show character rex fent',
        'Look what you did.  You killed him.',
        'You truly are a terrible person',
        'Never talk to the tubas again.  You are not welcome.',
        'This game has reported you to the tuba section and you are henceforth blacklisted from tuba haus indefinitely',
        'I hope you are proud of yourself',
        'show message BadPersonEnding',
        'end'
    ],

    '011_rex_cont': [
        'hide character rex',
        'show character herb smile',
        'herb Alright good job everyone looked good i guess Idk (short for idk btw) I just work here.',
        'herb Anyways, onto you Corey',
        'hide character herb',
        'show character papa smile',
        'papa Alright, happy friday everybody, lets get down to business.',
        'papa We have alot of work to get to today.  There better be no funny business.',
        'papa Number one.',
        'Corey raises his hands and you prepare yourself to play.',
        'His hands move fluidly, and it entrances you.',
        'You play, eyes glued to the fluid yet precise movements, and your mind begins to stir.',
        {
            'Choice': {
                'Daydream': {
                    'Text': 'Daydream about Corey',
                    'Do': 'jump 012_daydream'
                },
                'LockIn': {
                    'Text': 'Lock in and play your music',
                    'Do': 'jump 012_lock_in'
                },
            }
        },
    ],

    '012_daydream' : [
        'You allow your mind to drift off in the middle of the exercise.',
        'MMMMMMMMhhhhhh, Paaapappapaaaaa',
        'You imagine him all joyful eating a cone of ice cream...',
        'You dont know why, but this image burns into your mind.',
        'Its double chocolate pistachio ice cream',
        'The green from the melting ice cream drips down the cone, and falls down onto the turf of the band field.',
        'You imagine yourself running and diving to catch the falling drop of ice cream, and how good it would taste from the hands of papa',
        'papa TUBAS!!!!!!',
        'papa WATCH THE CUTOFF!',
        'You snap back into reality and Corey is staring directly at you.',
        'Not quite dissapointment, but more intrigue',
        'papa ....',
        'papa Dont let it happen again.',
        'He turns away to the rest of the band',
        'jump 012_cont'
    ],

    '012_lock_in' : [
        'You push all your focus in on your playing and resist the urge to daydream about Corey.',
        'jump 012_cont'
    ],

    '012_cont' : [
        'papa Alright everyone, lets begin with a full run of the halftime show.',
        'papa We will begin in five minutes',
        'hide character papa',
        'You walk back over to the sidelines where all your stuff is',
        'show character skroob male',
        'You find Skroob Male™ huddled over your backpack',
        'skroob Yo I forgot my water can I have some',
        {
            'Choice': {
                'Waterfall': {
                    'Text': 'Yes but u gotta waterfall it',
                    'Do': 'jump 013_waterfall'
                },
                'NoWaterfall': {
                    'Text': 'Yes',
                    'Do': 'jump 013_idrkiss'
                },
                'noWater': {
                    'Text': 'No',
                    'Do': 'jump 013_none'
                },
            }
        },
    ],

    '013_waterfall' : [
        'You hand over your  Skroob Male™ bottle with strict, but tell him to waterfall it.',
        'skroob Dont worry, I gotchu.',
        'He tips the bottle back and a glistening stream of  Skroob Male™ flows outwards.  Almost all of it misses his mouth',
        'You can see his muscles through his now soaked  Skroob Male™.  They are so defined and sharp.',
        'It makes you wonder if you will someday be a Skroob Male™',
        'He hands the dripping  Skroob Male™ back to you. Your  Skroob Male™ briefly brush against his cold, wet  Skroob Male™.',
        'A violent  Skroob Male™ of static  Skroob Male™ and raw homoerotic  Skroob Male™ shoots straight up your  Skroob Male™.',
        'jump 013_cont'
    ],

    '013_idrkiss' : [
        'You hand him the water bottle.',
        'Mongo Skroob doesnt hesitate for a second.',
        'He brings the bottle to his mouth and wraps his plump, Skroob Male™ lips firmly around the exact same plastic nozzle your mouth was on just minutes ago.',
        '....',
        'ayo #what dat mean',
        'GLUG. GLUG. GLUG.',
        'He chugs half of your remaining water in three gulps.',
        'A faint, glistening sheen of Skroob Male™ saliva is left behind.',
        'skroob Damn, why does your Skroob Male™ water bottle taste so sweet? What kind of Skroob Male™ filter do you use at your Skroob Male™ home?',
        'Your entire Skroob Male™ face is currently radiating at approximately 450 degrees Fahrenheit. You are steaming like a microwaved Skroob Male™.',
        'skroob Anyways, thanks twin. Our  Skroob Male™ is basically spiritually  Skroob Male™ for  Skroob Male™ now.',
        'He hands the  Skroob Male™ back to you with a casual, devastating  Skroob Male™.',
        'You clutch the damp  Skroob Male™ to your  Skroob Male™,  Skroob Male™ trembling at the sacred  Skroob Male™ you now possess.',
        'jump 013_cont'
    ],

    '013_none' : [
        'You clutch your water  Skroob Male™ tightly to your chest, glare at him with absolute contempt, and hiss: No.',
        'Mongo  Skroob Male™ eyes widen in sheer, unadulterated  Skroob Male™.',
        'skroob  Skroob Male™... what? We have been  Skroob Male™ box  Skroob Male™ for three hours in 85 degree  Skroob Male™...',
        'skroob My  Skroob Male™ literally feels like  Skroob Male™ on  Skroob Male™...',
        'skroob Just a  Skroob Male™, bro... please... my  Skroob Male™ are failing...',
        'You do not  Skroob Male™. In fact, you  Skroob Male™ the cap and take a  Skroob Male™, luxurious  Skroob Male™ of ice-cold  Skroob Male™ right in front of his parched  Skroob Male™ while maintaining unblinking  Skroob Male™ contact.',
        'You let out a loud, refreshing  Skroob Male™ for good  Skroob Male™.',
        'Mongo  Skroob Male™ drops down to his  Skroob Male™ on the  Skroob Male™ rubber  Skroob Male™, clutching his  Skroob Male™.',
        'skroob Tell...  Skroob Male™... I hit... my... cutoff...',
        'He dramatically  Skroob Male™ face-first into the synthetic  Skroob Male™, instantly  Skroob Male™ up into a  Skroob Male™, crusty  Skroob Male™ like  Skroob Male™ visiting  Skroob Male™  Skroob Male™ without a water  Skroob Male™.',
        'Look what you have done. You killed  Skroob Male™.',
        'You literally let a fellow  Skroob Male™  Skroob Male™ die of  Skroob Male™ on the 35-yard line because you were stingy with tap  Skroob Male™.',
        'What kind of  Skroob Male™  Skroob Male™ plays a  Skroob Male™ sim just to  Skroob Male™ their  Skroob Male™ to  Skroob Male™?',
        'The entire  Skroob Male™ section turns to look at you with unbridled  Skroob Male™.',
        'You are stripped of your  Skroob Male™, blacklisted from  Skroob Male™ Haus, and banned from Camp  Skroob Male™ forever.',
        'I hope you are proud of  Skroobself™.',
        'show message SkroobMaleEnding',
        'end'
    ],

    '013_cont' : [
        'skroob Alright, thanks my Skroob Male™. Lets go lock in so we can mog this halftime run.',
        'He gives your shoulder a firm, brotherly squeeze before jogging back out onto the field.',
        'hide character skroob',
        'You tuck your water bottle back into your bag, still slightly dizzy from the encounter.',
        'show character gd screenager',
        'You spot GiggleDerp on the sidelines.',
        'Unfortunately, she is too absorbed in whatever is going on with her phone that she doesnt even know you are there',
        'Kids these days smh',
        'hide character gd',
        'TWEEEEEEEEEEEEEEEEEEEET!',
        'A piercing whistle blows from the sideline.',
        'show character papa smile',
        'papa FIVE MINUTES IS UP! EVERYONE TO THE STARTING SET!',
        'papa Lets make this full run clean. LESS GOO!',
        'hide character papa',
        'You rush back out to your spot on the turf, heart pumping with adrenaline.',
        'You hoist twenty-five pounds of cold brass onto your shoulder, lock in, and await the countoff.',
        'Next to you, you hear a man take a huge breath of air',
        'show character pilar mog',
        'pilar HHOOOOORRRAYYYYYYYYY!!!!',
        'pilar ITTTSSSS, GOONNANA BEE A RUNNNNTHROUGHHHH',
        'He yells so loud you can feel goosebumps form around your neck',
        'He turns his eyes to you and mogs',
        'That jawline.... so perfect',
        'Canthal Tilt.... pristine',
        'The bonemashing that his face must have taken seems unbrearable',
        'So unfortunate that you are a chud basking in the glory of this looksmaxing specimen',
        'pilar hey cutie, only with the power of love can you mog like this',
        'He winks at you.',
        'You blush.',
        'hide character pilar',
        'Before you can make a comment, ponty begins the whistle.',
        'Time stops as you prepare to run the show.',
        'The third whistle hits, and you drive your knee up on the fourth...',
        'show video striebe immersive with close',
        'OH NO....',
        'That was bad.  Nothing went your way.',
        'You made so many mistakes, missed all the kicks, and your recoverys were awful.',
        'You throw your tuba to the ground and run away and hide in the shed.'
    ]

});