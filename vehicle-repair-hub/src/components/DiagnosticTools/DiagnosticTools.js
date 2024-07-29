import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './DiagnosticTools.css';

const DiagnosticTools = () => {
  const [symptom, setSymptom] = useState('');
  const [diagnosis, setDiagnosis] = useState('');

  const handleSymptomChange = (event) => {
    setSymptom(event.target.value);
  };

  const diagnoseProblem = () => {
    switch(symptom.toLowerCase()) {
      case 'engine noise':
        setDiagnosis('Potential issues include worn out engine components, low oil levels, or a faulty exhaust system.');
        break;
      case 'brake squeak':
        setDiagnosis('This could be due to worn brake pads, glazing on the brake pads, or dirt and debris on the brakes.');
        break;
      case 'poor fuel efficiency':
        setDiagnosis('Possible causes include dirty air filters, improper tire pressure, or engine problems.');
        break;
      case 'vibration':
        setDiagnosis('Vibrations can be caused by unbalanced tires, misaligned wheels, or worn suspension components.');
        break;
      default:
        setDiagnosis('Please select a symptom to diagnose.');
    }
  };

  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <div className="diagnostic-tools">
        <h1>Diagnostic Tools for Vehicle Problems</h1>

        <section>
          <h2>Introduction</h2>
          <p>
            Diagnosing vehicle problems early can prevent further damage and costly repairs. Use our interactive diagnostic tools to identify potential issues based on common symptoms.
          </p>
        </section>

        <section>
          <h2>Common Symptoms</h2>
          <div className="symptom-selector">
            <label htmlFor="symptom">Select a symptom:</label>
            <select id="symptom" value={symptom} onChange={handleSymptomChange}>
              <option value="">-- Select a symptom --</option>
              <option value="engine noise">Engine Noise</option>
              <option value="brake squeak">Brake Squeak</option>
              <option value="poor fuel efficiency">Poor Fuel Efficiency</option>
              <option value="vibration">Vibration</option>
            </select>
            <button onClick={diagnoseProblem}>Diagnose</button>
          </div>
          {diagnosis && (
            <div className="diagnosis-result">
              <h3>Diagnosis</h3>
              <p>{diagnosis}</p>
            </div>
          )}
        </section>

        <section>
          <h2>Further Resources</h2>
          <p>
            For more detailed diagnostics and repair guides, check out our <a href="/repair-guides">Repair Guides</a> and <a href="/forum">Troubleshooting Forum</a>.
          </p>
        </section>
      </div>
    </>
  );
};

export default DiagnosticTools;
