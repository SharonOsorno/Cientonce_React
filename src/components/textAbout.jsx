const TextAbout = () => {
  return (

    <div>
      <article>
        <h3 className="text-right text-white text-bold">¿Quienes somos?</h3>
        <p className="text-right text-white parrafo" >Empresa dedicada a la elaboración y asesoramiento de contenido multimedia, cuyo objetivo es ofrecer un servicio de calidad de acuerdo a las exigencias del cliente.  </p>
        <div className=" row justify-content-end">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active parrafo" aria-current="page">Exigente</li>
            <li className="breadcrumb-item active parrafo" aria-current="page">Eficaz</li>
            <li className="breadcrumb-item active parrafo" aria-current="page">Flexible</li>
          </ol>
        </div>
      </article>
    </div>
  );
};
export default TextAbout;