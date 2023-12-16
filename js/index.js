var quotes = [
  "Be yourself; everyone else is already taken. — Oscar Wilde",
  "Friendship ... is born at the moment when one man says to another 'What! You too? I thought that no one but myself . . .' — C.S. Lewis, The Four Loves",
  "Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do. — Steve Jobs",
  "You love me. Real or not real? — Suzanne Collins, Mockingjay",
  "I'm in love with you,' he said quietly. 'Augustus,' I said. 'I am,' he said. He was staring at me, and I could see the corners of his eyes crinkling. 'I'm in love with you, and I'm not in the business of denying myself the simple pleasure of saying true things. I'm in love with you, and I know that love is just a shout into the void, and that oblivion is inevitable, and that we're all doomed and that there will come a day when all our labor has been returned to dust, and I know the sun will swallow the only earth we'll ever have, and I am in love with you.' — John Green, The Fault in Our Stars",
  "Have you fallen in love with the wrong person yet? Jace said, 'Unfortunately, Lady of the Haven, my one true love remains myself.' ... 'At least,' she said, 'you don't have to worry about rejection, Jace Wayland.' 'Not necessarily. I turn myself down occasionally, just to keep it interesting.' — Cassandra Clare, City of Bones",
  "There is no friend as loyal as a book. — Ernest Hemingway",
  "One must always be careful of books,' said Tessa, 'and what is inside them, for words have the power to change us.' — Cassandra Clare, Clockwork Angel",
  "I wish it need not have happened in my time,' said Frodo. 'So do I,' said Gandalf, 'and so do all who live to see such times. But that is not for them to decide. All we have to decide is what to do with the time that is given us.' — J.R.R. Tolkien, The Fellowship of the Ring",
  "There is no pretending,' Jace said with absolute clarity. 'I love you, and I will love you until I die, and if there is life after that, I'll love you then.' — Cassandra Clare, City of Glass",
  "Piglet sidled up to Pooh from behind. 'Pooh!' he whispered. 'Yes, Piglet?' 'Nothing,' said Piglet, taking Pooh's paw. 'I just wanted to be sure of you.' — A.A. Milne, The House at Pooh Corner",
  "Dumbledore watched her fly away, and as her silvery glow faded he turned back to Snape, and his eyes were full of tears. 'After all this time?' 'Always,' said Snape. — J.K. Rowling, Harry Potter and the Deathly Hallows",
  "Our deepest fear is not that we are inadequate. Our deepest fear is that we are powerful beyond measure. It is our light, not our darkness that most frightens us. We ask ourselves, 'Who am I to be brilliant, gorgeous, talented, fabulous?' Actually, who are you not to be? You are a child of God. Your playing small does not serve the world. There is nothing enlightened about shrinking so that other people won't feel insecure around you. We are all meant to shine, as children do. We were born to make manifest the glory of God that is within us. It's not just in some of us; it's in everyone. And as we let our own light shine, we unconsciously give other people permission to do the same. As we are liberated from our own fear, our presence automatically liberates others. — Marianne Williamson, A Return to Love: Reflections on the Principles of 'A Course in Miracles'",
  "We believe in ordinary acts of bravery, in the courage that drives one person to stand up for another. — Veronica Roth, Divergent",
  "The truth.' Dumbledore sighed. 'It is a beautiful and terrible thing, and should therefore be treated with great caution.' — J.K. Rowling, Harry Potter and the Sorcerer's Stone",
  "Do you remember me telling you we are practicing non-verbal spells, Potter?' 'Yes,' said Harry stiffly. 'Yes, sir.' 'There's no need to call me 'sir,' Professor.' The words had escaped him before he knew what he was saying. — J.K. Rowling, Harry Potter and the Half-Blood Prince",
  "He’s not perfect. You aren’t either, and the two of you will never be perfect. But if he can make you laugh at least once, causes you to think twice, and if he admits to being human and making mistakes, hold onto him and give him the most you can. He isn’t going to quote poetry, he’s not thinking about you every moment, but he will give you a part of him that he knows you could break. Don’t hurt him, don’t change him, and don’t expect for more than he can give. Don’t analyze. Smile when he makes you happy, yell when he makes you mad, and miss him when he’s not there. Love hard when there is love to be had. Because perfect guys don’t exist, but there’s always one guy that is perfect for you. — Bob Marley",
  "Thomas Edison's last words were 'It's very beautiful over there.' I don't know where there is, but I believe it's somewhere, and I hope it's beautiful. — John Green, Looking for Alaska",
  "When adults say, 'Teenagers think they are invincible' with that sly, stupid smile on their faces, they don't know how right they are. We need never be hopeless because we can never be irreparably broken. We think that we are invincible because we are. We cannot be born, and we cannot die. Like all energy, we can only change shapes and sizes and manifestations. They forget that when they get old. They get scared of losing and failing. But that part of us greater than the sum of our parts cannot begin and cannot end, and so it cannot fail. — John Green, Looking for Alaska",
  "Jesus!' Luke exclaimed. 'Actually, it's just me,' said Simon. 'Although I've been told the resemblance is startling. — Cassandra Clare",
];

var usedNumber = [];
var rangelength = quotes.length;

function getQuotes() {
  if (usedNumber.length === rangelength) {
  document.getElementById("qoute").innerHTML = "";
    document.getElementById("director").innerHTML =
      "Now You Read All Quotes, Press again...";
    return;
  }

  do {
    randomNumber = Math.floor(Math.random() * rangelength);
  } while (usedNumber.includes(randomNumber));

  usedNumber.push(randomNumber);
  qoute();
}

function qoute() {
  var newQoute = quotes[randomNumber];
  document.getElementById("qoute").innerHTML = newQoute.split(' — ')[0];
  document.getElementById("director").innerHTML = " — "+ newQoute.split(' — ')[1];
}
