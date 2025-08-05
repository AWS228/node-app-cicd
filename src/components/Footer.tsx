import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaAngleUp } from "react-icons/fa";

function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="logo">
          <Link href="/">
            <Image width={200} height={200} alt="logo" src="/images/logo.png" />
          </Link>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <h3>Quick Links</h3>
            <ul className="quick-links">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/#ContactUs">Let&apos;s Connect</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 mt-3 mt-lg-0">
            <h3>Legal</h3>
            <ul className="quick-links">
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-and-conditions">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
          {/* <!--            <div className="col-lg-4">-->
<!--                <h3>Reach Us</h3>-->
<!--                <ul className="contactList">-->
<!--                    <li>-->
<!--                        <div><b>Email:</b></div>-->
<!--                        <Link href="mailto:info@softwarealliance.dk">info@softwarealliance.dk</Link>-->
<!--                    </li>-->
<!--                    <li>-->
<!--                        <div><b>Address:</b></div>-->
<!--                        XCOMPANYADDRESSX-->
<!--                    </li>-->
<!--                </ul>-->
<!--            </div>--> */}
        </div>
        <div className="copyRight">
          © Copyright <script>document.write(new Date().getFullYear())</script>{" "}
          <Link href="/">TechBolted</Link>. All Rights Reserved
        </div>
        <Link href="#header" className="backToTop" aria-label="Back to top">
          <FaAngleUp/>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
