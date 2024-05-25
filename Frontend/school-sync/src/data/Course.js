const dummy = [
  {
    id: 1,
    courseName: "ICT",
    teacher: {
      teacherName: "Fardin",
      teacherImage: "link_of_the_image",
    },
    courseDetails: {
      courseImage: "link_of_the_image",
      othersDetails: "Introduction to Information and Communication Technology",
    },
    courseContents: [
      {
        topic: "Boolean algebra",
        details:
          "Introduction to Boolean algebra and its applications in digital systems.",
      },
      {
        topic: "Logic gates",
        details:
          "Understanding different types of logic gates and their functions.",
      },
    ],
  },
  {
    id: 2,
    courseName: "Mathematics",
    teacher: {
      teacherName: "Alice",
      teacherImage: "link_of_the_image",
    },
    courseDetails: {
      courseImage: "link_of_the_image",
      othersDetails: "Comprehensive course on algebra, calculus, and geometry.",
    },
    courseContents: [
      {
        topic: "Algebra",
        details: "Exploring algebraic expressions, equations, and functions.",
      },
      {
        topic: "Calculus",
        details: "Differentiation and integration concepts and applications.",
      },
    ],
  },
  {
    id: 3,
    courseName: "Physics",
    teacher: {
      teacherName: "Bob",
      teacherImage: "link_of_the_image",
    },
    courseDetails: {
      courseImage: "link_of_the_image",
      othersDetails:
        "Fundamentals of mechanics, thermodynamics, and electromagnetism.",
    },
    courseContents: [
      {
        topic: "Mechanics",
        details: "Study of motion, forces, and energy.",
      },
      {
        topic: "Electromagnetism",
        details:
          "Understanding electric and magnetic fields and their interactions.",
      },
    ],
  },
  {
    id: 4,
    courseName: "Chemistry",
    teacher: {
      teacherName: "Carol",
      teacherImage: "link_of_the_image",
    },
    courseDetails: {
      courseImage: "link_of_the_image",
      othersDetails:
        "Basic principles of chemistry including atomic structure and chemical reactions.",
    },
    courseContents: [
      {
        topic: "Atomic Structure",
        details: "Understanding the structure of atoms and the periodic table.",
      },
      {
        topic: "Chemical Reactions",
        details:
          "Exploring different types of chemical reactions and their applications.",
      },
    ],
  },
  {
    id: 5,
    courseName: "Biology",
    teacher: {
      teacherName: "Dave",
      teacherImage: "link_of_the_image",
    },
    courseDetails: {
      courseImage: "link_of_the_image",
      othersDetails: "Introduction to cell biology, genetics, and ecology.",
    },
    courseContents: [
      {
        topic: "Cell Biology",
        details: "Study of cell structure, function, and processes.",
      },
      {
        topic: "Genetics",
        details: "Understanding heredity and variation in living organisms.",
      },
    ],
  },
  {
    id: 6,
    courseName: "History",
    teacher: {
      teacherName: "Eve",
      teacherImage: "link_of_the_image",
    },
    courseDetails: {
      courseImage: "link_of_the_image",
      othersDetails:
        "Survey of world history from ancient times to the present.",
    },
    courseContents: [
      {
        topic: "Ancient Civilizations",
        details: "Exploring the history and culture of ancient civilizations.",
      },
      {
        topic: "Modern History",
        details:
          "Understanding major events and developments in modern history.",
      },
    ],
  },
  {
    id: 7,
    courseName: "Geography",
    teacher: {
      teacherName: "Frank",
      teacherImage: "link_of_the_image",
    },
    courseDetails: {
      courseImage: "link_of_the_image",
      othersDetails:
        "Study of Earth's landscapes, environments, and human interactions.",
    },
    courseContents: [
      {
        topic: "Physical Geography",
        details: "Understanding Earth's physical features and processes.",
      },
      {
        topic: "Human Geography",
        details:
          "Exploring human activities and their impact on the environment.",
      },
    ],
  },
  {
    id: 8,
    courseName: "Economics",
    teacher: {
      teacherName: "Grace",
      teacherImage: "link_of_the_image",
    },
    courseDetails: {
      courseImage: "link_of_the_image",
      othersDetails:
        "Introduction to microeconomics and macroeconomics principles.",
    },
    courseContents: [
      {
        topic: "Microeconomics",
        details: "Study of individual economic units and market interactions.",
      },
      {
        topic: "Macroeconomics",
        details: "Understanding the overall economy and government policies.",
      },
    ],
  },
  {
    id: 9,
    courseName: "Computer Science",
    teacher: {
      teacherName: "Henry",
      teacherImage: "link_of_the_image",
    },
    courseDetails: {
      courseImage: "link_of_the_image",
      othersDetails:
        "Fundamentals of programming, algorithms, and data structures.",
    },
    courseContents: [
      {
        topic: "Programming",
        details: "Introduction to programming languages and concepts.",
      },
      {
        topic: "Data Structures",
        details:
          "Understanding different data structures and their applications.",
      },
    ],
  },
  {
    id: 10,
    courseName: "Literature",
    teacher: {
      teacherName: "Isabel",
      teacherImage: "link_of_the_image",
    },
    courseDetails: {
      courseImage: "link_of_the_image",
      othersDetails:
        "Exploration of literary works from various genres and periods.",
    },
    courseContents: [
      {
        topic: "Poetry",
        details: "Analysis of poetic forms and techniques.",
      },
      {
        topic: "Novels",
        details: "Study of major novels and their themes.",
      },
    ],
  },
  {
    id: 11,
    courseName: "Philosophy",
    teacher: {
      teacherName: "Jack",
      teacherImage: "link_of_the_image",
    },
    courseDetails: {
      courseImage: "link_of_the_image",
      othersDetails:
        "Introduction to philosophical thought and major philosophers.",
    },
    courseContents: [
      {
        topic: "Ethics",
        details: "Exploration of moral philosophy and ethical theories.",
      },
      {
        topic: "Metaphysics",
        details: "Study of the nature of reality and existence.",
      },
    ],
  },
  {
    id: 12,
    courseName: "Psychology",
    teacher: {
      teacherName: "Karen",
      teacherImage: "link_of_the_image",
    },
    courseDetails: {
      courseImage: "link_of_the_image",
      othersDetails: "Understanding human behavior and mental processes.",
    },
    courseContents: [
      {
        topic: "Developmental Psychology",
        details: "Study of human growth and development across the lifespan.",
      },
      {
        topic: "Cognitive Psychology",
        details:
          "Understanding mental processes such as perception, memory, and decision-making.",
      },
    ],
  },
  {
    id: 13,
    courseName: "Sociology",
    teacher: {
      teacherName: "Leo",
      teacherImage: "link_of_the_image",
    },
    courseDetails: {
      courseImage: "link_of_the_image",
      othersDetails:
        "Exploring the development, structure, and functioning of human society.",
    },
    courseContents: [
      {
        topic: "Social Institutions",
        details:
          "Study of institutions such as family, education, and religion.",
      },
      {
        topic: "Social Change",
        details: "Understanding the causes and effects of social change.",
      },
    ],
  },
  {
    id: 14,
    courseName: "Art",
    teacher: {
      teacherName: "Mona",
      teacherImage: "link_of_the_image",
    },
    courseDetails: {
      courseImage: "link_of_the_image",
      othersDetails: "Introduction to various art forms and techniques.",
    },
    courseContents: [
      {
        topic: "Painting",
        details: "Exploring different painting techniques and styles.",
      },
      {
        topic: "Sculpture",
        details: "Understanding the principles and methods of sculpture.",
      },
    ],
  },
];

export default dummy;
