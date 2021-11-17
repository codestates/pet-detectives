import React, { Component } from "react";
import axios from "axios";
import Header from "./Header/header";
import FoundPetSideBar from "./Sidebar/fount_petsidebar";
import FoundPet from "./FoundPet/FoundPet";
import { useRef } from "react";

class found_pet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      petinfo : []
    }
  }

  upToArrow = React.createRef()

  scrollToTop = (event) => {
    this.upToArrow.current.scrollTo(0, 0);
  }

  getPet() {
    axios.get("http://localhost:8080/pet/petinfo", {
    }).then((res) => {
      this.setState({petinfo: res.data.data.slice()})
    })
  }
  
  componentDidMount() {
    this.getPet()
  }


  render() {
    const regex = /[^0-9]/g;
    return (
      <>
        <Header />
        <div className="main_box">
          <FoundPetSideBar />
          <div className="showing_lost_pet_box">
          {this.state.petinfo.map((pet) => 
            window.location.href.slice(-9) === "found_pet" && pet.is_found ?  <FoundPet petinfo={pet}/> :
            pet.is_found && pet.pet_lost_region === window.location.search.slice(-2).replace(regex, "") ?
            <FoundPet
            petinfo={pet}
            /> 
            : null
            )}
            {/* <div className="pagination_space"></div>
            <div className="footer_space"></div> */}
          </div>
          <div className="up_to_scroll">
            <div className="scroll_image_box">
              {/* <div className="scroll_image_minibox_space">맨위로</div>
              <div className="scroll_image_minibox">
                <img className="backtotopArrow_image"
                 src="image/backtotop2.png"
                 onClick={this.scrollToTop}></img>
              </div> */}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default found_pet;
