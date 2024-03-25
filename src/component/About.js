import TextReveal from "../Anim/TextReveal";
import ImageReveal from "../Anim/ImageReveal";
import HeadReveal from "../Anim/HeadReveal";

const About = () => {
  return (
    <section className="aboutPage">
      <div className="aboutPageWrapper setWidth">
        <div className="flex about">
          <div className="details py-right-2">
            <TextReveal>
              <HeadReveal text="About us" />
            </TextReveal>
            <TextReveal>
              <p>
                Welcome to <b>Moviedise</b> your ultimate destination for all
                things movies! We are passionate cinephiles who have come
                together to create a hub where fellow movie enthusiasts can
                indulge in their love for films, from classics to the latest
                blockbusters. Our platform is designed to be your go-to source
                for comprehensive movie information, reviews, news, and much
                more.
              </p>
            </TextReveal>
          </div>
          <ImageReveal>
            <img
              src="https://images.unsplash.com/photo-1538688423619-a81d3f23454b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JvdXAlMjBvZiUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"
              alt="About us"
            />
          </ImageReveal>
        </div>
        <div
          className="flex mission"
          style={{
            flexDirection: "row-reverse",
          }}
        >
          <div className="details py-left-2">
            <TextReveal>
              <HeadReveal text="Our Mission" />
            </TextReveal>
            <TextReveal>
              <p>
                At <b>Moviedise</b>, our mission is to foster a vibrant
                community of movie lovers and provide them with a platform to
                connect, share, and celebrate their shared passion for cinema.
                We are committed to delivering accurate and up-to-date
                information about movies, actors, directors, and the cinematic
                world in general. Our aim is to be a reliable and trusted
                resource that helps you navigate the ever-evolving landscape of
                the film industry.
              </p>
            </TextReveal>
          </div>
          <ImageReveal>
            <img
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Our Mission"
            />
          </ImageReveal>
        </div>

        <div className="flex team ">
          <div className="details py-right-2">
            <TextReveal>
              <HeadReveal text="Our Team" />
            </TextReveal>
            <TextReveal>
              <p>
                Our team is comprised of dedicated individuals who eat, sleep,
                and breathe movies. From film critics and writers to tech
                wizards and designers, each member plays a crucial role in
                creating the enriching experience that is <b>Moviedise</b>. We
                are united by our love for cinema and our desire to provide you
                with a platform that celebrates the magic of the silver screen.
              </p>
            </TextReveal>
          </div>
          <ImageReveal>
            <img
              src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Out Team"
            />
          </ImageReveal>
        </div>
        <div className="flex feedback">
          <div>
            <TextReveal>
              <HeadReveal text="Get in Touch" />
            </TextReveal>
            <TextReveal>
              <p>
                We're always eager to hear from fellow movie aficionados!
                Whether you have feedback, suggestions, or just want to share
                your thoughts on a recent film, feel free to reach out to us.
                Connect with us on social media, join our forums, or drop us an
                email at <b>niteshkr8953@gmail.com</b>. Your input is invaluable
                in helping us improve and grow. Thank you for being a part of
                the Moviedise community. Let's embark on a cinematic journey
                together, one frame at a time!
              </p>
            </TextReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
