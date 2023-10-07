import React from "react";
// @ts-ignore
import Product from "./Product.tsx";
import { useInView } from "react-intersection-observer";

export default function ProductSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section>
      {/* heading */}
      <div className="heading">
        <h1 ref={ref} className={inView ? "scale-up" : ""}>
          OUR FINISHES
        </h1>
      </div>

      {/* products */}
      <Product
        index="01"
        title="Glazing finish"
        desc={[
          "Glazing finish gives smooth and glossy shine like jewel to the surface of the leather. A typical finish of crocodile leather.",
          "For glazing finish, protein-based finishing agent, such as casein, is applied to the grain side of dyed leather. Then machine-polish it with a roller with a piece of agate attached to its head and apply a strong pressure on the leather, which creates a magical mirror-like gloss on the surface.",
          "e pay our utmost attention to keep the dust in the air off the leather and inspect them many times to make sure that the leather surface is free from dust. ",
        ]}
      />
      <Product
        index="01"
        title="Glazing finish"
        reverse
        desc={[
          "Glazing finish gives smooth and glossy shine like jewel to the surface of the leather. A typical finish of crocodile leather.",
          "For glazing finish, protein-based finishing agent, such as casein, is applied to the grain side of dyed leather. Then machine-polish it with a roller with a piece of agate attached to its head and apply a strong pressure on the leather, which creates a magical mirror-like gloss on the surface.",
          "e pay our utmost attention to keep the dust in the air off the leather and inspect them many times to make sure that the leather surface is free from dust. ",
        ]}
      />
      <Product
        index="01"
        title="Glazing finish"
        desc={[
          "Glazing finish gives smooth and glossy shine like jewel to the surface of the leather. A typical finish of crocodile leather.",
          "For glazing finish, protein-based finishing agent, such as casein, is applied to the grain side of dyed leather. Then machine-polish it with a roller with a piece of agate attached to its head and apply a strong pressure on the leather, which creates a magical mirror-like gloss on the surface.",
          "e pay our utmost attention to keep the dust in the air off the leather and inspect them many times to make sure that the leather surface is free from dust. ",
        ]}
      />
      <Product
        index="01"
        title="Glazing finish"
        reverse
        desc={[
          "Glazing finish gives smooth and glossy shine like jewel to the surface of the leather. A typical finish of crocodile leather.",
          "For glazing finish, protein-based finishing agent, such as casein, is applied to the grain side of dyed leather. Then machine-polish it with a roller with a piece of agate attached to its head and apply a strong pressure on the leather, which creates a magical mirror-like gloss on the surface.",
          "e pay our utmost attention to keep the dust in the air off the leather and inspect them many times to make sure that the leather surface is free from dust. ",
        ]}
      />
    </section>
  );
}
