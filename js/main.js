const form = document.querySelector('.form');


const answersDB = () => [
  {
    quostion: "The Queen is over 90 years old, but she still … a lot and she … a horse",
    a: "works/rides ",
    b: "worked/rode  ",
    c: "is working/is riding",
    d: "work/ride"
  },
  {
    quostion: "Jessica arrives …",
    a: "at school at 8 a.m. every day ",
    b: "in school at 8 a.m. every day",
    c: "to school at 8 a.m. every day",
    d: "school at 8 a.m. every day"
  },
  {
    quostion: "I … get up early every weekend. Because it’s my day off.",
    a: "don’t have to ",
    b: "should",
    c: "shouldn’t",
    d: "have to"
  },
  {
    quostion: "In my …, people wear expensive clothes so that others can see that they have lots of money.",
    a: "view ",
    b: "think",
    c: "personally",
    d: "hope"
  },
  {
    quostion: "Girls spend … money than boys on clothes.",
    a: "more",
    b: "a lot of",
    c: "much",
    d: "some"
  },
  {
    quostion: "Choose the clothes that you wear on your top:",
    a: "cardigan, jacket, jumper, shirt ",
    b: "jeans, jacket, jumper, shirt.",
    c: "cardigan, jacket, jumper, shorts",
    d: "shirt, skirt, jumper, cardigan"
  },
  {
    quostion: "Алиса и Джон не готовят ужин. Они пьют фруктовый сок.",
    a: "Alice and John aren’t cooking dinner. They’re drinking fruit juice",
    b: "Alice and John are cooking. They’re drinking fruit juice.",
    c: "Alice and John aren’t cooking dinner. They’re drink a fruit juice.",
    d: "Alice and John don’t cook dinner. They’re drinking a fruit juice."
  },
  {
    quostion: "Chris doesn’t usually like parties, but he … this one.",
    a: "enjoys",
    b: "enjoyed",
    c: "is enjoying ",
    d: "Chris doesn’t usually like parties, but he … this one."
  },
  {
    quostion: "What have we got in the fridge? - There … apples. There … cheese.",
    a: "are some/ is some ",
    b: "are some/ are some",
    c: "are any / is any",
    d: "aren’t some/ aren’t any"
  },
  {
    quostion: "Here’s the key to your room. Breakfast is from7.30 to 9.30 tomorrow morning",
    a: "hotel",
    b: "hospital",
    c: "gym",
    d: "cinema"
  },
  {
    quostion: "Marta … play the piano when she … five",
    a: "could/was ",
    b: "can/is",
    c: "could/is",
    d: "couldn’t/ did"
  },
  {
    quostion: "My phone battery is dead. Can I borrow your …?",
    a: "charger",
    b: "microphone",
    c: "headphones",
    d: "computer"
  },
  {
    quostion: "This … is good for surfing the web when you’re travelling",
    a: "tablet",
    b: "tablet",
    c: "Internet",
    d: "PC"
  },
  {
    quostion: "Choose the word that doesn’t go with the verb “upload”.",
    a: "a problem  ",
    b: "a file",
    c: "a photo",
    d: "a document"
  },
  {
    quostion: "She … a lot about machine and also … her own notes about it.",
    a: "read/made",
    b: "reads/does made",
    c: "is reading/ is doing",
    d: "reads/does made"
  },
  {
    quostion: "Is it ____ to drive without a driving license?",
    a: "illegal",
    b: "familiar",
    c: "typical",
    d: "social"
  },
  {
    quostion: "I missed a few lessons but I’m catching ____.",
    a: "up with the rest of the class quite quickly",
    b: "away with the rest of the class",
    c: "with my classmates up",
    d: "up my classmates"
  },
  {
    quostion: "What is another term for a memory stick?",
    a: "flash drive ",
    b: "Wi-fi connector",
    c: "CD-ROM",
    d: "modem"
  },
  {
    quostion: "You have to … on the word “Next” to see the next web page",
    a: "Click",
    b: "Press",
    c: "Hit",
    d: "Push"
  },
  {
    quostion: "I think every child should get a good ….. .",
    a: "education",
    b: "memory",
    c: "mark",
    d: "money"
  },
  {
    quostion: "To do something that makes you feel pain.",
    a: "hurt",
    b: "rare",
    c: "error",
    d: "since"
  },
  {
    quostion: "Something difficult that you have to do.",
    a: "challenge",
    b: "condition",
    c: "sense",
    d: "divide"
  },
  {
    quostion: "Which one of the following is a programming language?",
    a: "HTML",
    b: "HTTP",
    c: "HPML",
    d: "FTP"
  },
  {
    quostion: "Total number of function keys in a computer keyboard?",
    a: "12",
    b: "14",
    c: "8",
    d: "10"
  },
  {
    quostion: "The main page of a Web site is known as…",
    a: "Home page",
    b: "Book mark page",
    c: "Content page",
    d: "Navigator page"
  },
  {
    quostion: "What is the full form of PDF?",
    a: "Portable Document Format ",
    b: "Printed Document Format",
    c: "Public Document Format",
    d: "Published Document Format"
  },
  {
    quostion: "Which one is not a part of a computer?",
    a: "Scanner",
    b: "Motherboard",
    c: "CPU",
    d: "Keyboard"
  },
  {
    quostion: "Which one is a ‘text editor’ for Microsoft windows?",
    a: "Notepad",
    b: "WordPad",
    c: "MS Excel",
    d: "MS Word"
  },
  {
    quostion: "Who founded Apple Computer?",
    a: "Steve Jobs",
    b: "Sheryl Sandberg",
    c: "Sundar Pichai",
    d: "Bill Gates"
  },
  {
    quostion: "In what year was Google founded?",
    a: "1998",
    b: "1989",
    c: "2001",
    d: "1995"
  },
  {
    quostion: "Which of these is not a kind of computer?",
    a: "Lada",
    b: "Dell",
    c: "Apple",
    d: "Lenovo"
  },
  {
    quostion: "What does the acronym DNS stand for?",
    a: "Domain name system ",
    b: "Domain number system",
    c: "Document name system",
    d: "Domain network security"
  },
  {
    quostion: "Virus is a computer…",
    a: "Program",
    b: "Network",
    c: "Database",
    d: "File"
  },
  {
    quostion: "Find the synonym of the selected word. Her grandfather is a “smart” old man.",
    a: "Wise",
    b: "Advantage",
    c: "Rich",
    d: "Reach"
  },
  {
    quostion: "I was__________ when I got a bad grade on the test",
    a: "Upset",
    b: "Nothing",
    c: "Frightened",
    d: "Dead"
  },
  {
    quostion: "Switzerland is ________ than Britain.",
    a: "Smaller",
    b: "More small",
    c: "Smallest",
    d: "As small"
  },
  {
    quostion: "________ bag is this? It is mine.",
    a: "Whose",
    b: "What’s",
    c: "Who",
    d: "Who’s"
  },
  {
    quostion: "I stay at home________ the morning.",
    a: "In",
    b: "On",
    c: "To",
    d: "At"
  },
  {
    quostion: "What does he do?",
    a: "He is a teacher ",
    b: "He is teacher",
    c: "He is teaching",
    d: "Yes, he does"
  },
  {
    quostion: "She works ____ Saturday.",
    a: "On",
    b: "In",
    c: "To",
    d: "At"
  },
  {
    quostion: "Last week was _____ than this week",
    a: "busier",
    b: "busiest",
    c: "more busy",
    d: "busy"
  },
  {
    quostion: "He _____ got any sisters.",
    a: "hasn’t",
    b: "don’t",
    c: "doesn’t",
    d: "haven’t"
  },
  {
    quostion: "Do you _____ any bread?",
    a: "have",
    b: "got",
    c: "has",
    d: "had"
  },
  {
    quostion: "My homework is the _____ in class.",
    a: "worst",
    b: "worse",
    c: "worthy",
    d: "bad"
  },
  {
    quostion: "This exercise is _____ difficult in the book",
    a: "the most",
    b: "the more",
    c: "most",
    d: "more"
  },
  {
    quostion: "Mobile phones and PDAs can communicate with computers via __________.",
    a: "Bluetooth",
    b: "Blueberry",
    c: "Bluebeard",
    d: "Keyboard"
  },
  {
    quostion: "To change to capital letters, press the _______________.",
    a: "Shift key ",
    b: "Alt key",
    c: "Ctrl key",
    d: "Tab key"
  },
  {
    quostion: "When your computer is not connected to the internet, it is ________.",
    a: "offline ",
    b: "off the line",
    c: "out of line",
    d: "online"
  },
  {
    quostion: "Windows XP, Macintosh OSX and Linux are __________.",
    a: "operating systems ",
    b: "operating tools",
    c: "operators",
    d: "operating apps"
  },
  {
    quostion: "When you __________ a document, it's sent to the recycle bin.",
    a: "delete ",
    b: "erase",
    c: "search",
    d: "destroy"
  },
  {
    quostion: "It’s hot. I ….close the window.",
    a: "will ",
    b: "shall",
    c: "am going to",
    d: "has"
  },
  {
    quostion: "What … tomorrow?",
    a: "are you going to do  ",
    b: "shall you do  ",
    c: "do you do",
    d: "You go"
  },
  {
    quostion: "… I feed the dog?",
    a: "Shall",
    b: "Will",
    c: "Am I going to",
    d: "Do"
  },
  {
    quostion: "Tom …. going to be a doctor",
    a: "is",
    b: "are",
    c: "am",
    d: "has"
  },
  {
    quostion: "… you help me, please?",
    a: "Will ",
    b: "Shall",
    c: "Are you going to",
    d: "Is"
  },
  {
    quostion: "I … going to buy a new shirt tomorrow.  ",
    a: "am  ",
    b: "will",
    c: "shall",
    d: "are"
  },
  {
    quostion: "I promise I … email you every day.",
    a: "will",
    b: "am going to",
    c: "shall",
    d: "am"
  },
  {
    quostion: "… I invite Ben to the party?",
    a: "Shall",
    b: "Will",
    c: "Am",
    d: "Am I going to"
  },
  {
    quostion: "Look at her! She … win the race.",
    a: "is going to",
    b: "shall",
    c: "will",
    d: "are"
  },
  {
    quostion: "… take your coat, madam?",
    a: "Shall I",
    b: "Will I",
    c: "Am I going to",
    d: "Am I"
  },
  {
    quostion: "I’m hungry. I … make a sandwich.",
    a: "am going to",
    b: "shall",
    c: "will",
    d: "are"
  },
  {
    quostion: "We … buy Jane a dress for her birthday",
    a: "are going to",
    b: "shall",
    c: "did",
    d: "is going to"
  },
  {
    quostion: "Look at the sky! … rain.",
    a: "It is going to",
    b: "It shall",
    c: "It will",
    d: "It was"
  },
  {
    quostion: "…. go to the theatre next weekend?",
    a: "Shall we",
    b: "Are we going",
    c: "Will we",
    d: "Did we"
  },
  {
    quostion: "He is sure he …. go out tonight",
    a: "won’t",
    b: "shall not",
    c: "isn’t going to",
    d: "aren’t"
  },
  {
    quostion: "She … going to eat something later.",
    a: "is",
    b: "are",
    c: "am",
    d: "not"
  },
  {
    quostion: "Jane thinks Simon … win the race",
    a: "will",
    b: "shall",
    c: "is going to",
    d: "was"
  },
  {
    quostion: "John hasn’t studied. He … pass his  exam.",
    a: "will not ",
    b: "do not",
    c: "isn’t going to",
    d: "was not"
  },
  {
    quostion: "Be careful or you … burn your hand!",
    a: "will",
    b: "shall",
    c: "are going to",
    d: "going to"
  },
  {
    quostion: "Liz … be eleven next year.",
    a: "will",
    b: "is going to",
    c: "shall",
    d: "is"
  },
  {
    quostion: "I’m thirsty. I … drink some juice.",
    a: "will ",
    b: "shall",
    c: "am going to",
    d: "is"
  },
  {
    quostion: "Watch out! You … fall! ",
    a: "will",
    b: "are going to",
    c: "hall",
    d: "is"
  },
  {
    quostion: "Define the definition of the word 'hardware'.",
    a: "tools, machinery, and other durable equipment",
    b: "machine that processes something",
    c: "the programs and other operating information used by a computer.",
    d: "bring (something) into existence"
  },
  {
    quostion: "What is a computer?",
    a: "An electronic device that manipulates information or data ",
    b: "A thing used to access the internet",
    c: "A useless piece of technology",
    d: "A laptop"
  },
  {
    quostion: "Define the definition of the word 'create'.",
    a: "a machine that processes something",
    b: "bring (something) into existence. ",
    c: "the programs and other operating information used by a computer",
    d: "tools, machinery, and other durable equipment."
  },
  {
    quostion: "Define the definition of the word 'HTML'.",
    a: "Hypertext Markup Language, a standardized system for tagging text files to achieve font, colour, graphic, and hyperlink effects on World Wide Web pages. ",
    b: "bring (something) into existence.",
    c: "a machine that processes something",
    d: "tools, machinery, and other durable equipment"
  },
  {
    quostion: "Select three input devices your computer uses:",
    a: "Mouse, keyboard, scanner ",
    b: "Mouse, keyboard, monitor, printer",
    c: "Mouse, scanner, printer",
    d: "Mouse, printer, CPU, projector"
  },
  {
    quostion: "What is the most common keyboard layout?",
    a: "QWERTY",
    b: "QYTER",
    c: "Dvorbk",
    d: "EODISP"
  },
  {
    quostion: "Which of these computer parts is used through moving it?",
    a: "Mouse",
    b: "Projector",
    c: "RAM",
    d: "Hard-disk"
  },
  {
    quostion: "What does RAM stand for?",
    a: "Random access memory ",
    b: "Random apply memory",
    c: "Random attain memory",
    d: "Random assessment memory"
  },
  {
    quostion: "What is the full meaning of HTML?",
    a: "Hyper Text Markup Language ",
    b: "Hyper Technology Market Language",
    c: "Hypertext Transfer Marking Language",
    d: "Hyper Text Making Language"
  },
  {
    quostion: "What is the full meaning of WLAN?",
    a: "Wireless Local Area Network ",
    b: "Wide Local Area Net",
    c: "Windows Live Area Network",
    d: "Windows Local Area Network"
  },
  {
    quostion: "What is the full meaning of CPU?",
    a: "Central Processing Unit  ",
    b: "Central Project Unit",
    c: "Component Processing Unit",
    d: "Control Processing Unit"
  },
  {
    quostion: "What is the purpose of Social Networking websites?  ",
    a: "To provide information about the individual  ",
    b: "To exchange personal information",
    c: "To share knowledge",
    d: "To enable online learning"
  },
  {
    quostion: "Personal Data?",
    a: "Information that relates to an identified or identifiable individual. ",
    b: "All designs, dimensions, specifications, drawings, patterns, know-how, or other information concerning the methods, manufacturing processes",
    c: "Any offered product or service",
    d: "Data includes the behavioral, demographic, and personal information businesses collect from their audience"
  },
  {
    quostion: "Customer Data?",
    a: "Data includes the behavioral, demographic, and personal information businesses collect from their audience ",
    b: "All designs, dimensions, specifications, drawings, patterns, know-how, or other information concerning the methods, manufacturing processesprocesse",
    c: "Any offered product or service",
    d: "Information that relates to an identified or identifiable individual"
  },
  {
    quostion: "Product Data?",
    a: "All designs, dimensions, specifications, drawings, patterns, know-how, or other information concerning the methods, manufacturing processes",
    b: "Data includes the behavioral, demographic, and personal information businesses collect from their audience",
    c: "Any offered product or service ",
    d: "Information that relates to an identified or identifiable individual"
  },
  {
    quostion: "Technical Data?",
    a: "Any offered product or service",
    b: "Data includes the behavioral, demographic, and personal information businesses collect from their audience",
    c: "All designs, dimensions, specifications, drawings, patterns, know-how, or other information concerning the methods, manufacturing processes ",
    d: "Information that relates to an identified or identifiable individual"
  },
  {
    quostion: "She has been looking for a job ............... since she left school",
    a: "ever",
    b: "very",
    c: "never",
    d: "every"
  },
  {
    quostion: "............... have you been sitting here in the dark all by yourself?",
    a: "How long ",
    b: "Since noon",
    c: "When",
    d: "What length"
  },
  {
    quostion: "I'd like ............... lemonade with .............. sugar in it, please",
    a: "a / some",
    b: "some / some ",
    c: "a / a",
    d: "the / the"
  },
  {
    quostion: "These flowers ______ all dead; please give me some fresh ______.",
    a: "are / ones",
    b: "will be / one",
    c: "was / were",
    d: "aren't all / more"
  },
  {
    quostion: "She has gone to the market ............... some eggs.",
    a: "to buy  ",
    b: "to be bought",
    c: "for buying",
    d: "for to buy"
  },
  {
    quostion: "I was pleased to see him at the meeting today; but unfortunately he ............... be there tomorrow.",
    a: "won't be able to  ",
    b: "must",
    c: "will be able to",
    d: "is going to"
  },
  {
    quostion: "I don't know how to play poker and ______.",
    a: "neither does my wife  ",
    b: "my wife doesn't neither",
    c: "neither my wife does",
    d: "either does my wife"
  },
  {
    quostion: "I've heard that the pink ............... are the best. I'd like to buy ............... if you've got ............... left",
    a: "ones / some / any ",
    b: "some / ones / many",
    c: "any / some / any",
    d: "ones / any / many"
  },
  {
    quostion: "I was at_____home all day yesterday.",
    a: "-",
    b: "the",
    c: "an",
    d: "a"
  },
  {
    quostion: "There are_____apples",
    a: "a lot of ",
    b: "much",
    c: "a little",
    d: "most"
  },
  {
    quostion: "The shop hasn't got_____washing powder",
    a: "much",
    b: "a few",
    c: "few",
    d: "many"
  },
  {
    quostion: "Why aren't there_____magazines?",
    a: "many",
    b: "a little",
    c: "much",
    d: "little"
  },
  {
    quostion: "The shop hasn't got_____birthday cards",
    a: "many",
    b: "much",
    c: "some",
    d: "a little"
  },
  {
    quostion: "I saw_____change on the table a minute ago",
    a: "ome ",
    b: "much",
    c: "many",
    d: "any"
  },
  {
    quostion: "I need_____help with my homework. Are you free?",
    a: "some",
    b: "a few",
    c: "much",
    d: "any"
  },
  {
    quostion: "SD cards can be read in a computer’s ______.",
    a: "card reader ",
    b: "storage reader",
    c: "memory reader",
    d: "memory card"
  },
  {
    quostion: "'____' 'Yes, can I help you?'",
    a: "Excuse me!",
    b: "Thank you!",
    c: "Cheers!",
    d: "Nothing much"
  },
  {
    quostion: "'Good morning!'",
    a: "Good morning! ",
    b: "Thank you!",
    c: "Cheers!",
    d: "Sleep well!"
  },
  {
    quostion: "'See you next week'",
    a: "Bye for now ",
    b: "Cheers",
    c: "Thank you",
    d: "Good morning"
  },
  {
    quostion: "'Have a nice day!'",
    a: "Thanks. Same to you",
    b: "Not at all. Don't mention it",
    c: "Nothing much",
    d: "Sleep well"
  },
  {
    quostion: "Select the text you want to remove, and hit the _______________.",
    a: "delete key ",
    b: "Alt key",
    c: "Spacebar",
    d: "Enter key"
  },
  {
    quostion: "How does URL stand for?",
    a: "Uniform resource locator ",
    b: "United resource locator",
    c: "United resource line",
    d: "Uniform resource limited"
  },
  {
    quostion: "When your computer is not connected to the internet, it is ________.",
    a: "offline ",
    b: "out of line",
    c: "online",
    d: "off the line"
  },
  {
    quostion: "Windows XP, Macintosh OSX and Linux are __________.",
    a: "operating systems ",
    b: "operating tools",
    c: "operators",
    d: "operating apps"
  },
  {
    quostion: "When you __________ a document, it's sent to the recycle bin.",
    a: "delete",
    b: "destroy",
    c: "erase",
    d: "search"
  },
  {
    quostion: "I____to work now. Good-bye!",
    a: "am going ",
    b: "go",
    c: "went",
    d: "goes"
  },
  {
    quostion: "I____a book about astrology these days.",
    a: "am reading ",
    b: "read",
    c: "am reads",
    d: "reading"
  },
  {
    quostion: "They____lots of books every year",
    a: "read",
    b: "will read",
    c: "am reading",
    d: "am going to read"
  },
  {
    quostion: "Nurses_____after people in hospital.",
    a: "look ",
    b: "looks",
    c: "is looking",
    d: "will look"
  },
  {
    quostion: "Annie____from Ireland.",
    a: "comes",
    b: "come",
    c: "is coming",
    d: "coming"
  },
];

answersDB().forEach((item, index) => {
  console.log(item.a)


  const container = document.createElement('div')
  container.innerHTML = `

      <ul class="test-list">
      <span class="quostion-text">${index + 1}. ${item.quostion}</span>
            <li class="test-item">
              <label>
                <input type="radio" name="${index}"> ${item.a}
              </label>
            </li>
            <li class="test-item">
              <label>
                <input type="radio" name="${index}"> ${item.b}
              </label>
            </li>
            <li class="test-item">
              <label>
                <input type="radio" name="${index}"> ${item.c}
              </label>
            </li>
            <li class="test-item">
              <label>
                <input type="radio" name="${index}"> ${item.d}
              </label>
            </li>
        </ul>
  `
  form.append(container)
})