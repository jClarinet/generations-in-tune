// components/TeamCard.tsx
import React from 'react';
import Image from 'next/image'; // Next.js Image component for optimization
import {TeamMember}  from '../data/teamData'; // Import the type definition

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <div className="max-w-sm rounded-lg shadow-lg overflow-hidden bg-white transform transition duration-500 hover:scale-105">
      <div className="relative h-100 w-full">
        <Image
          src={member.imageUrl}
          alt={`Picture of ${member.name}`}
          layout="fill" // Makes the image fill the parent container
          objectFit="contain" // Ensures the image covers the area without stretching
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
        <p className="text-primary font-medium mb-3">{member.role}</p>
        <p className="text-secondary text-sm">{member.bio}</p>
      </div>
    </div>
  );
};

export default TeamCard;
