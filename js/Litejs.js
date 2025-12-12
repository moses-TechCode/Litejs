import {App} from "./Blueprint.js";


export default class ProductCard extends App {
    render() {
        return (`
        <div class="hero_page">
        <img src="${this.props.src}"/>
        <p> wellcome to litejs</p>
        <button> start learn</button>
        </div>
        ` );
    }
}
