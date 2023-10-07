import React from "react";
import { useInView } from "react-intersection-observer";

const options = {
  triggerOnce: true,
};

export default function Product({
  index,
  title,
  desc,
  reverse,
  bgColor,
}: {
  index: string;
  title: string;
  desc: string[];
  reverse?: boolean;
  bgColor?: string;
}) {
  const [imgref, imgInView] = useInView(options);
  const [indexRef, indexInView] = useInView(options);
  const [titleRef, titleInView] = useInView(options);
  const [descRef, descInView] = useInView(options);

  return (
    <section
      className={`product ${reverse ? "reverse" : ""}`}
      style={{
        backgroundColor: bgColor,
      }}
    >
      <div className="img-section">
        {/* <img src={img} alt={title} /> */}
        <div ref={imgref} className={`img ${imgInView ? "scale" : ""}`}></div>
      </div>

      <div className="product-info">
        <span
          ref={indexRef}
          className={`
            index ${indexInView ? "scale-up" : ""}
        `}
        >
          {index}
        </span>
        <h2 ref={titleRef} className={`title ${titleInView ? "scale-up" : ""}`}>
          {title}
        </h2>
        <p ref={descRef} className={`desc ${descInView ? "scale-up" : ""}`}>
          {desc.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      </div>
    </section>
  );
}
