import "./presentacion.scss";

export const Presentacion = ({ titulo, texto, img }) => {
  return (
    <>
      <div className="box">
        <div className="presentacion-titulo">
          <h1>{titulo}</h1>
        </div>
        <div className="presentacion-text">
          <span>{texto}</span>
        </div>
        <div className="presentacion-panel">
          <div className="circle">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="presentacion-infomacion">
          <span>
            <h1>Hola, soy Andres. Encantado de conocerlo.</h1>
            <h2>
              Desde mis primeros pasos en programación, me han fascinado los
              desafíos y la creación de soluciones innovadoras. Mi verdadera
              pasión reside en transformar ideas en aplicaciones estéticamente
              atractivas y funcionalmente eficientes. Con cada línea de código,
              busco la perfección, y con cada proyecto, avanzo en mi constante
              búsqueda de la excelencia en el arte de programar.
            </h2>
          </span>
        </div>
      </div>
    </>
  );
};
