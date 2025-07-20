import Home from "./Home";
import About from "./About";

const user = {
  name: "Liza",
  city: "New York",
  bio: "I made this!",
  color: "firebrick",
  links: {
    github: "https://github.com/liza",
    linkedin: "https://www.linkedin.com/in/liza/"
  }
};

function App() {
  return (
    <div>
      <nav></nav>
      <section id="home">
        <Home name={user.name} city={user.city} color={user.color} />
      </section>
      <section id="about">
        <About bio={user.bio} links={user.links} />
      </section>
    </div>
  );
}

export default App;

