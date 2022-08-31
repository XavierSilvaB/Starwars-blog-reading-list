import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import starWarsImg from "../../img/star_wars_img.jpg";

export const Details = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  useEffect(() => {
    actions.getInfoDetails(params.uid, params.endpoint);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img src={starWarsImg} className="img-top" alt="..." style={{width:"800", height:"600" }} />
        </div>
        <div className="col">
          <h2>
            {store.details && store.details.properties.name}
          </h2>
            <p>
              Sed quis posuere nulla. Donec vel nisl porta, volutpat ex
              ultrices, sollicitudin magna. Ut mattis, justo at ornare
              consequat, nunc erat tempus ex, et facilisis lectus metus a diam.
              Ut posuere dolor sed sapien volutpat commodo. Vestibulum placerat,
              massa eget bibendum sollicitudin, sem nulla commodo turpis, nec
              egestas ex libero eu leo. Sed viverra libero vel purus tincidunt
              efficitur. Integer elementum augue sed metus efficitur, ac viverra
              sem aliquam. Vivamus neque libero, placerat id luctus eu,
              consectetur nec ante. Nunc euismod tincidunt lacus at volutpat.
              Etiam ultricies, nulla quis vehicula bibendum, dolor augue
              eleifend nunc, quis bibendum lacus eros vitae lectus. Maecenas sit
              amet nibh vel felis posuere fermentum. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              Aliquam nec feugiat nisi, a dapibus ante. Morbi rhoncus odio quis
              tincidunt lacinia. Nulla facilisi. Mauris sollicitudin pretium
              sem, sit amet tincidunt nisl vehicula id.
            </p>{""}
			
        </div>
      </div>
	  <hr className="linea" style={{color:"red", widht:"100%", height:"5px"}}></hr>
	  <div className="row" style={{color:"red"}}>
	
		<div className="col">
			<h3>Name</h3>
			{store.details && store.details.properties.name}
		</div>
		
		<div className="col">
		<h3>{params.endpoint == "people" ? "Birth": params.endpoint == "planets" ? "Diameter": "Model"}</h3>
		{params.endpoint == "people" ? store.details && store.details.properties.birth_year : params.endpoint == "planets" ? store.details && store.details.properties.diameter : store.details && store.details.properties.model}
		</div>
		
		<div className="col">
		<h3>{params.endpoint == "people" ? "Gender": params.endpoint == "planets" ? "Gravity": "vehicle_class"}</h3>
		{params.endpoint == "people" ? store.details && store.details.properties.gender : params.endpoint == "planets" ? store.details && store.details.properties.gravity : store.details && store.details.properties.vehicle_class}

		</div>
		
		<div className="col">
		<h3>{params.endpoint == "people" ? "Height": params.endpoint == "planets" ? "Climate": "cargo_capacity"}</h3>
		{params.endpoint == "people" ? store.details && store.details.properties.height : params.endpoint == "planets" ? store.details && store.details.properties.climate : store.details && store.details.properties.cargo_capacity}

		</div>
		
		<div className="col">
		<h3>{params.endpoint == "people" ? "Skin color": params.endpoint == "planets" ? "Terrain": "manufacturer"}</h3>
		{params.endpoint == "people" ? store.details && store.details.properties.skin_color : params.endpoint == "planets" ? store.details && store.details.properties.terrain : store.details && store.details.properties.manufacturer}
		</div>
		
		<div className="col">
		<h3>{params.endpoint == "people" ? "Eye color": params.endpoint == "planets" ?"orbital_period": "length"}</h3>
		{params.endpoint == "people" ? store.details && store.details.properties.eye_color : params.endpoint == "planets" ? store.details && store.details.properties.orbital_period : store.details && store.details.properties.length}
		</div>
	  </div>
    </div>
  );
};
