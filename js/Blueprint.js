export class App{
  constructor(props={}){
    this.props = props;
    
  }
  render() {
    return "";
  }
  animetion(animetion) {
    
  }
}
//animetion
export function animetion(){
  
}
export function mount(components, rootId) {
    const root = document.getElementById(rootId);

    if (Array.isArray(components)) {
        root.innerHTML = components.map(c => c.render()).join("");
    } else {
        root.innerHTML = components.render();
    }
}