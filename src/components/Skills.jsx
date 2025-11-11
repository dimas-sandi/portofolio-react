import React from 'react';
import VelocityText from './VelocityText'; // Ini sudah benar

// --- DATA SKILL ---
const skillsLogos = [
    { name: "Inventor", icon: import.meta.env.BASE_URL + "icons/inventor.png" },
    { name: "Solidworks", icon: import.meta.env.BASE_URL + "icons/solidworks.png" },
    { name: "AutoCAD", icon: import.meta.env.BASE_URL + "icons/autocad.png" },
    { name: "ArduinoIDE", icon: import.meta.env.BASE_URL + "icons/arduino.svg" },
    { name: "Fluidsm", icon: import.meta.env.BASE_URL + "icons/fluidsm.png" },
    { name: "EWB", icon: import.meta.env.BASE_URL + "icons/ewb.png" },
    { name: "EasyEDA", icon: import.meta.env.BASE_URL + "icons/easyeda.png" },
    { name: "NX Siemens", icon: import.meta.env.BASE_URL + "icons/nx_siemens.svg" },
    { name: "ZW 3D", icon: import.meta.env.BASE_URL + "icons/zw3d.png" },
    { name: "MasterCAM", icon: import.meta.env.BASE_URL + "icons/mastercam.png" },
    { name: "Fusion360", icon: import.meta.env.BASE_URL + "icons/fusion360.png" },
    { name: "Photoshop", icon: import.meta.env.BASE_URL + "icons/photoshop.svg" },
];

// --- Komponen Utama Skills ---
const Skills = ({ texts, id }) => {
    return (
        <section id={id} className="section skills-section reveal">
            <div className="section-content blurred-container"> 
                
                {/* --- 1. TEKS ATAS (HARUS ADA 2 BARIS INI) --- */}
                <VelocityText text="mechanical engineering " baseVelocity={-5} />
                <VelocityText text="we design we build we deploy " baseVelocity={5} />

                {/* --- 2. JUDUL DAN DESKRIPSI --- */}
                <h2 className="skills-title reveal animate-fade-up delay-1">{texts.skillsTitle}</h2>
                <p className="skills-desc reveal animate-fade-up delay-2">{texts.skillsDesc}</p>
                
                {/* --- 3. MARQUEE LOGO --- */}
                <div className="linear-loop-container reveal animate-fade-up delay-3">
                    <div className="linear-loop-track">
                        {/* Render list 1x */}
                        {skillsLogos.map((logo) => (
                            <div className="linear-loop-item" key={`a-${logo.name}`}>
                                <img src={logo.icon} alt={logo.name} className="linear-loop-icon" />
                                <span className="linear-loop-label">{logo.name}</span>
                            </div>
                        ))}
                        {/* Render list 2x (untuk loop mulus) */}
                        {skillsLogos.map((logo) => (
                            <div className="linear-loop-item" key={`b-${logo.name}`}>
                                <img src={logo.icon} alt={logo.name} className="linear-loop-icon" />
                                <span className="linear-loop-label">{logo.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- 4. TEKS BAWAH (PASTIKAN 2 BARIS INI ADA) --- */}
                <VelocityText text="mechanical engineering " baseVelocity={-5} />
                <VelocityText text="we design we build we deploy " baseVelocity={5} />
                
            </div>
        </section>
    );
};

export default Skills;