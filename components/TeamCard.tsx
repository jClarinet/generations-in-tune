// components/TeamCard.tsx
import React from 'react';
import { TeamMember } from '../data/teamData'; 
import CircleImage from './CircleImage'; // Import the new component

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden bg-white">
      
      {/* Container to center the image within the top of the card */}
      <div className="flex justify-center items-center py-6 bg-white hover:scale-115 transform transition duration-300"> 
        {/* Pass the standard Tailwind size classes here */}
        <CircleImage src={member.imageUrl} alt={`Picture of ${member.name}`} className="w-50 h-50" />
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl text-primary mb-1 flex items-center justify-center">{member.name}</h3>
        <p className="text-primary font-xl mb-3 flex items-center justify-center">{member.role}</p>
        <p className="text-secondary w-80 tracking-wide text-l flex items-center justify-center">{member.bio}</p>
      </div>
    </div>
  );
};

export default TeamCard;
