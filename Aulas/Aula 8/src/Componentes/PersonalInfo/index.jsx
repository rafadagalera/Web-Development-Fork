function PersonalInfo({ name, email, phone }) {
  return (
      <div className="personal-info">
        <h2>Informações Pessoais</h2>
        <p>Nome: {name}</p>
        <p>Email: {email}</p>
        <p>Telefone: {phone}</p>
      </div>
  );
}

export default PersonalInfo;
