import Image from "next/image";
import BackgroundSliderTailwind from '../components/BackgroundSliderTailwind';
import { YouTubeEmbed } from '@next/third-parties/google'
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-secondary font-sans w-screen">
      <main className="flex min-h-screen w-full  flex-col items-center justify-between">
        <div className="relative h-screen w-screen">
        
          <div className="absolute inset-0">
          <BackgroundSliderTailwind/>
          </div> 
          
          <div className="relative z-10 flex  mt-20 justify-center items-center flex-col">
              
              <h1 className="text-primary text-6xl font-bold p-5">
                Generations in Tune
              </h1>
              <h2 className="text-medium text-2xl font-bold ">
                Connecting Generations Through Music
              </h2>
              <div className="size-100"><img src="generationslogo.png" alt="" /></div>
              
          </div>
          
          


        </div>
        <div className="bg-lightcolor relative h-150 w-screen">
          <div className="mt-20 justify-center items-center flex-col flex ">
          <h1 className="text-4xl text-primary">Our Mission</h1>
          <p className="text-m text-medium p-5 ml-10">Generations in Tune is a student-led 501(c)(3) non-profit organization based in Maryland. We believe that music has the power to bring people together and create meaningful connections. Our mission is to connect seniors and young musicians through hosting senior center concerts, offering music lessons, and encouraging community interactions. Let's make a difference in the lives of others through music!</p>
          </div>
          <div className="mt-20 justify-center items-center flex-col flex  ">
          <h1 className="text-4xl text-primary">About Us</h1>
          <p className="text-m text-medium p-5 ml-10">Generations in Tune is a community of people who share a love for music and hold the bigger picture in their minds: to share the joy of music with others. Founded in the summer of 2022, Generations in Tune has grown to include numerous volunteer performing musicians and artists. Our group of student volunteers found a way to bring live performances to seniors who otherwise would not have the opportunity to experience them</p>
          </div>
          
              
          </div>
          <div className="bg-fourth relative h-150 w-screen flex flex-col items-center justify-center">
            <h1 className="text-2xl text-primary p-5">Our music, our community, and our volunteers.</h1>
          <YouTubeEmbed 
            videoid="-jUKQTiPGTI" 
            height={400} 
            width={600} 
        // You can add more props like 'params="controls=0&loop=1"'
      />
          </div>

          <div className="w-screen h-screen bg-lightcolor flex flex-col">
            <h1 className="text-primary flex text-6xl ml-20 mb-5 mt-10 w-100">Live Concerts</h1>
            <p className="text-secondary ml-20">Generations in Tune creates a space where music can connect generations. Every Sunday, we host in-person concerts from 3:30 PM to 4:30 PM, featuring a variety of talented student musicians. Our concerts not only provide the opportunity to appreciate music, but also build connections between generations. Our team members encourage interaction between seniors and the student performers, making sure that everyone feels welcome and valued.</p>
            <h1 className="text-primary flex text-6xl ml-80 mb-5 mt-10">Seasonal Cards</h1>
            <p className="text-secondary ml-20">We deliver seasonal cards to remind seniors that they are cared for and remembered throughout the year. Students create handmade cards for holidays and special seasons, adding personal messages and designs that make each one unique. These cards are then delivered to senior centers, where they bring smiles and uplift the residents. For many seniors, receiving a card is a reminder that someone is thinking of them.</p>
          </div>

          
        

      </main>
    </div>
  );
}
