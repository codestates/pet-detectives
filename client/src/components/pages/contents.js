import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header/header";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

class contents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      description: "",
      pet_name: "",
      pet_sex: "",
      pet_age: "",
      pet_category: "",
      pet_lost_date: "",
      pet_lost_region: 1,
      is_found: "false",
      startDate: "",
      imagefile: "",
      districtNum: "",
    };
    this.inputHandler = this.inputHandler.bind(this);
    this.contentsRequestHandler = this.contentsRequestHandler.bind(this);
  }

  getReaction() {
    console.log(this.state.image);
    console.log(this.state.description);
    console.log(this.state.pet_name);
    console.log(this.state.pet_sex);
    console.log(this.state.pet_age);
    console.log(this.state.pet_category);
    console.log(this.state.pet_lost_date);
    console.log(this.state.pet_lost_region);
    console.log(this.state.is_found);
    console.log(this.state.districtNum);
    console.log(localStorage.getItem("accessToken"));
  }

  componentDidUpdate() {
    this.getReaction();
  }
  compute() {
    if (this.state.districtNum === "서울") {
      this.setState({ pet_lost_region: 1 });
    }
    if (this.state.districtNum === "부산") {
      this.setState({ pet_lost_region: 2 });
    }
    if (this.state.districtNum === "대구") {
      this.setState({ pet_lost_region: 3 });
    }
    if (this.state.districtNum === "인천") {
      this.setState({ pet_lost_region: 4 });
    }
    if (this.state.districtNum === "광주") {
      this.setState({ pet_lost_region: 5 });
    }
    if (this.state.districtNum === "대전") {
      this.setState({ pet_lost_region: 6 });
    }
    if (this.state.districtNum === "울산") {
      this.setState({ pet_lost_region: 7 });
    }
    if (this.state.districtNum === "세종") {
      this.setState({ pet_lost_region: 8 });
    }
    if (this.state.districtNum === "경기") {
      this.setState({ pet_lost_region: 9 });
    }
    if (this.state.districtNum === "강원") {
      this.setState({ pet_lost_region: 10 });
    }
    if (this.state.districtNum === "충북") {
      this.setState({ pet_lost_region: 11 });
    }
    if (this.state.districtNum === "충남") {
      this.setState({ pet_lost_region: 12 });
    }
    if (this.state.districtNum === "전북") {
      this.setState({ pet_lost_region: 13 });
    }
    if (this.state.districtNum === "전남") {
      this.setState({ pet_lost_region: 14 });
    }
    if (this.state.districtNum === "경북") {
      this.setState({ pet_lost_region: 15 });
    }
    if (this.state.districtNum === "경남") {
      this.setState({ pet_lost_region: 16 });
    }
    if (this.state.districtNum === "제주") {
      this.setState({ pet_lost_region: 17 });
    }
  }

  saveFileImage = (e) => {
    this.setState({
      imagefile: URL.createObjectURL(e.target.files[0]),
      image: URL.createObjectURL(e.target.files[0]),
    });
  };

  deleteFileImage = () => {
    URL.revokeObjectURL(this.state.imagefile);
    this.setState({ imagefile: "", image: "" });
  };

  inputHandler(e) {
    console.log("imInput");
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  }
  contentsRequestHandler() {
    axios
      .post(
        "http://ec2-52-79-201-60.ap-northeast-2.compute.amazonaws.com:8080/pet/petregister",
        {
          withCredentials: true,
          image: this.state.image,
          description: this.state.description,
          pet_name: this.state.pet_name,
          pet_sex: this.state.pet_sex,
          pet_age: this.state.pet_age,
          pet_category: this.state.pet_category,
          pet_lost_date: this.state.pet_lost_date,
          pet_lost_region: this.state.pet_lost_region,
          is_found: this.state.is_found,
        },
        {
          headers: {
            authorization: localStorage.getItem("accessToken"),
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log("im good", res);
        console.log(res.data.data);
        // window.location.href = "/main";
      })
      .catch((err) => {
        console.log(err);
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
                        &nbsp;&nbsp;&nbsp;실 종&nbsp;&nbsp;동 물&nbsp;&nbsp; 이
                        미 지
                      </div>
                      <div className="contents_box_high_infobox_high_left_imgbox_text_space">
                        <label
                          for="upload"
                          className="contents_box_high_infobox_high_left_imgbox_text_space_button1"
                        >
                          사진 올리기
                        </label>
                      </div>
                      <div className="contents_box_high_infobox_high_left_imgbox_text_space">
                        <div
                          className="contents_box_high_infobox_high_left_imgbox_text_space_button2"
                          onClick={this.deleteFileImage}
                        >
                          사진 삭제
                        </div>
                      </div>
                    </div>
                    <div className="contents_box_high_infobox_high_left_imgbox_img">
                      <div className="contents_box_high_infobox_high_left_imgbox_img_center">
                        {this.state.imagefile && (
                          <img
                            className="uploaded_img"
                            alt="sample"
                            src={this.state.imagefile}
                            style={{ margin: "auto" }}
                          />
                        )}
                        <input
                          type="file"
                          accept="img/*"
                          id="upload"
                          className="upload"
                          onChange={this.saveFileImage}
                        />
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
                      onChange={(e) => {
                        this.inputHandler(e);
                        this.compute();
                      }}
                      value={this.state.districtNum}
                      name="districtNum"
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
                      name="pet_lost_date"
                    >
                      <DatePicker
                        className="date_picker"
                        selected={this.state.startDate}
                        onChange={(date) =>
                          this.setState({
                            startDate: date,
                            pet_lost_date: date,
                          })
                        }
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
