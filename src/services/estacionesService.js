import { estaciones } from "../constants/estaciones"
export default class estacionesService{
    constructor(){
        this.lista=[];
    }
    getAllEstaciones() {
        return this.lista=estaciones;
    }
    groupByEstado(){
        const estacionesAgrupadas = estaciones.reduce((key, estacion) => {
            //verificamos si exite el estado, si no creamos un array vacío para guardar sus datos
            if (!key[estacion.estado]) {
                key[estacion.estado] = [];
            }
            //hacemos push al estado
            key[estacion.estado].push(estacion);
            return key;
        }, {});
        return estacionesAgrupadas;
    }
    getEstados(){
        //obtenemos el listado de las estaciones sin que se repitan (se utiliza Set para ello)
        const estados = [...new Set(estaciones.map(estacion=>estacion.estado))];
        return estados;
    }
    filterByCountry(country){
        const filtro = estaciones.reduce((key, estacion) => {
            if (!key[estacion.estado] && estacion.estado === country) {
                key[estacion.estado] = [];
            }
            if(estacion.estado === country){
                key[estacion.estado].push(estacion);
            }
            return key;
        }, {});
        return filtro; 
    }
    orderByCountryName(){
        const countries=estaciones.sort((a,b)=>{
            //ordenamos por estado primero
            const comp =a.estado.localeCompare(b.estado);
            if(comp!==0){
                return comp;
            }
            //si el estado es el mismo (es decir comp=0), ordenamos por nombre
            return a.name.localeCompare(b.name);
        });
        return countries;
    }
    filterByCountryOrdered(country){
        const stations=this.orderByCountryName();
        return stations.filter((estation)=>estation.estado===country);
    }
}