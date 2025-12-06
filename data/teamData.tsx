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
      imageUrl: '', // Make sure you have this image in your public folder
    },
    {
      id: 2,
      name: 'Jiya Amin',
      role: 'Senior Advisor',
      bio: 'Juniper is the Senior Advisor of Generations in Tune. She is a junior at Montgomery Blair High School and has been playing the clarinet for over 7 years. As co-president, she helps lead concerts and host card workshops. She recently performed with BUTI’s Young Artist Orchestra over the summer, and is in MCYO Philharmonic. She loves performing and sharing her music at generations in tune, as she thinks it allows her to connect with the seniors and other musicians. In her free time, she likes to bake, listen to music, and play piano.',
      imageUrl: '/Juniper.jpeg', // Make sure you have this image in your public folder
    },
    // Add more team members here
  ];
  