import React, { useRef, useState, FormEvent } from "react";
import { Slide } from "react-awesome-reveal";
import "./Contact.css";
import Success from "../success/Success";
import Loading from "../loading/Loading";

const Contact: React.FC = () => {
  const [sent, setSent] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const inputRef: any = useRef<HTMLFormElement>(null);
  const serviceId: string | undefined = process.env.REACT_APP_MY_SERVICE;
  const templateId: string | undefined = process.env.REACT_APP_MY_TEMPLATE;
  const publicKey: string | undefined = process.env.REACT_APP_MY_PUBLIC_KEY;

  const method: string = "POST";
  const url: string = "https://api.emailjs.com/api/v1.0/email/send";

  // create an async function to send the email
  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },

        body:
          JSON.stringify({
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            template_params: {
              name: inputRef.current.name.value,
              email: inputRef.current.email.value,
              project: inputRef.current.project.value,
            },
          }) || undefined,
      });
      if (response.status === 200) {
        setSent(true);
        inputRef.current.reset();
      } else {
        setSent(false);
      }
      setSent(true);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <section className="contact section" id="contact">
      <Success sent={sent} setSent={setSent} />
      {loading && <Loading />}
      <Slide direction="left" triggerOnce>
        <h2 className="section__title">Get in touch</h2>
      </Slide>
      <Slide direction="right" triggerOnce>
        <span className="section__subtitle">Contact me</span>
      </Slide>

      <div className="contact__container container grid">
        {/* CONTENT 1 */}
        <Slide direction="left" triggerOnce>
          <div className="contact__content">
           
            {/* CARD 1 */}
            <div className="contact__info">
              <div className="contact__card">
                <i className="bx bx-mail-send conact__card-icon"></i>
                <h3 className="conact__card-title">Email</h3>
                <span className="contact__card-data">
                    haozhen.shen@gmail.com
                </span>
                <a
                  href="mailto:haozhen.shen@gmail.com"
                  target="_blank"
                  className="contact__button"
                  rel="noreferrer"
                >
                  Write me{" "}
                  <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                </a>
              </div>
             
            </div>
          </div>
        </Slide>
        
      </div>
    </section>
  );
};

export default Contact;
