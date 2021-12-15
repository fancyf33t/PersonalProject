// this is going to contain class/objects/methods/and whatever the fuck else i need for stupid javascript

class Combat {
    constructor() {
        // this object holds character information
        this.characters = {
            character1: {
                name: "Diana Stanley",
                id: 'The Redeemed Cultist',
                location: 7,
                img: 'media/dianastanley.jpg',
                class: 'character-page',
                health: 7,
                sanity: 5,
                lore: 4,
                influence: 2,
                observation: 3,
                strength: 3,
                will: 1,
                items: ['Arcane Manuscripts Assets', 'Wither Spell'],
                action: 'If there is a Cultist Monster on your space, discard all Monsters on your space or move the Cultist Monster to any other space. Reduce the horror of Monsters you encounter to 1',
                background: 'When Diana was initiated into the Order of the Silver Twilight, she believed it to be nothing more than a community organization. But as she has learned more of its true nature, she has become convinced that a growing evil threatens the world, and that the Silver Twilight will play a role in that threat. She believes her best chance to prevent this is to use her position to sabotage the organization from within. Carl Sanford, the head of the Order, has recognized her skills and recently sent her to Panama for additional training.',
                crippling: 'In her hospital, Diana tells you to pick up your things and bids you farewell. Gain all of her possessions. You infer that she is being watched. Using your knowledge of the Silver Twilight, you try to determine which doctors can be trusted [lore]. If you pass, you move Diana to a new hospital and she shares her secrets with you; retreat Doom by 1. If you fail, Diana remains under the Lodge’s watchful eye. Whether you pass or not, discard her Investigator token.',
                psychosis: "It’s obviously Diana, but she claims to be a woman named Iris who has lived in this city her whole life. In her trash, you find Diana’s things. Gain all of their possessions. It’s clear that she has disassociated from her former life. You share all of your memories of Diana to restore her identity [influence]. If you pass, she tells you of the horrors that brought her to this state; retreat Doom by 1. If you fail, Diana sternly asks you to leave her alone. Whether you pass or not, discard her Investigator token."
            },
            character2: {
                name: "Trish Scarborough",
                id: 'The Spy',
                location: 'Central Russia space 16',
                img: 'media/trishscarborough.jpg',
                class: 'character-page',
                health: 7,
                sanity: 5,
                lore: 1,
                influence: 3,
                observation: 4,
                strength: 3,
                will: 2,
                items: '.45 Automatic Asset',
                action: "If you do not have any Clues, gain 1 Clue. If an investigator on your space spends a Clue to reroll a die, he may reroll up to 2 dice instead",
                background: "Everyone expected great things from Trish when she was young. In school, she excelled in athletics and the sciences, but she surprised everyone after graduation by settling into a humble position at a commercial code company. What almost no one knows is that this particular company is a front for the Bureau’s code-breaking agency, the Black Chamber. Now she finds herself in the city of Krasnoyarsk meeting another agent who has important information about an impending threat from a world beyond our own.",
                crippling: "Trish falls in and out of consciousness when you visit her in the hospital but she happily turns over her equipment. Gain all of her possessions. Unfortunately, her journal has been seized by the police. You’ll have to convince the local authorities to turn the book over to you [influence]. If you pass, you can read through all of Trish’s notes; retreat Doom by 1. If you fail, the knowledge is lost. Whether you pass or not, discard her Investigator token.",
                psychosis: "The doctor grimly hands you the items Trish had when she was brought in. Gain all of her possessions. “It’s not good,” he warns. Inside her padded cell, she’s written on every surface with a thick black pen. The text is a mix of dozens of codes. You start searching for anything you recognize [observation]. If you pass, you spot a hidden message in a familiar code; retreat Doom by 1. If you fail, Trish’s message remains locked away. Whether you pass or not, discard her Investigator token."
            },
            character3: {
                name: "Norman Withers",
                id: 'The Astronomer',
                location: 'Arkham, United States',
                img: 'media/normanwithers.jpg',
                class: 'character-page',
                health: 5,
                sanity: 7,
                lore: 3,
                influence: 1,
                observation: 3,
                strength: 2,
                will: 4,
                items: ['Feed the Mind Spell'],
                action: 'Spend 2 Clues to discard 1 Monster on a space containing a Gate. Once per round, you may spend 1 Sanity in place of spending 1 Clue.',
                background: 'The scientific community ridiculed Norman for his claim that six stars disappeared from the sky. After exhausting every plausible astronomical explanation for answers, he took a position at Miskatonic University and began exploring more improbable possibilities in the restricted section of their library. While reading an ancient text of dark prophecies, Norman found an exact description of the phenomenon he’d observed. If the tome is to be believed, a terrible incursion into our world is imminent.',
                crippling: "Norman can barely move in his hospital bed and points to his notes and suitcase. Gain all of his possessions. He begs you to use his telescope to record the current locations of the stars. The work is slow and demanding, but you focus as best you can to give him accurate results [will]. If you pass, Norman’s insight into the Ancient One proves accurate; retreat Doom by 1. If you fail, Norman can make no sense of the night sky. Whether you pass or not, discard his Investigator token.",
                psychosis:"The doctors would like you to look at Norman’s notes and belongings. Gain all of his possessions. They are trying to gain some insight into his catatonic state. You try to convince them to move Norman to a room with a view of the night sky [influence]. If you pass, Norman becomes slightly responsive, and you are able to question him; retreat Doom by 1. If you fail, Norman’s condition grows steadily worse. Whether you pass or not, discard his Investigator token. "
            },
            character4: {
                name: "Lola Hayes",
                id: 'The Actress',
                location: 'Tokyo, Japan',
                img: 'media/lolahayes.jpg',
                class: 'character-page',
                health: 5,
                sanity: 7,
                lore: 2,
                influence: 4,
                observation: 2,
                strength: 2,
                will: 3,
                items: ['.18 Derringer Asset', 'Improve 1 skill of your choice'],
                action: "Spend any number of Improvement tokens, then improve 1 skill of your choice for each token spent (a “+2” token counts as 2 tokens). Once per round, an investigator on your space may roll 1 additional die when resolving a test.",
                background: "Around the world, Lola has performed dramatic roles for sold-out houses. However, after being cast in the controversial play, The King in Yellow, Lola needed to “take some time” to recover from her “exhaustion.” Now that she has checked herself out of the asylum, she’s ready for her big comeback. But this time she’ll play a different role in the fight against the horrors that threaten this world. She’s started by traveling to Tokyo to track down the only other surviving cast member of her previous theatrical endeavor.",
                crippling: '“I’m fine, darling. Help yourself, by the way.” Lola nods at the equipment strewn across the hotel room. Gain all of her possessions. As convincing as she is, you know she’s in pain. You try to persuade her to visit a hospital [influence]. If you pass, she signs a breath of relief and tells you of all the horrors she’s encountered; retreat Doom by 1. If you fail, the day after Lola leaves the city, she succumbs to her wounds. Whether you pass or not, discard her Investigator token.',
                psychosis: "The trail of Lola’s belongings lead you into a derelict theater. Gain all of her possessions. She’s on the stage wringing her blood-soaked hands and reciting, “Will these hands ne’er be clean?” You try to direct her performance, hoping to better reveal her character [influence]. If you pass, she tells you of the Tattered King, indicating a goat she’s killed; retreat Doom by 1. If you fail, Lola’s dialogue degenerates into gibberish. Whether you pass or not, discard her Investigator token."
            },
            character5: {
                name: "Jim Culver",
                id: 'The Musician',
                location: 6,
                img: 'media/jimculver.jpg',
                class: 'character-page',
                health: 7,
                sanity: 5,
                lore: 3,
                influence: 3,
                observation: 2,
                strength: 2,
                will: 3,
                items: ['Shriveling Spell', 'Clue'],
                action: "Each investigator on your space recovers 1 Sanity. Investigators on your space roll 1 additional die when resolving tests during Combat Encounters.",
                background: "Old Jim Culver’s music gives sweet comfort to the soul, and it doesn’t matter if that soul belongs to the living or the dead. Folks in their graves, they love their little chats with Jim. It used to bother him, but now he’s happy for the company. Lately, some departed souls in San Antonio have been all riled up about something. They’re downright terrified. And anything that scares the dead deserves old Jim’s undivided attention.",
                crippling: 'Seeing Jim in this hospital bed is heartbreaking. He hands you a key to a safety deposit box. Gain all of his possessions. The severity of the injuries means that he’ll never speak or play music again. You gently try to coax him into writing down everything he’s learned [influence]. If you pass, Jim fills a dozen sheets of paper with arcane illustrations; retreat Doom by 1. If you fail, all Jim wants is to listen to a record of his own music played over and over. Whether you pass or not, discard his Investigator token.',
                psychosis: "At the cemetery’s gate, you find Jim’s old suitcase and hear wild and erratic music ahead. Gain all of his possessions. Summoning all your nerve, you walk toward the crowd of dancing cadavers that surround Jim [will]. If you pass, you spend the night learning the secrets of the dead; retreat Doom by 1. If you fail, you run, and Jim is never seen by a living soul again. Whether you pass or not, discard his Investigator token."
            },
            character6: {
                name: "Charlie Kane",
                id: 'The Politicia',
                location: 'San Francisco, United States',
                img: 'media/charliekane.jpg',
                class: 'character-page',
                health: 4,
                sanity: 8,
                lore: 2,
                influence: 4,
                observation: 3,
                strength: 2,
                will: 2,
                items: ['Personal Assistant Asset'],
                action: ['Another investigator of your choice may immediately perform 1 additional action', 'When you perform an Acquire Assets action, you may allow other investigators to gain any cards you purchase.'],
                background: "When the press asks if Charlie is planning a run for national office, he smiles and says that he’s focused on the important issues. The truth is that he would love to launch his campaign, but right now the most important issue is preventing the end of the world without causing a panic. To do this, he’s been calling in favors across the country. Most recently, Charlie’s stopped in San Francisco to visit Hearst Castle. With the help of his friends and his finances, Charlie believes he can fix this problem without sacrificing a single vote.",
                crippling: 'The nurse at the front desk hands you a parcel. Gain all of his possessions. “Mr. Kane said to give you this package, but the doctor insists that no visitors be admitted.” You try to convince her to make an exception for you [influence]. If you pass, you find that Charlie’s health is beyond recovery, but he’s still in good spirits and you have a long talk; retreat Doom by 1. If you fail, Charlie spends the rest of his days cut off from all human contact. Whether you pass or not, discard his Investigator token.',
                psychosis: "The first thing Charlie does when you enter the restaurant is hand you all of his belongings. Gain all of his possessions. He offers you deals, promising to sell you Atlantis and introduce you to Caesar. You negotiate carefully with him [influence]. If you pass, he tells you all he knows in exchange for your napkin ring and a salt shaker; retreat Doom by 1. If you fail, Charlie gets angry and insists that you’ll be sorry when he’s the President of the world. Whether you pass or not, discard his Investigators token."
            },
            character7: {
                name: "Lily Chen",
                id: 'The Martial Artist',
                img: 'media/lilychen.jpg',
                class: 'character-page',
                health: 6,
                sanity: 6,
                lore: 2,
                influence: 2,
                observation: 2,
                strength: 4,
                will: 3,
                items: ['Protective Amulet Asset','Lucky Rabbit\'s foot' ],
                action: 'Spend any number of Health or Sanity, then recover an equal number of Health or Sanity.',
                background: "Lily speaks rarely and when she does, her words are measured and wise. After a lifetime of disciplined training, every gesture is graceful, uncluttered by hesitation. When she was an infant, an obscure sect of monks believed that she was born for a special purpose, to face a great evil. Now, the monks believe that the great evil is at hand, and they have brought Lily to Shanghai to begin fulfilling her destiny.",
                crippling: "When you reach the hospital, you find Lily’s thing, but she is not in her bed. Gain all of her possessions. You quickly find that she’s been kidnapped by cultists! You fight to free her [strength]. If you pass, you interrogate the cultists, and Lily is safely returned to the hospital to begin the slow healing process; retreat Doom by 1. If you fail, Lily disappears into the darkness. Whether you pass or not, discard her Investigator token.",
                psychosis: "You barely recognize the small woman huddled in an alleyway, her few belongings scattered next to her. Gain all of her possessions. “It wasn’t true,” Lily sobs. “I have no destiny. I cannot fight the darkness.” You reassure her that she has already done her part and that others will finish the task [influence]. If you pass, she chants over you, passing her destiny on to you; retreat Doom by 1. If you fail, Lily eventually falls into a catatonic state. Whether you pass or not, discard her Investigator token."
            },
            character8: {
                name: "Akachi Onyele",
                id: 'The Shaman',
                location: 15,
                img: 'media/akachionyele.jpg',
                class: 'character-page',
                health: 5,
                sanity: 7,
                lore: 3,
                influence: 2,
                observation: 2,
                strength: 2,
                will: 4,
                items: ['Mists of Releh Spell','clue' ],
                action: ["Look at the top 2 Gates in the Gate stack. Put 1 Gate on the top of the Gate stack and the other on the bottom", "When you close a Gate during an Other World Encounter, you may move to any space containing a Clue or a Gate."],
                background: "As a young girl in Nigeria, Akachi stayed apart from other children, preferring the company of imaginary friends. Her elders feared madness, but the village dibia believed that she had been chosen by the gods. The wise old man taught her how to travel between worlds and how to marshal spirits. Now, she has become a wise leader herself, traveling across Africa and teaching others to protect themselves. She’s recently arrived in Cape Town and from here, she will track down the dark forces that threaten humanity.",
                crippling: "By the time you find Akachi, she’s slipped into a coma. Doctors aren’t certain if she will recover. Gain all of her possessions. The hospital staff has grown very fond of her, and you try to convince them to tell you what she said to them while she was conscious [influence]. If you pass, you hear many stories; retreat Doom by 1. If you fail, you can’t get anyone to share Akachi’s story with you. Whether you pass or not, discard her Investigator token.",
                psychosis: "Akachi’s mind has left this world and she no longer has interest in material goods. Gain all of her possessions. An Odinani man gives you a bitter drink to help you reach her. After you drink it, you are assaulted by nightmarish visions, but you force yourself to keep searching for her [will]. If you pass, you hear Akachi’s voice sharing all she’s learned; retreat Doom by 1. If you fail, you curl up in a corner until the drink wears off. Whether you pass or not, discard her Investigator token."
            },
            character9: {
                name: "Silas Marsh",
                id: 'The Sailor',
                location: 'Sydney, Australia',
                img: 'media/silasmarsh.jpg',
                class: 'character-page',
                health: 8,
                sanity: 4,
                lore: 1,
                influence: 3,
                observation: 3,
                strength: 3,
                will: 3,
                items: ['Fishing Net Asset'],
                action: ['Move 1 space along a Ship path, then perfrom 1 additional action', 'If you are on a Sea space, investigators on your space roll 1 additional die when resolving tests'],
                background: "Even as a child in Innsmouth, Silas had a special connection to the sea. He’s an able and well-reasoned man on land, but on the ocean he possesses a singular strength and wit. It’s earned him a sterling reputation in every port across the globe, particularly in Sydney, where Silas set ashore last night. But this morning, the smell of the briny air carries dread as well as joy. There is something in his pas, something in Innsmouth, that he knows will some day catch up to him.",
                crippling: 'Silas had hidden his belongings in the prearranged cache, but the man himself is nowhere to be found. Gain all of his possessions. You search local hospitals filled with the unidentified dead or dying [observation]. If you pass, you find Silas alive but incapacitated, and you arrange a private nurse to watch over him; retreat Doom by 1. If you fail, Silas dies alone and unrecognized. Whether you pass or not, discard his Investigator token.',
                psychosis: "You find Silas and gain all of his possessions. He has grown pale, and his breath has become a loud wheeze. He tells you, “I’m a Marsh. It’s in my blood. Not long now, I’ll join my family, down in the deep.” You ask a doctor to watch him overnight [influence]. If you pass, the sailor shares all he’s learned before dying peacefully in his sleep; retreat Doom by 1. If you fail, Silas surrenders his humanity and disappears into the sea. Whether you pass or not, discard his investigator token."
            },
            character10: {
                name: "Jacqueline Fine",
                id: 'The Psychic',
                location: 5,
                img: 'media/jacquelinefine.jpg',
                class: 'character-page',
                health: 4,
                sanity: 8,
                lore: 4,
                influence: 2,
                observation: 3,
                strength: 1,
                will: 3,
                items: ['Flesh Ward Spell', 'clue' ],
                action: ['You may trade any number of Clues with an investigator', 'Once per round, when another investigator gains a non-Common Condition, you may look at the back of that card and gain 1 Clue.'],
                background: "At first, Jacqueline’s dreams of fire and destruction seemed like a curse. Monsters ran rampant through city streets and some greater darkness loomed on the horizon. However, she has recently learned to control her visions and observe events in detail. Yesterday, she traveled from Boston to Minneapolis to explore an abandoned warehouse she’d seen in her dreams. Inside, she found evidence of a terrible cult that had practiced unspeakable rituals there. Jacqueline hopes to use what she’s learned to prevent the terrible future that haunts her sleep.",
                crippling: 'Somehow, Jacqueline knew you would be at this cafe to receive the parcel. Gain all of her possessions. Strangely, everyone here encountered her sometime after she was injured. You try to convince everyone to share their story [influence]. If you pass, you get the whole message Jacqueline hoped to convey; retreat Doom by 1. If you fail, the story is incomplete and makes no sense. Whether you pass or not, discard her Investigator token.',
                psychosis: 'You visit Jacqueline in the asylum and claim her belongings. Gain all of her possessions. She seems lost in her own world, talking to visions only she sees. You do your best to interpret what she’s seeing based on what she says [lore]. If you fail, Jacqueline remains trapped in a world only she can see. Whether you pass or not, discard her Investigator token.'
            },
            character11: {
                name: "Leo Anderson",
                id: 'The Expedition Leader',
                location: 'Buenos Aires, Argentina',
                img: 'media/leoanderson.jpg',
                class: 'character-page',
                health: 6,
                sanity: 6,
                lore: 2,
                influence: 2,
                observation: 3,
                strength: 3,
                will: 3,
                items: 'Hired Muscle Asset',
                action: ['Test [influence]. If you pass, gain 1 Ally Asset of your choice from the reserve or the discard pile', 'If you are on a Wilderness space, investigators on your space roll 1 additional die when resolving tests.'],
                background: "Leo Anderson has spent his whole life getting into the deadliest and most obscure corners of the globe. Along the way, he’s lost good people. Fever takes some; others are claimed by wild beasts. After a recent, disastrous venture in the Yucatan, Leo barely made it back to Buenos Aires alive. He’s sick of burying the people who trusted him. But the job’s not done yet. The world is in danger, and crying in his drink won’t fix that. He’s picked up a little hired help here, and in the morning, he’ll head back out into the wild.",
                crippling: '“It’s all in the drawer,” Leo tells you. “Take it and leave me here to die. I deserve it.” Gain all of his possessions. Leo’s injuries have left him bedridden and in agony in this hotel. Worse, he’s lost his will to live. You try to convince him that he hasn’t failed his friends [influence]. If you pass, he draws you several maps and promises to let you check him into a hospital; retreat Doom by 1. If you fail, he never speaks to you again. Whether you pass or not, discard his Investigator token.',
                psychosis: "You find Leo’s canvas bag in his hotel room. Gain all of his possessions. While you are distracted, Leo attacks you. His face is covered in tribal markings, and he speaks a hodgepodge of tribal dialects. You try to subdue him [strength]. If you pass, you get Leo to an asylum, and the doctors learn some of what happened to him; retreat Doom by 1. If you fail, Leo is gone when you regain consciousness. Whether you pass or not, discard his Investigator token"
            },
            character12: {
                name: "Mark Harrigan",
                id: 'The Soldier',
                location: 14,
                img: 'media/markharrigan.jpg',
                class: 'character-page',
                health: 8,
                sanity: 4,
                lore: 1,
                influence: 2,
                observation: 2,
                strength: 4,
                will: 4,
                items: ['.38 Revolver Asset', 'Kerosene Asset'],
                action: ['You and 1 Monster on your space each lose 1 Health', 'You cannot become Delayed or gain a Detained Condition unless you choose to'],
                background: 'During the war, Mark witnessed horrors he could not explain, and he wrote of what he saw in letters to his beloved wife, Sophie. When Mark returned home, he discovered that Sophie was no longer human. One of the beasts that Mark had seen overseas had taken over her body, killing her in the process. Afterward, Mark’s thirst for vengeance lead him to Helsinki, where some of these creatures had posed as German soldiers during the Great War.',
                crippling: "While you are collecting Mark’s things, you smell smoke in the hospital. Gain all of his possessions. The hospital has been set on fire, and you run to Mark’s room and try to carry him to safety [strength]. If you pass, Mark is able to tell you who set the fire; retreat Doom by 1. If you fail, the smoke overcomes Mark, and he dies outside the hospital. Whether you pass or not, discard his Investigator token.",
                psychosis: "You take custody of Mark’s belongings and arrange to visit him in the asylum. Gain all of his possessions. To your dismay, Mark is convinced that you are a creature disguising itself as a human. You do your best to convince him that you are telling the truth [influence]. If you pass, he shows you sketches he made of the horrible monsters that he’s been hunting; retreat Doom by 1. If you fail, Mark screams accusations of murder at you. Whether you pass or not, discard his Investigator token."
            },
        }
        this.assets = {
            asset01: {
                name:'Lucky Cigarette Case',
                type: 'trinket',
                description: 'Once per round, you may add 1 to the result of 1 die when resolving a test',
                value: 2,
                // test + 1
            },
            asset02: {
                name:'Arcan Manuscripts',
                type: 'tome',
                description: 'Gain [+1 lore] when resolving Spell effects',
                value:1,
                // if spell test, test + 1 roll
            },
            asset03: {
                name: 'Agency Quarantine',
                type: 'service',
                description: 'When you gain this card, immediately choose a space. Each Monster on the chosen space loses 4 Health. Then discard this card',
                value: 4,
                // if monster, - 4 Health to monster
            },
            asset04: {
                name: 'Private Investigator',
                type: 'ally',
                description: 'Gain [+1 observation]. You may reroll 1 die when resolving a [observation] test.',
                value: 2,
                // observation + 1; reroll on observation test
            },
            asset05: {
                name: 'Witch Doctor',
                type: 'ally',
                description: 'Investigators on your space may recover 1 additional Health or discard a Cursed Condition when performing a Rest action',
                value: 3,
                // Rest + 1 or remove cursed (condition)
            },
            asset06: {
                name: 'Dynamite',
                type: 'weapon',
                description: 'You may discard this card to cause each Monster on your space to lose 3 Health',
                value: 3,
                // if monster + character, monster.health - 3
            },
            asset07: {
                name: 'Cat Burglar',
                type: 'ally',
                description: 'Roll 1 die. On a 5 or 6, gain 1 Item o Trinket Asset from the reserve. On a 1, discard this card',
                value: 1,
                // roll; if roll >= 5, add item||trinket; if roll == 1, discard
            },
            asset08: {
                name: 'Kerosene',
                type: 'item',
                description: 'You may discard this card to gain [+5 strength] during a Combat Encounter',
                value: 1,
                // during combat, + 5 strength; discard
            },
            asset09: {
                name: '.38 Revolver',
                type: 'weapon',
                description: 'Gain [+2 strength] during Combat Encounters',
                value: 1,
                // if combat roll, strength + 2
            },
            asset10: {
                name: 'Silver Twilight Ritual',
                type: 'weapon',
                description: 'When you gain this card, immediately retreat Doom by 1. Then discard this card.',
                value: 3,
                // DoomCount - 1; discard this card
            },
            asset11: {
                name: '.18 Derringer',
                type: 'weapon',
                description: 'You may add 1 to the result of 1 die when resolving a [strength] test during Combat Encounters',
                value: 1,
                // if strength test, roll + 1
            },
            asset12: {
                name: 'Pocket Watch',
                type: 'trinket',
                description: 'You cannot become Delayed unless you choose to',
                value: 1,
                // while true, no delay else false? (don't know how to word that...)
            },
            asset13: {
                name: 'Fine Clothes',
                type: 'item',
                description: 'Each 6 you roll when performing an Acquire Assets action counts as 2 successes',
                value: 2,
                // forEach 6 on acquireAssets roll, + 2
            },
            asset14: {
                name: 'Arcane Tome',
                type: 'tome',
                description: 'Gain [+2 lore] when resolving Spell effects. When you perform a Rest action, you may test [lore]. If you pass, gain 1 Spell',
                value: 3,
                // if spell, lore + 2; if rest, test lore; if lore test >=5, + 1 spell
            },
            asset15: {
                name: 'Carbine Rifle',
                type: 'weapon',
                description: 'Once per round, you may gain [+5 strength] during a Combat Encounter',
                value: 3,
                // combatRoll + 5 strength
            },
            asset16: {
                name: 'King James Bible',
                type: 'tome',
                description: 'You may reroll 1 die when resolving a [will] test during a Combat Encounter. When you perform a Rest action, recover 1 additional Sanity',
                value: 2,
                // if combatEncounter, reroll will test; if rest, sanity + 1
            },
            asset17: {
                name: 'Protect Amulet',
                type: 'item',
                description: 'Gain [+1 will] during Combat Encounters',
                value: 1,
                // combatEncounter will + 1
            },
            asset18: {
                name: 'Puzzle Box',
                type: 'trinket',
                description: 'When you perform a Rest action, you may attempt to open the puzzle box [-2 observation]. If you pass, you may discard this card to gain 1 Artifact',
                value: 3,
                // observation - 2roll; + artifact
            },
            asset19: {
                name: 'Private Care',
                type: 'service',
                description: 'When you gain this card, immediately recover all Health and Sanity',
                value: 2,
                // reset Health and Sanity
            },
            asset20: {
                name: 'Arcane Scholar',
                type: 'ally',
                description: 'Gain [+1 lore]. You may reroll 1 die when resolving a [lore] test',
                value: 2,
                // lore + 1; reroll 1 lore test
            },
            asset21: {
                name: 'Delivery Service',
                type: 'service',
                description: 'When you gain this card, immediately give any number of Item possessions to another investigator on any space. Then discard this card.',
                value: 1,
                // no idea how to code this...
            },
            asset22: {
                name: 'Urban Guide',
                type: 'ally',
                description: 'If you are on a City space, investigators on your space roll 1 additional die when resolving tests except when resolving Other World Encounters',
                value: 4,
                // figure out location spaces i guess
            },
            asset23: {
                name: 'Holy Cross',
                type: 'item',
                description: 'Gain [+2 will] during Combat Encounters',
                value: 2,
                // +2 will combatRolls
            },
            asset24: {
                name: 'Vatican Missionary',
                type: 'ally',
                description: 'You may reroll 1 die when resolving a [will] test',
                value: 2,
                // reroll will test
            },
            asset25: {
                name: 'Hired Muscle',
                type: 'ally',
                description: 'You may reroll 1 die when resolving a [strength] test',
                value: 2,
                // reroll strength test
            },
            asset26: {
                name: 'Axe',
                type: 'weapon',
                description: 'Gain [+2 strength] during Combat Encounters. You may spend 2 Sanity to reroll any number of dice when resolving a [strength] test during a Combat Encounter',
                value: 2,
                // if combatRoll, strength +2; reroll somehow
            },
            asset27: {
                name: 'Lucky Rabbit\'s Foot',
                type: 'trinket',
                description: 'Once per round, you may reroll 1 die when resolving a test.',
                value: 1,
                // reroll
            },
            asset28: {
                name: 'Personal Assistant',
                type: 'ally',
                description: 'You may reroll 1 die when resolving a [influence] test.',
                value: 2,
                // if influenceTest, reroll
            },
            asset29: {
                name: 'Lodge Researcher',
                type: 'ally',
                description: 'If you defeat a Monster during a Combat Encounter, recover 1 Sanity and gain 1 Clue.',
                value: 3,
                // if victory, + 1 sanity & + 1 clue
            },
            asset30: {
                name: 'Charter Flight',
                type: 'service',
                description: 'When you gain this card, immediately move up to 2 spaces. Then discard this card.',
                value: 1,
                // move 2 spaces
            },
            asset31: {
                name: 'Fishing Net',
                type: 'item',
                description: 'You may reroll 1 die when resolving a [strength] test during a Combat Encounter. Reduce the damage of Monsters you encounter by 1 to a minimum of 1.',
                value: 2,
                // if combatRoll, strength test + 1; reduce damage
            },
            asset32: {
                name: 'Wireless Report',
                type: 'service',
                description: 'When you gain this card, immediately give any number of Clues to another investigator on any space. Then discard this card.',
                value: 1,
                // + clue.qty to player
            },
            asset33: {
                name: 'Holy Water',
                type: 'magical', // item
                description: ['You may discard this card to gain [+5 will] and [strength] during a Combat Encounter.', 'Action: You may discard this card to choose an investigator on your space. That investigator gains a Blessed Condition.'],
                value: 2,
                // 
            },
            asset34: {
                name: 'Bull Whip',
                type: 'weapon',
                description: 'Gain [+1 strength] during Combat Encounters. You may reroll 1 die when resolving a [strength] test during a Combat Encounter.',
                value: 1,
                // if combatRoll, + 1 strength; reroll strength
            },
            asset35: {
                name: 'Double-barreled Shotgun',
                type: 'weapon',
                description: 'Gain [+4 strength] during Combat Encounters. Each 6 you roll when resolving a [strength] test during a Combat Encounter counts as 2 success.',
                value: 4,
                // if combatRoll, +4 strength; if combatRoll == 6, + 2 rolls
            },
            asset36: {
                name: 'Sanctuary',
                type: 'service',
                description: 'When you gain this card, you may immediately discard 1 Condition. Then discard this card.',
                value: 2,
                // remove condition
            },
            asset37: {
                name: '.45 Automatic',
                type: 'weapon',
                description: 'Gain [+3 strength] during Combat Encounters.',
                value: 2,
                // if combatRoll, strength + 3
            },
            asset38: {
                name: 'Spirit Dagger',
                type: 'magical weapon', //item
                description: 'Gain [+1 will] and [+2 strength] during Combat Encounters',
                value: 2,
                // if combatRoll, will ++ & strength ++
            },
            asset39: {
                name: 'Whiskey',
                type: 'item',
                description: 'You may discard this card to prevent an investigator on your space from losing up to 2 Sanity.',
                value: 1,
                // if player - 2 Sanity, + 2 sanity to player
            },
            asset40: {
                name: 'Bandages',
                type: 'item',
                description: 'You may discard this card to prevent an investigator on your space from losing up to 2 Health.',
                value: 1,
                // if player - 2 health, + 2 health to player
            },

        }
        this.conditions = {
            condition01: {
                name: 'Dark Pact',
                type: 'deal',
                effect: 'reckoning',
                front: 'Roll 1 die. On a 1, it is time to fulfill your part of the bargain; flip this card.',
                backName: 'Pact with Yog-Sothoth',
                back: 'The blasphemous power takes hold of you, forcing you to carry out the desires of the Lurker at the Threshold. Spawn 1 Gate for each Spell you have, then advance the Omen by 1. Then discard this card',
                qty: 1,
            },
            condition02: {
                name: 'Dark Pact',
                type: 'deal',
                effect: 'reckoning',
                front: 'Roll 1 die. On a 1, it is time to fulfill your part of the bargain; flip this card.',
                backName: 'Pact with the Dark Man',
                back: 'You knew that ever since you signed your name in that terrible book, signed it in your own blood, this day would come eventually. You can hear his cloven feet approaching, and you are certain that the end is near. You are devoured.',
                qty: 1,
                // game over
            },
            condition03: {
                name: 'Dark Pact',
                type: 'deal',
                effect: 'reckoning',
                front: 'Roll 1 die. On a 1, it is time to fulfill your part of the bargain; flip this card.',
                backName: 'One of the Thousand',
                back: 'The chanting reaches a fever pitch. The cult leader places a ritual dagger in your hand and tells you, "The time has come. You must pay the blood you owe to the Children of the Black Goat." Another investigator of your choice is devoured. Then discard this card.',
                qty: 1,
                // game over 
            },
            condition04: {
                name: 'Amnesia',
                type: 'madness',
                effect: 'reckoning',
                effectDescription: 'Test [will]. If you fail, flip this card.',
                front: 'When you perform a Rest action, you may roll 1 die. On a 5 or 6, discard this card.',
                backName: 'Forgotten Crimes',
                back: 'You don\'t want to believe it\'s true, but the evidence is irrefutable. At some point that you no longer recall, you went on a crime spree. Now you must accompany the police. Gain a Detained Condition. Then discard this card.',
                qty: 1,
                // if restRoll >= 5, remove condition
            },
            condition05: {
                name: 'Amnesia',
                type: 'madness',
                effect: 'reckoning',
                effectDescription: 'Test [will]. If you fail, flip this card.',
                front: 'When you perform a Rest action, you may roll 1 die. On a 5 or 6, discard this card.',
                backName: 'The Terrible Truth',
                back: 'Suddenly, the terrible memories of the profane ritual return to you. How merciful your mind had been to forget your horrible deeds. Now that you remember the truth, you know you will soon have to hold up your end of the bargain. Gain a Dark Pact Condition. Then discard this card.',
                qty: 1,
            },
            condition06: {
                name: 'Amnesia',
                type: 'madness',
                effect: 'reckoning',
                effectDescription: 'Test [will]. If you fail, flip this card.',
                front: 'When you perform a Rest action, you may roll 1 die. On a 5 or 6, discard this card.',
                backName: 'Unexplained Debts',
                back: 'According to the paperwork written in your own hand, you took out a loan and made unspecified promises of repayment. To you dismay, there is no sign of the money or what you could have spent it on. Gain a Debt Condition. Then discard this card.',
                qty: 1,
            },
            condition07: {
                name: 'Back Injury',
                type: 'injury',
                effect: 'reckoning',
                effectDescription: 'Test [strength]. If you fail, flip this card.',
                front: 'When you perform a Rest action, you may roll 1 die. On a 5 or 6, discard this card.',
                backName: 'Nerve Damage',
                back: 'The numbness in your fingers has returned, making it nearly impossible to manipulate objects, and you clumsily drop a valuable item beyond recovery. Discard 1 item possession. Then flip this card.',
                qty: 1,
            },
            condition08: {
                name: 'Back Injury',
                type: 'injury',
                effect: 'reckoning',
                effectDescription: 'Test [strength]. If you fail, flip this card.',
                front: 'When you perform a Rest action, you may roll 1 die. On a 5 or 6, discard this card.',
                backName: 'Fractured Spine',
                back: 'Searing pain suddenly runs up and down your spine. You can barely lift your arms, let alone carry a lot of equipment. It is just too painful to carry them all. Discard all but 1 of your Item possessions. Then discard this card.',
                qty: 1,
            },
            condition09: {
                name: 'Back Injury',
                type: 'injury',
                effect: 'reckoning',
                effectDescription: 'Test [strength]. If you fail, flip this card.',
                front: 'When you perfrom a Rest action, you may roll 1 die. On a 5 or 6, discard this card.',
                backName: 'Muscle Spasms',
                back: 'Your hand begins to shake uncontrollably, breaking whatever you are holding. Your whole body is overcome by tremors. Discard 1 Item possession and become Delayed. Then discard this card.',
                qty: 1,
            },
            condition10: {
                name: 'Internal Injury',
                type: 'injury',
                effect: 'reckoning',
                effectDescription: 'Test [strength]. If you fail, flip this card.',
                front: 'When you perform a Rest action, you may roll 1 die. On a 5 or 6, discard this card.',
                backName: 'Cracked Rib',
                back: 'You keep your hand pressed against your side to minimize the pain, but each breath is still agonizing. Lose 1 Health. Then flip this card.',
                qty: 1,
            },
            condition11: {
                name: 'Internal Injury',
                type: 'injury',
                effect: 'reckoning',
                effectDescription: 'Test [strength]. If you fail, flip this card.',
                front: 'When you perform a Rest action, you may roll 1 die. On a 5 or 6, discard this card.',
                backName: 'Excruciating Pain',
                back: 'The pain rises to a crescendo, knocking you off your feet. When you finally regain consciousness, the floor is covered in blood. Lose 3 Health. Then discard this card.',
                qty: 1,
            },
            condition12: {
                name: 'Internal Injury',
                type: 'injury',
                effect: 'reckoning',
                effectDescription: 'Test [strength]. If you fail, flip this card.',
                front: 'When you perform a Rest action, you may roll 1 die. On a 5 or 6, discard this card.',
                backName: 'Internal Bleeding',
                back: 'The hacking fit is too excriciating to continue moving, and you begin coughing up blood. Lose 1 Health and become Delayed. Then discard this card.',
                qty: 1,
            },
            condition13: {
                name: 'Leg Injury',
                type: 'injury',
                effect: 'reckoning',
                effectDescription: 'Test [strength]. If you fail, flip this card.',
                front: 'When you perform a Rest action, you may roll 1 die. On a 5 or 6, discard this card.',
                backName: 'Stabbing Pain',
                back: 'You know the injury is not severe, but with every few steps you take, the pain in your ankel forces you to rest for a few minutes. Become Delaed. Then flip this card.',
                qty: 1,
                // keep and repeat until removed
            },
            condition14: {
                name: 'Leg Injury',
                type: 'injury',
                effect: 'reckoning',
                effectDescription: 'Test [strength]. If you fail, flip this card.',
                front: 'When you perform a Rest action, you may roll 1 die. On a 5 or 6, discard this card.',
                backName: 'Twisted Knee',
                back: 'Your knee hurts and is not strong enough to hold your weight. Lose 2 Health unless you become Delayed. Then flip this card.',
                qty: 1,
                // keep and repeat until removed
            },
            condition15: {
                name: 'Leg Injury',
                type: 'injury',
                effect: 'reckoning',
                effectDescription: 'Test [strength]. If you fail, flip this card.',
                front: 'When you perform a Rest action, you may roll 1 die. On a 5 or 6, discard this card.',
                backName: 'Strange Remedy',
                back: 'You hop forward, trying to keep your weight on your good foot while you search for a doctor that can treat you. Lose 1 Health. You may become Delayed to discard this card. If you do not discard it, flip this card.',
                qty: 1,
            },
            condition16: {
                name: 'Hallucinations',
                type: 'madness', 
                effect: 'reckoning',
                effectDescription: 'Test [will]. If you fail, flip this card.',
                front: 'When you perform a Rest action, you may roll 1 die. On a 5 or 6, discard this card.',
                backName: 'Delusions',
                back: 'You see now that all of this supposed evidence you\'ve been collecting is just nonsense. Discard all of your Clues. Your head feels so clear now! All of the monsters and conspiracies you\'ve been hunting were obviously figments of your imagination. Then discard this card.',
                qty: 1,
                // if willRoll != success; discard clues
            },
            condition16: {
                name: 'Hallucinations',
                type: 'madness', 
                effect: 'reckoning',
                effectDescription: 'Test [will]. If you fail, flip this card.',
                front: 'When you perform a Rest action, you may roll 1 die. On a 5 or 6, discard this card.',
                backName: 'Swarming',
                back: 'The bugs are everywhere. They crawl across your skin and into your mouth. Lose 3 Sanity. Then discard this card.',
                qty: 1,
                // lose Sanity
            },
            condition16: {
                name: 'Hallucinations',
                type: 'madness', 
                effect: 'reckoning',
                effectDescription: 'Test [will]. If you fail, flip this card.',
                front: 'When you perform a Rest action, you may roll 1 die. On a 5 or 6, discard this card.',
                backName: 'The Voices',
                back: 'In the past, you\'ve barely been able to hear the whispering at the edge of your consciousness. Now that the voices are more audible, you can hear the horrible demands they are making of you. Lose 1 Sanity. Then flip this card.',
                qty: 1,
                // if reckoning || willRoll failure, - 1 Sanity
            },
            condition17: {
                name: 'Paranoia',
                type: 'madness', 
                effect: 'reckoning',
                effectDescription: 'Test [will]. If you fail, flip this card.',
                front: 'When you perform a Rest action, you may roll 1 die. On a 5 or 6, discard this card.',
                backName: 'Violent Outbursts',
                back: 'You\'ve felt the anger coiled up inside of you for such a long time. You just can\'t control it any longer. You lash out at anyone near you. Each other investigator on your space loses 2 Health and you discard 1 Ally Asset. Then flip this card.',
                qty: 1,
                // forEach character on same space, lose 2 Health
            },
            condition18: {
                name: 'Paranoia',
                type: 'madness', 
                effect: 'reckoning',
                effectDescription: 'Test [will]. If you fail, flip this card.',
                front: 'When you perform a Rest action, you may roll 1 die. On a 5 or 6, discard this card.',
                backName: 'Kleptomania',
                back: 'Aganst rational thought, you compulsively take what does not belong to you and hide it away. Gain 1 random Item Asset from the deck. Then you must hide from the authorities [observation]. If your test result is less than the value of the Asset you gained, discard that Asset and gain a Detained COndition. Then discard this card.',
                qty: 1,
                // if observationRoll < item.value; - item & + detained
            },
            condition19: {
                name: 'Paranoia',
                type: 'madness', 
                effect: 'reckoning',
                effectDescription: 'Test [will]. If you fail, flip this card.',
                front: 'When you perform a Rest action, you may roll 1 die. On a 5 or 6, discard this card.',
                backName: 'Agoraphobia',
                back: 'You cannot tolerate the company of other people any longer. The seething masses of humanity are a blight on the face of the planet. If you are on a City space, the presence of other people erodes your reason; lose 2 Sanity. Then flip this card.',
                qty: 1,
                // if character contains(?) city; Sanity - 2
            },
            condition20: {
                name: 'Detained',
                type: 'restriction',
                effect: 'local action',
                effectDescription: 'Test [influence]. If you pass, discard this card.',
                backName: 'Cruel and Unusual',
                back: 'Your captors are going to subject you to vicious tactics designed to beak your will if you do not give them the information they require. Spend 1 Clue or test [-1 will]. If you fail, lose 3 Sanity and gain a Paranoia Condition. Then discard this card.',
                qty: 1,
                // if detained, - Clue else + paranoia
            },
            condition21: {
                name: 'Detained',
                type: 'restriction',
                effect: 'local action',
                effectDescription: 'Test [influence]. If you pass, discard this card.',
                backName: 'Starvtion',
                back: '"The food is poison," a fellow prisoner whispers, "Don\'t eat it." You will surely starve to death if you do not give your captors the information they\'re seeking. Spend 1 Clue or test [-1 strength]. If you fail, lose 3 Health and gain an Internal Injury Condition. Then discard this card.',
                qty: 1,
                //
            },
            condition22: {
                name: 'Detained',
                type: 'restriction',
                effect: 'local action',
                effectDescription: 'Test [influence]. If you pass, discard this card.',
                backName: 'Holding Cell',
                back: 'Your captors rarely speak, except to interrogate you for information. You don\'t think you can hold out much longer, and yoiu hope the guard that watches your cell might take pity on you. Spend 1 Clue or test [-1 influence]. If you fail, they beat you and leave you to die; lose 2 Health and 2 Sanity. Then discard this card.',
                qty: 1,
                // health - 2; sanity - 2
            },
            condition23: {
                name: 'Debt',
                type: 'deal',
                effect: 'reckoning',
                effectDescription: 'Some men have come to collect on your debt. Flip this card.',
                front: 'Test [influence]. If you pass, discard this card.',
                backName: 'Hitmen',
                back: 'You see now tht it was no ordinary bank you borrowed from. Some armed men confront you and demand that you repay what you owe [strength]. If you fail, lose 3 Health. Then discard this card.',
                qty: 1,
            },
            condition24: {
                name: 'Debt',
                type: 'deal',
                effect: 'reckoning',
                effectDescription: 'Some men have come to collect on your debt. Flip this card.',
                front: 'Test [influence]. If you pass, discard this card.',
                backName: 'Unwilling Servant',
                back: 'A sorcerer holds you down and carves a symbol into your forehead. "Time to pay what you owe," he says. You attempt to dispel the darknessthat fills your thoughts [lore]. If you fail, you have no recollection of your actions; gain an Amnesia Condition. Then discard this card.',
                qty: 1,
            },
            condition25: {
                name: 'Debt',
                type: 'deal',
                effect: 'reckoning',
                effectDescription: 'Some men have come to collect on your debt. Flip this card.',
                front: 'Test [influence]. If you pass, discard this card.',
                backName: 'Make a Deal',
                back: 'Walking into the alley, you hear the distinct ticking of a watch. An intruder dressed in a fine black suit stands in the shadows. He tells you that he\'ll help in exchange for an undefined favor. You may gain a Dark Pact Condition. If you do not, the ticking noise begins to hypnotize you; advance Doom by 1. Then discard this card.',
                qty: 1,
            },
            condition26: {
                name: 'Debt',
                type: 'deal',
                effect: 'reckoning',
                effectDescription: 'Some men have come to collect on your debt. Flip this card.',
                front: 'Test [influence]. If you pass, discard this card.',
                backName: 'Beyond Riches',
                back: 'The man wears a hat and a brown trench coat. "We do not want money," he hisses and grabs your throat. You feel as if part of your identity is being stolen from you [will]. If you fail, a fragment of your soul is ripped away; lose 3 Sanity. Then discard this card.',
                qty: 1,
            },
            condition27: {
                name: 'Debt',
                type: 'deal',
                effect: 'reckoning',
                effectDescription: 'Some men have come to collect on your debt. Flip this card.',
                front: 'Test [influence]. If you pass, discard this card.',
                backName: 'Debt Collector',
                back: 'The man in the silk suit hands you a large stack of papers. "I believe you\'ll find this offer quite reasonable." His smile reminds you of a shark. It\'s clear that he will not take "no" for an answer [influence]. If you fail, discard 2 Item possessions. Then discard this card.',
                qty: 1,
            },
            condition28: {
                name: 'Debt',
                type: 'deal',
                effect: 'reckoning',
                effectDescription: 'Some men have come to collect on your debt. Flip this card.',
                front: 'Test [influence]. If you pass, discard this card.',
                backName: 'Local Authorities',
                back: '"Someone was asking about you," says a fellow traveler. "They said you owe quite a bit of money. Naturally, I sad that I didn\'t know anything, but you may want to find your way to a new town soo." You attempt to hide from the police [observation]. If you fail, move to the nearest City space and gain a Detained Condition unless you discard 1 Ally asset. Then discard this card.',
                qty: 1,
            },
            condition29: {
                name: 'Cursed',
                type: 'bane',
                effect: 'reckoning',
                effectDescription: 'Roll 1 die. On a 4, 5, or 6, discard this card.',
                front: 'Only 6\'s count as successes on your tests. If you would gain another Cursed Condition, flip this card instead. If you would gain a Blessed Condition, discard this card instead.',
                backName: 'Harried',
                back: 'The fortune teller explains that you are a beacon, visible to all monstrous beings. For as long as this curse stands, you will be hunted by these creatures. You hear a feral growl outside in the dark. A monster ambushes you. (Only 6\'s count as successes on your tests.) Then flip this card.',
                qty: 1,
            },
            condition30: {
                name: 'Cursed',
                type: 'bane',
                effect: 'reckoning',
                effectDescription: 'Roll 1 die. On a 4, 5, or 6, discard this card.',
                front: 'Only 6\'s count as successes on your tests. If you would gain another Cursed Condition, flip this card instead. If you would gain a Blessed Condition, discard this card instead.',
                backName: 'The Innsmouth Look',
                back: 'Each night you dream of the dark comfort of the ocean\'s depths. Even during the day, something beckons you to the water. If you are on a Sea space, your body begins to change horribly into a fish-like creature; you are devoured. If you are not on a Sea space, the change cripples you; lose 3 Health and discard this card.',
                qty: 1,
            },
            condition31: {
                name: 'Cursed',
                type: 'bane',
                effect: 'reckoning',
                effectDescription: 'Roll 1 die. On a 4, 5, or 6, discard this card.',
                front: 'Only 6\'s count as successes on your tests. If you would gain another Cursed Condition, flip this card instead. If you would gain a Blessed Condition, discard this card instead.',
                backName: 'Karmic Justice',
                back: 'Perhaps you are not so forsaken. You feel that the dark forces that have hounded you have now dissipated. You do not question this sudden good fortune. Discard this card.',
                qty: 1,
            },
        }
        this.spells = {
            spell01: {
                name:,
                type:,
                front:,
                
            }
        }
        /*
        this is going to be annoying having to classify
        this.spells =  {
            name:,
            type:,
            description:,
            qty:,
        }*/
    }
}