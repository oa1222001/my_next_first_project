import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/max.png"
          alt="An image showing Max"
          width={250}
          height={300}
        />
      </div>
      <h1>{`Hi, I'm Omar`}</h1>
      <p>I blog about Anything</p>
    </section>
  );
}

export default Hero;
