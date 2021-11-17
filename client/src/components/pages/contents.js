import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header/header";
import axios from "axios";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { useState } from "react";

class contents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "test@test.com",
      image: "",
      description: "",
      pet_name: "",
      pet_sex: "",
      pet_age: "",
      pet_category: "",
      pet_lost_date: "",
      pet_lost_region: "서울",
      is_found: "false",
      startDate: new Date(),
      imagefile : "",
    };
    this.inputHandler = this.inputHandler.bind(this);
    this.contentsRequestHandler = this.contentsRequestHandler.bind(this);
  }
  saveFileImage = (e) => { 
    this.setState({
      imagefile : URL.createObjectURL(e.target.files[0]),
      image : URL.createObjectURL(e.target.files[0])
    })
  };

  deleteFileImage = () => { 
    URL.revokeObjectURL(this.state.imagefile)
    this.setState({imagefile : "", image: "" })
  };


  inputHandler(e) {
    console.log("imInput");
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  }
  contentsRequestHandler() {
    const {
      email,
      image,
      description,
      pet_name,
      pet_sex,
      pet_age,
      pet_category,
      pet_lost_date,
      pet_lost_region,
      is_found,
    } = this.state;
    axios
      .post("http://localhost:8080/pet/petregister", {
        email: email,
        image: image,
        description: description,
        pet_name: pet_name,
        pet_sex: pet_sex,
        pet_age: pet_age,
        pet_category: pet_category,
        pet_lost_date: pet_lost_date,
        pet_lost_region: pet_lost_region,
        is_found: is_found,
      })
      .then((res) => {
        console.log("im good", res);
        console.log(res.data.data);
        // window.location.href = "/main";
      })
      .catch((err) => {
        console.log("ImERRRRAAAARRRRRR", this.state);
      });
  }
  render() {
    return (
      <>
        <Header />
        <div className="contents_box">
          <div className="contents_box_high">
            <div className="contents_box_high_space"></div>
            <div className="contents_box_high_infobox">
              <div className="contents_box_high_infobox_high">
                <div className="contents_box_high_infobox_high_left">
                  <div className="contents_box_high_infobox_high_left_imgbox">
                    <div className="contents_box_high_infobox_high_left_imgbox_text">
                      <div className="contents_box_high_infobox_high_left_imgbox_text_main">
                      &nbsp;&nbsp;&nbsp;실 종&nbsp;&nbsp;동 물&nbsp;&nbsp; 이 미 지
                      </div>
                      <div className="contents_box_high_infobox_high_left_imgbox_text_space">
                        <label for="upload" className="contents_box_high_infobox_high_left_imgbox_text_space_button1">
                          사진 올리기
                        </label>
                      </div>
                      <div className="contents_box_high_infobox_high_left_imgbox_text_space">
                        <div 
                        className="contents_box_high_infobox_high_left_imgbox_text_space_button2"
                        onClick={this.deleteFileImage}>
                          사진 삭제
                        </div>
                      </div>
                    </div>
                    <div className="contents_box_high_infobox_high_left_imgbox_img">
                      <div className="contents_box_high_infobox_high_left_imgbox_img_center">
                      {this.state.imagefile && (<img className="uploaded_img" alt="sample" src={this.state.imagefile} style={{ margin: "auto" }} />)}
                      <input type="file" accept="img/*" id="upload" className="upload" 
                        onChange={this.saveFileImage}/>
                        <span className="contents_box_high_infobox_high_left_imgbox_img_text">
                        {!this.state.imagefile && "이미지를 등록해 주세요"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="contents_box_high_infobox_high_left_tagbox">
                    <div className="content_lost_map">
                      <Link to={"/map"} className="content_lost_map">
                        <div className="contents_lost_map_div">
                        실종위치 등록 (Click me)
                        </div>
                      </Link>
                    </div>
                    <div className="contents_tag">
                      #Tags &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <input
                        type="text"
                        className="inputbox_default"
                        id="tags_inputbox"
                        placeholder="#Tags 최소 1개이상 등록해주세요"
                      ></input>
                    </div>
                    <div className="contents_box_low_describe">
                      피드 내용 &nbsp;
                      <input
                        type="text"
                        onChange={(e) => this.inputHandler(e)}
                        value={this.state.description}
                        name="description"
                        className="inputbox_default"
                        id="text_inputbox"
                        placeholder="문구 입력 ..."
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="contents_box_high_infobox_high_middle">
                  <div className="contents_box_high_infobox_high_middle_infobox">
                    <span className="contents_text">이름</span>
                    <input
                      className="contents_input"
                      onChange={(e) => this.inputHandler(e)}
                      value={this.state.pet_name}
                      name="pet_name"
                    />
                  </div>
                  <div className="contents_box_high_infobox_high_middle_infobox">
                    <span className="contents_text">성별</span>
                    <input
                      className="contents_input"
                      onChange={(e) => this.inputHandler(e)}
                      value={this.state.pet_sex}
                      name="pet_sex"
                    />
                  </div>
                  <div className="contents_box_high_infobox_high_middle_infobox">
                    <span className="contents_text">나이</span>
                    <input
                      className="contents_input"
                      onChange={(e) => this.inputHandler(e)}
                      value={this.state.pet_age}
                      name="pet_age"
                    />
                  </div>
                  <div className="contents_box_high_infobox_high_middle_infobox">
                    <span className="contents_text">종류</span>
                    <input
                      className="contents_input"
                      onChange={(e) => this.inputHandler(e)}
                      value={this.state.pet_category}
                      name="pet_category"
                    />
                  </div>
                  <div className="contents_box_high_infobox_high_middle_infobox">
                    <span className="contents_text">잃어버린 위치</span>
                    <select
                      className="contents_dropdown"
                      onChange={(e) => this.inputHandler(e)}
                      value={this.state.pet_lost_region}
                      name="pet_lost_region"
                    >
                      <option className="contents_dropdown_list" value="서울">
                        서울
                      </option>
                      <option className="contents_dropdown_list" value="부산">
                        부산
                      </option>
                      <option className="contents_dropdown_list" value="대구">
                        대구
                      </option>
                      <option className="contents_dropdown_list" value="인천">
                        인천
                      </option>
                      <option className="contents_dropdown_list" value="광주">
                        광주
                      </option>
                      <option className="contents_dropdown_list" value="대전">
                        대전
                      </option>
                      <option className="contents_dropdown_list" value="울산">
                        울산
                      </option>
                      <option className="contents_dropdown_list" value="세종">
                        세종
                      </option>
                      <option className="contents_dropdown_list" value="경기">
                        경기
                      </option>
                      <option className="contents_dropdown_list" value="강원">
                        강원
                      </option>
                      <option className="contents_dropdown_list" value="충복">
                        충복
                      </option>
                      <option className="contents_dropdown_list" value="충남">
                        충남
                      </option>
                      <option className="contents_dropdown_list" value="전복">
                        전복
                      </option>
                      <option className="contents_dropdown_list" value="전남">
                        전남
                      </option>
                      <option className="contents_dropdown_list" value="경북">
                        경북
                      </option>
                      <option className="contents_dropdown_list" value="경남">
                        경남
                      </option>
                      <option className="contents_dropdown_list" value="제주">
                        제주
                      </option>
                    </select>
                  </div>
                  <div className="contents_box_high_infobox_high_middle_infobox">
                    <span className="contents_text">실종날짜</span>
                    <div
                      className="contents_input_date"
                      // onChange={(e) => this.inputHandler(e)}
                      // value={this.state.pet_lost_date}
                      name="pet_lost_date">
                        <DatePicker
                        className="date_picker"
                        selected={this.state.startDate} 
                        onChange={(date) => this.setState({startDate : date, pet_lost_date : date})}
                        />
                    </div>
                  </div>
                </div>
                <div className="contents_box_high_infobox_high_right"></div>
              </div>
              <div className="contents_box_high_infobox_low">
                <div className="contents_box_high_infobox_low_button">
                  <button
                    className="contents_box_pushBtn"
                    onClick={this.contentsRequestHandler}
                  >
                    반려동물 등록하기
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default contents;
