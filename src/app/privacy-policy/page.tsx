import Link from "next/link";
import React from "react";

function page() {
  return (
    <div id="wrapper">
      <div className="banner">
        <div
          className="bannerHolder bgGradient"
          style={{ backgroundImage: "url(images/banner01-1.png)" }}
        >
          <div className="container" style={{ minHeight: "inherit" }}>
            <div className="col">
              <h1 className="mb-0 pt-5">
                Privacy <span>Policy</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <main id="main">
        <section className="section">
          <div className="container">
            <p>
              At TechBolted, we respect your privacy and are committed to
              protecting the personal information you share with us. This
              Privacy Policy outlines how we collect, use, disclose, and
              safeguard your data when you visit our website or use our
              services.
            </p>
            <h3>
              <strong>1. Information We Collect</strong>
            </h3>
            <p>We may collect the following types of information:</p>
            <ul>
              <li>
                <strong>Personal Information:</strong> Name, email address,
                phone number, company name, etc.
                <br />
                <br />
              </li>
              <li>
                <strong>Technical Information:</strong> IP address, browser
                type, operating system, referring URLs, and usage data.
                <br />
                <br />
              </li>
              <li>
                <strong>Cookies and Tracking:</strong> We use cookies and
                similar technologies to enhance your experience and analyze
                website traffic.
                <br />
                <br />
              </li>
            </ul>
            <h3>
              <strong>2. How We Use Your Information</strong>
            </h3>
            <p>We use the information to:</p>
            <ul>
              <li>
                Provide, operate, and maintain our services
                <br />
                <br />
              </li>
              <li>
                Improve, personalize, and expand our offerings
                <br />
                <br />
              </li>
              <li>
                Respond to inquiries and provide customer support
                <br />
                <br />
              </li>
              <li>
                Send service-related updates and occasional promotional content
                <br />
                <br />
              </li>
              <li>
                Fulfill legal and contractual obligations
                <br />
                <br />
              </li>
            </ul>
            <h3>
              <strong>3. Sharing Your Information</strong>
            </h3>
            <p>
              We do <strong>not</strong> sell your personal data. However, we
              may share your information with:
            </p>
            <ul>
              <li>
                Trusted third-party service providers for business operations
                <br />
                <br />
              </li>
              <li>
                Legal authorities when required to comply with laws or
                regulations
                <br />
                <br />
              </li>
              <li>
                Successors in the event of a merger, acquisition, or sale
                <br />
                <br />
              </li>
            </ul>
            <h3>
              <strong>4. Data Security</strong>
            </h3>
            <p>
              We implement industry-standard security measures to protect your
              information from unauthorized access, disclosure, or loss.
            </p>
            <h3>
              <strong>5. Your Rights</strong>
            </h3>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>
                Access and update your personal data
                <br />
                <br />
              </li>
              <li>
                Request deletion or restriction of your data
                <br />
                <br />
              </li>
              <li>
                Object to certain data processing activities
                <br />
                <br />
              </li>
              <li>
                Withdraw your consent at any time
                <br />
                <br />
              </li>
            </ul>
            <h3>
              <strong>6. Third-Party Links</strong>
            </h3>
            <p>
              Our website may contain links to external websites. We are not
              responsible for their privacy practices or content.
            </p>
            <h3>
              <strong>7. Changes to This Policy</strong>
            </h3>
            <p>
              We may update this Privacy Policy periodically. Please check this
              page to stay informed about how we protect your information.
            </p>
            <p>
              <strong>Contact Us:</strong>
              <br /> If you have any questions or concerns about this Privacy
              Policy, please email us at{" "}
              <Link href="mailto:info@techbolted.com">
                <strong>info@techbolted.com </strong>
              </Link>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default page;
