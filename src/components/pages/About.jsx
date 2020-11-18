import avatar from "../../images/profile.JPG";

function About() {
  return (
    <div>
      <div src={avatar} alt="profile" />
      <div>
        <h2>About Rendani</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          provident sapiente delectus quo assumenda! Rerum ipsa omnis aspernatur
          magnam libero sit, autem, consequatur exercitationem non nisi,
          explicabo maxime ullam fuga.
        </p>
      </div>
    </div>
  );
}

export default About;
