import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const FirstVideo = () => {
  const videoRef = useRef(null);

  useGSAP(() => {
    gsap.set(".first-vd-wrapper", { marginTop: "-150vh", opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".first-vd-wrapper",
        start: "top top",
        end: "+=200%",
        scrub: true,
        pin: true,
      },
    });

    tl.to(".hero-section", { delay: 0.5, opacity: 0, ease: "power1.inOut" }).to(
      ".first-vd-wrapper",
      {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      }
    );

    videoRef.current.onloadedmetadata = () => {
      tl.to(
        videoRef.current,
        {
          currentTime: videoRef.current.duration,
          duration: 3,
          ease: "power1.inOut",
        },
        "<"
      );
    };
  }, []);

  return (
    <section className="first-vd-wrapper">
      <div className="h-dvh">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/output1.mp4"
          className="first-vd"
        ></video>
      </div>
    </section>
  );
};

export default FirstVideo;
