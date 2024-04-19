function Skills({ skills }) {
  return (
    <div className="skills">
      <h2>Habilidades</h2>
      {skills.map((skill, index) => (
        <div className="skill-card" key={index}>
          <h3>{skill.name}</h3>
          <p>Nível: {skill.level}</p>
        </div>
      ))}
    </div>
  );
}

export default Skills;