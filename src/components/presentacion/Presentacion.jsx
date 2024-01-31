import "./presentacion.scss";

export const Presentacion = ({ titulo, texto, img,infomacion }) => {
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
            <h1>{infomacion.titulo}</h1>
            <h2>
                {infomacion.texto}
            </h2>
          </span>
        </div>
        {/* <div className="divPadre">
            <div className="divHijo">Holaaa</div>
            <div className="divHijo">Pero</div>
            <div className="divHijo">Looookl</div>
        </div> */}
      </div>
    </>
  );
};
