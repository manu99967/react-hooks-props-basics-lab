// JavaScript
import Links from "./Links";
function About({ id, bio, links }) {
  return (
    <div id={id}>
      {bio && bio.trim() !== "" ? <p>{bio}</p> : null}
      <Links github={links.github} linkedin={links.linkedin} />
    </div>
  );
}
export default About;
