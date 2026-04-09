import React from 'react';
import { Accounts } from '../Social Accounts/account';
import dayjs from 'dayjs';

const Footer = () => {

    const year = dayjs().format("YYYY");

    return (
        <footer className="bg-slate-900 text-white py-8 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center space-y-4">

                {/* Social Links */}
                <div className="flex gap-6">
                    {
                    Accounts.map((social , key) => {
                        return (
                            <a
                                key={key}
                                href={social.Link}
                                target="_blank"
                                className="text-gray-400 hover:text-emerald-400 transition-all hover:scale-110"
                                aria-label={social.Name}
                            >
                                <social.Icon color={social.Color} size={25} />
                            </a>
                        );
                    })
                    }
                </div>

                {/* Copyright */}
                <p className="text-gray-400 text-sm">
                    © {year} Sagar. Built with ❤️ and React
                </p>
            </div>
        </footer>
    );
};

export default Footer;