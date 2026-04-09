import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { Accounts } from "../Social Accounts/account";

const Contact = () => {

    return (
        <section
            id="contact"
            className="min-h-screen bg-[#0a0a1a] text-white px-6 py-16 md:px-20 flex flex-col items-center gap-12"
        >
            <h2 className="text-4xl font-bold text-yellow-400 mb-8 text-center">
                Contact Me
            </h2>

            <div className="flex flex-col md:flex-row gap-12 items-center justify-center w-full max-w-4xl">
                {/* Contact Info */}
                <div className="flex-1 flex flex-col gap-6 text-center md:text-left">
                    <h3 className="text-2xl font-semibold text-yellow-400">Get in Touch</h3>
                    <p className="text-white/80">
                        I’m a BCA student passionate about web development. You can reach me via email, phone, or social links below.
                    </p>

                    <div className="flex flex-col gap-4 text-white/90">
                        <div className="flex items-center justify-center md:justify-start gap-3">
                            <FaEnvelope className="text-yellow-400" />
                            <span>sagar12378089@gmail.com</span>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-3">
                            <FaPhone className="text-yellow-400" />
                            <span>+91 7453081997</span>
                        </div>
                    </div>

                    {/* Social Buttons */}
                    <div className="flex flex-col md:flex-row gap-4 mt-6 justify-center md:justify-start">
                        {/* GitHub Button */}
                        {
                        Accounts.map((acc , key) => {
                           return <a key={key}
                           href={acc.Link}
                           target="_blank"
                           className="flex items-center gap-3 bg-[#11112a] hover:bg-yellow-400 hover:text-black transition px-6 py-3 rounded-full shadow font-semibold text-lg"
                        > {acc.Name}
                              <acc.Icon size={acc.Size} color={acc.Color}/>
                            </a>
                        })
                    }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;