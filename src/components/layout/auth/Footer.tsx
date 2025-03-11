import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-8 mt-auto">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-600">
            Copyright © {new Date().getFullYear()} Umazing.
          </div>

          <div className="text-sm text-gray-500">
            <ul className="flex flex-wrap gap-1 items-center">
              <li>
                <a href="#" className="">
                  All Rights Reserved
                </a>
              </li>
              <div>|</div>
              <li>
                <a href="#" className="text-primary underline">
                  Terms and Conditions
                </a>
              </li>
              <div>|</div>
              <li>
                <a href="#" className="text-primary underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
