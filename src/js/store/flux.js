const baseURL = "https://www.swapi.tech/api/";
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      character: null,

      characters: [],
      favorites: [],
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      getInfoDetails: (id,endpoint) => {
        fetch(`${baseURL}${endpoint}/${id}`)
          .then((response) => response.json())
          .then((data) => setStore({ details: data.result }))
          .catch((err) => console.log(err));
      },
      getInfo: async() => {
        const p1 = fetch(baseURL + 'people/');
        const p2 = fetch(baseURL + 'planets/');
        const p3 = fetch(baseURL + 'vehicles/');
		let [people,planets,vehicles] = await Promise.all([p1,p2,p3])
		if(people.ok){
			let body = await people.json()
			setStore({characters: body.results})
		}
		if(planets.ok){
			let body = await planets.json()
			setStore({planets: body.results})
		}
		if(vehicles.ok){
			let body = await vehicles.json()
			setStore({vehicles: body.results})
		}
        //fetch(baseURL + 'people/').then(response => response.json()).then(data => setStore({characters: data.results})).catch(err => console.log(err))
      },
      
      addToFavorite: (name,url) =>{
        let store = getStore()
        const favs = [...store.favorites, {favName: name, url:url}];
        setStore({favorites:favs})
        
      },
      removeFavorite:(position) =>{
        let store = getStore()
        const newFav = store.favorites.filter((fav,index) => index !== position);
        setStore({favorites:newFav})
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
