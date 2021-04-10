import React from 'react';
import './Spinner.css';

export default class Wheel extends React.Component {
  // const [modalShow, setModalShow] = React.useState(0);
  constructor(props) {
    // console.log(props[0])
    super(props);
    this.state = {
      selectedItem: null,
      modalShow: 0
    };
    this.selectItem = this.selectItem.bind(this);
   
  }

 
  selectItem() {
    if (this.state.selectedItem === null) {
      const selectedItem = Math.floor(Math.random() * this.props.items.length);
      console.log(`SELECETD ITEM ${selectedItem}`)
      if (this.props.onSelectItem) {
        this.props.onSelectItem(selectedItem);
        console.log(`SELECETD ITEM ${selectedItem}`)
      }
      this.setState({ selectedItem });
      console.log(`SELECETD ITEM ${selectedItem}`)
    } else {
      console.log(`SELECETD ITEM ${this.selectedItem}`)
      this.setState({ selectedItem: null });
      setTimeout(this.selectItem, 500);
    }
  
  }

  render() {
    const { selectedItem } = this.state;
    const { modalShow } = this.state;
    const { items } = this.props;
    console.log(items)

    const wheelVars = {
      '--nb-item': items.length,
      '--selected-item': selectedItem,
    };
    let spinning = selectedItem !== null ? 'spinning' : '';
    console.log(spinning)
    {
      
      if(modalShow === 1) {
        // this.setState({ modalShow: 1 });
        console.log(this.state.modalShow);
        console.log("CHECK MODAL");
       
    //  return(
    //  <IntermediateSpinnerModal content={`THIS IS MY POPUP`}
    //     show={this.state.modalShow}
    //     onHide={() =>  this.setState({ modalShow: 0 })}
    //     />
    //   // return false
    //  )
      
    }
      
    }

    
    return (
      <div className="wheel-container">
        <div className={`wheel ${spinning}`} style={wheelVars} onClick={this.selectItem}>
          {items.map((item, index) => (
            <div className="wheel-item" key={index} style={{ '--item-nb': index }}>
              <button className="btn textf"><div className="p-2">{item}</div></button>
              
            </div>
          ))}
         
        </div>
        
      </div>
    );
  }
}
