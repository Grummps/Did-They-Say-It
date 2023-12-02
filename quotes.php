<?php

header('Content-Type: application/json');

$quotesData = array(
    "characters" => array(
        array(
            "id" => "Homer Simpson",
            "quotes" => array(
                "If he's so smart, how come he's dead?",
                "Operator, give me the number for 911!",
                "Stupidity got us into this mess, and stupidity will get us out.",
                "I wish God were alive to see this.",
                "Fame was like a drug, but what was even more like a drug were the drugs.",
                "You’ll have to speak up. I’m wearing a towel.",
                "I was working on a flat tax proposal and I accidentally proved there’s no god.",
                "Marriage is like a coffin and each kid is another nail.",
                "I’m in no condition to drive…wait! I shouldn’t listen to myself, I’m drunk!",
                "I’m a white male, age 18 to 49. Everyone listens to me, no matter how dumb my suggestions are."
            )
        ),
        array(
            "id" => "Lil Wayne",
            "quotes" => array(
                "I like being misunderstood.",
                "Real G's move in silence like lasagna.",
                "I lost my mind, it's somewhere out there stranded.",
                "I'm trapped in a maze, therefore I'm amazing.",
                "Billion dollar smile, I sell myself short if I grin.",
                "Yes, I do it big. Call me 'Little Astronomical'.",
                "Life is a beach, I'm just playin' in the sand.",
                "The best things in life are free, not cheap.",
                "I speak the truth, but I guess that's a foreign language to y'all.",
                "You know Father Time, and we all know Mother Nature."
            )
        ),
        array(
            "id" => "Michael Scott",
            "quotes" => array(
                "Sometimes I’ll start a sentence, and I don’t even know where it’s going. I just hope I find it along the way.",
                "Well, well, well how the turntables.",
                "You all took a life here today. You did. The life of the party.",
                "Wikipedia is the best thing ever. Anyone in the world can write anything they want about any subject. So you know you are getting the best possible information.",
                "I am running away from my responsibilities. And it feels good.",
                "I love inside jokes. I’d love to be a part of one someday.",
                "I’m not superstitious but I am a little stitious.",
                "They’re trying to make me an escape goat.",
                "I don’t hate it. I just don’t like it at all and it’s terrible.",
                "Mo’ money, mo’ problems."
            )
        )
    )
);

// Encode the quotes data to JSON and output it
echo json_encode($quotesData);

?>
