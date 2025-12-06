// components/CalendarEmbed.tsx
// We still need to import React features if we are using TSX

// The function is defined and exported as default directly
export default function CalendarEmbed() {
  // Define the URL with explicit typing for TypeScript
  const calendarUrl: string = "https://calendar.google.com/calendar/embed?src=generationsintune%40gmail.com&ctz=America%2FNew_York";

  return (
    // Use Tailwind utilities for overall spacing and layout
    <div className="p-4 md:p-8 bg-gray-50 rounded-lg shadow-lg max-w-4xl mx-auto my-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Upcoming Events</h2>
      
      {/* The container below uses a CSS class defined in app/globals.css for responsiveness */}
      <div className="w-full">
        <iframe
          src={calendarUrl}
          // Set a specific height here using a custom utility value (600px)
          className="w-full h-[600px]" 
          style={{ border: 0 }}
          title="Embedded Google Calendar"
          allowFullScreen={true} 
        />
      </div>
    </div>
  );
}

