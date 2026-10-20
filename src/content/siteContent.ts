/**
 * =======================================================================
 * CENTRAL SITE CONTENT & PERSONALIZATION FILE
 * =======================================================================
 * 
 * Customize all text, memories, letter paragraphs, and secrets here.
 * Everything is automatically reflected throughout the website without
 * needing to alter any React component markup or layout logic.
 */

export interface MemoryItem {
  id: string;
  title: string;
  date?: string;
  body: string;
  caption?: string;
  image?: string; // Optional image URL or relative path
  tags?: string[];
}
export interface SiteContent {
  recipientName: string;
  senderName: string;
  relationshipDuration: string;
  audioTrack: {
    title: string;
    artist: string;
    src: string;
  };
  hero: {
    wordmark: string;
    topRightBadge: string;
    title: [string, string];
    subtitle: string;
    supportingText: string;
    buttonText: string;
    scrollIndicator: string;
  };
  introduction: {
    leftTag: string;
    leftHeading: string;
    leftParagraphs: string[];
    rightTag: string;
    rightHeading: string;
    rightParagraphs: string[];
  };
  careSection: {
    tag: string;
    heading: string;
    paragraphs: string[];
    coreStatements: Array<{
      prefix?: string;
      word: string;
    }>;
  };
  statements: Array<{
    id: number;
    text: string;
    highlight?: string;
    subNote?: string;
  }>;
  memoriesSection: {
    tag: string;
    heading: string;
    supportingParagraph: string;
    items: MemoryItem[];
  };
  letterSection: {
    tag: string;
    heading: string;
    salutation: string;
    paragraphs: string[];
    valediction: string;
    signature: string;
  };
}

export const siteContent: SiteContent = {
  // Primary Names
  recipientName: "Inshuu",
  senderName: "Your Bestie",
  relationshipDuration: "More than a year",

  // Audio track configuration (The 1975 - About You)
  audioTrack: {
    title: "About You",
    artist: "The 1975",
    src: "/song.mp3",
  },

  // 01 / HERO SECTION
  hero: {
    wordmark: "lowk da best.",
    topRightBadge: "A LITTLE SOMETHING FOR YOU",
    title: ["Meriii,", "Inshuuu"],
    subtitle: "I MADE A LITTLE CORNER OF THE UNIVERSE JUST FOR YOU. lowk exagg but wtv",
    supportingText: "Because some people deserve to know just how much they mean to us.",
    buttonText: "THIS IS FOR YOU ↗",
    scrollIndicator: "SCROLL TO EXPLORE",
  },

  // 02 / MORE THAN A YEAR SECTION
  introduction: {
    leftTag: "01 / WHERE IT ALL BEGAN",
    leftHeading: "MORE THAN\nA YEAR.",
    leftParagraphs: [
      "Inshuu, kaafy krezy scene toh hai like around a year ago we met and initially bohot annoying lagti thi tu like ik it wasn't you but Dheere Dheere as we started to talk pta chala gng is lowk chill.",
      "I don't think we always realise how important someone is becoming to us while it's happening and sometimes, you look back and realise that somewhere along the way, a person became a really special part of your life.",
      "And for me, you are like one of the only reasons of my smile"
    ],
    rightTag: "SOME PEOPLE JUST MATTER",
    rightHeading: "AND I'M\nGLAD IT'S YOU.",
    rightParagraphs: [
      "I'm genuinely grateful that our paths crossed. I'm glad I got to know you, glad we became friends, and glad that I've had the chance to have someone like you in my life.",
      "More than anything, I hope you know that your friendship isn't something I take for granted."
    ],
  },

  // 03 / THE WAY YOU CARE SECTION
  careSection: {
    tag: "02 / THE LITTLE THINGS THAT MATTER",
    heading: "YOU MAKE\nPEOPLE FEEL\nLESS ALONE.",
    paragraphs: [
      "One of the things I appreciate most about you is the way you care even jab you act like corny ah non chalant.",
      "The way you take care of me, the way you try to understand me, and the way you make an effort to be there mean more than I can properly explain coz ik tu khud kitna suffer krri and still doing this much is just inshuisque lol new word.",
      "It's not always about doing something big. just you know staying for them, i met many but you literally made sure i slept without any problems even though you were online and had no business doing that, it was your care",
      "Those things stay with a person.",
      "and i just wanna let you know that you are one krezy asshole whom i appreciate soo sooo muchhh."
    ],
    coreStatements: [
      { prefix: "Tharki", word: "but you care" },
      { prefix: "acts tuff", word: "small brat" },
      { prefix: "an idiot", word: "still the most special" },
    ],
  },

  // 04 / THINGS I HOPE YOU KNOW
  statements: [
    {
      id: 1,
      text: "YOU MATTER MORE THAN YOU REALISE.",
      highlight: "MORE THAN YOU REALISE",
      subNote: "Never doubt the space you hold in the lives of those around you."
    },
    {
      id: 2,
      text: "YOU DON'T HAVE TO DO EVERYTHING PERFECTLY.",
      highlight: "PERFECTLY",
      subNote: "Your presence is already more than enough."
    },
    {
      id: 3,
      text: "YOU DESERVE TO BE CARED FOR, TOO.",
      highlight: "CARED FOR, TOO",
      subNote: "The same warmth you pour out belongs right back to you."
    },
    {
      id: 4,
      text: "YOU NEVER HAVE TO EARN YOUR PLACE IN SOMEONE'S LIFE BY BEING USEFUL.",
      highlight: "BEING USEFUL",
      subNote: "You are valued simply for being who you are."
    },
    {
      id: 5,
      text: "YOUR FEELINGS MATTER.",
      highlight: "FEELINGS MATTER",
      subNote: "Every thought, every emotion, and every quiet worry."
    },
    {
      id: 6,
      text: "AND I HOPE YOU GIVE YOURSELF THE SAME UNDERSTANDING YOU GIVE OTHER PEOPLE.",
      highlight: "SAME UNDERSTANDING",
      subNote: "Be gentle with your own heart."
    },
  ],

  // 05 / OUR LITTLE UNIVERSE (MEMORIES)
  memoriesSection: {
    tag: "05 / ARCHIVE OF MOMENTS",
    heading: "THE LITTLE\nTHINGS THAT\nBECAME OURS.",
    supportingParagraph: "Some of the best parts of a friendship aren't necessarily the biggest moments. Sometimes they're the conversations, the laughter, the random things you remember, and the little moments that end up meaning more than you expected.",
    items: [
      {
        id: "memory-1",
        title: "A MOMENT I'LL REMEMBER",
        date: "Over this past year",
        body: "One of those quiet moments where we were just talking, and it hit me how comfortable it feels to talk to you like ik tu khud itna nahi sochti but its as if it's as if i am the most me around you",
        caption: "A quiet space where conversations simply felt effortless.",

      },
      {
        id: "memory-2",
        title: "ONE OF OUR CONVERSATIONS",
        date: "Midnight thoughts",
        body: "The conversations where hours pass by like minutes. Talking about how things are going, sharing thoughts we don't tell just anyone, and knowing someone is genuinely paying attention on the other side.",
        caption: "Talking about everything, and nothing at all, until late.",

      },
      {
        id: "memory-3",
        title: "THAT THING THAT MADE ME LAUGH",
        date: "An unexpected moment",
        body: "jab apan ek dusre ko krezy wala roast krte and somehow i am always better at roasting you so sybau, yea i laugh at that alot",
        caption: "When the simplest remark turned into pure laughter.",

      },
      {
        id: "memory-4",
        title: "A LITTLE THING YOU DID",
        date: "A thoughtful day",
        body: "The small check in you sent out of nowhere, or the way you noticed I seemed quiet or tired. It's rare for people to actually notice and follow up with care, and it never goes unappreciated.",
        caption: "Noticing without being asked, caring without hesitation.",

      },
      {
        id: "memory-5",
        title: "SOMETHING ONLY WE UNDERSTAND",
        date: "Our unspoken code",
        body: "The shared jokes, the specific mannerisms, or the reactions where just a single word or look says everything. Those little shared languages that only exist between two people who know each other well.",
        caption: "The subtle rhythm built between two best friends.",

      }
    ]
  },

  // 06 / AN OPEN LETTER TO INSHUU
  letterSection: {
    tag: "03 / FROM ME TO YOU",
    heading: "THERE ARE\nTHINGS I\nDON'T SAY\nENOUGH.",
    salutation: "Dear Inshuu,",
    paragraphs: [
      "I don't even know where to start, honestly. It's been more than a year since we met, and when I think about how much this friendship has come to mean to me, I realise that I probably don't tell you enough.",
      "You've been such a good friend to me. You've cared for me, tried to understand me, listened to me, and been there in ways that I genuinely appreciate. And I don't want those things to go unacknowledged just because I don't always know how to put my feelings into words.",
      "Thank you for being patient with me. Thank you for trying to understand me, even when I'm not the best at explaining myself. Thank you for caring, for checking in, and for making me feel like I can be myself around you.",
      "I hope you know that you don't have to do something extraordinary to be important to me. You don't have to constantly be there for everyone, fix everything, or always have the right words. You're allowed to have difficult days, to feel tired, to be quiet, and to need someone to look after you, too.",
      "Because our friendship isn't important to me just because of the things you do for me. It's important because of who you are, sweet little inshu on the other side of the vast world whom idk will i ever meet or not but you are closer to me than anyone in my own city",
      "I appreciate the little things about you. I appreciate the way you care, the way you try, and the person you are even on days when you might not feel like your best self. I appreciate having someone I can talk to, someone who makes an effort to understand me, and someone whose presence has become a genuinely good part of my life.",
      "A year might not sound like a lifetime, but it's enough time for someone to leave a mark on your life. And you've definitely left one on mine, in the best way.",
      "I can't promise that I'll always have the perfect advice or the right words whenever you need them. But I hope I can be the kind of friend to you that you've been to me. Someone you can talk to without feeling judged. Someone who wants to understand, not just respond. Someone who celebrates your happiness and reminds you that you matter when things aren't going so well.",
      "I hope life gives you so many reasons to smile. I hope you get the opportunities you deserve, the happiness you've been working towards, and the peace that sometimes gets overlooked in the middle of everything else. I hope you never feel like you have to make yourself smaller to fit into someone else's world.",
      "And whenever you forget how much you matter, I hope you remember that there is someone out here who is genuinely grateful that you exist in his life.",
      "That's what I wanted this little website to tell you.",
      "Thank you for being my friend, Inshuu. Thank you for the care, the understanding, and the friendship we've built over this past year and more.",
      "I'm really, really glad I met you.",
      "And yeahh sorry it took me a while but belated happy birthday and take this giftt<3"
    ],
    valediction: "With lots of appreciation,",
    signature: "Your bestie."
  }
};

