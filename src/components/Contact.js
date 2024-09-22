import React from "react";

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p>
        If you'd like to get in touch, feel free to contact me through any of
        the following platforms:
      </p>
      <ul className="contact-list">
        <li>
          Email:{" "}
          <a href="mailto:mahimachandra18@gmail.com">
            mahimachandra18@gmail.com
          </a>
        </li>
        <li>Phone: +91-8319334120</li>
        <li>
          GitHub:{" "}
          <a
            href="https://github.com/mahima18sep"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/mahima18sep
          </a>
        </li>
        <li>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/mahima-chandra-18sep/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.linkedin.com/in/mahima-chandra-18sep/
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
