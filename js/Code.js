import {App} from "./Blueprint.js";

export default class Text extends App {
    render() {
        return (`
        <div class="nav">
        <p>
            ${this.props.text}
        </p>
        </div>
        ` );
    }
}
