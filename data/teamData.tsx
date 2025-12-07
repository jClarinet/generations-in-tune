// data/teamData.ts

export interface TeamMember {
    id: number;
    name: string;
    role: string;
    bio: string;
    imageUrl: string;
  }
  
  export const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Mengtong Xiang',
      role: 'Founder/Co-President',
      bio: 'Mengtong Xiang is an 11th-grade student at Montgomery Blair High School. She’s been playing piano since she was five and enjoys growing as a musician. Performing at Brookdale Senior Center has been one of her favorite experiences because she’s seen how music can make people smile and connect different generations. She also loves delivering seasonal cards to seniors and brightening up their day. Through Generations in Tune, she helps bring live music to seniors who don’t always get the chance to hear it, and she loves being part of the weekly concerts. In particular, she finds it very special how performers get to interact with seniors and hear about their week, their lives, and the stories they want to share.',
      imageUrl: '/jiya.jpeg', // Make sure you have this image in your public folder
    },
    {
      id: 2,
      name: 'Juniper Brinegar',
      role: 'Co-President',
      bio: 'Juniper is the Senior Advisor of Generations in Tune. She is a junior at Montgomery Blair High School and has been playing the clarinet for over 7 years. As co-president, she helps lead concerts and host card workshops. She recently performed with BUTI’s Young Artist Orchestra over the summer, and is in MCYO Philharmonic. She loves performing and sharing her music at generations in tune, as she thinks it allows her to connect with the seniors and other musicians. In her free time, she likes to bake, listen to music, and play piano.',
      imageUrl: '/Juniper.jpeg', // Make sure you have this image in your public folder
    },
    // Add more team members here
    {
      id: 3,
      name: 'Ciara Feng',
      role: 'Director of Art / Graphic Design',
      bio: 'Ciara is a junior at Montgomery Blair High School. Music has always played a large role in her life; she started taking singing lessons at a young age and continues to sing as a hobby. She sees music as an outlet for her emotions, and seeks to continue improving her skills so that she can better express herself. Her other pastimes include doing arts and crafts—such as drawing, painting, and crocheting—and she enjoys using her creative abilities during senior card workshops hosted by Generations in Tune.',
      imageUrl: '/Juniper.jpeg', // Make sure you have this image in your public folder
    },
    {
      id: 4,
      name: 'Jiya Amin',
      role: 'Director of Communications & Outreach',
      bio: 'Hi! My name is Jiya, and I am a junior at Montgomery Blair High School. I enjoy creating unique handmade cards for seniors. I love music and art because they brighten up the world! Everything would be so monotonous and plain without the special touch of music and art. I am excited to help expand the impact of Generations In Tune because I believe that the core community involvement of Generations in Tune, helping seniors, is extremely beautiful and impactful. I hope that Generations in Tune continues to brighten up Brookdale Senior Living!',
      imageUrl: '/Juniper.jpeg', // Make sure you have this image in your public folder
    },
    {
      id: 5,
      name: 'Karina Khilnani',
      role: 'Director of Art & Outreach',
      bio: 'Hello! I’m Karina, a junior at Montgomery Blair High School, and I started playing the piano at 7. Music and art continue to be a huge part of my life and a major form of expression. In my free time I also love to dance and bake. With Generations In Tune, I hope to create an impact and share the joy of music with those who have less access, while learning from their stories and experiences. I look forward to growing as a musician, artist, and community member!',
      imageUrl: '/Juniper.jpeg', // Make sure you have this image in your public folder
    },
    {
      id: 6,
      name: 'Caroline Li',
      role: 'Outreach & Volunteer Advisor',
      bio: 'Hello! I’m Karina, a junior at Montgomery Blair High School, and I started playing the piano at 7. Music and art continue to be a huge part of my life and a major form of expression. In my free time I also love to dance and bake. With Generations In Tune, I hope to create an impact and share the joy of music with those who have less access, while learning from their stories and experiences. I look forward to growing as a musician, artist, and community member!',
      imageUrl: '/Juniper.jpeg', // Make sure you have this image in your public folder
    },
    {
      id: 7,
      name: 'Alex Wen',
      role: 'Alumni/Founder',
      bio: 'Hi musicians! I’m Alex, a student from Montgomery County currently studying at Johns Hopkins University. Piano has been an exciting hobby and pursuit of mine ever since childhood, and having the opportunity to perform my favorite pieces while brightening the lives of others is what fuels my passion to keep improving on this instrument. Hosting concerts at the Brookdale Senior Center allowed me to do just that. Through Generations in Tune, I hope to provide young musicians with that same opportunity, as well as with a warm and inclusive community that fosters growth beyond music. I look forward to hearing the talent and passion you guys have to offer!',
      imageUrl: '/Juniper.jpeg', // Make sure you have this image in your public folder
    },
  ];
  