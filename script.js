const quotes = [
  "Psalm 45:5 Let your sharp arrows pierce the hearts of the king’s enemies; let the nations fall beneath your feet.",
  "1 Samuel 20:20 I will shoot three arrows to the side of it, as though I were shooting at a target.",
  "2 Samuel 11:20  the king’s anger may flare up, and he may ask you, ‘Why did you get so close to the city to fight? Didn’t you know they would shoot arrows from the wall?",
  "2 Kings 9:24  Then Jehu drew his bow and shot Joram between the shoulders. The arrow pierced his heart and he slumped down in his chariot.",
  "2 Kings 13:17  'Open the east window,' he said, and he opened it. 'Shoot!' Elisha said, and he shot. 'The Lord’s arrow of victory, the arrow of victory over Aram!' Elisha declared. 'You will completely destroy the Arameans at Aphek.'",
  "2 Kings 13:18 Then he said, 'Take the arrows,' and the king took them. Elisha told him, 'Strike the ground.' He struck it three times and stopped.",
  "Psalm 38:2 Your arrows have pierced me, and your hand has come down on me.",
  "Psalm 64:7 But God will shoot them with his arrows; they will suddenly be struck down.",
  "Psalm 77:17 The clouds poured down water, the heavens resounded with thunder; your arrows flashed back and forth.",
  "Psalm 120:4 He will punish you with a warrior’s sharp arrows, with burning coals of the broom bush.",
  "Proverbs 7:23 till an arrow pierces his liver, like a bird darting into a snare, little knowing it will cost him his life.",
  "Proverbs 25:18 Like a club or a sword or a sharp arrow is one who gives false testimony against a neighbor.",
  "Isaiah 5:28 Their arrows are sharp, all their bows are strung; their horses’ hooves seem like flint, their chariot wheels like a whirlwind.",
  "Isaiah 37:33 Therefore this is what the Lord says concerning the king of Assyria: He will not enter this city or shoot an arrow here. He will not come before it with shield or build a siege ramp against it.",
  "Jeremiah 50:9 For I will stir up and bring against Babylon an alliance of great nations from the land of the north. They will take up their positions against her, and from the north she will be captured. Their arrows will be like skilled warriors who do not return empty-handed.",
  "Jeremiah 50:14 'Take up your positions around Babylon, all you who draw the bow. Shoot at her! Spare no arrows, for she has sinned against the Lord.'",
  "Lamentations 3:11 He drew his bow and made me the target for his arrows.",
  "Ephesians 6:16 In addition to all this, take up the shield of faith, with which you can extinguish all the flaming arrows of the evil one.",
];

const button = document.getElementById('wotButton');
const quoteDiv = document.getElementById('quote');

let lastIndex = -1; // store last quote index

button.addEventListener('click', () => {
  let randomIndex;

  // Keep picking until it's different from last
  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === lastIndex);

  quoteDiv.textContent = quotes[randomIndex];
  lastIndex = randomIndex; // save current index
});
