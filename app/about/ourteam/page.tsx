import TeamCard from '../../../components/TeamCard'; // Adjust path based on your structure
import { teamMembers } from '../../../data/teamData';
export default function Ourteam() {
    return (
      <div className="bg-white h-screen w-screen">
        <div className="flex-col text-primary justify-center flex items-center">
        <h1 className="text-3xl font-bold mt-20 p-5">Our Team</h1>
        <p>Meet our team of High School Musicians!</p>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto h-full">
        {teamMembers.map((member) => (
          // Key prop is important when mapping lists in React
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
        
      </div>
    );
  }
  