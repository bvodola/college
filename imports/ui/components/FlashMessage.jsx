import React, { Component } from 'react';

class FlashMessage extends Component {
  constructor(props) {
    super(props);

    this.style = {
      flash: {
        "position":"absolute",
        "height":"1px",
        "width":"1px",
        "left":"0",
        "top":"0",
        "padding":"0px",
        "textAlign":"center",
        "zIndex":"0",
        "fontWeight":"bold",
        "fontSize":"20px",
        "fontFamily": "Arial",
        "transition":"background 0.15s ease",
        "transition":"color 0.15s ease",

        "background":"transparent",
        "color":"transparent"
      },
      flash_active: {
          "position":"absolute",
          "height":"100%",
          "width":"100%",
          "left":"0",
          "top":"0",
          "padding":"79% 0",
          "textAlign":"center",
          "zIndex":"9999",
          "fontWeight":"bold",
          "fontSize":"20px",
          "fontFamily": "Arial",
          "transition":"background 0.15s ease",
          "transition":"color 0.15s ease",

          "background":"rgba(0,0,0,0.8)",
          "color":"#fff"
      }
    }
  }

  render() {
    return(
      <div style={this.props.active ? this.style.flash_active : this.style.flash} className="flash">
        {this.props.message}
      </div>
    );
  }
}

export default FlashMessage;
