"use client";
import { FormEvent, useState } from "react";
import { IoLogoWhatsapp, IoMailOutline } from "react-icons/io5";

const ContactPage = () => {
  const [processing, setProcessing] = useState(false);
  const [status, setStatus] = useState(false);
  const [fromData, setFromData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setProcessing(true);
    const response = await fetch("https://app.anindyamukherjee.in/api" + "/contact", {
      method: "POST",
      body: JSON.stringify(fromData),
    });

    // Handle response if necessary
    const data = await response.json();
    setProcessing(false);
    setStatus(true);

    setTimeout(() => {
      setStatus(false);
    }, 3000);

    // ...
  }

  return (
    <div>
      <section className="container xl:max-w-[80vw] mx-auto px-4 py-16 mt-24">
        <h3 className="text-center mb-10 md:mb-4 heading-1">Send Us your queries.</h3>

        <p className="mx-auto text-center max-w-[500px] description">Lorem ipsum dolor sit amet consectetur. Eget blandit gravida purus pharetra. Dis praesent volutpat inter</p>

        <section className="mt-12 grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-6 md:gap-8 ">
          <form onSubmit={onSubmit} className="h-[100%]">
            {status && <p className="bg-green-200 p-4 mb-6 rounded text-green-900">Message Sent</p>}
            <div className="grid gap-4 h-[100%]">
              <div className="flex flex-1 flex-col gap-2">
                <label htmlFor="name">Name</label>
                <input
                  value={fromData.name}
                  onChange={(e) =>
                    setFromData({
                      ...fromData,
                      name: e.target.value,
                    })
                  }
                  autoComplete="off"
                  className="input"
                  id="name"
                  type="text"
                  required
                />
              </div>

              <div className="flex flex-col xl:flex-row gap-4">
                <div className="flex flex-1 flex-col gap-2">
                  <label htmlFor="email">Email</label>
                  <input
                    value={fromData.email}
                    onChange={(e) =>
                      setFromData({
                        ...fromData,
                        email: e.target.value,
                      })
                    }
                    className="input "
                    autoComplete="off"
                    id="email"
                    type="text"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <label htmlFor="phone">Phone</label>
                  <input
                    value={fromData.phone}
                    onChange={(e) =>
                      setFromData({
                        ...fromData,
                        phone: e.target.value,
                      })
                    }
                    required
                    className="input"
                    autoComplete="off"
                    id="phone"
                    type="text"
                  />
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-2">
                <label htmlFor="message">Message</label>
                <textarea
                  value={fromData.message}
                  onChange={(e) =>
                    setFromData({
                      ...fromData,
                      message: e.target.value,
                    })
                  }
                  rows={5}
                  id="message"
                  autoComplete="off"
                  className="input"
                />
              </div>

              <div className="flex justify-start items-center ">
                <button disabled={processing} className="bg-transparent border border-app-primary mt-2 z-10 relative text-app-primary  px-8 py-2  active:scale-95 rounded-full disabled:opacity-50 inline-block">
                  {processing ? "Sending..." : "Send"}
                </button>
              </div>
            </div>
          </form>
          <div className="flex justify-center items-start mt-10">
            <div className="flex flex-col items-center gap-4">
              <span className="flex gap-3  text-md items-center">
                <IoMailOutline />
                <a href="mailto:anindyaartist17@gmail.com">anindyaartist17@gmail.com</a>
              </span>
              <span className="flex gap-3 text-md items-center">
                <IoLogoWhatsapp />
                <a href="tel:+919800501350">+91 98005 01350</a>
              </span>
              <a href="https://wa.me/+919800501350" className=" xl:mt-5 px-4 py-2 text-white text-sm rounded-sm bg-green-600">
                Connect via Whatsapp
              </a>
            </div>
          </div>
        </section>
        <section className="container mt-16">
          <h3 className="text-center mb-10 heading-1">FAQ</h3>

          <div className="xl:mt-16 grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-6 md:gap-8">
            <div className="flex flex-col gap-12">
              <div className="flex flex-1 flex-col gap-2">
                <p className="mx-auto max-w-[500px] description">
                  <p className="text-app-primary font-semibold mb-2">How do I purchase an original painting?</p>
                  To inquire about purchasing an original painting, sign up for our email list and contact me via WhatsApp. This way, you'll stay updated on available works and can reach out directly to discuss purchasing options.
                </p>
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <p className="mx-auto max-w-[500px] description">
                  <p className="text-app-primary font-semibold mb-2">Can I commission a painting?</p>
                  If your request aligns with the themes and style of my artwork, I ll be happy to work on commission paintings . Feel free to reach out to discuss further.
                </p>
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <p className="mx-auto max-w-[500px] description">
                  <p className="text-app-primary font-semibold mb-2">Do you ship worldwide?</p>
                  Absolutely! We ship our artwork to locations across the globe. However, please be aware that additional import taxes may apply depending on your area's customs guidelines and delivery regulations.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-12">
              <div className="flex flex-1 flex-col gap-2">
                <p className="mx-auto max-w-[500px] description">
                  <p className="text-app-primary font-semibold mb-2">How long does it take to receive a painting?</p>
                  The time-frame for receiving an original painting may vary. Generally, there is an additional processing and delivery time for original artworks. For commissioned pieces , the duration will depend on factors such as size and complexity. Rest assured, we'll work diligently to
                  provide you with a realistic estimate and keep you informed throughout the process.
                </p>
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <p className="mx-auto max-w-[500px] description">
                  <p className="text-app-primary font-semibold mb-2">Do you accept visitors at your studio?</p>
                  Absolutely! I welcome visitors to my studio with open arms. Whether you're an aspiring artist eager to learn or simply interested in exploring my artwork, feel free to get in touch with me to schedule a visit. I look forward to sharing my creative space with you!
                </p>
              </div>

              {/* <div className="flex flex-1 flex-col gap-2">
                                    <p className="mx-auto max-w-[500px] description">
                                        <p className="text-app-primary font-semibold mb-2">
                                            Lorem ipsum dolor sit amet
                                            consectetur?
                                        </p>
                                        Lorem ipsum dolor sit amet consectetur.
                                        Eget blandit gravida purus pharetra. Dis
                                        praesent volutpat inter Eget blandit
                                        gravida purus pharetra. Dis praesent
                                        volutpat inter
                                    </p>
                                </div> */}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default ContactPage;
