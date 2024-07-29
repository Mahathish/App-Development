import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './RepairGuides.css'; // Import your custom CSS

const RepairGuidesPage = () => {
  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <main className="main-content">
        <h1>Repair Guides</h1>
        <p className="intro">Welcome to our Repair Guides section. Maintaining and repairing your vehicle can seem daunting, but with the right knowledge and tools, you can handle many common issues yourself. This guide provides detailed information on engine repair, brake repair, and electrical troubleshooting, along with general maintenance tips to keep your vehicle in top condition.</p>
        
        <section className="guide-section">
          <h2>Engine Repair Tips</h2>
          <p>The engine is the heart of your vehicle, and regular maintenance is crucial to ensure its longevity and performance. Here are some essential tips for engine care and common repairs:</p>
          <ul>
            <li><strong>Regular Oil Changes:</strong> Change your engine oil and filter every 3,000 to 5,000 miles, depending on your vehicle's specifications and driving conditions. Clean oil lubricates engine components, reduces friction, and prevents overheating.</li>
            <li><strong>Monitor Warning Lights:</strong> Pay attention to the check engine light and other dashboard indicators. These lights can signal issues ranging from minor to severe. Use an OBD-II scanner to diagnose the problem or take your car to a professional mechanic.</li>
            <li><strong>Clean the Engine:</strong> Keeping your engine clean can prevent debris from causing overheating or damage. Use a degreaser to clean the engine bay and avoid spraying water directly on electrical components.</li>
            <li><strong>Replace Spark Plugs:</strong> Worn spark plugs can cause misfires, poor fuel economy, and difficulty starting the engine. Check and replace them according to your vehicle's maintenance schedule, typically every 30,000 to 50,000 miles.</li>
            <li><strong>Inspect Belts and Hoses:</strong> Regularly inspect belts and hoses for signs of wear, cracks, or leaks. Replace any damaged components to prevent engine overheating or failure.</li>
          </ul>
        </section>

        <section className="guide-section">
          <h2>Brake Repair Tips</h2>
          <p>Your vehicle's brake system is critical for safety. Proper maintenance and timely repairs can prevent brake failure and ensure your vehicle stops effectively. Here are some essential brake maintenance tips:</p>
          <ul>
            <li><strong>Brake Pad Replacement:</strong> Brake pads should be replaced every 20,000 to 50,000 miles, depending on your driving habits and the type of pads. Listen for squealing or grinding noises, which indicate worn pads.</li>
            <li><strong>Check Brake Fluid:</strong> Regularly check the brake fluid level and top it up if necessary. Brake fluid absorbs moisture over time, which can reduce braking efficiency. Flush and replace the brake fluid every two years.</li>
            <li><strong>Inspect Rotors and Drums:</strong> Check the condition of your brake rotors and drums. Warped or damaged rotors can cause vibrations and reduce braking performance. Resurface or replace them as needed.</li>
            <li><strong>Brake Lines:</strong> Inspect brake lines for leaks, corrosion, or damage. Replace any compromised lines to ensure brake fluid reaches all components of the braking system.</li>
            <li><strong>Handbrake (Parking Brake):</strong> Regularly test the handbrake to ensure it holds the vehicle securely. Adjust or repair it if it feels loose or doesn't hold properly.</li>
          </ul>
        </section>

        <section className="guide-section">
          <h2>Electrical Troubleshooting</h2>
          <p>Modern vehicles rely heavily on electrical systems for various functions, from starting the engine to operating lights and accessories. Here are some tips for troubleshooting common electrical issues:</p>
          <ul>
            <li><strong>Battery Maintenance:</strong> Check the battery terminals for corrosion and clean them regularly. Ensure the battery is securely mounted and replace it every 3 to 5 years, or if it shows signs of weakness.</li>
            <li><strong>Test the Alternator:</strong> If your battery frequently dies, the alternator may not be charging it properly. Use a multimeter to test the alternator's output voltage and replace it if necessary.</li>
            <li><strong>Fuse Inspection:</strong> Check all fuses to ensure they are intact. A blown fuse can cause various electrical failures. Replace any blown fuses with ones of the same amperage.</li>
            <li><strong>Light Bulb Replacement:</strong> Regularly check all exterior and interior lights to ensure they are working correctly. Replace any burnt-out bulbs and clean the lenses for optimal visibility.</li>
            <li><strong>Wire Inspection:</strong> Inspect wiring for signs of wear, damage, or loose connections. Repair or replace damaged wires to prevent electrical shorts and system failures.</li>
          </ul>
        </section>

        <section className="guide-section">
          <h2>General Vehicle Maintenance Tips</h2>
          <p>Routine maintenance is key to keeping your vehicle running smoothly and preventing costly repairs. Here are some general tips to help you maintain your vehicle:</p>
          <ul>
            <li><strong>Tire Maintenance:</strong> Keep your tires properly inflated according to the manufacturer's recommendations. Rotate your tires every 6,000 to 8,000 miles to ensure even wear and extend their lifespan.</li>
            <li><strong>Fluid Checks:</strong> Regularly check and top up all essential fluids, including engine oil, coolant, brake fluid, transmission fluid, and power steering fluid. Replace fluids as recommended by the manufacturer.</li>
            <li><strong>Air Filter Replacement:</strong> Replace the air filter every 15,000 to 30,000 miles to ensure optimal engine performance and fuel efficiency. A clean air filter prevents dust and debris from entering the engine.</li>
            <li><strong>Wiper Blades:</strong> Replace windshield wiper blades every six months to a year, or if they leave streaks or don't clear the windshield effectively. Clean the windshield regularly to improve visibility.</li>
            <li><strong>Scheduled Inspections:</strong> Schedule regular maintenance inspections with a professional mechanic. They can identify and address potential issues before they become major problems.</li>
          </ul>
          <p>By following these maintenance and repair tips, you can keep your vehicle in excellent condition, enhance its performance, and ensure your safety on the road. Regular care and attention to your vehicle's needs will save you time and money in the long run.</p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default RepairGuidesPage;
