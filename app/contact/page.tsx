import React from "react";

function Contact() {
  return (
    <div className="py-16 px-6 mt-10">
      <h2 className="text-2xl font-bold">Let's Connect</h2>
      <p className="mt-4 text-lg">Feel free to reach out!</p>
      <ul className="list bg-base-500 p-6 m-10 gap-2 rounded-2xl shadow">
        <li>
          Email:{" "}
          <a href="mailto:abdubadire2015@gmail.com" className="text-primary">
            abdubadire2015@gmail.com
          </a>
        </li>
        <li>
          Telegram:{" "}
          <a href="http://t.me/slfconscious" className="text-primary">
            @slfconscious
          </a>
        </li>
        <li>Phone: +251707994077</li>
      </ul>
    </div>
  );
}

export default Contact;
