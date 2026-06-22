import Scene from "../three/Scene";

const Hero = () => {
  return (
    <section>
      <div>
        <h1>Frontend Developer</h1>
        <p>React | Three.js | Javascript</p>
      </div>

      <div style={{ height: "500px" }}>
        <Scene />
      </div>
    </section>
  );
};

export default Hero;
