// src/utils/courseTypes.ts

export type CourseCategory = {
  [key: string]: CourseType[];
  
};

export type SoftwareType = {
  name: string;
  src: string;
};

export type CurriculumType = {
  [year: string]: {
    image: string;
    imageAlt: string;
    [semester: string]: string[] | string;
  };
};

export type WhatLearn = {
  skill: string;
  description: string;
};
export type VideosType = {
  url: string;
};

export type CourseType = {
  redirectUrl: string;
  mainTitle?: string;
  value: string;
  label: string;
  title: string;
  duration: string;
  description: string;
  content: string;
  metaTitle?: string;
  metaDescription?: string;
  curriculum?: CurriculumType;
  software: SoftwareType[];
  whatYouWillLearn: WhatLearn[];
  videos: VideosType[]; // Now software is an array of objects
};

export const courseTypes: CourseCategory = {
 "interior-design": [
  {
    "redirectUrl" : "/interior-design/bdes-in-interior-design",
    "mainTitle": "interior-design",
    "metaTitle": "Interior Design Course in Jodhpur | Inframe School of Art & Design",
    "metaDescription": "Join Inframe's Interior Design Course in Jodhpur and turn your passion into a career. 15+ years of expertise in top-notch Interior Design education.",
    "value": "bdes-in-interior-design",
    "label": "B. Des in Interior Design",
    "title": "Bachelor of Design in Interior Design",
    "duration": "4 Years Full-Time",
    "description": "Transform spaces and shape experiences through our comprehensive design program. Learn from industry experts and build a successful career in interior design.",
    "content": "The Bachelor of Design (B.Des) in Interior Design is a four-year full-time program designed to provide students with an in-depth understanding of interior spaces, aesthetics, and functionality. This course focuses on developing creativity, technical knowledge, and problem-solving abilities in design. Students explore design principles, material studies, lighting techniques, sustainable design, and digital rendering. The curriculum integrates theoretical knowledge with hands-on studio projects, emphasizing modern software like AutoCAD, SketchUp, and Revit. Graduates can pursue careers as interior designers, space planners, furniture designers, and exhibition designers.",
    "software": [
        { "name": "AutoCAD", "src": "/software logos/pngegg (17).png" },
        { "name": "SketchUp", "src": "/software logos/pngegg (18).png" },
        { "name": "3dsMax", "src": "/software logos//pngegg (19).png" },
        { "name": "Revit", "src": "/software logos/pngegg (21).png" },
        { "name": "Photoshop", "src": "/software logos/pngegg (24).png" }
      ],

      videos: [
        {
          url: "https://youtube.com/embed/8Zz5zcOPHDw?si=Tjq18SsXDOYT-bGL",
        },
        {
          url: "https://youtube.com/embed/Vl9aTeiM6RM?si=LFYlYsi_N60oYj9a",
        },
        {
          url: "https://youtube.com/embed/AyRoxi85cHw?si=aWO6rYOrAJUNsx7s",
        },
      ],
      whatYouWillLearn: [],
      curriculum: {
        "1st Year": {
          image: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467",
          imageAlt: "Interior design fundamentals sketch and materials",
          "Semester 1": [
            "Contextual Art and Design",
            "Material Studies",
            "Creative Skills",
            "Object as History",
            "Visual Expression",
            "Design Concepts",
          ],
          "Semester 2": [
            "Design Communication Skills",
            "Craft Experience",
            "Basic Design I",
            "Technical Representation",
            "Design Process",
            "Design Thinking",
          ],
        },
        "2nd Year": {
          image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f",
          imageAlt: "Modern interior space planning",
          "Semester 3": [
            "Interior Design Studio I",
            "Construction Methods",
            "Digital Design I",
            "History of Design",
            "Building Services",
            "Professional Practice",
          ],
          "Semester 4": [
            "Interior Design Studio II",
            "Advanced Construction",
            "Digital Design II",
            "Contemporary Design",
            "Services Integration",
            "Business Practice",
          ],
        },
        "3rd Year": {
          image: "https://images.unsplash.com/photo-1511920173225-7b9060208f02",
          imageAlt: "Advanced interior design techniques",
          "Semester 5": [
            "Interior Design Studio III",
            "Lighting Design",
            "Sustainable Design",
            "3D Visualization",
            "Human-Centered Design",
            "Furniture Design",
          ],
          "Semester 6": [
            "Interior Design Studio IV",
            "Advanced Digital Design",
            "Space Planning & Management",
            "Cultural and Social Design",
            "Material Innovations",
            "Business of Design",
          ],
        },
        "4th Year": {
          image: "https://images.unsplash.com/photo-1562967917-35e6a0329813",
          imageAlt: "Final project and professional portfolio",
          "Semester 7": [
            "Capstone Design Project",
            "Design Research Methods",
            "Lighting and Acoustics",
            "Urban Design",
            "Client Management",
            "Interior Project Management",
          ],
          "Semester 8": [
            "Thesis Preparation",
            "Professional Portfolio Development",
            "Interior Design Ethics",
            "Internship/Fieldwork",
            "Exhibition Design",
            "Entrepreneurship in Design",
          ],
        },
      },
    },
    {
      "redirectUrl" : "/interior-design/bvoc-in-interior-design",
      value: "bvoc-in-interior-design",
      label: "B.VOC in Interior Design",
      title: "B.VOC in Interior Design",
      duration: "3 Years Full-Time",
      description:
        "Combine practical skills with theoretical knowledge in our vocational bachelor's program. Perfect for hands-on learners ready to enter the industry.",
      content:
        "The Bachelor of Vocation (B.VOC) in Interior Design is a three-year full-time program tailored for students seeking a more practical and skill-oriented approach. The curriculum blends fundamental design principles with hands-on workshops covering space planning, interior styling, lighting design, furniture arrangement, and ergonomics. The course focuses on real-world projects, internships, and business modules to prepare students for careers in residential and commercial interior design, retail space planning, and hospitality design.",
      software: [
        { name: "AutoCAD", src: "/software logos/pngegg (17).png" },
        { name: "SketchUp", src: "/software logos/pngegg (18).png" },
        { name: "3dsMax", src: "/software logos//pngegg (19).png" },
        { name: "Revit", src: "/software logos/pngegg (21).png" },
        { name: "Photoshop", src: "/software logos/pngegg (24).png" },
      ],
      videos: [
        {
          url: "https://youtube.com/embed/8Zz5zcOPHDw?si=Tjq18SsXDOYT-bGL",
        },
        {
          url: "https://youtube.com/embed/Vl9aTeiM6RM?si=LFYlYsi_N60oYj9a",
        },
        {
          url: "https://youtube.com/embed/AyRoxi85cHw?si=aWO6rYOrAJUNsx7s",
        },
      ],
      whatYouWillLearn: [],
      curriculum: {
        "1st Year": {
          image: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467",
          imageAlt: "Interior design fundamentals sketch and materials",
          "Semester 1": [
            "Fundamentals of Interior Design",
            "Technical Drawing",
            "Material Studies",
            "Basic Space Planning",
          ],
          "Semester 2": [
            "Color Theory and Applications",
            "Furniture Design Basics",
            "AutoCAD and Digital Drafting",
            "Lighting Design Principles",
          ],
        },
        "2nd Year": {
          image: "https://images.unsplash.com/photo-1563271184-8cfecf7d7f0e",
          imageAlt: "Advanced interior design concept development",
          "Semester 3": [
            "Advanced Space Planning",
            "Interior Styling Techniques",
            "Ergonomics and Human Factors",
            "Digital Visualization Techniques",
          ],
          "Semester 4": [
            "Sustainable Design Practices",
            "Interior Design for Commercial Spaces",
            "Furniture Arrangement and Layout",
            "Business Aspects of Interior Design",
          ],
        },
        "3rd Year": {
          image: "https://images.unsplash.com/photo-1564643544-d59db2b2f5d9",
          imageAlt: "Final interior design project and presentation",
          "Semester 5": [
            "Interior Design Project Management",
            "Lighting Design for Commercial Spaces",
            "Interior Design in Hospitality",
            "Designing with Green Materials",
          ],
          "Semester 6": [
            "Final Interior Design Project",
            "Internship and Industry Practice",
            "Professional Development in Interior Design",
            "Marketing and Branding for Interior Designers",
          ],
        },
      },
    },

    {
      redirectUrl: "/interior-design/bsc-in-interior-design",
      value: "bsc-in-interior-design",
      label: "B.SC in Interior Design",
      title: "B.SC in Interior Design",
      duration: "3 Years Full-Time",
      description:
        "Master the technical aspects of interior design with our science-focused program. Ideal for analytical minds passionate about design.",
      content:
        "The Bachelor of Science (B.Sc) in Interior Design is a three-year program focusing on the technical and scientific aspects of interior design. The curriculum integrates design theory with practical applications such as architectural drafting, color psychology, building materials, sustainable design, and lighting technologies. The program emphasizes research-based learning, industry-standard software training, site visits, and workshops. Graduates can work in residential and commercial interior design, workspace planning, set design, and sustainable design consulting.",
      software: [
        { name: "AutoCAD", src: "/software logos/pngegg (17).png" },
        { name: "SketchUp", src: "/software logos/pngegg (18).png" },
        { name: "3dsMax", src: "/software logos//pngegg (19).png" },
        { name: "Revit", src: "/software logos/pngegg (21).png" },
        { name: "Photoshop", src: "/software logos/pngegg (24).png" },
      ],
      videos: [
        {
          url: "https://youtube.com/embed/8Zz5zcOPHDw?si=Tjq18SsXDOYT-bGL",
        },
        {
          url: "https://youtube.com/embed/Vl9aTeiM6RM?si=LFYlYsi_N60oYj9a",
        },
        {
          url: "https://youtube.com/embed/AyRoxi85cHw?si=aWO6rYOrAJUNsx7s",
        },
      ],
      whatYouWillLearn: [],
      curriculum: {
        "1st Year": {
          image: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467",
          imageAlt: "Interior design fundamentals sketch and materials",
          "Semester 1": [
            "Architectural Drawing Techniques",
            "Building Materials and Finishes",
            "Interior Design Studio I",
            "History of Interiors",
          ],
          "Semester 2": [
            "Structural Systems",
            "3D Modeling and Rendering",
            "Furniture and Fixture Design",
            "Environmental Studies",
          ],
        },
        "2nd Year": {
          image: "https://images.unsplash.com/photo-1563271184-8cfecf7d7f0e",
          imageAlt: "Interior design workspace and design application",
          "Semester 3": [
            "Lighting Design and Technologies",
            "Sustainable Interior Design Practices",
            "Advanced 3D Modeling",
            "Human Factors and Ergonomics in Design",
          ],
          "Semester 4": [
            "Building Codes and Regulations",
            "Designing for Commercial Spaces",
            "Interior Design Project Management",
            "Textile and Finishing Techniques",
          ],
        },
        "3rd Year": {
          image: "https://images.unsplash.com/photo-1564643544-d59db2b2f5d9",
          imageAlt: "Advanced interior design project presentation",
          "Semester 5": [
            "Research Methods in Interior Design",
            "Furniture Design and Production",
            "Interior Design for Special Environments",
            "Sustainability in Design",
          ],
          "Semester 6": [
            "Capstone Project",
            "Industry Internship",
            "Professional Practice and Ethics",
            "Design Consultancy and Entrepreneurship",
          ],
        },
      },
    },

    { redirectUrl: "/interior-design/one-year-diploma-in-interior-design",
      value: "one-year-diploma-in-interior-design",
      label: "1 Year Diploma",
      title: "1 Year Diploma in Interior Design",
      duration: "1 Year Intensive",
      description:
        "Fast-track your career with our intensive one-year program. Focus on practical skills and industry-ready training.",
      content:
        "The 1 Year Diploma in Interior Design is a fast-track program for students looking to gain essential interior design skills. The curriculum covers space planning, color theory, furniture selection, and design principles through hands-on training. Students engage in design workshops, studio-based assignments, and industry interactions. The program emphasizes creativity and functionality, preparing students for roles as junior designers, design assistants, or freelance interior decorators.",
      software: [
        { name: "AutoCAD", src: "/software logos/pngegg (17).png" },
        { name: "SketchUp", src: "/software logos/pngegg (18).png" },
        { name: "3dsMax", src: "/software logos//pngegg (19).png" },
        { name: "Revit", src: "/software logos/pngegg (21).png" },
        { name: "Photoshop", src: "/software logos/pngegg (24).png" },
      ],
      videos: [
        {
          url: "https://youtube.com/embed/8Zz5zcOPHDw?si=Tjq18SsXDOYT-bGL",
        },
        {
          url: "https://youtube.com/embed/Vl9aTeiM6RM?si=LFYlYsi_N60oYj9a",
        },
        {
          url: "https://youtube.com/embed/AyRoxi85cHw?si=aWO6rYOrAJUNsx7s",
        },
      ],
      whatYouWillLearn: [],
      curriculum: {
        "Semester 1": {
          image: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467",
          imageAlt: "Interior design fundamentals sketch and materials",
          content: [
            "Fundamentals of Interior Design",
            "Color Theory and Application",
            "Space Planning and Layout",
          ],
        },
        "Semester 2": {
          image: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467",
          imageAlt: "Interior design sketch and furniture arrangement",
          content: [
            "Furniture and Fixtures",
            "Digital Drafting Techniques",
            "Design Portfolio Development",
          ],
        },
      },
    },

    {redirectUrl:"/interior-design/three-year-diploma-in-interior-design",
      value: "three-year-diploma-in-interior-design",
      label: "3 Year Diploma",
      title: "3 Year Diploma in Interior Design",
      duration: "3 Years Full-Time",
      description:
        "Gain comprehensive knowledge and hands-on experience in all aspects of interior design. Perfect for creative minds seeking in-depth understanding.",
      content:
        "The 3 Year Diploma in Interior Design is a comprehensive program offering a strong foundation in design principles, spatial planning, sustainable design, furniture design, and architectural concepts. The curriculum includes industry-standard software training, real-world projects, internships, and collaborative assignments. Students also learn business aspects of interior design, such as project management and client handling, preparing them for careers as interior designers, exhibition designers, and retail space planners.",
      software: [
        { name: "AutoCAD", src: "/software logos/pngegg (17).png" },
        { name: "SketchUp", src: "/software logos/pngegg (18).png" },
        { name: "3dsMax", src: "/software logos//pngegg (19).png" },
        { name: "Revit", src: "/software logos/pngegg (21).png" },
        { name: "Photoshop", src: "/software logos/pngegg (24).png" },
      ],
      videos: [
        {
          url: "https://youtube.com/embed/8Zz5zcOPHDw?si=Tjq18SsXDOYT-bGL",
        },
        {
          url: "https://youtube.com/embed/Vl9aTeiM6RM?si=LFYlYsi_N60oYj9a",
        },
        {
          url: "https://youtube.com/embed/AyRoxi85cHw?si=aWO6rYOrAJUNsx7s",
        },
      ],
      whatYouWillLearn: [],
      curriculum: {
        "1st Year": {
          image: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467",
          imageAlt: "Interior design fundamentals sketch and materials",
          "Semester 1": [
            "Basic Design Principles",
            "Technical Drafting",
            "Material and Finishes",
            "Design Visualization",
          ],
          "Semester 2": [
            "3D Modeling and Rendering",
            "Furniture and Fixture Design",
            "Residential Space Planning",
            "Building Services",
          ],
        },
        "2nd Year": {
          image: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467",
          imageAlt: "Interior design software and space planning",
          "Semester 3": [
            "Sustainable Design Practices",
            "Lighting Design",
            "Commercial Space Planning",
            "Interior Detailing",
          ],
          "Semester 4": [
            "Advanced Materials and Textiles",
            "Design Project Management",
            "Exhibition Design",
            "Interior Design Ethics and Law",
          ],
        },
        "3rd Year": {
          image: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467",
          imageAlt: "Interior design presentation and projects",
          "Semester 5": [
            "Business Aspects of Interior Design",
            "Client Handling and Communication",
            "Final Design Project I",
            "Interior Design Portfolio",
          ],
          "Semester 6": [
            "Internship/Industry Placement",
            "Final Design Project II",
            "Professional Practice in Interior Design",
            "Project Presentation and Defense",
          ],
        },
      },
    },
  ],

  "fashion-design": [
    {redirectUrl:"/fashion-design/bdes-in-fashion-design",
      "metaTitle": "Fashion Design Course in Jodhpur | Inframe School of Art & Design",
    "metaDescription": "Join Inframe's Fashion Design Course in Jodhpur. With 15+ years of expertise, we offer top-notch education to launch your career in fashion design.",
      "value": "bdes-in-fashion-design",
      "label": "B. Des in Fashion Design",
      "title": "Bachelor of Design in Fashion Design",
      "duration": "4 Years Full-Time",
      
      "description": "Shape the future of fashion through innovative design and creative expression.",
      "content": "The Bachelor of Design (B.Des) in Fashion Design is a four-year program that combines creativity with technical expertise. Students learn fashion illustration, pattern making, garment construction, textile design, and trend forecasting. The program emphasizes both traditional craftsmanship and modern technology, preparing students for the dynamic fashion industry. Through hands-on projects and industry collaborations, students develop their unique design aesthetic while gaining practical skills in fashion merchandising, sustainable fashion, and digital design tools.",
      "software": [
        { "name": "Adobe Illustrator", "src": "/software logos/pngegg (25).png" },
        { "name": "Corel Draw", "src": "/software logos/pngegg (26).png" },
        { "name": "Photoshop", "src": "/software logos/pngegg (24).png" },
        
      ],
      videos: [],
      whatYouWillLearn: [],
      curriculum: {
        "1st Year": {
          image:
            "https://images.unsplash.com/photo-1567631643547-67a2dd59f266?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          imageAlt: "Fashion design fundamentals and sketching",
          "Semester 1": [
            "Fashion Design Fundamentals",
            "Fashion Illustration",
            "Textile Science",
            "Fashion History",
            "Color Theory",
            "Design Studio I",
          ],
          "Semester 2": [
            "Pattern Making Basics",
            "Garment Construction",
            "Fashion Art",
            "Digital Design Tools",
            "Material Studies",
            "Design Studio II",
          ],
        },
        "2nd Year": {
          image:
            "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          imageAlt: "Fashion garment construction",
          "Semester 3": [
            "Advanced Pattern Making",
            "Draping Techniques",
            "Fashion Trends",
            "Computer-Aided Design",
            "Fashion Marketing",
            "Design Studio III",
          ],
          "Semester 4": [
            "Tailoring Techniques",
            "Fashion Collection",
            "Textile Design",
            "Fashion Merchandising",
            "Portfolio Development",
            "Design Studio IV",
          ],
        },
        "3rd Year": {
          image:
            "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          imageAlt: "Fashion trend forecasting and design applications",
          "Semester 5": [
            "Advanced Draping Techniques",
            "Fashion Photography",
            "Fashion Styling",
            "Digital Fashion Illustration",
            "Sustainable Fashion Design",
          ],
          "Semester 6": [
            "Fashion Branding and Marketing",
            "Fashion Collection Design",
            "Fashion Retail Management",
            "Fashion Trend Forecasting",
            "Advanced Textile Design",
          ],
        },
        "4th Year": {
          image:
            "https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          imageAlt: "Fashion design portfolio and professional practice",
          "Semester 7": [
            "Capstone Fashion Design Project",
            "Fashion Show Production",
            "Advanced Pattern Drafting",
            "Fashion Project Management",
            "Luxury Fashion Design",
          ],
          "Semester 8": [
            "Thesis Preparation",
            "Fashion Entrepreneurship",
            "Internship/Fieldwork",
            "Professional Portfolio Development",
            "Global Fashion Trends",
          ],
        },
      },
    },
    { redirectUrl:"/fashion-design/bvoc-in-fashion-design",
      content:
        "The Bachelor of Vocation (B.VOC) in Fashion Design is a three-year program focused on practical skills and industry readiness. Students gain hands-on experience in garment construction, pattern making, and fashion illustration. The curriculum includes intensive workshops, industry internships, and real-world projects. This program emphasizes technical proficiency alongside creative development, preparing graduates for immediate entry into the fashion industry.",
      value: "bvoc-in-fashion-design",
      label: "B.VOC in Fashion Design",
      title: "B.VOC in Fashion Design",
      duration: "3 Years Full-Time",
      description:
        "Master practical fashion design skills with industry-focused training.",
      software: [
        { name: "Adobe Illustrator", src: "/software logos/pngegg (25).png" },
        { name: "Corel Draw", src: "/software logos/pngegg (26).png" },
        { name: "Photoshop", src: "/software logos/pngegg (24).png" },
      ],

      videos: [],
      whatYouWillLearn: [],
      curriculum: {
        "1st Year": {
          image: "https://images.unsplash.com/photo-1576691337280-42342cc5cf76",
          imageAlt: "Basic fashion design concepts and workshops",
          "Semester 1": [
            "Fashion Design Basics",
            "Garment Construction",
            "Pattern Making Techniques",
            "Fashion Illustration Fundamentals",
            "Textile Science",
            "Design Communication",
          ],
          "Semester 2": [
            "Fashion History",
            "Basic Draping Techniques",
            "Sewing and Stitching",
            "Color Theory",
            "Material Studies",
            "Design Studio I",
          ],
        },
        "2nd Year": {
          image: "https://images.unsplash.com/photo-1564866651-c2d17b80e9d8",
          imageAlt: "Intermediate fashion design techniques and projects",
          "Semester 3": [
            "Advanced Pattern Making",
            "Fashion Design Software",
            "Fashion Photography",
            "Fashion Marketing",
            "Textile Design",
            "Design Studio II",
          ],
          "Semester 4": [
            "Fashion Collection Design",
            "Garment Construction II",
            "Portfolio Development",
            "Sustainable Fashion Practices",
            "Advanced Sewing Techniques",
            "Design Studio III",
          ],
        },
        "3rd Year": {
          image: "https://images.unsplash.com/photo-1586190840451-97c7a9e5d9bb",
          imageAlt: "Final year fashion design projects and internships",
          "Semester 5": [
            "Industry Internship",
            "Fashion Trend Forecasting",
            "Fashion Show Production",
            "Fashion Entrepreneurship",
            "Professional Development",
          ],
          "Semester 6": [
            "Capstone Project",
            "Fashion Retail Management",
            "Advanced Fashion Illustration",
            "Global Fashion Trends",
            "Professional Portfolio Development",
          ],
        },
      },
    },

    { redirectUrl:"/fashion-design/bsc-in-fashion-design",
      content:
        "The Bachelor of Science (B.SC) in Fashion Design is a three-year program that combines design creativity with technical and scientific aspects of fashion. Students study textile science, color theory, fashion technology, and sustainable practices. The curriculum includes advanced computer-aided design, production management, and quality control, providing a strong foundation in the technical aspects of fashion production.",
      value: "bsc-in-fashion-design",
      label: "B.SC in Fashion Design",
      title: "B.SC in Fashion Design",
      duration: "3 Years Full-Time",
      description:
        "Combine scientific knowledge with fashion design expertise.",
      software: [
        { name: "Adobe Illustrator", src: "/software logos/pngegg (25).png" },
        { name: "Corel Draw", src: "/software logos/pngegg (26).png" },
        { name: "Photoshop", src: "/software logos/pngegg (24).png" },
      ],

      videos: [],
      whatYouWillLearn: [],
      curriculum: {
        "1st Year": {
          image: "https://images.unsplash.com/photo-1575240023813-210ca26abf1c",
          imageAlt:
            "Introduction to textile science and basic design techniques",
          "Semester 1": [
            "Introduction to Fashion Design",
            "Textile Science Fundamentals",
            "Fashion Illustration Basics",
            "Color Theory and Application",
            "Design Communication",
            "Basic Garment Construction",
          ],
          "Semester 2": [
            "Fashion History and Evolution",
            "Pattern Making Fundamentals",
            "Introduction to Fashion Technology",
            "Materials and Fabrics",
            "Design Thinking and Innovation",
            "Fashion Photography",
          ],
        },
        "2nd Year": {
          image: "https://images.unsplash.com/photo-1592904012202-2c54212261e6",
          imageAlt: "Intermediate design concepts and fashion technology",
          "Semester 3": [
            "Advanced Pattern Making",
            "Fashion Design Software",
            "Textile Design and Innovation",
            "Computer-Aided Design (CAD)",
            "Sustainable Fashion Practices",
            "Fashion Merchandising",
          ],
          "Semester 4": [
            "Production Management",
            "Quality Control in Fashion Production",
            "Fashion Marketing and Retail",
            "3D Design Technology",
            "Brand Development",
            "Advanced Garment Construction",
          ],
        },
        "3rd Year": {
          image: "https://images.unsplash.com/photo-1555094546-9cf3b18d7e84",
          imageAlt: "Final year projects and professional development",
          "Semester 5": [
            "Fashion Trend Forecasting",
            "Fashion Entrepreneurship",
            "Fashion Show Production",
            "Advanced Textile Science",
            "Global Fashion Trends",
          ],
          "Semester 6": [
            "Capstone Project",
            "Fashion Business Management",
            "Professional Portfolio Development",
            "Fashion Retail and E-commerce",
            "Internship in Fashion Industry",
          ],
        },
      },
    },

    { redirectUrl:"/fashion-design/one-year-diploma-in-fashion-design",
      content:
        "The One Year Diploma in Fashion Design is an intensive program covering essential fashion design skills. Students learn basic pattern making, garment construction, fashion illustration, and digital design tools. The program includes practical projects and a basic understanding of the fashion industry, perfect for those seeking quick entry into the fashion world.",
      value: "one-year-diploma-in-fashion-design",
      label: "1 Year Diploma in Fashion Design",
      title: "1 Year Diploma in Fashion Design",
      duration: "1 Year Intensive",
      description:
        "Fast-track your fashion design career with hands-on training.",
      software: [
        { name: "Adobe Illustrator", src: "/software logos/pngegg (25).png" },
        { name: "Corel Draw", src: "/software logos/pngegg (26).png" },
        { name: "Photoshop", src: "/software logos/pngegg (24).png" },
      ],

      videos: [],
      whatYouWillLearn: [],
      curriculum: {
        "1st Year": {
          image: "https://images.unsplash.com/photo-1555043131-5b53bb99b96e",
          imageAlt: "Fashion design basics and garment construction",
          "Semester 1": [
            "Introduction to Fashion Design",
            "Basic Pattern Making",
            "Fashion Illustration Basics",
            "Garment Construction Techniques",
            "Textile Knowledge",
            "Fashion Communication",
          ],
          "Semester 2": [
            "Fashion Styling and Trends",
            "Fashion Photography Basics",
            "Introduction to Digital Design Tools",
            "Basic Fashion Marketing",
            "Sewing and Draping Techniques",
            "Fashion Industry Overview",
          ],
        },
      },
    },

    { redirectUrl: "/fashion-design/three-year-diploma-in-fashion-design",
      content:
        "The Three Year Diploma in Fashion Design offers comprehensive training in all aspects of fashion design. Students develop strong technical skills in pattern making, garment construction, and design development. The program includes extensive practical training, industry internships, and portfolio development, preparing graduates for various roles in the fashion industry.",
      value: "three-year-diploma-in-fashion-design",
      label: "3 Year Diploma in Fashion Design",
      title: "3 Year Diploma in Fashion Design",
      duration: "3 Years Full-Time",
      description:
        "Gain comprehensive knowledge and practical expertise in fashion design.",
      software: [
        { name: "Adobe Illustrator", src: "/software logos/pngegg (25).png" },
        { name: "Corel Draw", src: "/software logos/pngegg (26).png" },
        { name: "Photoshop", src: "/software logos/pngegg (24).png" },
      ],

      videos: [],
      whatYouWillLearn: [],
      curriculum: {
        "1st Year": {
          image: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467",
          imageAlt: "Fashion design basics and pattern making",
          "Semester 1": [
            "Introduction to Fashion Design",
            "Basic Pattern Making",
            "Fashion Illustration Basics",
            "Garment Construction Techniques",
            "Textile Science",
            "Fashion Communication",
          ],
          "Semester 2": [
            "Fashion Trends and Forecasting",
            "Color Theory in Fashion",
            "Basic Draping Techniques",
            "Sewing Fundamentals",
            "Digital Fashion Design Tools",
            "Fashion Industry Overview",
          ],
        },
        "2nd Year": {
          image: "https://images.unsplash.com/photo-1565037639-7f1c95e31261",
          imageAlt: "Advanced fashion design and garment construction",
          "Semester 3": [
            "Advanced Pattern Making",
            "Fashion Draping and Construction",
            "Fashion History",
            "Portfolio Development",
            "Fashion Merchandising",
            "Sustainable Fashion Practices",
          ],
          "Semester 4": [
            "Digital Fashion Design II",
            "Fashion Marketing",
            "Fashion Photography Basics",
            "Textile Technology",
            "Branding and Business in Fashion",
            "Internship Preparation",
          ],
        },
        "3rd Year": {
          image: "https://images.unsplash.com/photo-1533745062109-15f3c78b65b5",
          imageAlt: "Final fashion design project and portfolio",
          "Semester 5": [
            "Final Fashion Design Project",
            "Advanced Fashion Illustration",
            "Fashion Show Production",
            "Trends and Innovations in Fashion",
            "Advanced Draping and Couture Techniques",
            "Internship",
          ],
          "Semester 6": [
            "Professional Development in Fashion",
            "Business of Fashion",
            "Fashion Design Portfolio Finalization",
            "Sustainable Fashion Design",
            "Fashion Collection Presentation",
            "Industry Internship",
          ],
        },
      },
    },
  ],

"graphic-design": [
  { redirectUrl:"/graphic-design/bdes-in-graphic-design",
    "metaTitle": "Graphic Design Course in Jodhpur | Inframe School of Art & Design",
    "metaDescription": "Enroll in Inframe's Graphic Design Course in Jodhpur. With 15+ years of experience, we provide expert training to kickstart your career in graphic design.",
    "content": "The Bachelor of Design (B.Des) in Graphic Design is a comprehensive four-year program that develops creative problem-solving skills through visual communication. Students learn typography, layout design, branding, digital illustration, and motion graphics. The program emphasizes both traditional design principles and modern digital tools, preparing students for diverse creative industry roles.",
    "value": "bdes-in-graphic-design",
    "label": "B. Des in Graphic Design",
    "title": "Bachelor of Design in Graphic Design",
    "duration": "4 Years Full-Time",
    "description": "Create compelling visual communications through innovative design.",
    "software": [
      { "name": "Adobe ", "src": "/software logos/pngegg (27).png" },
      { "name": "Corel Draw", "src": "/software logos/pngegg (26).png" },
      { "name": "Photoshop", "src": "/software logos/pngegg (24).png" },
      { "name": "Maya", "src": "/software logos/pngegg (28).png" },
      { "name": "After Effect", "src": "/software logos/pngegg (29).png" },
      { "name": "Adobe Illustrator", "src": "/software logos/pngegg (25).png" },
      { "name": "Blender", "src": "/software logos/pngegg (30).png" },
      
    ],
    "videos": [],
    "whatYouWillLearn": [],
    "curriculum": {
      "1st Year": {
        "image": "https://images.unsplash.com/photo-1617103996702-96ff29b1c467",
        "imageAlt": "Graphic design principles and tools",
        "Semester 1": [
          "Introduction to Graphic Design",
          "Typography Fundamentals",
          "Visual Communication",
          "Drawing and Sketching"
        ],
        "Semester 2": [
          "Layout and Composition",
          "Digital Illustration Basics",
          "Design Software Training (Illustrator, Photoshop)",
          "History of Graphic Design"
        ]
      },
      "2nd Year": {
        "image": "https://images.unsplash.com/photo-1617103996702-96ff29b1c467",
        "imageAlt": "Branding and advanced design tools",
        "Semester 3": [
          "Branding and Identity Design",
          "Advanced Typography",
          "Photography for Designers",
          "Motion Graphics Basics"
        ],
        "Semester 4": [
          "Packaging Design",
          "Web Design and User Experience",
          "Video Editing for Designers",
          "Design Thinking and Problem Solving"
        ]
      },
      "3rd Year": {
        "image": "https://images.unsplash.com/photo-1617103996702-96ff29b1c467",
        "imageAlt": "Advanced graphic design software training",
        "Semester 5": [
          "Advertising Design",
          "Interactive Design",
          "User Interface (UI) Design",
          "Design Portfolio Development"
        ],
        "Semester 6": [
          "Brand Campaigns",
          "3D Visualization for Design",
          "Client Interaction and Presentation",
          "Advanced Motion Graphics"
        ]
      },
      "4th Year": {
        "image": "https://images.unsplash.com/photo-1617103996702-96ff29b1c467",
        "imageAlt": "Capstone project and portfolio refinement",
        "Semester 7": [
          "Advanced Branding Techniques",
          "Capstone Project I",
          "Internship Preparation and Industry Interaction",
          "Design Ethics"
        ],
        "Semester 8": [
          "Capstone Project II",
          "Portfolio Finalization",
          "Design for Print and Digital Media",
          "Job Market Preparation and Networking"
        ]
      }
    }
  },
  { redirectUrl: "/graphic-design/bvoc-in-graphic-design",
    "content": "The Bachelor of Vocation (B.VOC) in Graphic Design is a three-year program focusing on practical design skills and industry applications. Students gain hands-on experience with design software, digital illustration, and print production. The curriculum emphasizes real-world projects and industry collaboration, preparing graduates for immediate employment in the design industry.",
    "value": "bvoc-in-graphic-design",
    "label": "B.VOC in Graphic Design",
    "title": "B.VOC in Graphic Design",
    "duration": "3 Years Full-Time",
    "description": "Develop practical graphic design skills with industry-focused training.",
    "software": [
      { "name": "Adobe ", "src": "/software logos/pngegg (27).png" },
      { "name": "Corel Draw", "src": "/software logos/pngegg (26).png" },
      { "name": "Photoshop", "src": "/software logos/pngegg (24).png" },
      { "name": "Maya", "src": "/software logos/pngegg (28).png" },
      { "name": "After Effect", "src": "/software logos/pngegg (29).png" },
      { "name": "Adobe Illustrator", "src": "/software logos/pngegg (25).png" },
      { "name": "Blender", "src": "/software logos/pngegg (30).png" },
      
    ],
    "videos": [],
    "whatYouWillLearn": [],
    "curriculum": {
      "1st Year": {
        "image": "https://images.unsplash.com/photo-1617103996702-96ff29b1c467",
        "imageAlt": "Basic graphic design principles",
        "Semester 1": [
          "Introduction to Graphic Design",
          "Basic Typography",
          "Design Principles and Composition",
          "Illustration Techniques"
        ],
        "Semester 2": [
          "Digital Design Tools",
          "Print Production Techniques",
          "Packaging Design",
          "Basic Web Design"
        ]
      },
      "2nd Year": {
        "image": "https://images.unsplash.com/photo-1617103996702-96ff29b1c467",
        "imageAlt": "Intermediate graphic design and branding",
        "Semester 3": [
          "Brand Identity Design",
          "Web Layout and Interface Design",
          "Photo Editing and Manipulation",
          "Motion Graphics and Animation Basics"
        ],
        "Semester 4": [
          "Brand Strategy and Campaigns",
          "Mobile App Design",
          "Interactive Media Design",
          "Design for Digital Platforms"
        ]
      },
      "3rd Year": {
        "image": "https://images.unsplash.com/photo-1617103996702-96ff29b1c467",
        "imageAlt": "Advanced graphic design skills and project work",
        "Semester 5": [
          "Design for Advertising",
          "Advanced Typography",
          "Freelance Design Practices",
          "Project Management for Designers"
        ],
        "Semester 6": [
          "Capstone Project",
          "Portfolio Development",
          "Internship",
          "Industry Collaboration Project"
        ]
      }
    }
  },
  { redirectUrl: "/fashion-design/bsc-in-fashion-design",
    "content": "The Bachelor of Science (B.SC) in Graphic Design combines design principles with technical expertise. Students study color theory, visual perception, digital technology, and production processes. The program includes advanced software training, web design basics, and understanding of print and digital media technologies.",
    "value": "bsc-in-graphic-design",
    "label": "B.SC in Graphic Design",
    "title": "B.SC in Graphic Design",
    "duration": "3 Years Full-Time",
    "software": [
      { "name": "Adobe ", "src": "/software logos/pngegg (27).png" },
      { "name": "Corel Draw", "src": "/software logos/pngegg (26).png" },
      { "name": "Photoshop", "src": "/software logos/pngegg (24).png" },
      { "name": "Maya", "src": "/software logos/pngegg (28).png" },
      { "name": "After Effect", "src": "/software logos/pngegg (29).png" },
      { "name": "Adobe Illustrator", "src": "/software logos/pngegg (25).png" },
      { "name": "Blender", "src": "/software logos/pngegg (30).png" },
      
    ],
    "videos": [],
    "whatYouWillLearn": [],
    "description": "Master both creative and technical aspects of graphic design.",
    "curriculum": {
      "1st Year": {
        "image": "https://images.unsplash.com/photo-1617103996702-96ff29b1c467",
        "imageAlt": "Graphic design and technology fundamentals",
        "Semester 1": [
          "Introduction to Graphic Design",
          "Color Theory and Perception",
          "Basic Photography and Digital Imaging",
          "Computer Graphics Software"
        ],
        "Semester 2": [
          "3D Visualization",
          "Digital Media Design",
          "Print Design Principles",
          "Design Software Mastery (Photoshop, Illustrator)"
        ]
      },
      "2nd Year": {
        "image": "https://images.unsplash.com/photo-1617103996702-96ff29b1c467",
        "imageAlt": "Advanced digital design and web development",
        "Semester 3": [
          "Web Design Basics",
          "User Interface (UI) Design",
          "Advanced Typography Techniques",
          "Motion Graphics and Video Editing"
        ],
        "Semester 4": [
          "Interactive Media Design",
          "Design Project Management",
          "Branding and Advertising",
          "Digital Publishing"
        ]
      },
      "3rd Year": {
        "image": "https://images.unsplash.com/photo-1617103996702-96ff29b1c467",
        "imageAlt": "Advanced graphic design software and projects",
        "Semester 5": [
          "Digital Photography and Image Manipulation",
          "Interactive Web Design",
          "Virtual and Augmented Reality Design",
          "Portfolio Design and Development"
        ],
        "Semester 6": [
          "Capstone Project",
          "Internship",
          "Professional Practice in Graphic Design",
          "Design Business and Freelancing"
        ]
      }
    }
  },
  { redirectUrl:"/graphic-design/one-year-diploma-in-graphic-design",
    "content": "The One Year Diploma in Graphic Design provides essential skills in visual communication. Students learn fundamental design principles, basic software proficiency, and practical design applications. The program includes hands-on projects in logo design, branding, and digital media, ideal for quick entry into the design industry.",
    "value": "one-year-diploma-in-graphic-design",
    "label": "1 Year Diploma in Graphic Design",
    "title": "1 Year Diploma in Graphic Design",
    "duration": "1 Year Intensive",
    "software": [
      { "name": "Adobe ", "src": "/software logos/pngegg (27).png" },
      { "name": "Corel Draw", "src": "/software logos/pngegg (26).png" },
      { "name": "Photoshop", "src": "/software logos/pngegg (24).png" },
      { "name": "Maya", "src": "/software logos/pngegg (28).png" },
      { "name": "After Effect", "src": "/software logos/pngegg (29).png" },
      { "name": "Adobe Illustrator", "src": "/software logos/pngegg (25).png" },
      { "name": "Blender", "src": "/software logos/pngegg (30).png" },
      
    ],
    "videos": [],
    "whatYouWillLearn": [],
    "description": "Quick, intensive training in essential graphic design skills.",
    "curriculum": {
      "1st Year": {
        "image": "https://images.unsplash.com/photo-1617103996702-96ff29b1c467",
        "imageAlt": "Graphic design essentials",
        "Semester 1": [
          "Introduction to Graphic Design",
          "Logo Design and Branding",
          "Basic Typography and Layout",
          "Digital Illustration",
          "Software Training (Photoshop, Illustrator)"
        ],
        "Semester 2": [
          "Advanced Typography",
          "Branding Strategy and Campaigns",
          "Web Design Basics",
          "Print Design Principles",
          "Design Project Management"
        ]
      }
    }
  }
  
  ,
  { redirectUrl: "/graphic-design/three-year-diploma-in-graphic-design",
    "content": "The Three Year Diploma in Graphic Design offers comprehensive training in visual communication and design technology. Students develop expertise in design software, typography, branding, and multimedia design. The program includes extensive practical projects, portfolio development, and industry internships.",
    "value": "three-year-diploma-in-graphic-design",
    "label": "3 Year Diploma in Graphic Design",
    "title": "3 Year Diploma in Graphic Design",
    "duration": "3 Years Full-Time",
    "software": [
      { "name": "Adobe ", "src": "/software logos/pngegg (27).png" },
      { "name": "Corel Draw", "src": "/software logos/pngegg (26).png" },
      { "name": "Photoshop", "src": "/software logos/pngegg (24).png" },
      { "name": "Maya", "src": "/software logos/pngegg (28).png" },
      { "name": "After Effect", "src": "/software logos/pngegg (29).png" },
      { "name": "Adobe Illustrator", "src": "/software logos/pngegg (25).png" },
      { "name": "Blender", "src": "/software logos/pngegg (30).png" },
      
    ],
    "videos": [],
    "whatYouWillLearn": [],
    "description": "Comprehensive training in all aspects of graphic design.",
    "curriculum": {
      "1st Year": {
        "image": "https://images.unsplash.com/photo-1617103996702-96ff29b1c467",
        "imageAlt": "Fundamentals of graphic design and media",
        "Semester 1": [
          "Introduction to Graphic Design",
          "Digital Tools and Software",
          "Typography and Layout",
          "Design Thinking"
        ],
        "Semester 2": [
          "Photo Manipulation and Editing",
          "Branding and Identity Design",
          "Basic Motion Graphics",
          "Project Management"
        ]
      },
      "2nd Year": {
        "image": "https://images.unsplash.com/photo-1617103996702-96ff29b1c467",
        "imageAlt": "Branding and multimedia design",
        "Semester 3": [
          "Branding and Marketing Design",
          "UI/UX Design Fundamentals",
          "Advanced Typography",
          "Social Media Design"
        ],
        "Semester 4": [
          "Interactive Media",
          "Packaging and Print Design",
          "Multimedia Design",
          "Digital Advertising"
        ]
      },
      "3rd Year": {
        "image": "https://images.unsplash.com/photo-1617103996702-96ff29b1c467",
        "imageAlt": "Industry-based projects and design portfolio",
        "Semester 5": [
          "Advanced Motion Graphics",
          "Freelancing in Design",
          "Internship",
          "Design Portfolio Development"
        ],
        "Semester 6": [
          "Capstone Project",
          "Job Market Preparation",
          "Professional Design Practices",
          "Industry Collaboration Projects"
        ]
      }
    }
  }
],


"uiux-design": [
  { redirectUrl:"/uiux-design/bdes-in-ui-ux-design",
    "metaTitle": "UI/UX Design Course in Jodhpur | Inframe School of Art & Design",
    "metaDescription": "Join Inframe's UI/UX Design Course in Jodhpur. With 15+ years of expertise, we offer industry-focused training to kickstart your career in UI/UX design.",
    "content": "The Bachelor of Design (B.Des) in UI & UX Design is a four-year program focusing on creating exceptional digital experiences. Students learn user research, information architecture, interaction design, and prototyping. The curriculum covers both theoretical principles and practical applications of user-centered design, preparing graduates for roles in digital product design.",
    "value": "bdes-in-ui-ux-design",
    "label": "B. Des in UI & UX Design",
    "title": "Bachelor of Design in UI & UX Design",
    "duration": "4 Years Full-Time",
    "description": "Create seamless digital experiences through user-centered design.",
    "software": [
      { "name": "Figma", "src": "/software logos/pngegg (31).png" },
      { "name": "Adobe XD", "src": "/software logos/pngegg (32).png" },
      { "name": "Photoshop", "src": "/software logos/pngegg (24).png" },
      { "name": "Adobe Illustrator", "src": "/software logos/pngegg (25).png" },
    ],
    "videos": [],
     "whatYouWillLearn": [],
    "curriculum": {
      "1st Year": {
        "image": "https://images.unsplash.com/photo-1617103996702-96ff29b1c467",
        "imageAlt": "UI & UX design fundamentals",
        "Semester 1": [
          "Introduction to UI/UX Design",
          "Human-Computer Interaction",
          "Design Thinking Process",
          "Visual Communication",
          "Introduction to Prototyping"
        ],
        "Semester 2": [
          "Information Architecture",
          "Wireframing and Prototyping",
          "Interaction Design Principles",
          "Usability Testing",
          "Web Design Basics"
        ]
      },
      "2nd Year": {
        "image": "https://images.unsplash.com/photo-1617103996702-96ff29b1c467",
        "imageAlt": "Advanced UI & UX design concepts",
        "Semester 3": [
          "Advanced Prototyping Techniques",
          "Mobile App Design",
          "User Research and Analysis",
          "UI Design Principles",
          "User Interface Development"
        ],
        "Semester 4": [
          "Usability Evaluation and Feedback",
          "Design for Accessibility",
          "Interaction Prototyping",
          "Digital Branding and UI Design",
          "Designing for Multiple Platforms"
        ]
      },
      "3rd Year": {
        "image": "https://images.unsplash.com/photo-1617103996702-96ff29b1c467",
        "imageAlt": "Design in a professional environment",
        "Semester 5": [
          "Design Strategy and Innovation",
          "Advanced Mobile App Design",
          "Project Management for UI/UX",
          "User Interface and Experience Design Tools",
          "Client Interaction and Communication"
        ],
        "Semester 6": [
          "Real-world UI/UX Projects",
          "Prototyping and Agile Methods",
          "Emerging Technologies in Design",
          "Ethics in UI/UX Design",
          "Digital Marketing Principles"
        ]
      },
      "4th Year": {
        "image": "https://images.unsplash.com/photo-1617103996702-96ff29b1c467",
        "imageAlt": "UI/UX capstone project",
        "Semester 7": [
          "Capstone Project Design",
          "User-Centered Design Research",
          "UI Design for Virtual Reality",
          "Digital Product Development",
          "Entrepreneurship in Design"
        ],
        "Semester 8": [
          "Design Portfolio Development",
          "Design Consultancy and Client Management",
          "Design Internships",
          "UI/UX Design for Smart Devices",
          "Final Design Presentation"
        ]
      }
    }
  },
  { redirectUrl:"/uiux-design/one-year-diploma-in-ui-ux-design",
    "content": "The One Year Diploma in UI & UX Design is an intensive program covering essential skills in digital interface design. Students learn fundamental UX principles, UI design tools, prototyping software, and basic coding concepts. The program includes practical projects and portfolio development, perfect for quick entry into the digital design industry.",
    "value": "one-year-diploma-in-ui-ux-design",
    "label": "1 Year Diploma in UI & UX Design",
    "title": "1 Year Diploma in UI & UX Design",
    "duration": "1 Year Intensive",
    "description": "Fast-track your career in digital product design.",
    "software": [
      { "name": "Figma", "src": "/software logos/pngegg (31).png" },
      { "name": "Adobe XD", "src": "/software logos/pngegg (32).png" },
      { "name": "Photoshop", "src": "/software logos/pngegg (24).png" },
      { "name": "Adobe Illustrator", "src": "/software logos/pngegg (25).png" },
    ],
    "videos": [],
    "whatYouWillLearn": [],
    "curriculum": {
      "1st Year": {
        "image": "https://images.unsplash.com/photo-1617103996702-96ff29b1c467",
        "imageAlt": "UI & UX design essentials",
        "Semester 1": [
          "Introduction to UI/UX Design",
          "User Research Fundamentals",
          "Basic Prototyping Tools",
          "Wireframing and Layout Design",
          "UI Design Software (Sketch, Figma)"
        ],
        "Semester 2": [
          "Advanced Prototyping and Wireframing",
          "Usability and User Testing",
          "Basic HTML/CSS for Design",
          "Interaction Design Principles",
          "Designing for Mobile and Web"
        ]
      }
    }
  }
]

,

"animation-vfx": [
  { redirectUrl:"/animation-vfx/bdes-in-animation-and-vfx",
    "metaTitle": "Animation & VFX Course in Jodhpur | Inframe School of Art & Design",
    "metaDescription": "Enroll in Inframe's Animation & VFX Course in Jodhpur. With 15+ years of experience, we provide expert training to launch your career in animation and visual effects.",
    "content": "The Bachelor of Design (B.Des) in Animation and VFX is a four-year program that focuses on creating captivating animations and visual effects for films, games, and digital media. Students will gain expertise in animation techniques, VFX production, 3D modeling, and compositing, with an emphasis on creativity and technical skills. This program prepares students for a career in the dynamic field of animation and visual effects.",
    "value": "bdes-in-animation-and-vfx",
    "label": "B. Des in Animation and VFX",
    "title": "Bachelor of Design in Animation and VFX",
    "duration": "4 Years Full-Time",
    "description": "Master the art of animation and VFX to create captivating visual experiences.",
    "software": [
      { "name": "Maya", "src": "/software logos/pngegg (28).png" },
      { "name": "3DS Max", "src": "/software logos/pngegg (19).png" },
      { "name": "Blender", "src": "/software logos/pngegg (30).png" },
      { "name": "Nuke", "src": "/software logos/pngegg (33).png" },
      { "name": "After Effect", "src": "/software logos/pngegg (29).png" },
      { "name": "Photoshop", "src": "/software logos/pngegg (24).png" },
      { "name": "Houdini", "src": "/software logos/pngegg (34).png" },
      { "name": "Unreal Engine", "src": "/software logos/pngegg (35).png" },
    ],
    "videos": [],
    "whatYouWillLearn": [],
    "curriculum": {
      "1st Year": {
        "image": "https://images.unsplash.com/photo-1606112216719-3c2c2cce4507",
        "imageAlt": "Introduction to Animation and VFX",
        "Semester 1": [
          "Introduction to Animation Techniques",
          "Fundamentals of Visual Effects",
          "Digital Art and Design Principles",
          "Storytelling and Narrative for Animation",
          "Basic 3D Modeling"
        ],
        "Semester 2": [
          "Animation for Film and TV",
          "Visual Effects Software (Nuke, After Effects)",
          "Character Design and Development",
          "Motion Graphics",
          "Introduction to Compositing"
        ]
      },
      "2nd Year": {
        "image": "https://images.unsplash.com/photo-1596524602085-b91b935d9b93",
        "imageAlt": "Advanced Animation and VFX techniques",
        "Semester 3": [
          "Advanced 3D Animation",
          "Compositing Techniques",
          "Rotoscoping and Green Screen",
          "Visual Effects for Film and Games",
          "Motion Capture and Performance Animation"
        ],
        "Semester 4": [
          "Character Animation Principles",
          "Texturing and Lighting for 3D",
          "Visual Storytelling",
          "Compositing for VFX",
          "Designing for Augmented and Virtual Reality"
        ]
      },
      "3rd Year": {
        "image": "https://images.unsplash.com/photo-1571223090770-5f07958ac064",
        "imageAlt": "Animation and VFX in professional settings",
        "Semester 5": [
          "Advanced VFX Compositing",
          "Environmental Design for Animation",
          "Advanced 3D Modeling and Rigging",
          "Project Management in Animation",
          "Animation for Video Games"
        ],
        "Semester 6": [
          "Digital Matte Painting",
          "Advanced Rendering Techniques",
          "Lighting and Shading for Animation",
          "Visual Effects for Advertising",
          "Advanced Character Animation"
        ]
      },
      "4th Year": {
        "image": "https://images.unsplash.com/photo-1606112216719-3c2c2cce4507",
        "imageAlt": "Animation and VFX Capstone Project",
        "Semester 7": [
          "Capstone Animation and VFX Project",
          "Visual Effects in Feature Films",
          "Studio Production for Animation",
          "Virtual Production Techniques",
          "Portfolio Development"
        ],
        "Semester 8": [
          "Design Consultancy and Client Interaction",
          "Animation and VFX Internships",
          "Final Project Presentation",
          "Industry Trends and Emerging Technologies in Animation",
          "Entrepreneurship in Animation and VFX"
        ]
      }
    }
  },
  { redirectUrl: "/animation-vfx/one-year-diploma-in-animation-and-vfx",
    "content": "The One Year Diploma in Animation and VFX is an intensive program designed to equip students with the core skills needed for a career in the animation and visual effects industry. The course covers 2D and 3D animation, VFX tools and software, compositing, and visual storytelling. This program is perfect for those looking to quickly develop industry-ready skills and enter the world of animation and VFX production.",
    "value": "one-year-diploma-in-animation-and-vfx",
    "label": "1 Year Diploma in Animation and VFX",
    "title": "1 Year Diploma in Animation and VFX",
    "duration": "1 Year Intensive",
    "software": [
      { "name": "Maya", "src": "/software logos/pngegg (28).png" },
      { "name": "3DS Max", "src": "/software logos/pngegg (19).png" },
      { "name": "Blender", "src": "/software logos/pngegg (30).png" },
      { "name": "Nuke", "src": "/software logos/pngegg (33).png" },
      { "name": "After Effect", "src": "/software logos/pngegg (29).png" },
      { "name": "Photoshop", "src": "/software logos/pngegg (24).png" },
      { "name": "Houdini", "src": "/software logos/pngegg (34).png" },
      { "name": "Unreal Engine", "src": "/software logos/pngegg (35).png" },
    ],
    "videos": [],
    "whatYouWillLearn": [],
    "description": "Jumpstart your career in animation and VFX with hands-on training.",
    "curriculum": {
      "1st Year": {
        "image": "https://images.unsplash.com/photo-1617103996702-96ff29b1c467",
        "imageAlt": "Animation and VFX essentials",
        "Semester 1": [
          "Introduction to 2D Animation",
          "Introduction to VFX Software",
          "Basic 3D Animation",
          "Principles of Compositing",
          "Introduction to Digital Sculpting"
        ],
        "Semester 2": [
          "3D Modeling and Texturing",
          "Advanced VFX Techniques",
          "Rotoscoping and Masking",
          "VFX for Film and TV",
          "Motion Graphics for Media"
        ]
      }
    }
  },
  { redirectUrl:"/animation-vfx/two-year-diploma-in-animation-and-vfx",
    "content": "The Two Year Diploma in Animation and VFX is a comprehensive program that covers all aspects of animation and visual effects production. Students will dive deep into 2D and 3D animation, compositing, advanced VFX software, and industry-standard workflows. This program ensures that students are well-prepared for entry-level positions in animation and VFX production.",
    "value": "two-year-diploma-in-animation-and-vfx",
    "label": "2 Year Diploma in Animation and VFX",
    "title": "2 Year Diploma in Animation and VFX",
    "duration": "2 Years Intensive",
    "description": "Get industry-ready with an in-depth, hands-on program in animation and VFX.",
    "software": [
      { "name": "Maya", "src": "/software logos/pngegg (28).png" },
      { "name": "3DS Max", "src": "/software logos/pngegg (19).png" },
      { "name": "Blender", "src": "/software logos/pngegg (30).png" },
      { "name": "Nuke", "src": "/software logos/pngegg (33).png" },
      { "name": "After Effect", "src": "/software logos/pngegg (29).png" },
      { "name": "Photoshop", "src": "/software logos/pngegg (24).png" },
      { "name": "Houdini", "src": "/software logos/pngegg (34).png" },
      { "name": "Unreal Engine", "src": "/software logos/pngegg (35).png" },
    ],
    "videos": [],
    "whatYouWillLearn": [],
    "curriculum": {
      "1st Year": {
        "image": "https://images.unsplash.com/photo-1617103996702-96ff29b1c467",
        "imageAlt": "Animation and VFX fundamentals",
        "Semester 1": [
          "Introduction to Animation Principles",
          "Fundamentals of VFX",
          "3D Modeling and Animation",
          "Visual Effects Software",
          "Digital Art for Animation"
        ],
        "Semester 2": [
          "Advanced 3D Animation Techniques",
          "Compositing and Editing for Animation",
          "Character Design and Animation",
          "Lighting and Rendering in 3D",
          "Visual Effects for Animation"
        ]
      },
      "2nd Year": {
        "image": "https://images.unsplash.com/photo-1596524602085-b91b935d9b93",
        "imageAlt": "Advanced VFX and animation techniques",
        "Semester 3": [
          "Advanced Motion Capture Techniques",
          "Digital Matte Painting for VFX",
          "Real-time VFX for Games",
          "Interactive Animation Design",
          "Virtual Reality Animation"
        ],
        "Semester 4": [
          "VFX Pipeline Management",
          "Character Rigging and Animation",
          "Advanced Rendering Techniques",
          "Visual Effects for Feature Films",
          "Capstone Animation Project"
        ]
      }
    }
  },
  { redirectUrl: "/animation-vfx/three-year-diploma-in-animation-and-vfx",
    "content": "The Three Year Diploma in Animation and VFX is an extensive program that covers animation, VFX, visual storytelling, 3D modeling, compositing, and more. Students will gain advanced skills in industry-standard tools and techniques. This program prepares students for high-level roles in animation and VFX production, suitable for larger studios or specialized production teams.",
    "value": "three-year-diploma-in-animation-and-vfx",
    "label": "3 Year Diploma in Animation and VFX",
    "title": "3 Year Diploma in Animation and VFX",
    "duration": "3 Years Intensive",
    "description": "Specialize in high-end animation and VFX production with in-depth training.",
    "software": [
      { "name": "Maya", "src": "/software logos/pngegg (28).png" },
      { "name": "3DS Max", "src": "/software logos/pngegg (19).png" },
      { "name": "Blender", "src": "/software logos/pngegg (30).png" },
      { "name": "Nuke", "src": "/software logos/pngegg (33).png" },
      { "name": "After Effect", "src": "/software logos/pngegg (29).png" },
      { "name": "Photoshop", "src": "/software logos/pngegg (24).png" },
      { "name": "Houdini", "src": "/software logos/pngegg (34).png" },
      { "name": "Unreal Engine", "src": "/software logos/pngegg (35).png" },
    ],
    "videos": [],
    "whatYouWillLearn": [],
    "curriculum": {
      "1st Year": {
        "image": "https://images.unsplash.com/photo-1561592252-d699019c3a1c",
        "imageAlt": "Animation and VFX basics",
        "Semester 1": [
          "Introduction to Animation Techniques",
          "Fundamentals of Visual Effects",
          "Basic 3D Modeling and Animation",
          "Principles of Compositing",
          "Digital Sculpting and Design"
        ],
        "Semester 2": [
          "Advanced 3D Animation",
          "Compositing Techniques for VFX",
          "Visual Storytelling for Animation",
          "Lighting and Texturing for 3D Animation",
          "Introduction to Motion Graphics"
        ]
      },
      "2nd Year": {
        "image": "https://images.unsplash.com/photo-1596524602085-b91b935d9b93",
        "imageAlt": "Advanced animation and VFX",
        "Semester 3": [
          "Character Design and Animation",
          "VFX Software (Nuke, Houdini)",
          "Advanced Motion Graphics",
          "Rotoscoping and Matte Painting",
          "Interactive Animation and Game Design"
        ],
        "Semester 4": [
          "Advanced Rendering Techniques",
          "Compositing for Feature Films",
          "Virtual Reality in Animation",
          "High-end VFX for Advertising",
          "Project Management for Animation"
        ]
      },
      "3rd Year": {
        "image": "https://images.unsplash.com/photo-1571223090770-5f07958ac064",
        "imageAlt": "Final VFX Project",
        "Semester 5": [
          "VFX Pipeline and Studio Production",
          "Interactive Media and Games Animation",
          "High-end 3D Modeling and Rigging",
          "Advanced Character Animation",
          "Visual Effects for Film Industry"
        ],
        "Semester 6": [
          "Industry Internship and VFX Production",
          "Capstone Project in Animation and VFX",
          "Advanced Portfolio Development",
          "Entrepreneurship and Studio Management",
          "Final Project Presentation"
        ]
      }
    }
  }
],


  "digital-marketing": [
  { redirectUrl:"/digital-marketing/bvoc-in-digital-marketing",
    "metaTitle": "Best Digital Marketing Course in Jodhpur | Inframe School of Art & Design",
    "metaDescription": "Join Inframe's Digital Marketing Course in Jodhpur. Learn SEO, Social Media Marketing, and Online Advertising with 15+ years of expertise to boost your career.",
    "content": "The Bachelor of Vocation (B.VOC) in Digital Marketing is a comprehensive three-year program focused on modern marketing strategies. Students learn social media marketing, SEO, content marketing, and data analytics. The curriculum includes hands-on projects, industry certifications, and real-world campaign management experience.",
    "value": "bvoc-in-digital-marketing",
    "label": "B.VOC in Digital Marketing",
    "title": "B.VOC in Digital Marketing",
    "duration": "3 Years Full-Time",
    "description": "Master the art of digital marketing and online brand building.",
    "whatYouWillLearn": [
      {
        "skill": "Search Engine Optimization (SEO)",
        "description": "Master technical and on-page SEO techniques"
      },
      {
        "skill": "Social Media Marketing",
        "description": "Create and manage campaigns across platforms"
      },
      {
        "skill": "Content Marketing",
        "description": "Develop strategic content plans and marketing materials"
      },
      {
        "skill": "Google Analytics",
        "description": "Track and analyze website performance metrics"
      },
      {
        "skill": "Digital Advertising",
        "description": "Run paid campaigns on Google and social media"
      }
    ],
    "software": [],
    "videos": [
      {

        "url": "https://youtube.com/embed/7WxhUZGTD5Y?si=r0Zy5fQ0gJQhT0Mm",
        
      },
      {

        "url": "https://youtube.com/embed/f6OuuUunZ9c?si=yNdzrSjRc0xwIfEs",

      },
      
    ],
    "curriculum": {
      "1st Year": {
        "image": "https://images.unsplash.com/photo-1584515937394-9b7e66e0386a",
        "imageAlt": "Digital marketing fundamentals",
        "Semester 1": [
          "Introduction to Digital Marketing",
          "Basics of Social Media Marketing",
          "Content Creation and Blogging",
          "Principles of SEO",
          "Online Brand Building"
        ],
        "Semester 2": [
          "Google Analytics Fundamentals",
          "Email Marketing Strategies",
          "Digital Advertising (PPC, Facebook Ads)",
          "Influencer Marketing",
          "Understanding Consumer Behavior"
        ]
      },
      "2nd Year": {
        "image": "https://images.unsplash.com/photo-1600891962291-84c6c030f3e2",
        "imageAlt": "Advanced digital marketing techniques",
        "Semester 3": [
          "Advanced SEO and SEM Techniques",
          "Video Marketing for Social Media",
          "E-commerce Marketing Strategies",
          "Marketing Automation Tools",
          "Data Analytics and Marketing Metrics"
        ],
        "Semester 4": [
          "Branding and Positioning in Digital Media",
          "Mobile Marketing and Apps",
          "Social Media Strategy and Management",
          "Content Marketing and SEO Integration",
          "Marketing Ethics and Legal Issues"
        ]
      },
      "3rd Year": {
        "image": "https://images.unsplash.com/photo-1617113231375-df74ee9b83bb",
        "imageAlt": "Digital marketing capstone project",
        "Semester 5": [
          "Integrated Digital Marketing Campaigns",
          "Digital Marketing Strategy Development",
          "Customer Relationship Management (CRM)",
          "Lead Generation and Conversion Optimization",
          "Project Management for Digital Campaigns"
        ],
        "Semester 6": [
          "Capstone Project in Digital Marketing",
          "Advanced Digital Advertising Techniques",
          "Social Media Analytics and Reporting",
          "Market Research and Data Analysis",
          "Digital Marketing Internship"
        ]
      }
    }
  },
  { redirectUrl:"/digital-marketing/one-year-diploma-in-digital-marketing",
    "content": "The One Year Diploma in Digital Marketing provides intensive training in digital marketing tools and strategies. Students learn social media management, SEO techniques, email marketing, and basic analytics. The program includes practical projects and preparation for industry certifications.",
    "value": "one-year-diploma-in-digital-marketing",
    "label": "1 Year Diploma in Digital Marketing",
    "title": "1 Year Diploma in Digital Marketing",
    "duration": "1 Year Intensive",
    "description": "Quick, practical training in digital marketing essentials.",
    "whatYouWillLearn": [
      {
        "skill": "Search Engine Optimization (SEO)",
        "description": "Master technical and on-page SEO techniques"
      },
      {
        "skill": "Social Media Marketing",
        "description": "Create and manage campaigns across platforms"
      },
      {
        "skill": "Content Marketing",
        "description": "Develop strategic content plans and marketing materials"
      },
      {
        "skill": "Google Analytics",
        "description": "Track and analyze website performance metrics"
      },
      {
        "skill": "Digital Advertising",
        "description": "Run paid campaigns on Google and social media"
      }
    ],
    "software": [],
    "videos": [
      {

        "url": "https://youtube.com/embed/7WxhUZGTD5Y?si=r0Zy5fQ0gJQhT0Mm",
        
      },
      {

        "url": "https://youtube.com/embed/f6OuuUunZ9c?si=yNdzrSjRc0xwIfEs",

      },
      
    ],
    "curriculum": {
      "1st Year": {
        "image": "https://images.unsplash.com/photo-1607066432121-9cdb3abf8ec3",
        "imageAlt": "Introduction to digital marketing",
        "Semester 1": [
          "Introduction to Digital Marketing",
          "Social Media Marketing Basics",
          "SEO Fundamentals",
          "Email Marketing Campaigns",
          "Google Analytics Essentials"
        ],
        "Semester 2": [
          "Paid Advertising on Social Media",
          "Basic Content Marketing",
          "Intro to Video Marketing",
          "Marketing Automation Tools",
          "Online Branding and Reputation Management"
        ]
      }
    }
  },
  { redirectUrl:"/digital-marketing/six-month-certificate-course-in-digital-marketing",
    "content": "The Six Month Certificate course in Digital Marketing offers focused training in key digital marketing skills. Students learn the fundamentals of online marketing, including social media, SEO, and basic analytics. Perfect for quick skill development and career transition.",
    "value": "six-month-certificate-course-in-digital-marketing",
    "label": "6 Month Certificate in Digital Marketing",
    "title": "6 Month Certificate in Digital Marketing",
    "duration": "6 Months Part-Time",
    "description": "Essential digital marketing skills in a compact timeframe.",
    "whatYouWillLearn": [
      {
        "skill": "Search Engine Optimization (SEO)",
        "description": "Master technical and on-page SEO techniques"
      },
      {
        "skill": "Social Media Marketing",
        "description": "Create and manage campaigns across platforms"
      },
      {
        "skill": "Content Marketing",
        "description": "Develop strategic content plans and marketing materials"
      },
      {
        "skill": "Google Analytics",
        "description": "Track and analyze website performance metrics"
      },
      {
        "skill": "Digital Advertising",
        "description": "Run paid campaigns on Google and social media"
      }
    ],
    "videos": [
      {

        "url": "https://youtube.com/embed/7WxhUZGTD5Y?si=r0Zy5fQ0gJQhT0Mm",
        
      },
      {

        "url": "https://youtube.com/embed/f6OuuUunZ9c?si=yNdzrSjRc0xwIfEs",

      },
      
    ],

      software: [],
      curriculum: {
        "1st Semester": {
          image: "https://images.unsplash.com/photo-1596506895294-e4a47e1846fe",
          imageAlt: "Learning digital marketing basics",
          "Semester 1": [
            "Overview of Digital Marketing",
            "SEO Fundamentals",
            "Social Media Platforms and Tools",
            "Introduction to Google Ads",
            "Content Marketing for Beginners",
          ],
        },
      },
    },
  ],

"jewellery-design": [
  { redirectUrl:"/jewellery-design/bvoc-in-jewellery-design",
    "metaTitle": "Jewellery Design Course in Jodhpur | Inframe School of Art & Design",
    "metaDescription": "Join Inframe's Jewellery Design Course in Jodhpur. With 15+ years of expertise, we offer a top-tier Jewellery Design Course in Jodhpur to help you build a successful career.",
    "content": "The Bachelor of Vocation (B.VOC) in Jewellery Design is a three-year full-time program that combines creative design skills with technical expertise in jewellery making. This comprehensive course focuses on developing both artistic vision and practical craftsmanship skills essential for the jewellery industry. Students learn various aspects of jewellery design, including traditional and contemporary techniques, gemology, metal work, and digital design tools. The curriculum covers topics such as design principles, material studies, stone setting, metal casting, and CAD/CAM technologies for jewellery production. \n\nThroughout the program, students gain hands-on experience in professional workshops, working with different materials and techniques. They learn about various aspects of jewellery making, from concept development to final production. The course also includes modules on business management, marketing, and entrepreneurship specific to the jewellery industry. Students study historical and contemporary jewellery trends, precious metals, gemstones, and sustainable practices in jewellery making. By the final year, students participate in industry internships and create professional portfolios. Graduates can pursue careers as jewellery designers, CAD specialists, production managers, or establish their own jewellery design studios.",
    "value": "bvoc-in-jewellery-design",
    "label": "B.VOC in Jewellery Design",
    "title": "Bachelor of Vocation in Jewellery Design",
    "duration": "3 Years Full-Time",
    "description": "Transform your creativity into stunning jewellery designs through our comprehensive program. Learn from industry experts and build a successful career in jewellery design.",
    "software": [
      { "name": "Figma", "src": "/software logos/pngegg (31).png" },
      { "name": "Adobe XD", "src": "/software logos/pngegg (32).png" },
      { "name": "Photoshop", "src": "/software logos/pngegg (24).png" },
      { "name": "Adobe Illustrator", "src": "/software logos/pngegg (25).png" },
    ],
    "videos": [],
    "whatYouWillLearn": [],
    "curriculum": {
      "1st Year": {
        "image": "https://images.unsplash.com/photo-1611295570430-5409ed7b4e26",
        "imageAlt": "Jewellery design fundamentals",
        "Semester 1": [
          "Introduction to Jewellery Design",
          "Principles of Design",
          "Sketching and Rendering Techniques",
          "Metalworking Basics",
          "Gemology Basics"
        ],
        "Semester 2": [
          "Jewellery Materials and Tools",
          "Casting and Molding Techniques",
          "Basic Stone Setting",
          "Introduction to CAD/CAM in Jewellery",
          "Market Trends in Jewellery"
        ]
      },
      "2nd Year": {
        "image": "https://images.unsplash.com/photo-1595394452080-699df5a4a528",
        "imageAlt": "Advanced jewellery design techniques",
        "Semester 3": [
          "Advanced Jewellery Design",
          "Digital Design Tools and Techniques",
          "Advanced Stone Setting",
          "Metalsmithing and Casting",
          "Fashion and Jewellery Marketing"
        ],
        "Semester 4": [
          "Business Management in Jewellery Design",
          "Jewellery Photography and Presentation",
          "Sustainable Practices in Jewellery",
          "Trend Forecasting",
          "Creative Jewellery Portfolio Development"
        ]
      },
      "3rd Year": {
        "image": "https://images.unsplash.com/photo-1535749314899-b9ec7da2950b",
        "imageAlt": "Jewellery design capstone project",
        "Semester 5": [
          "Jewellery Design Entrepreneurship",
          "Professional Portfolio Development",
          "Jewellery Collection Creation",
          "Digital Fabrication and 3D Printing",
          "Jewellery Design Internship"
        ],
        "Semester 6": [
          "Capstone Jewellery Project",
          "Final Portfolio Presentation",
          "Jewellery Design Trends and Innovations",
          "Jewellery Design Industry Networking",
          "Post-graduation Planning"
        ]
      }
    }
  },
  { redirectUrl:"/jewellery-design/one-year-diploma-in-jewellery-design",
    "content": "The 1 Year Diploma in Jewellery Design is an intensive program designed for aspiring jewellery designers who want to quickly enter the industry. This hands-on course covers fundamental aspects of jewellery design, including sketching, rendering, metal work, and basic gemology. Students learn essential design principles, traditional crafting techniques, and modern production methods. The program emphasizes practical skills through workshop sessions where students create their own jewellery pieces.\n\nThe curriculum includes modules on design development, material knowledge, market trends, and basic business practices in the jewellery industry. Students also receive training in digital design tools used in modern jewellery production. Through regular projects and assignments, they develop a strong portfolio showcasing their design capabilities. The course includes industry visits and guest lectures from experienced professionals, providing valuable insights into the jewellery market. Graduates can work as junior jewellery designers, design assistants, or start their independent practice.",
    "value": "one-year-diploma-in-jewellery-design",
    "label": "1 Year Diploma in Jewellery Design",
    "title": "1 Year Diploma in Jewellery Design",
    "duration": "1 Year Full-Time",
    "description": "Fast-track your career in jewellery design with our intensive one-year program. Focus on practical skills and industry-ready training.",
    "software": [
      { "name": "Figma", "src": "/software logos/pngegg (31).png" },
      { "name": "Adobe XD", "src": "/software logos/pngegg (32).png" },
    ],
    "whatYouWillLearn": [],
    "videos": [],
    "curriculum": {
      "1st Year": {
        "image": "https://images.unsplash.com/photo-1571909944699-7b8baf7a1f68",
        "imageAlt": "Hands-on jewellery design workshop",
        "Semester 1": [
          "Introduction to Jewellery Design",
          "Basic Sketching and Rendering",
          "Metal Work Techniques",
          "Introduction to Gemology",
          "Materials and Tools in Jewellery Design"
        ],
        "Semester 2": [
          "Traditional Jewellery Crafting",
          "Digital Jewellery Design Tools",
          "Stone Setting Techniques",
          "Business Practices for Jewellery Designers",
          "Portfolio Development and Final Project"
        ]
      }
    }
  },
  { redirectUrl:"/jewellery-design/one-year-diploma-in-cad-jewellery",
    "content": "The 1 Year Diploma in CAD Jewellery is a specialized program focusing on digital design tools and technologies used in modern jewellery production. This course is perfect for those who want to specialize in the technical aspects of jewellery design. Students learn industry-standard software like Matrix, Rhino, and JewelCAD, developing expertise in 3D modeling, rendering, and digital production techniques. The curriculum covers advanced CAD tools, technical drawing, digital rendering, and rapid prototyping methods.\n\nThroughout the year, students work on practical projects that simulate real industry requirements. They learn how to transform hand sketches into detailed 3D models, create technical specifications for production, and understand the manufacturing process. The course also covers digital presentation techniques, file preparation for 3D printing, and integration with traditional jewellery making methods. Graduates are well-prepared for roles as CAD designers, technical designers, or digital modeling specialists in the jewellery industry.",
    "value": "one-year-diploma-in-cad-jewellery",
    "label": "1 Year Diploma in CAD Jewellery",
    "title": "1 Year Diploma in CAD Jewellery",
    "duration": "1 Year Full-Time",
    "description": "Master digital jewellery design with our specialized CAD program. Perfect for those seeking expertise in modern jewellery design technology.",
    "software": [
      { "name": "AutoCAD", "src": "/logos/pngegg (17).png" },
      { "name": "SketchUp", "src": "/logos/pngegg (18).png" },
      { "name": "3dsMax", "src": "/logos/pngegg (19).png" },
      { "name": "V-Ray", "src": "/logos/pngegg (20).png" },
      { "name": "Rhino", "src": "/logos/pngegg (23).png" }
    ],
    "videos": [],
    "whatYouWillLearn": [],
    "curriculum": {
      "1st Year": {
        "image": "https://images.unsplash.com/photo-1581784254395-2aeb2ff44f82",
        "imageAlt": "CAD software for jewellery design",
        "Semester 1": [
          "Introduction to CAD in Jewellery Design",
          "3D Modelling Techniques",
          "Digital Rendering for Jewellery",
          "Rapid Prototyping and 3D Printing",
          "Jewellery Production Workflow"
        ],
        "Semester 2": [
          "Advanced CAD Software Techniques (Rhino, Matrix)",
          "File Preparation for Jewellery Production",
          "Digital Jewelry Presentation",
          "Technical Drawings and Specifications",
          "Industry Project on CAD Designs"
        ]
      }
    }
  },
  { redirectUrl:"/jewellery-design/six-month-certificate-course-in-jewellery-design",
    "content": "The 6 Month Certificate course in Jewellery Design is a focused program that introduces students to the essentials of jewellery design and creation. This short-term course is ideal for beginners and hobbyists who want to explore jewellery design. Students learn basic design principles, sketching techniques, material knowledge, and fundamental crafting skills. The program includes hands-on workshops where students practice traditional jewellery making techniques.\n\nThe course covers design conceptualization, basic metal work, stone setting fundamentals, and an introduction to current market trends. Students create simple jewellery pieces and develop a basic portfolio of their work. The program also includes basic business knowledge and marketing concepts for those interested in starting their own small-scale jewellery business. Graduates can work as junior designers, apprentices, or pursue further education in specialized areas of jewellery design.",
    "value": "six-month-certificate-course-in-jewellery-design",
    "label": "6 Month Certificate in Jewellery Design",
    "title": "6 Month Certificate in Jewellery Design",
    "duration": "6 Months Part-Time",
    "description": "Begin your journey in jewellery design with our foundational certificate program. Perfect for beginners and creative enthusiasts.",
    "software": [
      { "name": "AutoCAD", "src": "/logos/pngegg (17).png" },
      { "name": "SketchUp", "src": "/logos/pngegg (18).png" },
      { "name": "3dsMax", "src": "/logos/pngegg (19).png" },
      { "name": "V-Ray", "src": "/logos/pngegg (20).png" },
      { "name": "Rhino", "src": "/logos/pngegg (23).png" }
    ],
    "videos": [],
    "whatYouWillLearn": [],
    "curriculum": {
      "1st Semester": {
        "image": "https://images.unsplash.com/photo-1615542794362-d4c4f7d3ed4a",
        "imageAlt": "Jewellery design basics workshop",
        "Semester 1": [
          "Introduction to Jewellery Design",
          "Sketching Techniques for Jewellery",
          "Basic Metal Work",
          "Stone Setting Fundamentals",
          "Current Market Trends in Jewellery"
        ]
      }
    }
  },
  { redirectUrl:"/jewellery-design/six-month-certificate-course-in-cad-jewellery",
    "content": "The 6 Month Certificate course in CAD Jewellery focuses on essential digital design skills needed in modern jewellery production. This program is designed for those who want to quickly learn computer-aided design specifically for jewellery making. Students learn the basics of industry-standard CAD software, including fundamental 3D modeling techniques, digital rendering, and preparation of designs for production. The course emphasizes practical training with popular jewellery design software.\n\nStudents learn how to create basic jewellery designs digitally, understand file formats and specifications for production, and develop skills in digital presentation. The program includes projects that help students build a digital portfolio of their work. Basic knowledge of manufacturing processes and production requirements is also covered. Graduates can work as junior CAD designers, digital design assistants, or continue their education in advanced CAD jewelry programs.",
    "value": "six-month-certificate-course-in-cad-jewellery",
    "label": "6 Month Certificate in CAD Jewellery",
    "title": "6 Month Certificate in CAD Jewellery",
    "duration": "6 Months Part-Time",
    "description": "Learn essential CAD skills for jewellery design in our focused certificate program. Ideal for those wanting to enter the digital jewellery design field.",
    "software": [
      { "name": "AutoCAD", "src": "/logos/pngegg (17).png" },
      { "name": "SketchUp", "src": "/logos/pngegg (18).png" },
      { "name": "3dsMax", "src": "/logos/pngegg (19).png" },
      { "name": "V-Ray", "src": "/logos/pngegg (20).png" },
      { "name": "Rhino", "src": "/logos/pngegg (23).png" }
    ],
    "videos": [],
    "whatYouWillLearn": [],
    "curriculum": {
      "1st Semester": {
        "image": "https://images.unsplash.com/photo-1586256491017-29e0cc299c9a",
        "imageAlt": "CAD jewellery design process",
        "Semester 1": [
          "Introduction to CAD Software (Rhino, Matrix)",
          "Basic 3D Modelling for Jewellery",
          "Rendering and Texturing Techniques",
          "File Formats and Production Preparation",
          "Jewellery Design Project"
        ]
      }
    }
  }
],

"entrepreneurship-skill": [
  { redirectUrl:"/entrepreneurship-skill/bvoc-in-entrepreneurship-skill",
    "metaTitle": "Entrepreneurship Skills Course in Jodhpur | Inframe School of Art & Design",
    "metaDescription": "Enroll in Inframe's Entrepreneurship Skills Course in Jodhpur. Gain essential skills to start and grow your business with expert guidance and 15+ years of experience.",
    "content": "The Bachelor of Vocation (B.VOC) in Entrepreneurship Skills is a three-year full-time program designed to develop future business leaders and innovators. This comprehensive course combines theoretical knowledge with practical business skills essential for successful entrepreneurship. Students learn various aspects of business development, including market analysis, business planning, financial management, marketing strategies, and leadership skills. The curriculum emphasizes real-world application through case studies, business simulations, and actual startup projects.\n\nThroughout the program, students gain hands-on experience in developing business models, conducting market research, and creating viable business plans. They learn about digital marketing, e-commerce, business law, and startup funding mechanisms. The course includes modules on innovation management, design thinking, and sustainable business practices. Students also develop essential soft skills like negotiation, team management, and business communication. Regular interactions with successful entrepreneurs, industry mentors, and business incubators provide valuable insights into the startup ecosystem. By the final year, students work on launching their own business ventures or detailed business projects. Graduates can start their own businesses, join family enterprises, work as business consultants, or pursue careers in startup accelerators and venture capital firms.",
    "value": "bvoc-in-entrepreneurship-skill",
    "label": "B.VOC in Entrepreneurship Skill",
    "title": "Bachelor of Vocation in Entrepreneurship Skill",
    "duration": "3 Years Full-Time",
    "description": "Transform your entrepreneurial vision into reality with our comprehensive program. Learn from successful entrepreneurs and develop essential business skills.",
    "software": [
      { "name": "AutoCAD", "src": "/logos/pngegg (17).png" },
      { "name": "SketchUp", "src": "/logos/pngegg (18).png" },
      { "name": "3dsMax", "src": "/logos/pngegg (19).png" },
      { "name": "V-Ray", "src": "/logos/pngegg (20).png" },
      { "name": "Rhino", "src": "/logos/pngegg (23).png" }
    ],
    "videos": [],
    "whatYouWillLearn": [],
    "curriculum": {
      "1st Year": {
        "image": "https://images.unsplash.com/photo-1600573100240-e67b7885d730",
        "imageAlt": "Business fundamentals",
        "Semester 1": [
          "Introduction to Entrepreneurship",
          "Fundamentals of Business Strategy",
          "Market Research Techniques",
          "Financial Management Basics",
          "Business Communication Skills"
        ],
        "Semester 2": [
          "Business Planning and Development",
          "E-commerce Fundamentals",
          "Principles of Marketing",
          "Entrepreneurial Leadership",
          "Introduction to Digital Marketing"
        ]
      },
      "2nd Year": {
        "image": "https://images.unsplash.com/photo-1580894905005-20a12a542846",
        "imageAlt": "Advanced business skills",
        "Semester 3": [
          "Innovation Management",
          "Design Thinking for Entrepreneurs",
          "Business Law and Ethics",
          "Advanced Financial Planning",
          "Social Media Marketing Strategies"
        ],
        "Semester 4": [
          "Sustainable Business Practices",
          "Startup Funding and Investment",
          "Business Analytics",
          "Customer Relationship Management",
          "Advanced E-commerce Strategies"
        ]
      },
      "3rd Year": {
        "image": "https://images.unsplash.com/photo-1512432972871-f1e32c9a7f76",
        "imageAlt": "Business capstone project",
        "Semester 5": [
          "Entrepreneurial Networking",
          "Business Model Innovation",
          "Negotiation and Conflict Resolution",
          "Sales and Business Development",
          "Startup Incubation and Mentorship"
        ],
        "Semester 6": [
          "Capstone Entrepreneurial Project",
          "Final Business Plan Development",
          "Post-graduation Business Planning",
          "Strategic Business Management",
          "Industry Internship"
        ]
      }
    }
  },
  { redirectUrl:"/entrepreneurship-skill/one-year-diploma-in-entrepreneurship-skill",
    "content": "The 1 Year Diploma in Entrepreneurship Skills is an intensive program designed for aspiring entrepreneurs who want to quickly develop essential business capabilities. This focused course covers fundamental aspects of entrepreneurship, including business ideation, market validation, financial planning, and business operations. The program is ideal for individuals planning to start their own ventures or enhance their business management skills.\n\nThe curriculum provides practical training in developing business strategies, understanding market dynamics, and managing business finances. Students learn about digital marketing, customer acquisition, basic accounting, and business law essentials. The program includes hands-on projects where students develop and present business plans, conduct market research, and create marketing strategies. Through workshops and mentoring sessions, students gain insights into various aspects of business management, from product development to customer service. The course also covers contemporary topics like social media marketing, e-commerce fundamentals, and startup funding options. Graduates are equipped to launch their own startups, manage family businesses, or work in business development roles.",
    "value": "one-year-diploma-in-entrepreneurship-skill",
    "label": "1 Year Diploma in Entrepreneurship Skill",
    "title": "1 Year Diploma in Entrepreneurship Skill",
    "duration": "1 Year Full-Time",
    "description": "Fast-track your entrepreneurial journey with our intensive one-year program. Focus on practical business skills and startup essentials.",
    "software": [
      { "name": "AutoCAD", "src": "/logos/pngegg (17).png" },
      { "name": "SketchUp", "src": "/logos/pngegg (18).png" },
      { "name": "3dsMax", "src": "/logos/pngegg (19).png" },
      { "name": "V-Ray", "src": "/logos/pngegg (20).png" },
      { "name": "Rhino", "src": "/logos/pngegg (23).png" }
    ],
    "videos": [],
    "whatYouWillLearn": [],
    "curriculum": {
      "1st Year": {
        "image": "https://images.unsplash.com/photo-1561472646-c39b0e9e6973",
        "imageAlt": "Entrepreneurship skill development",
        "Semester 1": [
          "Introduction to Entrepreneurship",
          "Market Research and Validation",
          "Basic Financial Management",
          "Business Law for Entrepreneurs",
          "Digital Marketing Basics"
        ],
        "Semester 2": [
          "Business Idea Generation",
          "Customer Acquisition Strategies",
          "Social Media Marketing Essentials",
          "Basic Business Planning",
          "E-commerce Setup and Management"
        ]
      }
    }
  }
],


"media-entertainment": [
  { redirectUrl:"/media-entertainment/bvoc-in-media-and-entertainment",
    "metaTitle": "Media and Entertainment Course in Jodhpur | Kickstart Your Career | Apply Now",
    "metaDescription": "Enroll in a comprehensive Media and Entertainment Course in Jodhpur. Learn industry skills and techniques to build a successful career in media and entertainment.",
    "content": "The Bachelor of Vocation (B.VOC) in Media and Entertainment is a three-year full-time program designed to prepare students for the dynamic world of media production and entertainment. This comprehensive course combines theoretical knowledge with hands-on training in various aspects of media creation, production, and distribution. Students learn about film and television production, digital media, content creation, broadcasting, and entertainment management. The curriculum covers both traditional and new media platforms, ensuring students are well-versed in current industry practices.\n\nThroughout the program, students gain practical experience in video production, content writing, social media management, and digital broadcasting. They learn to use professional equipment and software for media production, including video editing tools, audio production software, and streaming technologies. The course includes modules on storytelling, script writing, media laws, digital marketing, and project management. Students also study audience engagement, analytics, and content monetization strategies. Regular industry projects, internships, and collaborations with media houses provide real-world experience. Final year students work on comprehensive media projects and build professional portfolios. Graduates can pursue careers as content creators, media producers, broadcast professionals, digital media managers, or entertainment entrepreneurs.",
    "value": "bvoc-in-media-and-entertainment",
    "label": "B.VOC in Media and Entertainment",
    "title": "Bachelor of Vocation in Media and Entertainment",
    "duration": "3 Years Full-Time",
    "description": "Master the art of media production and entertainment management. Learn from industry professionals and develop cutting-edge content creation skills.",
    "software": [
      { "name": "AutoCAD", "src": "/logos/pngegg (17).png" },
      { "name": "SketchUp", "src": "/logos/pngegg (18).png" },
      { "name": "3dsMax", "src": "/logos/pngegg (19).png" },
      { "name": "V-Ray", "src": "/logos/pngegg (20).png" },
      { "name": "Rhino", "src": "/logos/pngegg (23).png" }
    ],
    "videos": [],
    "whatYouWillLearn": [],
    "curriculum": {
      "1st Year": {
        "image": "https://images.unsplash.com/photo-1561938955-ec6e1f0c4022",
        "imageAlt": "Media and Entertainment Basics",
        "Semester 1": [
          "Introduction to Media and Entertainment",
          "Fundamentals of Film Production",
          "Digital Media Platforms",
          "Content Creation for Social Media",
          "Basic Broadcasting Principles"
        ],
        "Semester 2": [
          "Introduction to Video Editing",
          "Storytelling and Script Writing",
          "Social Media Management",
          "Introduction to Audio Production",
          "Entertainment Law and Ethics"
        ]
      },
      "2nd Year": {
        "image": "https://images.unsplash.com/photo-1561561539-45b0d5c98b2e",
        "imageAlt": "Advanced Media Production",
        "Semester 3": [
          "Advanced Video Production Techniques",
          "Digital Marketing and Content Strategy",
          "Film and Television Production",
          "Project Management for Media Projects",
          "Audience Engagement and Analytics"
        ],
        "Semester 4": [
          "Media Laws and Copyrights",
          "Digital Broadcasting",
          "Monetization Strategies for Content Creators",
          "Professional Writing for Media",
          "Advanced Social Media Strategy"
        ]
      },
      "3rd Year": {
        "image": "https://images.unsplash.com/photo-1503880225412-0fbd6a0d4088",
        "imageAlt": "Capstone Media Project",
        "Semester 5": [
          "Media Production Project",
          "Advanced Content Creation Techniques",
          "Entertainment Marketing and Branding",
          "Advanced Audience Analytics",
          "Media Entrepreneurship"
        ],
        "Semester 6": [
          "Capstone Media Production Project",
          "Internship in Media Industry",
          "Portfolio Development for Media Professionals",
          "Industry Collaboration and Networking",
          "Final Project Presentation"
        ]
      }
    }
  },
  { redirectUrl:"/media-entertainment/one-year-diploma-in-media-and-entertainment",
    "content": "The 1 Year Diploma in Media and Entertainment is an intensive program focused on practical skills needed in today's media industry. This fast-track course covers essential aspects of media production, content creation, and entertainment management. Students learn fundamental techniques in video production, digital content creation, social media management, and basic broadcasting principles. The program is ideal for those seeking quick entry into the media and entertainment sector.\n\nThe curriculum provides hands-on training in camera operations, video editing, content writing, and digital media production. Students learn about different media platforms, content strategy, audience engagement, and basic production management. The program includes practical projects where students create various types of media content, from short films to digital marketing campaigns. Through workshops and industry sessions, students gain insights into current trends and practices in the entertainment industry. The course also covers basics of media law, copyright, and content distribution. Graduates can work as junior content creators, production assistants, social media managers, or pursue independent content creation careers.",
    "value": "one-year-diploma-in-media-and-entertainment",
    "label": "1 Year Diploma in Media and Entertainment",
    "title": "1 Year Diploma in Media and Entertainment",
    "duration": "1 Year Full-Time",
    "description": "Launch your career in media and entertainment with our intensive one-year program. Focus on practical skills and industry-ready training.",
    "software": [
      { "name": "AutoCAD", "src": "/logos/pngegg (17).png" },
      { "name": "SketchUp", "src": "/logos/pngegg (18).png" },
      { "name": "3dsMax", "src": "/logos/pngegg (19).png" },
      { "name": "V-Ray", "src": "/logos/pngegg (20).png" },
      { "name": "Rhino", "src": "/logos/pngegg (23).png" }
    ],
    "whatYouWillLearn": [],
    "videos": [],
    "curriculum": {
      "1st Year": {
        "image": "https://images.unsplash.com/photo-1561687369-9ffdbd2e2415",
        "imageAlt": "Practical Media Skills",
        "Semester 1": [
          "Introduction to Media and Entertainment",
          "Camera Operations and Techniques",
          "Basic Video Editing",
          "Introduction to Social Media Platforms",
          "Media Laws and Copyrights"
        ],
        "Semester 2": [
          "Content Creation for Digital Media",
          "Social Media Marketing",
          "Digital Media Production Tools",
          "Production Management for Beginners",
          "Content Distribution Strategies"
        ]
      }
    }
  }
],


"fine-arts": [
  { redirectUrl:"/fine-arts/b-des-in-fine-arts",
    "metaTitle": "Fine Arts Course in Jodhpur | Inframe School of Art & Design",
    "metaDescription": "Enroll in Inframe's Fine Arts Course in Jodhpur and Unlock Your Creative Potential. With 15+ Years of Excellence, We Offer Comprehensive Fine Arts Education to Shape Your Artistic Career.",
    "content": "The Bachelor of Fine Arts (BFA) in Painting focuses on the artistic and technical aspects of painting. This comprehensive program develops creativity, technical skills, and theoretical knowledge in various painting styles and techniques. Students will learn traditional and contemporary painting methods, color theory, composition, and art history. The course includes practical workshops and individual studio practice to encourage students to develop their personal artistic voice. By the end of the program, students will have a well-rounded portfolio showcasing their work in diverse painting media.",
    "value": "b-des-in-fine-arts",
    "label": "BFA in Painting",
    "title": "Bachelor of Fine Arts in Painting",
    "duration": "3 Years Full-Time",
    "description": "Master the art of painting through our in-depth Bachelor of Fine Arts program. Learn traditional and contemporary painting techniques.",
    "software": [
     { "name": "Photoshop", "src": "/software logos/pngegg (24).png" },
      { "name": "Adobe Illustrator", "src": "/software logos/pngegg (25).png" },
    ],
    "videos": [],
    "whatYouWillLearn": [],
    "curriculum": {
      "1st Year": {
        "image": "https://example.com/bfa_painting_1.jpg",
        "imageAlt": "Introduction to painting",
        "Semester 1": [
          "Introduction to Fine Arts",
          "Drawing Basics",
          "Art History",
          "Color Theory",
          "Painting Techniques"
        ],
        "Semester 2": [
          "Advanced Drawing Techniques",
          "Landscape Painting",
          "Still Life",
          "Portrait Painting",
          "Contemporary Art"
        ]
      },
      "2nd Year": {
        "image": "https://example.com/bfa_painting_2.jpg",
        "imageAlt": "Intermediate painting workshop",
        "Semester 3": [
          "Oil Painting",
          "Watercolor Techniques",
          "Digital Art",
          "Experimental Painting",
          "Art Criticism"
        ],
        "Semester 4": [
          "Business of Art",
          "Art Installation",
          "Art Exhibition Preparation",
          "Advanced Painting",
          "Portfolio Development"
        ]
      },
      "3rd Year": {
        "image": "https://example.com/bfa_painting_3.jpg",
        "imageAlt": "Mastering painting techniques",
        "Semester 5": [
          "Studio Practice",
          "Art Theory and Critique",
          "Artistic Development",
          "Professional Practices in Art",
          "Capstone Project"
        ],
        "Semester 6": [
          "Final Project",
          "Gallery Exhibition",
          "Artistic Career Pathways",
          "Art Market Trends",
          "Final Critique"
        ]
      }
    }
  },
  { 
    redirectUrl:"",
    "content": "The Bachelor of Fine Arts (BFA) in Visual Communication focuses on the fusion of art and communication, preparing students to work in design, advertising, and media industries. The program teaches the fundamental skills of visual design, graphic design, typography, photography, and multimedia communication. Students gain proficiency in industry-standard tools and software, learning to create visual content that communicates ideas effectively. The curriculum includes practical design workshops, group projects, and industry internships to develop a comprehensive portfolio and real-world experience.",
    "value": "bfa-visual-communication",
    "label": "BFA in Visual Communication",
    "title": "Bachelor of Fine Arts in Visual Communication",
    "duration": "3 Years Full-Time",
    "description": "Learn the art of visual storytelling through our comprehensive BFA in Visual Communication. Create impactful designs that speak to audiences.",
    "software": [
      { "name": "Photoshop", "src": "/software logos/pngegg (24).png" },
      { "name": "Adobe Illustrator", "src": "/software logos/pngegg (25).png" },
    ],
    "videos": [],
    "whatYouWillLearn": [],
    "curriculum": {
      "1st Year": {
        "image": "https://example.com/bfa_visual_communication_1.jpg",
        "imageAlt": "Introduction to visual communication",
        "Semester 1": [
          "Introduction to Graphic Design",
          "Typography Basics",
          "Visual Communication Theory",
          "Photography Basics",
          "Drawing for Communication"
        ],
        "Semester 2": [
          "Digital Imaging",
          "Color Theory in Design",
          "Web Design Fundamentals",
          "Illustration Techniques",
          "Brand Identity Design"
        ]
      },
      "2nd Year": {
        "image": "https://example.com/bfa_visual_communication_2.jpg",
        "imageAlt": "Advanced design techniques",
        "Semester 3": [
          "Advanced Graphic Design",
          "Branding and Marketing",
          "Motion Graphics",
          "User Experience Design",
          "Interactive Media"
        ],
        "Semester 4": [
          "Digital Publishing",
          "Photography and Photo Editing",
          "Advertising Design",
          "Social Media Content Creation",
          "Design Research and Trends"
        ]
      },
      "3rd Year": {
        "image": "https://example.com/bfa_visual_communication_3.jpg",
        "imageAlt": "Final project for visual communication",
        "Semester 5": [
          "Creative Direction",
          "Packaging Design",
          "Visual Identity Systems",
          "Capstone Project",
          "Portfolio Development"
        ],
        "Semester 6": [
          "Design in Business",
          "Art Direction for Advertising",
          "Industry Internship",
          "Final Presentation",
          "Design Ethics"
        ]
      }
    }
  },
  { redirectUrl:"",
    "content": "The Bachelor of Fine Arts (BFA) in Sculpture is designed for students passionate about three-dimensional art forms. The program explores various techniques and materials used in sculpture, including clay, metal, wood, and modern materials. Students learn to create both abstract and representational sculptures, with a focus on conceptualization, technique, and execution. The curriculum encourages creativity, technical skill development, and the ability to critique and analyze works of art. Graduates are prepared for careers in public art, gallery exhibitions, and sculpture design.",
    "value": "bfa-sculpture",
    "label": "BFA in Sculpture",
    "title": "Bachelor of Fine Arts in Sculpture",
    "duration": "3 Years Full-Time",
    "description": "Explore the world of three-dimensional art with a BFA in Sculpture. Develop your sculptural skills and artistic expression.",
    "software": [
      { "name": "Photoshop", "src": "/software logos/pngegg (24).png" },
      { "name": "Adobe Illustrator", "src": "/software logos/pngegg (25).png" },
    ],
    "videos": [],
    "whatYouWillLearn": [],
    "curriculum": {
      "1st Year": {
        "image": "https://example.com/bfa_sculpture_1.jpg",
        "imageAlt": "Sculpture basics",
        "Semester 1": [
          "Introduction to Sculpture",
          "Clay Modeling",
          "Sculpture Techniques",
          "Art History for Sculpture",
          "Design and Composition"
        ],
        "Semester 2": [
          "Woodworking Techniques",
          "Metal Sculpture",
          "Stone Carving",
          "Casting and Molding",
          "Contemporary Sculpture"
        ]
      },
      "2nd Year": {
        "image": "https://example.com/bfa_sculpture_2.jpg",
        "imageAlt": "Intermediate sculpture techniques",
        "Semester 3": [
          "Mixed Media Sculpture",
          "Digital Sculpture",
          "Advanced Modeling",
          "Sculpture Installation",
          "Site-Specific Art"
        ],
        "Semester 4": [
          "Art Criticism and Theory",
          "Sculpture for Public Spaces",
          "Creative Process in Sculpture",
          "Portfolio Development",
          "Sculptural Projects"
        ]
      },
      "3rd Year": {
        "image": "https://example.com/bfa_sculpture_3.jpg",
        "imageAlt": "Mastering sculptural techniques",
        "Semester 5": [
          "Large-Scale Sculpture",
          "Sculpture and Architecture",
          "Artist Residencies",
          "Exhibition Preparation",
          "Capstone Sculpture Project"
        ],
        "Semester 6": [
          "Gallery Exhibition",
          "Public Art Projects",
          "Professional Practice",
          "Art and Community",
          "Final Critique"
        ]
      }
    }
  },
  { redirectUrl:"/fine-arts/bvoc-in-fine-arts",
    "content": "The B.VOC in Fine Arts is a vocational degree program aimed at preparing students for careers in the art and design industry. The program combines both practical and theoretical learning, focusing on visual arts, design principles, and creative techniques. Students gain proficiency in various art forms, including painting, sculpture, and digital art. They also develop skills in entrepreneurship, business management, and marketing, preparing them for a variety of career paths in the arts.",
    "value": "bvoc-in-fine-arts",
    "label": "B.VOC in Fine Arts",
    "title": "Bachelor of Vocation in Fine Arts",
    "duration": "3 Years Full-Time",
    "description": "Blend creativity with professional skills through our B.VOC in Fine Arts program. Explore the world of visual arts while developing essential business skills.",
    "software": [
      { "name": "Photoshop", "src": "/software logos/pngegg (24).png" },
      { "name": "Adobe Illustrator", "src": "/software logos/pngegg (25).png" },
    ],
    "videos": [],
    "whatYouWillLearn": [],
    "curriculum": {
      "1st Year": {
        "image": "https://example.com/bvoc_fine_arts_1.jpg",
        "imageAlt": "Introduction to fine arts",
        "Semester 1": [
          "Basic Drawing and Design",
          "Art History",
          "Painting Techniques",
          "Digital Art Basics",
          "Art in Society"
        ],
        "Semester 2": [
          "3D Design Techniques",
          "Introduction to Sculpture",
          "Photography Basics",
          "Graphic Design for Artists",
          "Art Entrepreneurship"
        ]
      },
      "2nd Year": {
        "image": "https://example.com/bvoc_fine_arts_2.jpg",
        "imageAlt": "Intermediate fine arts techniques",
        "Semester 3": [
          "Advanced Painting Techniques",
          "Sculpture and Installation",
          "Art Marketing",
          "Portfolio Development",
          "Art Exhibitions"
        ],
        "Semester 4": [
          "Art in Digital Media",
          "Social Media for Artists",
          "Art Project Management",
          "Business of Art",
          "Collaborative Art Projects"
        ]
      },
      "3rd Year": {
        "image": "https://example.com/bvoc_fine_arts_3.jpg",
        "imageAlt": "Final year in fine arts",
        "Semester 5": [
          "Art Gallery Management",
          "Cultural Studies in Art",
          "Professional Art Practice",
          "Art History and Criticism",
          "Capstone Project"
        ],
        "Semester 6": [
          "Final Portfolio",
          "Art Career Development",
          "Exhibition and Networking",
          "Professional Art Critique",
          "Graduation Project"
        ]
      }
    }
  },
  { redirectUrl:"/fine-arts/one-year-diploma-in-fine-arts",
    "content": "The 1 Year Diploma in Painting is an intensive program designed for aspiring artists who want to focus specifically on painting techniques and styles. This focused course covers fundamental and intermediate painting skills, color theory, and composition. The program is ideal for those seeking to develop their artistic abilities in a shorter timeframe.\n\nStudents learn various painting techniques, medium handling, and style development through extensive studio practice. The course includes modules on art appreciation, contemporary painting trends, and basic art marketing. Through regular exhibitions and workshops, students develop their artistic voice and presentation skills. Graduates can pursue careers as professional artists, art teachers, or continue their education in advanced fine arts programs.",
    "value": "one-year-diploma-in-fine-arts",
    "label": "1 Year Diploma in Painting",
    "title": "1 Year Diploma in Painting",
    "duration": "1 Year Full-Time",
    "description": "Focused on developing painting skills in a short time, this diploma helps students master essential painting techniques and create meaningful artwork.",
    "software": [
      { "name": "Photoshop", "src": "/software logos/pngegg (24).png" },
      { "name": "Adobe Illustrator", "src": "/software logos/pngegg (25).png" },
    ],
    "videos": [],
    "whatYouWillLearn": [],
    "curriculum": {
      "1st Year": {
        "image": "https://example.com/diploma_painting_1.jpg",
        "imageAlt": "Painting techniques in progress",
        "Semester 1": [
          "Introduction to Painting",
          "Basic Drawing and Composition",
          "Oil Painting Techniques",
          "Watercolor Basics",
          "Art Appreciation"
        ],
        "Semester 2": [
          "Advanced Painting Techniques",
          "Color Theory and Composition",
          "Art Marketing for Artists",
          "Contemporary Painting Trends",
          "Exhibition Preparation"
        ]
      }
    }
  },
  { redirectUrl:"/fine-arts/three-year-diploma-in-fine-arts",
    "content": "The 3 Year Diploma in Fine Arts is a structured program that provides a comprehensive introduction to multiple fine arts disciplines. Over three years, students are immersed in practical and theoretical knowledge in painting, sculpture, printmaking, and digital media. This course develops both technical and conceptual skills, preparing students for professional careers in the arts.\n\nStudents engage in studio work, portfolio development, art history, and critical thinking courses, all designed to enhance their understanding of contemporary art. The curriculum also includes exposure to art exhibitions and internships. Graduates are ready for roles in visual arts, gallery management, and as professional artists.",
    "value": "three-year-diploma-in-fine-arts",
    "label": "3 Year Diploma in Fine Arts",
    "title": "3 Year Diploma in Fine Arts",
    "duration": "3 Years Full-Time",
    "description": "A comprehensive diploma program that covers multiple fine arts disciplines and prepares students for a career in the visual arts industry.",
    "software": [
      { "name": "Photoshop", "src": "/software logos/pngegg (24).png" },
      { "name": "Adobe Illustrator", "src": "/software logos/pngegg (25).png" },
    ],
    "videos": [],
    "whatYouWillLearn": [],
    "curriculum": {
      "1st Year": {
        "image": "https://example.com/diploma_fine_arts_1.jpg",
        "imageAlt": "Introductory fine arts course",
        "Semester 1": [
          "Drawing Fundamentals",
          "Art Theory and History",
          "Painting Basics",
          "Sculpture Techniques",
          "Introduction to Printmaking"
        ],
        "Semester 2": [
          "Digital Media and Art",
          "Printmaking Techniques",
          "Intermediate Drawing",
          "Sculpture and Modeling",
          "History of Art Movements"
        ]
      },
      "2nd Year": {
        "image": "https://example.com/diploma_fine_arts_2.jpg",
        "imageAlt": "Advanced fine arts studio",
        "Semester 3": [
          "Advanced Painting Techniques",
          "Art Criticism",
          "Portfolio Development",
          "Introduction to Photography",
          "Contemporary Sculpture"
        ],
        "Semester 4": [
          "Graphic Design in Fine Arts",
          "Art Management",
          "Art Installation and Curation",
          "Modern Art Movements",
          "Experimental Art Forms"
        ]
      },
      "3rd Year": {
        "image": "https://example.com/diploma_fine_arts_3.jpg",
        "imageAlt": "Fine arts exhibition",
        "Semester 5": [
          "Advanced Printmaking",
          "Art and Technology",
          "Professional Art Practice",
          "Gallery Management",
          "Art Exhibitions and Internships"
        ],
        "Semester 6": [
          "Research and Critical Thinking",
          "Final Portfolio Development",
          "Art Entrepreneurship",
          "Contemporary Art Studies",
          "Final Project"
        ]
      }
    }
  }
],

  "advertising-marketing": [
    { redirectUrl:"/advertising-marketing/bba-advertising-and-marketing-strategies",
      "metaTitle": "Advertising and Marketing Course in Jodhpur | Inframe School of Art & Design",
      "metaDescription": "Enroll in the Business Administration in Advertising and Marketing course in Jodhpur. Gain essential skills in marketing, advertising, and business management",
      "content": "The Bachelor of Business Administration (BBA) in Advertising and Marketing is a three-year full-time program that prepares students for the dynamic world of advertising, marketing, and brand management. This comprehensive course combines business fundamentals with specialized knowledge in modern marketing practices and advertising strategies. Students learn various aspects of marketing management, consumer behavior, brand strategy, digital marketing, and advertising campaign development. The curriculum emphasizes both traditional marketing principles and contemporary digital marketing techniques.\n\nThroughout the program, students gain hands-on experience in creating marketing strategies, developing advertising campaigns, and managing brand communications. They learn about market research, consumer psychology, media planning, content strategy, and analytics. The course includes specialized modules in social media marketing, search engine marketing, email marketing, and marketing automation. Students also study advertising design, copywriting, public relations, and event management. The program incorporates real-world projects where students work on actual marketing campaigns and brand strategies.\n\nThe curriculum also covers essential business aspects including marketing economics, business law, financial management, and entrepreneurship. Through industry internships and live projects, students gain practical experience in handling marketing challenges and advertising campaigns. Regular workshops and guest lectures from industry experts provide insights into current marketing trends and practices. Final year students work on comprehensive marketing projects and develop professional portfolios. Graduates can pursue careers as marketing managers, advertising executives, brand managers, digital marketing specialists, media planners, or marketing consultants. Many also go on to start their own advertising agencies or marketing consultancy firms.",
      "value": "bba-advanced-advertising-and-marketing-strategies",
      "label": "BBA in Advertising and Marketing",
      "title": "Bachelor of Business Administration in Advertising and Marketing",
      "duration": "3 Years Full-Time",
      "description": "Master the art and science of modern marketing and advertising. Learn to create impactful campaigns and build successful brands in the digital age.",
      "software": [
        { "name": "AutoCAD", "src": "/logos/pngegg (17).png" },
        { "name": "SketchUp", "src": "/logos/pngegg (18).png" },
        { "name": "3dsMax", "src": "/logos/pngegg (19).png" },
        { "name": "V-Ray", "src": "/logos/pngegg (20).png" },
        { "name": "Rhino", "src": "/logos/pngegg (23).png" }
      ],
      videos: [],
      whatYouWillLearn: [],
      curriculum: {
        "1st Year": {
          image: "https://example.com/bba_advertising_1.jpg",
          imageAlt: "Introduction to Advertising and Marketing",
          "Semester 1": [
            "Introduction to Business Administration",
            "Fundamentals of Marketing",
            "Consumer Behavior",
            "Business Communication",
            "Principles of Management",
          ],
          "Semester 2": [
            "Market Research",
            "Advertising Principles",
            "Brand Management",
            "Digital Marketing Basics",
            "Accounting for Managers",
          ],
        },
        "2nd Year": {
          image: "https://example.com/bba_advertising_2.jpg",
          imageAlt: "Advanced Marketing Strategies",
          "Semester 3": [
            "Strategic Marketing Management",
            "Media Planning and Buying",
            "Advertising Campaigns",
            "Social Media Marketing",
            "Public Relations",
          ],
          "Semester 4": [
            "Search Engine Marketing (SEM)",
            "Content Strategy and Marketing",
            "Sales and Distribution Management",
            "Market Analytics",
            "Email Marketing",
          ],
        },
        "3rd Year": {
          image: "https://example.com/bba_advertising_3.jpg",
          imageAlt: "Industry Practice and Marketing Projects",
          "Semester 5": [
            "Marketing Economics",
            "Event Management",
            "Entrepreneurship in Marketing",
            "Advertising Design and Copywriting",
            "Public Relations and Corporate Communication",
          ],
          "Semester 6": [
            "Advanced Digital Marketing",
            "Marketing Automation",
            "Business Law for Marketers",
            "Internship and Industry Project",
            "Final Marketing Project",
          ],
        },
      },
    },
  ],
  // Continue with other categories...
};

export const categoryHeroImages: { [key: string]: string[] } = {
  "interior-design": [
    "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=1600&q=80", // BDes
    "https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?w=1600&q=80", // BVOC
    "https://images.unsplash.com/photo-1616048056617-93b94a339009?w=1600&q=80", // BSc
    "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=1600&q=80", // 1 Year Diploma
    "https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?w=1600&q=80", // 3 Year Diploma
  ],
  "fashion-design": [
    "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1600&q=80", // Fashion design studio
    "https://images.unsplash.com/photo-1537832816519-689ad163238b?w=1600&q=80", // Fashion showcase
    "https://images.unsplash.com/photo-1528459801416-a9241982fc8d?w=1600&q=80", // Design workshop
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1600&q=80", // Fashion show
    "https://images.unsplash.com/photo-1544441893-675973e31985?w=1600&q=80", // Textile design
  ],

  "graphic-design": [
    "https://images.unsplash.com/photo-1626785774625-0b1c2c4efd7c?w=1600&q=80", // Design workspace
    "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1600&q=80", // Creative process
    "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=1600&q=80", // Digital art
    "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1600&q=80", // Design tools
    "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1600&q=80", // Typography work
  ],

  "uiux-design": [
    "https://images.unsplash.com/photo-1626785774625-0b1c2c4efd7c?w=1600&q=80", // Design workspace
    "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1600&q=80", // Creative process
    "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=1600&q=80", // Digital art
    "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1600&q=80", // Design tools
    "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1600&q=80", // Typography work
  ],

  // "ui-ux-design": [
  //   {
  //     "redirectUrl": "/ui-ux-design/bdes-in-ui-ux-design",
  //     "mainTitle": "ui-ux-design",
  //     "metaTitle": "UI/UX Design Course in Jodhpur | Inframe School of Art & Design",
  //     "metaDescription": "Join Inframe's UI/UX Design Course in Jodhpur. Learn to create intuitive digital experiences with industry-standard tools and methodologies.",
  //     "value": "bdes-in-ui-ux-design",
  //     "label": "B. Des in UI/UX Design",
  //     "title": "Bachelor of Design in UI/UX Design",
  //     "duration": "4 Years Full-Time",
  //     "description": "Master the art of creating intuitive digital experiences through our comprehensive UI/UX design program. Learn from industry experts and build a successful career in digital product design.",
  //     "content": "The Bachelor of Design (B.Des) in UI/UX Design is a four-year full-time program designed to develop professionals who can create intuitive and engaging digital experiences. This course combines visual design principles with user psychology and technical implementation. Students learn user research, wireframing, prototyping, and usability testing while mastering industry-standard design tools. The curriculum integrates theoretical knowledge with practical projects, preparing graduates for roles in UI design, UX design, product design, and interaction design.",
  //     "software": [
  //       { "name": "Figma", "src": "/software logos/figma-logo.png" },
  //       { "name": "Adobe XD", "src": "/software logos/adobe-xd-logo.png" },
  //       { "name": "Sketch", "src": "/software logos/sketch-logo.png" },
  //       { "name": "Photoshop", "src": "/software logos/pngegg (24).png" },
  //       { "name": "Illustrator", "src": "/software logos/illustrator-logo.png" }
  //     ],
  //     "videos": [
  //       { "url": "https://youtube.com/embed/dQw4w9WgXcQ" },
  //       { "url": "https://youtube.com/embed/dQw4w9WgXcQ" },
  //       { "url": "https://youtube.com/embed/dQw4w9WgXcQ" }
  //     ],
  //     "whatYouWillLearn": [
  //       {
  //         "skill": "User Research",
  //         "description": "Learn to conduct user interviews, surveys, and usability tests to inform design decisions"
  //       },
  //       {
  //         "skill": "UI Design",
  //         "description": "Master the principles of visual design, typography, color theory, and layout for digital interfaces"
  //       },
  //       {
  //         "skill": "UX Design",
  //         "description": "Understand user psychology, information architecture, and interaction design patterns"
  //       },
  //       {
  //         "skill": "Prototyping",
  //         "description": "Create interactive prototypes using industry-standard tools like Figma and Adobe XD"
  //       }
  //     ],
  //     "curriculum": {
  //       "1st Year": {
  //         "image": "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c",
  //         "imageAlt": "UI/UX design fundamentals workspace",
  //         "Semester 1": [
  //           "Introduction to Design Thinking",
  //           "Visual Design Fundamentals",
  //           "Digital Tools and Technology",
  //           "Typography and Layout",
  //           "Color Theory and Psychology",
  //           "Design History and Evolution"
  //         ],
  //         "Semester 2": [
  //           "User Interface Design Basics",
  //           "User Experience Principles",
  //           "Digital Design Tools",
  //           "Web Design Fundamentals",
  //           "Design Systems",
  //           "Interactive Design"
  //         ]
  //       },
  //       "2nd Year": {
  //         "image": "https://images.unsplash.com/photo-1559028012-481c04fa702d",
  //         "imageAlt": "Digital prototyping and wireframing",
  //         "Semester 3": [
  //           "User Research Methods",
  //           "Information Architecture",
  //           "Wireframing and Prototyping",
  //           "Interaction Design",
  //           "Mobile App Design",
  //           "Usability Testing"
  //         ],
  //         "Semester 4": [
  //           "Advanced UI Design",
  //           "UX Strategy",
  //           "Design Systems",
  //           "Responsive Design",
  //           "Motion Design",
  //           "Design Documentation"
  //         ]
  //       },
  //       "3rd Year": {
  //         "image": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
  //         "imageAlt": "UI/UX team collaboration",
  //         "Semester 5": [
  //           "Advanced UX Research",
  //           "Service Design",
  //           "Design Leadership",
  //           "Design Systems at Scale",
  //           "Accessibility in Design",
  //           "Design Ethics"
  //         ],
  //         "Semester 6": [
  //           "Product Design",
  //           "Design Strategy",
  //           "Team Collaboration",
  //           "Design Operations",
  //           "Portfolio Development",
  //           "Industry Projects"
  //         ]
  //       },
  //       "4th Year": {
  //         "image": "https://images.unsplash.com/photo-1542744094-24638eff58bb",
  //         "imageAlt": "Professional UI/UX design workspace",
  //         "Semester 7": [
  //           "Advanced Product Design",
  //           "Design Management",
  //           "Emerging Technologies",
  //           "Cross-platform Design",
  //           "Design Research Project",
  //           "Industry Internship"
  //         ],
  //         "Semester 8": [
  //           "Capstone Project",
  //           "Professional Practice",
  //           "Portfolio Finalization",
  //           "Design Entrepreneurship",
  //           "Future of Design",
  //           "Final Thesis"
  //         ]
  //       }
  //     }
  //   }
  // ],

  "digital-marketing": [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80", // Digital analytics
    "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1600&q=80", // Social media marketing
    "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1600&q=80", // Content strategy
  ],
  "jewellery-design": [
    "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=80", // BVOC - Jewellery workshop
    "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1600&q=80", // 1 Year Diploma - Diamond and jewellery design
    "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=1600&q=80", // CAD Jewellery - Digital design workspace
    "https://images.unsplash.com/photo-1590548784585-643d2b9f2925?w=1600&q=80", // 6 Month Certificate - Basic jewellery making
    "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1600&q=80", // 6 Month CAD Certificate - Modern jewellery design
  ],

  "animation-vfx": [
    "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1600&q=80", // BDes - Animation workstation
    "https://images.unsplash.com/photo-1626785774625-0b1c2c4efd7c?w=1600&q=80", // BVOC - Creative workspace
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&q=80", // BSc - Technical setup
    "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1600&q=80", // 1 Year Diploma
    "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1600&q=80", // 2 Year Diploma
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1600&q=80", // 3 Year Diploma
  ],

  "entrepreneurship-skill": [
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80", // BVOC - Business planning and strategy
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&q=80", // 1 Year Diploma - Startup workspace
  ],

  "media-entertainment": [
    "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=1600&q=80", // BVOC - Professional media studio
    "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?w=1600&q=80", // 1 Year Diploma - Content creation setup
  ],

  "fine-arts": [
    "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=1600&q=80", // BFA Painting
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&q=80", // BFA Visual Communication
    "https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=1600&q=80", // BFA Sculpture
    "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=1600&q=80", // BFA Applied
    "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1600&q=80", // BVOC Fine Arts
    "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1600&q=80", // 1 Year Diploma Painting
    "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=1600&q=80", // 3 Year Diploma Fine Arts
  ],

  "advertising-marketing": [
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80", // BBA - Marketing strategy and planning
  ],
  // Continue with other categories...
};
