import { NavBar, Footer } from "../components/import";
const About = () => {
  return (
    <div>
      <NavBar />
      <div className="container mx-auto p-8">
        <h1 className="text-2xl font-medium">About</h1>
        <p className="mt-4">This is the about page.</p>
        <p className="p-1 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          accusantium consequatur placeat quisquam rem, porro eius voluptas
          aspernatur nisi nesciunt impedit perspiciatis quis veritatis beatae
          saepe corrupti autem alias! Laboriosam. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Excepturi magnam quis, quibusdam, maxime
          dolorum, aperiam facilis doloremque ex dolore odit eveniet veniam?
          Consectetur architecto repudiandae qui mollitia, reprehenderit ullam
          eveniet.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
