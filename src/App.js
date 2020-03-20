import React, { useState } from "react";
import styled from "styled-components";

const Contenedor = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const Nav = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const ContenedorCentrado = styled.div`
  display: flex;
  list-style: none;
  justify-content: space-around;
  align-items: center;
`;

const Icon = styled.li`
  display: inline-block;

  text-align: center;
  margin: 0 10px;
  i {
    font-size: 24px;
  }
`;

const ButtonGroupCenter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ButtonAddMinus = styled.button`
  width: 80px;
  height: 80px;
  margin: 20px;
`;
const CategoryItemContainer = styled.div`
  display: flex;
  align-items: center;
`;
const CategoriaItem = styled.div`
  width: 250px;
  padding: 10px;
  font-size: 20px;
  border: 2px solid lightgray;
  border-radius: 25px;
  text-align: center;
  margin: 20px 0;
`;

const NuevaIdea = styled.button`
  width: 150px;
  height: 150px;
  padding: 50px;

  border-radius: 100%;
  text-align: center;
`;

function App() {
  const cosas = [
    "Un perro",
    "Un submarino",
    "Un rinoceronte",
    "Una hormiga",
    "Un pan"
  ];
  const vestidos = [
    "con un vestido rojo",
    "con pantalon de campana",
    "con una chaqueta de cuero",
    "con una bufanda de plumas",
    "con un sombrero Costeño"
  ];
  const acciones = [
    "Bailando",
    "Escalando",
    "Rapeando",
    "Peleando",
    "Besandose"
  ];
  const lugares = [
    "En el parque",
    "En la playa",
    "En la luna",
    "En Marte",
    "En el fondo del mar"
  ];
  const accesorios = [
    "con gafas de sol",
    "con collar de perlas",
    "con un lazo en el pelo",
    "con un anillo de cristal",
    "con un reloj de pared"
  ];

  const [cosa, guardarCosa] = useState("¿Que es?");
  const [cosaAnterior, guardarCosaAnterior] = useState(cosa);

  const [vestido, guardarVestido] = useState("¿Que trae puesto?");
  const [vestidoAnterior, guardarVestidoAnterior] = useState(vestido);

  const [accion, guardarAccion] = useState("¿Que hace?");
  const [accionAnterior, guardarAccionAnterior] = useState(accion);

  const [lugar, guardarLugar] = useState("¿Dónde?");
  const [lugarAnterior, guardarLugarAnterior] = useState(lugar);

  const [accesorio, guardarAccesorio] = useState("¿Accesorios?");
  const [accesorioAnterior, guardarAccesorioAnterior] = useState(accesorio);

  //COSA

  function nuevaCosa() {
    guardarCosaAnterior(cosa);
    let nuevaCosaArray = cosas[Math.floor(Math.random() * cosas.length)];
    guardarCosa(nuevaCosaArray);
  }

  function viejaCosa() {
    guardarCosa(cosaAnterior);
  }

  //VESTIDO

  function nuevoVestido() {
    guardarVestidoAnterior(vestido);
    let nuevoVestidoArray =
      vestidos[Math.floor(Math.random() * vestidos.length)];
    guardarVestido(nuevoVestidoArray);
  }

  function viejoVestido() {
    guardarVestido(vestidoAnterior);
  }

  //ACCION

  function nuevaAccion() {
    guardarAccionAnterior(accion);
    let nuevaAccionArray =
      acciones[Math.floor(Math.random() * acciones.length)];
    guardarAccion(nuevaAccionArray);
  }

  function viejaAccion() {
    guardarAccion(accionAnterior);
  }

  //LUGAR

  function nuevoLugar() {
    guardarLugarAnterior(lugar);
    let nuevoLugarArray = lugares[Math.floor(Math.random() * lugares.length)];
    guardarLugar(nuevoLugarArray);
  }

  function viejoLugar() {
    guardarLugar(lugarAnterior);
  }

  //ACCESORIO

  function nuevoAccesorio() {
    guardarAccesorioAnterior(accesorio);
    let nuevoAccesorioArray =
      accesorios[Math.floor(Math.random() * accesorios.length)];
    guardarAccesorio(nuevoAccesorioArray);
  }

  function viejoAccesorio() {
    guardarAccesorio(accesorioAnterior);
  }

  return (
    <Contenedor>
      <header>
        <Nav>
          <Icon>
            <i className="fa fa-info-circle"></i>
          </Icon>
          <li>
            <p>Título</p>
          </li>
          <li>
            <Nav>
              <Icon>
                <i className="fa fa-heart"></i>
              </Icon>
              <Icon>
                <i className="fa fa-cog"></i>
              </Icon>
            </Nav>
          </li>
        </Nav>
      </header>
      <ButtonGroupCenter>
        <div>
          <ButtonAddMinus>-</ButtonAddMinus>
          <ButtonAddMinus>+</ButtonAddMinus>
        </div>
      </ButtonGroupCenter>
      <section>
        <ContenedorCentrado>
          <Nav>
            <CategoryItemContainer>
              <Icon onClick={() => viejaCosa()}>
                <i className="fa fa-chevron-left"></i>
              </Icon>

              <CategoriaItem>{cosa}</CategoriaItem>
              <Icon onClick={() => nuevaCosa()}>
                <i className="fa fa-chevron-right"></i>
              </Icon>
            </CategoryItemContainer>
            <CategoryItemContainer>
              <Icon onClick={() => viejoVestido()}>
                <i className="fa fa-chevron-left"></i>
              </Icon>
              <CategoriaItem>{vestido}</CategoriaItem>
              <Icon onClick={() => nuevoVestido()}>
                <i className="fa fa-chevron-right"></i>
              </Icon>
            </CategoryItemContainer>
            <CategoryItemContainer>
              <Icon onClick={() => viejaAccion()}>
                <i className="fa fa-chevron-left"></i>
              </Icon>
              <CategoriaItem>{accion}</CategoriaItem>
              <Icon onClick={() => nuevaAccion()}>
                <i className="fa fa-chevron-right"></i>
              </Icon>
            </CategoryItemContainer>
            <CategoryItemContainer>
              <Icon onClick={() => viejoLugar()}>
                <i className="fa fa-chevron-left"></i>
              </Icon>
              <CategoriaItem>{lugar}</CategoriaItem>
              <Icon onClick={() => nuevoLugar()}>
                <i className="fa fa-chevron-right"></i>
              </Icon>
            </CategoryItemContainer>
            <CategoryItemContainer>
              <Icon onClick={() => viejoAccesorio()}>
                <i className="fa fa-chevron-left"></i>
              </Icon>
              <CategoriaItem>{accesorio}</CategoriaItem>
              <Icon onClick={() => nuevoAccesorio()}>
                <i className="fa fa-chevron-right"></i>
              </Icon>
            </CategoryItemContainer>
          </Nav>
        </ContenedorCentrado>
      </section>
      <footer>
        <Nav>
          <Icon>
            <i className="fa fa-heart"></i>
          </Icon>
          <li>
            <NuevaIdea>Nueva idea</NuevaIdea>
          </li>
          <li>compatir</li>
        </Nav>
      </footer>
    </Contenedor>
  );
}

export default App;
