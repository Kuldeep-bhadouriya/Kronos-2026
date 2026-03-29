"use client";

import React from "react";

import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const DeveloperTeam: React.FC = () => {
  return (
    <>
      <style jsx>{`
        body {
          font-family: "Orbitron", sans-serif;
          background-color: #0d0d0d; /* Darker background for the theme */
          color: #ffffff;
          margin: 0;
          padding: 0;
          text-align: center;
        }

        .container {
          padding: 50px 20px;
        }

        .section-title {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #ff007f; /* Pinkish color for the theme */
          text-align: center; /* Center align */
        }

        .team-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 30px;
        }

        .team-row {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 40px;
          width: 100%;
          max-width: 1200px;
        }

        .team-member {
          width: 250px;
          text-align: center;
          background: #1a1a1a; /* Slightly lighter background for cards */
          padding: 20px;
          border-radius: 12px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .team-member:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 10px rgba(255, 0, 127, 0.5); /* Pinkish shadow */
        }

        .member-photo-container {
          width: 150px;
          height: 150px;
          margin: 0 auto;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid #ff007f; /* Pinkish border */
        }

        .member-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .member-info {
          margin-top: 10px;
        }

        .member-name {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 5px;
        }

        .member-role {
          font-size: 14px;
          color: #ff007f; /* Pinkish color */
          font-weight: bold;
        }

        .social-links {
          margin-top: 10px;
        }

        .social-links a {
          display: inline-block;
          margin: 0 8px;
          font-size: 20px;
          color: #ff007f; /* Pinkish color */
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .social-links a:hover {
          color: white;
          transform: scale(1.1);
        }

        .bottom-content {
          margin-top: 50px;
          text-align: center; /* Center align */
        }

        .bottom-title {
          font-size: 24px;
          font-weight: 700;
          color: #ff007f; /* Pinkish color */
          text-align: center; /* Center align */
        }

        @media (max-width: 768px) {
          .team-row {
            flex-direction: column;
            align-items: center;
          }

          .team-member {
            width: 90%;
          }
        }
      `}</style>

      <div className="container">
        <h2 className="section-title">Developers Team</h2>

        <div className="team-container">
          {/* <div className="team-row">
            <div className="team-member">
              <div className="member-photo-container">
                <img
                  src="WhatsApp Image 2025-03-21 at 15.32.27_1b41afa2.jpg"
                  alt="Aryaman Bhatnagar"
                  className="member-photo"
                />
              </div>
              <div className="member-info">
                <h3 className="member-name">Aryaman Bhatnagar</h3>
                <p className="member-role">Developer</p>
                <div className="social-links">
                  <a
                    href="https://github.com/AryamanBhatngar"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aryaman-bhatnagar-abgwl20122003/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://www.instagram.com/bhatnagar4re"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>

            <div className="team-member">
              <div className="member-photo-container">
                <img
                  src="WhatsApp Image 2025-03-21 at 15.32.27_ce70aa96.jpg"
                  alt="Ronak Verma"
                  className="member-photo"
                />
              </div>
              <div className="member-info">
                <h3 className="member-name">Ronak Verma</h3>
                <p className="member-role">Developer</p>
                <div className="social-links">
                  <a
                    href="https://github.com/Techkidd24"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ronak-verma/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://www.instagram.com/awesome_techkidd"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>

            <div className="team-member">
              <div className="member-photo-container">
                <img
                  src="WhatsApp Image 2025-03-21 at 15.32.26_c672c12c.jpg"
                  alt="Vedant Pisal"
                  className="member-photo"
                />
              </div>
              <div className="member-info">
                <h3 className="member-name">Vedant Pisal Deshmukh</h3>
                <p className="member-role">Developer</p>
                <div className="social-links">
                  <a
                    href="https://github.com/vedant20082004"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/vedant-pisal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://www.instagram.com/_.vedant20"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div> */}

          <div className="team-row">
            <div className="team-member">
              <div className="member-photo-container">
                <img
                  src="WhatsApp Image 2025-03-21 at 15.34.21_000b1ee1.jpg"
                  alt="Atharva Bhargava"
                  className="member-photo"
                />
              </div>
              <div className="member-info">
                <h3 className="member-name">Atharva Bhargava</h3>
                <p className="member-role">Developer</p>
                <div className="social-links">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/atharva-bhargava-684617276"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://www.instagram.com/atharva__bhargava"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>

            <div className="team-member">
              <div className="member-photo-container">
                <img
                  src="WhatsApp Image 2025-03-14 at 11.26.25_42aaba9c[1].jpg"
                  alt="Kartik Sharma"
                  className="member-photo"
                />
              </div>
              <div className="member-info">
                <h3 className="member-name">Kartik Sharma</h3>
                <p className="member-role">Developer</p>
                <div className="social-links">
                  <a
                    href="https://github.com/sharmaxkartik"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sharmaxkartik"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://www.instagram.com/wickedkartik"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>

            <div className="team-member">
              <div className="member-photo-container">
                <img
                  src="WhatsApp Image 2025-03-21 at 15.34.16_9d399998.jpg"
                  alt="Kuldeep Singh Bhadouriya"
                  className="member-photo"
                />
              </div>
              <div className="member-info">
                <h3 className="member-name">Kuldeep Singh Bhadouriya</h3>
                <p className="member-role">Developer</p>
                <div className="social-links">
                  <a
                    href="https://github.com/Kuldeep-bhadouriya"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/kuldeep-singh-bhadouriya-68a748311"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://www.instagram.com/wtf.kuldeepz"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-content">
          <h2 className="bottom-title">Turning Chaos Into Code Since 2022</h2>
        </div>
      </div>
    </>
  );
};

export default DeveloperTeam;
