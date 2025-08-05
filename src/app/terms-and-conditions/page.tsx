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
                Terms and <span>conditions</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <main id="main">
        <section className="section">
          <div className="container">
            <p>
              Welcome to TechBolted! By accessing or using our website and
              services, you agree to the following Terms and Conditions. Please
              read them carefully.
            </p>
            <h3>
              <strong>1. Use of Our Services</strong>
            </h3>
            <p>
              You agree to use our services lawfully and responsibly.
              Unauthorized use, data scraping, or attempts to disrupt our
              systems are strictly prohibited.
            </p>
            <h3>
              <strong>2. Intellectual Property</strong>
            </h3>
            <p>
              All content on this website—text, graphics, logos, designs, code,
              and media—is owned or licensed by TechBolted. You may not copy,
              reuse, or distribute any content without our written permission.
            </p>
            <h3>
              <strong>3. User Submissions</strong>
            </h3>
            <p>
              Any content you voluntarily share with us—such as inquiries,
              feedback, or project information—may be used to provide services
              or improve our offerings.
            </p>
            <h3>
              <strong>4. Payments and Refunds</strong>
            </h3>
            <p>
              All payments are subject to the terms specified in our proposals
              or agreements. Refunds will be considered based on the nature of
              the project and agreed terms.
            </p>
            <h3>
              <strong>5. Limitation of Liability</strong>
            </h3>
            <p>
              TechBolted is not responsible for any indirect, incidental, or
              consequential damages resulting from your use of our services.
              Liability is limited to the amount paid for the specific service.
            </p>
            <h3>
              <strong>6. Termination</strong>
            </h3>
            <p>
              We reserve the right to suspend or terminate service access if
              these terms are violated or misuse is detected.
            </p>
            <h3>
              <strong>7. Updates to These Terms</strong>
            </h3>
            <p>
              We may revise these Terms and Conditions at any time. Continued
              use of our services implies acceptance of the updated terms.
            </p>
            <p>
              <strong>Contact Us:</strong>
              <br /> For questions or concerns about these Terms, please email
              us at <strong>info@techbolted.com</strong>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default page;
