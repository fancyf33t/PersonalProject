// let's start with getting a blank array set up for the character



var Jim_Culver;

Jim_Culver = [
    ['Health', 5],
    ['Sanity', 7],
    ['Lore', 3],
    ['Influence', 3],
    ['Observation', 2],
    ['Strength', 2],
    ['Will', 3],
    ['Condition',
        ['Conditions Inventory',]],
    ['Items',
        ['Items Inventory', 
            ['Clue', 1]]],
    ['Spells',
        ['Spell Inventory', 'Shriveling Spell']],
];

console.log(`Greetings, your character sheet says that you are Jim Culver. Your stats are: ${Jim_Culver}`)


/*
var nflChampions = [
    ['Green Bay Packers', 13],
    ['Chicago Bears', 9],
    ['New York Giants', 8],
    ['New England Patriots', 6],
    ['Pittsburgh Steelers', 6],
    ['Washington Football Team', 5],
    ['Dallas Cowboys', 5],
    ['San Francisco 49ers', 5],
    ['Detroit Lions', 4],
    ['Indianapolis Colts', 4],
    ['Cleveland Browns', 4],
    ['Philadelphia Eagles', 4],
    ['Las Vegas Raiders', 3],
    ['Denver Broncos', 3],
    ['Los Angeles Rams', 3],
    ['Arizona Cardinals', 2],
    ['Miami Dolphins', 2],
    ['Baltimore Ravens', 2],
    ['Seattle Seahawks', 1],
    ['Tampa Bay Buccaneers', 1],
    ['New Orleans Saints', 1],
    ['New York Jets', 1],
    ['Kansas City Chiefs', 1],
    ['Minnesota Vikings'],
    ['Atlanta Falcons'],
    ['North Carolina Panthers'],
    ['Buffalo Bills'],
    ['Cincinatti Bengals'],
    ['Jacksonville Jaguars'],
    ['Tennessee Titans'],
    ['Houston Texans'],
    ['San Diego Chargers'],
]
var cheaters = ['caught video taping opponents', ' deflating balls', ' actively pandering to referees']
nflChampions[3].push(cheaters);



var idx = Math.floor(Math.random() * nflChampions.length);
var message; //this simply initializes the variable message

if (nflChampions[idx].length === 1) {
    message = `Hello, darkness my old friend. It is me. The ${nflChampions[idx][0]}...`;
} else if (nflChampions[idx].length === 3) {
    console.log(`You might be a champion ${nflChampions[idx][0]}, but you are also charged with the following: ${nflChampions[idx][2]}`)
} else {
    message = `CONGLATURATIONS, ${nflChampions[idx][0]}!!! You have ${nflChampions[idx][1]} championship titles!! Good job!!`;
}

console.log(message);
*/

console.clear()
var fight_result_health, fight_result_will;
if (fight >= 5) {
    fight_result_health = 'health test has passed';
} else if (fight >= 5) {
    fight_result_will = 'will test has passed';
} else if (fight <= 4) {
    console.log(Jim_Culver[0][1] - monster[0][1])
    fight_result = 'oops'
}
console.clear()

// turn this into an object for simplicity

class Character {
    constructor() {
        this.name
        this.startingLocation
        this.startingItems
        this.health 
        this.sanity
        this.lore
        this.influence
        this.observation
        this.strength
        this.will 
        this.intro
        this.incapacitated
        this.psychosis
    }
}

let jim = new Character();

jim.name = 'Jim Culver';
jim.startingLocation = 'Space 6';
jim.startingItems = ['1 Shriveling Spell', '1 Clue'];
jim.health = 7;
jim.sanity = 5;
jim.lore = 3;
jim.influence = 3;
jim.observation = 2;
jim.strength = 2;
jim.will = 3;
jim.intro = 'Old Jim Culver’s music gives sweet comfort to the soul, and it doesn’t matter if that soul belongs to the living or the dead. Folks in their graves, they love their little chats with Jim. It used to bother him, but now he’s happy for the company. Lately, some departed souls in San Antonio have been all riled up about something. They’re downright terrified. And anything that scares the dead deserves old Jim’s undivided attention.';
jim.incapacitated = 'Seeing Jim in this hospital bed is heartbreaking. He hands you a key to a safety deposit box. Gain all of his possessions. The severity of the injuries means that he’ll never speak or play music again. You gently try to coax him into writing down everything he’s learned [influence]. If you pass, Jim fills a dozen sheets of paper with arcane illustrations; retreat Doom by 1. If you fail, all Jim wants is to listen to a record of his own music played over and over. Whether you pass or not, discard his Investigator token.';
jim.psychosis = 'At the cemetery’s gate, you find Jim’s old suitcase and hear wild and erratic music ahead. Gain all of his possessions. Summoning all your nerve, you walk toward the crowd of dancing cadavers that surround Jim [will]. If you pass, you spend the night learning the secrets of the dead; retreat Doom by 1. If you fail, you run, and Jim is never seen by a living soul again. Whether you pass or not, discard his Investigator token.';

console.log(jim)

let diana = new Character();
diana.name = 'Diana Stanley';
diana.startingLocation = 'Space 7';
diana.startingItems = ['1 Arcane Manuscript Asset', '1 Wither Spell'];
diana.health = 7; 
diana.sanity = 5;
diana.lore = 4;
diana.influence = 2;
diana.observation = 3;
diana.strength = 3;
diana.will = 1;
diana.intro = 'When Diana was initiated into the Order of the Silver Twilight, she believed it to be nothing more than a community organization. But as she has learned more of its true nature, she has become convinced that a growing evil threatens the world, and that the Silver Twilight will play a role in that threat. She believes her best chance to prevent this is to use her position to sabotage the organization from within. Carl Sanford, the head of the Order, has recognized her skills and recently sent her to Panama for additional training.';
diana.incapacitated = 'In her hospital, Diana tells you to pick up your things and bids you farewell. Gain all of her possessions. You infer that she is being watched. Using your knowledge of the Silver Twilight, you try to determine which doctors can be trusted [lore]. If you pass, you move Diana to a new hospital and she shares her secrets with you; retreat Doom by 1. If you fail, Diana remains under the Lodge’s watchful eye. Whether you pass or not, discard her.';
diana.psychosis = 'It’s obviously Diana, but she claims to be a woman named Iris who has lived in this city her whole life. In her trash, you find Diana’s things. Gain all of their possessions. It’s clear that she has disassociated from her former life. You share all of your memories of Diana to restore her identity [influence]. If you pass, she tells you of the horrors that brought her to this state; retreat Doom by 1. If you fail, Diana sternly asks you to leave her alone. Whether you pass or not, discard her Investigator token.';

// trish scarborough
let trish = new Character();
trish.name = 'Trish Scarborough';
trish.startingLocation = 'Space 16';
trish.startingItems = '1 .45 Automatic Asset';
trish.health = 7;
trish.sanity = 5;
trish.lore = 1;
trish.influence = 3;
trish.observation = 4;
trish.strength = 3;
trish.will = 2;
trish.intro = 'Everyone expected great things from Trish when she was young. In school, she excelled in athletics and the sciences, but she surprised everyone after graduation by settling into a humble position at a commercial code company. What almost no one knows is that this particular company is a front for the Bureau’s code-breaking agency, the Black Chamber. Now she finds herself in the city of Krasnoyarsk meeting another agent who has important information about an impending threat from a world beyond our own.';
trish.incapacitated = 'Trish falls in and out of consciousness when you visit her in the hospital but she happily turns over her equipment. Gain all of her possessions. Unfortunately, her journal has been seized by the police. You’ll have to convince the local authorities to turn the book over to you [influence]. If you pass, you can read through all of Trish’s notes; retreat Doom by 1. If you fail, the knowledge is lost. Whether you pass or not, discard her Investigator token.';
trish.psychosis = 'The doctor grimly hands you the items Trish had when she was brought in. Gain all of her possessions. “It’s not good,” he warns. Inside her padded cell, she’s written on every surface with a thick black pen. The text is a mix of dozens of codes. You start searching for anything you recognize [observation]. If you pass, you spot a hidden message in a familiar code; retreat Doom by 1. If you fail, Trish’s message remains locked away. Whether you pass or not, discard her Investigator token.';
// norman whithers

let norman = new Character();
norman.name = 'Norman Withers';
norman.startingLocation = 'Arkham, United States',
norman.startingItems = '1 Feed the Mind Spell',
norman.health = 5;
norman.sanity = 7;
norman.lore = 3;
norman.influence = 1;
norman.observation = 3;
norman.strength = 2;
norman.will = 4;
norman.intro = 'The scientific community ridiculed Norman for his claim that six stars disappeared from the sky. After exhausting every plausible astronomical explanation for answers, he took a position at Miskatonic University and began exploring more improbable possibilities in the restricted section of their library. While reading an ancient text of dark prophecies, Norman found an exact description of the phenomenon he’d observed. If the tome is to be believed, a terrible incursion into our world is imminent.';
norman.incapacitated = 'Norman can barely move in his hospital bed and points to his notes and suitcase. Gain all of his possessions. He begs you to use his telescope to record the current locations of the stars. The work is slow and demanding, but you focus as best you can to give him accurate results [will]. If you pass, Norman’s insight into the Ancient One proves accurate; retreat Doom by 1. If you fail, Norman can make no sense of the night sky. Whether you pass or not, discard his Investigator token.';
norman.psychosis = 'The doctors would like you to look at Norman’s notes and belongings. Gain all of his possessions. They are trying to gain some insight into his catatonic state. You try to convince them to move Norman to a room with a view of the night sky [influence]. If you pass, Norman becomes slightly responsive, and you are able to question him; retreat Doom by 1. If you fail, Norman’s condition grows steadily worse. Whether you pass or not, discard his Investigator token.';

// lola hayes
let lola = new Character();
lola.name = 'Lola Hayes';
lola.startingLocation = 'Tokyo, Japan';
lola.startingItems = ['1 .18 Derringer Asset', 'Improve 1 skill of your choice'];
lola.health = 5;
lola.sanity = 7;
lola.lore = 2;
lola.influence = 4;
lola.observation = 2;
lola.strength = 2;
lola.will = 3;
lola.intro = 'Around the world, Lola has performed dramatic roles for sold-out houses. However, after being cast in the controversial play, The King in Yellow, Lola needed to “take some time” to recover from her “exhaustion.” Now that she has checked herself out of the asylum, she’s ready for her big comeback. But this time she’ll play a different role in the fight against the horrors that threaten this world. She’s started by traveling to Tokyo to track down the only other surviving cast member of her previous theatrical endeavor.';
lola.incapacitated = '“I’m fine, darling. Help yourself, by the way.” Lola nods at the equipment strewn across the hotel room. Gain all of her possessions. As convincing as she is, you know she’s in pain. You try to persuade her to visit a hospital [influence]. If you pass, she signs a breath of relief and tells you of all the horrors she’s encountered; retreat Doom by 1. If you fail, the day after Lola leaves the city, she succumbs to her wounds. Whether you pass or not, discard her Investigator token.';
lola.psychosis = 'The trail of Lola’s belongings lead you into a derelict theater. Gain all of her possessions. She’s on the stage wringing her blood-soaked hands and reciting, “Will these hands ne’er be clean?” You try to direct her performance, hoping to better reveal her character [influence]. If you pass, she tells you of the Tattered King, indicating a goat she’s killed; retreat Doom by 1. If you fail, Lola’s dialogue degenerates into gibberish. Whether you pass or not, discard her Investigator token.';

// charlie kane

let charlie = new Character();
charlie.name = 'Charlie Kane';
charlie.startingLocation = 'San Francisco, United States';
charlie.startingItems = '1 Personal Assistant Asset';
charlie.health = 4;
charlie.sanity = 8;
charlie.lore = 2;
charlie.influence = 4;
charlie.observation = 3;
charlie.strength = 2;
charlie.will = 2;
charlie.intro = 'When the press asks if Charlie is planning a run for national office, he smiles and says that he’s focused on the important issues. The truth is that he would love to launch his campaign, but right now the most important issue is preventing the end of the world without causing a panic. To do this, he’s been calling in favors across the country. Most recently, Charlie’s stopped in San Francisco to visit Hearst Castle. With the help of his friends and his finances, Charlie believes he can fix this problem without sacrificing a single vote.';
charlie.incapacitated = 'The nurse at the front desk hands you a parcel. Gain all of his possessions. “Mr. Kane said to give you this package, but the doctor insists that no visitors be admitted.” You try to convince her to make an exception for you [influence]. If you pass, you find that Charlie’s health is beyond recovery, but he’s still in good spirits and you have a long talk; retreat Doom by 1. If you fail, Charlie spends the rest of his days cut off from all human contact. Whether you pass or not, discard his Investigator token.';
charlie.psychosis = 'The first thing Charlie does when you enter the restaurant is hand you all of his belongings. Gain all of his possessions. He offers you deals, promising to sell you Atlantis and introduce you to Caesar. You negotiate carefully with him [influence]. If you pass, he tells you all he knows in exchange for your napkin ring and a salt shaker; retreat Doom by 1. If you fail, Charlie gets angry and insists that you’ll be sorry when he’s the President of the world. Whether you pass or not, discard his Investigators token.';

// lily chen

let lily = new Character();
lily.name = 'Lily Chen';
lily.startingLocation = 'Shanghai, China';
lily.startingItems = ['1 Protective Amulet Asset', '1 Lucky Rabbit\'s Foot Asset'];
lily.health  = 6;
lily.sanity = 6;
lily.lore = 2;
lily.influence = 2;
lily.observation = 2;
lily.strength = 4;
lily.will  = 3;
lily.intro = 'Lily speaks rarely and when she does, her words are measured and wise. After a lifetime of disciplined training, every gesture is graceful, uncluttered by hesitation. When she was an infant, an obscure sect of monks believed that she was born for a special purpose, to face a great evil. Now, the monks believe that the great evil is at hand, and they have brought Lily to Shanghai to begin fulfilling her destiny.';
lily.incapacitated = 'When you reach the hospital, you find Lily’s thing, but she is not in her bed. Gain all of her possessions. You quickly find that she’s been kidnapped by cultists! You fight to free her [strength]. If you pass, you interrogate the cultists, and Lily is safely returned to the hospital to begin the slow healing process; retreat Doom by 1. If you fail, Lily disappears into the darkness. Whether you pass or not, discard her Investigator token.';
lily.psychosis = 'You barely recognize the small woman huddled in an alleyway, her few belongings scattered next to her. Gain all of her possessions. “It wasn’t true,” Lily sobs. “I have no destiny. I cannot fight the darkness.” You reassure her that she has already done her part and that others will finish the task [influence]. If you pass, she chants over you, passing her destiny on to you; retreat Doom by 1. If you fail, Lily eventually falls into a catatonic state. Whether you pass or not, discard her Investigator token.';

// akachi onyele

let akachi = new Character();
akachi.name = 'Akachi Onyele';
akachi.startingLocation = 'Space 15';
akachi.startingItems = '1 Mists of Releh Spell';
akachi.health  = 5;
akachi.sanity = 7;
akachi.lore = 3;
akachi.influence = 2;
akachi.observation = 2;
akachi.strength = 2;
akachi.will  = 4;
akachi.intro = 'As a young girl in Nigeria, Akachi stayed apart from other children, preferring the company of imaginary friends. Her elders feared madness, but the village dibia believed that she had been chosen by the gods. The wise old man taught her how to travel between worlds and how to marshal spirits. Now, she has become a wise leader herself, traveling across Africa and teaching others to protect themselves. She’s recently arrived in Cape Town and from here, she will track down the dark forces that threaten humanity.';
akachi.incapacitated = 'By the time you find Akachi, she’s slipped into a coma. Doctors aren’t certain if she will recover. Gain all of her possessions. The hospital staff has grown very fond of her, and you try to convince them to tell you what she said to them while she was conscious [influence]. If you pass, you hear many stories; retreat Doom by 1. If you fail, you can’t get anyone to share Akachi’s story with you. Whether you pass or not, discard her Investigator token.';
akachi.psychosis = 'Akachi’s mind has left this world and she no longer has interest in material goods. Gain all of her possessions. An Odinani man gives you a bitter drink to help you reach her. After you drink it, you are assaulted by nightmarish visions, but you force yourself to keep searching for her [will]. If you pass, you hear Akachi’s voice sharing all she’s learned; retreat Doom by 1. If you fail, you curl up in a corner until the drink wears off. Whether you pass or not, discard her Investigator token.';

// silas marsh

let silas = new Character();
silas.name = 'Silas Marsh';
silas.startingLocation = 'Sydney, Australia';
silas.startingItems = '1 Fishing Net Asset';
silas.health  = 8;
silas.sanity = 4;
silas.lore = 1;
silas.influence = 3;
silas.observation = 3;
silas.strength = 3;
silas.will  = 3;
silas.intro = 'Even as a child in Innsmouth, Silas had a special connection to the sea. He’s an able and well-reasoned man on land, but on the ocean he possesses a singular strength and wit. It’s earned him a sterling reputation in every port across the globe, particularly in Sydney, where Silas set ashore last night. But this morning, the smell of the briny air carries dread as well as joy. There is something in his pas, something in Innsmouth, that he knows will some day catch up to him.';
silas.incapacitated = 'Silas had hidden his belongings in the prearranged cache, but the man himself is nowhere to be found. Gain all of his possessions. You search local hospitals filled with the unidentified dead or dying [observation]. If you pass, you find Silas alive but incapacitated, and you arrange a private nurse to watch over him; retreat Doom by 1. If you fail, Silas dies alone and unrecognized. Whether you pass or not, discard his Investigator token.';
silas.psychosis = 'You find Silas and gain all of his possessions. He has grown pale, and his breath has become a loud wheeze. He tells you, “I’m a Marsh. It’s in my blood. Not long now, I’ll join my family, down in the deep.” You ask a doctor to watch him overnight [influence]. If you pass, the sailor shares all he’s learned before dying peacefully in his sleep; retreat Doom by 1. If you fail, Silas surrenders his humanity and disappears into the sea. Whether you pass or not, discard his investigator token.';

// jacqueline fine

let jacqueline = new Character();
jacqueline.name = 'Jacqueline Fine';
jacqueline.startingLocation = 'Space 5';
jacqueline.startingItems = ['1 Flesh Ward Spell', '1 Clue'];
jacqueline.health  = 4;
jacqueline.sanity = 8;
jacqueline.lore = 4;
jacqueline.influence = 2;
jacqueline.observation = 3;
jacqueline.strength = 1;
jacqueline.will  = 3;
jacqueline.intro = 'At first, Jacqueline’s dreams of fire and destruction seemed like a curse. Monsters ran rampant through city streets and some greater darkness loomed on the horizon. However, she has recently learned to control her visions and observe events in detail. Yesterday, she traveled from Boston to Minneapolis to explore an abandoned warehouse she’d seen in her dreams. Inside, she found evidence of a terrible cult that had practiced unspeakable rituals there. Jacqueline hopes to use what she’s learned to prevent the terrible future that haunts her sleep.';
jacqueline.incapacitated = 'Somehow, Jacqueline knew you would be at this cafe to receive the parcel. Gain all of her possessions. Strangely, everyone here encountered her sometime after she was injured. You try to convince everyone to share their story [influence]. If you pass, you get the whole message Jacqueline hoped to convey; retreat Doom by 1. If you fail, the story is incomplete and makes no sense. Whether you pass or not, discard her Investigator token.';
jacqueline.psychosis = 'You visit Jacqueline in the asylum and claim her belongings. Gain all of her possessions. She seems lost in her own world, talking to visions only she sees. You do your best to interpret what she’s seeing based on what she says [lore]. If you fail, Jacqueline remains trapped in a world only she can see. Whether you pass or not, discard her Investigator token.';

// leo anderson

let leo = new Character();
leo.name = 'Leo Anderson';
leo.startingLocation = 'Buenos Aires, Argentina';
leo.startingItems = '1 Hired Muscle Asset';
leo.health  = 6;
leo.sanity = 6;
leo.lore = 2;
leo.influence = 2;
leo.observation = 3;
leo.strength = 3;
leo.will  = 3;
leo.intro = 'Leo Anderson has spent his whole life getting into the deadliest and most obscure corners of the globe. Along the way, he’s lost good people. Fever takes some; others are claimed by wild beasts. After a recent, disastrous venture in the Yucatan, Leo barely made it back to Buenos Aires alive. He’s sick of burying the people who trusted him. But the job’s not done yet. The world is in danger, and crying in his drink won’t fix that. He’s picked up a little hired help here, and in the morning, he’ll head back out into the wild.';
leo.incapacitated = '“It’s all in the drawer,” Leo tells you. “Take it and leave me here to die. I deserve it.” Gain all of his possessions. Leo’s injuries have left him bedridden and in agony in this hotel. Worse, he’s lost his will to live. You try to convince him that he hasn’t failed his friends [influence]. If you pass, he draws you several maps and promises to let you check him into a hospital; retreat Doom by 1. If you fail, he never speaks to you again. Whether you pass or not, discard his Investigator token.';
leo.psychosis = 'You find Leo’s canvas bag in his hotel room. Gain all of his possessions. While you are distracted, Leo attacks you. His face is covered in tribal markings, and he speaks a hodgepodge of tribal dialects. You try to subdue him [strength]. If you pass, you get Leo to an asylum, and the doctors learn some of what happened to him; retreat Doom by 1. If you fail, Leo is gone when you regain consciousness. Whether you pass or not, discard his Investigator token.';

// mark harrigan

let mark = new Character();
mark.name = 'Mark Harrigan';
mark.startingLocation = 'Space 14';
mark.startingItems = ['1 .38 Revolver Asset', '1 Kerosene Asset'];
mark.health = 8;
mark.sanity = 4;
mark.lore = 1;
mark.influence = 2;
mark.observation = 2;
mark.strength = 4;
mark.will  = 4;
mark.intro = 'During the war, Mark witnessed horrors he could not explain, and he wrote of what he saw in letters to his beloved wife, Sophie. When Mark returned home, he discovered that Sophie was no longer human. One of the beasts that Mark had seen overseas had taken over her body, killing her in the process. Afterward, Mark’s thirst for vengeance lead him to Helsinki, where some of these creatures had posed as German soldiers during the Great War.';
mark.incapacitated = 'While you are collecting Mark’s things, you smell smoke in the hospital. Gain all of his possessions. The hospital has been set on fire, and you run to Mark’s room and try to carry him to safety [strength]. If you pass, Mark is able to tell you who set the fire; retreat Doom by 1. If you fail, the smoke overcomes Mark, and he dies outside the hospital. Whether you pass or not, discard his Investigator token.';
mark.psychosis = 'You take custody of Mark’s belongings and arrange to visit him in the asylum. Gain all of his possessions. To your dismay, Mark is convinced that you are a creature disguising itself as a human. You do your best to convince him that you are telling the truth [influence]. If you pass, he shows you sketches he made of the horrible monsters that he’s been hunting; retreat Doom by 1. If you fail, Mark screams accusations of murder at you. Whether you pass or not, discard his Investigator token.';