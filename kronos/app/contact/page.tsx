import React from "react";
import ContactUs from "@/components/contact"; // '@/' points to root, adjust if needed
import Navbar from "@/components/Navbar";

const ContactPage = () => {
  return (
    <main className="">
      <Navbar />
      <ContactUs />
    </main>
  );
};

export default ContactPage;
