import React from 'react';
import VelocityText from './VelocityText'; // Ini sudah benar

// --- DATA SKILL ---
const skillsLogos = [
    { name: "Inventor", icon: "/icons/inventor.png" },
    { name: "Solidworks", icon: "/icons/solidworks.png" },
    { name: "AutoCAD", icon: "/icons/autocad.png" },
    { name: "ArduinoIDE", icon: "/icons/arduino.svg" },
    { name: "Fluidsm", icon: "/icons/fluidsm.png" },
    { name: "EWB", icon: "/icons/ewb.png" },
    { name: "EasyEDA", icon: "/icons/easyeda.png" },
    { name: "NX Siemens", icon: "/icons/nx_siemens.svg" },
    { name: "ZW 3D", icon: "/icons/zw3d.png" },
    { name: "MasterCAM", icon: "/icons/mastercam.png" },
    { name: "Fusion360", icon: "/icons/fusion360.png" }, // (Saya perbaiki nama ini)
    { name: "Photoshop", icon: "/icons/photoshop.svg" },
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