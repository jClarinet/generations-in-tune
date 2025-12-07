// app/about/ourteam/page.tsx
import TeamCard from '../../../components/TeamCard'; // Adjust path based on your structure
import { teamMembers } from '../../../data/teamData';

export default function Ourteam() {
  return (
    // Use min-h-screen for full height and add general padding/background color
    <div className="bg-white min-h-screen p-4 md:p-8 flex items-center justify-center w-screen flex-col"> 
      
      {/* Header Section */}
      <div className="flex-col text-primary justify-center flex items-center mb-8">
        <h1 className="text-4xl font-bold mt-10">Our Team</h1>
        <p className="mt-2">Meet our team of High School Musicians!</p>
      </div>

      {/* Grid Container for Even Spacing */}
      <div 
        className="
          grid 
          grid-cols-1       /* 1 column on mobile */
          sm:grid-cols-2    /* 2 columns on small screens */
          lg:grid-cols-2    /* Still 2 columns on large screens */
          gap-8             /* Even spacing between cards (2rem/32px) */
          max-w-6xl         /* Keeps the grid readable on ultra-wide screens */
          mx-auto           /* Centers the grid container on the page */
          w-screen            /* Ensures the container uses 100% available width */
        "
      >
        {teamMembers.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
}
