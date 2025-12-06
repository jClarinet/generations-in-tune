import CalendarEmbed from '@/components/CalendarEmbed';
export default function Calendar() {
    return (
      <div className="bg-white h-300 w-screen">
        <div className="flex-col text-primary justify-center flex items-center">
        <h1 className="text-3xl font-bold mt-20 p-5">Calendar</h1>
        </div>
        <div className=''>
        <CalendarEmbed />
        </div>

      </div>
    );
  }
  