import Carrito from "../Assets/images.png"
import  "../CartWidget/CartWidget.css"

export default function CartWidget() {
    return (
      <div className="container-widget">
        <div className="widget">
          <img src={Carrito} alt="" />
        </div>
      </div>
    );
  }