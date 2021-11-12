import React, { Component } from "react";
import { Link } from "react-router-dom";

class contents extends Component {
  render() {
    return (
      <>
        <div className="contents_box">
          <div className="contents_box_high">
            <div className="contents_box_high_space">
            
            </div>
            <div className="contents_box_high_infobox">
              <div className="contents_box_high_infobox_high">
                <div className="contents_box_high_infobox_high_left">
                  <div className="contents_box_high_infobox_high_left_imgbox">
                    펫 이미지
                    <img></img>
                  </div>
                  <div className="contents_box_high_infobox_high_left_lostloca">
                    <Link to={"/map"}><button>실종 map</button></Link>
                  </div>
                  <div className="contents_box_high_infobox_high_left_tagbox">
                    태그들
                    <input></input>
                  </div>
                </div>
                <div className="contents_box_high_infobox_high_middle">
                  <div className="contents_box_high_infobox_high_middle_infobox">
                    이름 
                    <input></input>
                  </div>
                  <div className="contents_box_high_infobox_high_middle_infobox">
                    성별
                    <input></input>
                  </div>
                  <div className="contents_box_high_infobox_high_middle_infobox">
                    나이
                    <input></input>
                  </div>
                  <div className="contents_box_high_infobox_high_middle_infobox">
                    종류
                    <input></input>
                  </div>
                  <div className="contents_box_high_infobox_high_middle_infobox">
                    잃어버린 위치
                    <input></input>
                  </div>
                  <div className="contents_box_high_infobox_high_middle_infobox">
                    실종날짜
                    <input></input>
                  </div>
                </div>
                <div className="contents_box_high_infobox_high_right">

                </div>
              </div>
              <div className="contents_box_high_infobox_low">
                <div className="contents_box_high_infobox_low_space">
                </div>
                <div className="contents_box_high_infobox_low_button">
                  <button>
                    반려동물 등록하기
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="contents_box_low">
            <div className="contents_box_low_describe">
              피드 내용
              <input></input>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default contents;
