import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header/header";

class contents extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
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
                        실종 동물 이미지
                      </div>
                      <div className="contents_box_high_infobox_high_left_imgbox_text_space">
                        <button className="contents_box_high_infobox_high_left_imgbox_text_space_button">
                          사진 올리기
                        </button>
                      </div>
                    </div>
                    <div className="contents_box_high_infobox_high_left_imgbox_img">
                      {/* <img
                        class="petImg"
                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVFRYYGBgVGBUVGBgSGBESGBISGBgZGRgYGBkcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHhISHjQhISs0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDE0NDQ0NDQxNDQ0NDQ0NDQ0NP/AABEIALEBHAMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAADBAECBQAGBwj/xAA+EAABAwIDBQQIBAUEAwEAAAABAAIRAyEEEjEFQVFhcSKBkbEGEzJCcqHB8BSy0eEzUmJzgjRDwvEHI7MV/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAJhEAAgICAgEDBAMAAAAAAAAAAAECERIhAzFBEyJRBDJhoTNxgf/aAAwDAQACEQMRAD8A+fPQHU5TAeCrhqwToBX8OFLWwUxIQ3p5NgWBRWM3oLSoqYiFFNjscCq+hISAxJlaWGrJ7iSJnDEFMMaAm6gssrE1oKLcgQy58b1QCUg6qSnsNVEXRVDDFoQ3MRH1GofrQShdAMUnjeiuASgvopIcFm0UMBEL0o2sp9aVDQwwemaL5StMEp6kyFEikOUk3TZKSpvTVJ6wkUOU7JtjgUgKqKyqs2mUjRamqRWfRenqLljJFoaYUZj0rmRWBRQMfpXTdNqRouTtN63gZSGgFwKqHKQuyDMmXVmqikFdcZCCkqJUAqZWuQj83sYQjh24pepWgIVNyloBoMUvBC7D3Tj6YhTQjKc8qInVFri9l1NsqkkM1NgbLFZ+UkANBe9zphrBqf23r09bYWEe3/1Vix2gFWIce64B70LZeC9Xhogh9aHPu2RTF2NM6T7UdFbD4VgeC6wF7uDrd2iyk9nRDiTWzCxNF9NxY8Frm6g8NxHEHcRYrHxVKTK+tv2hgwxoqZX9mzAyXCZmIEXk+KQPofQqse6iHjMDkFQRkOo5x+qIySZL4Wuj5S1gTFB25e0p/wDjvFG+QTO8iOsz3LQwX/j51Ih9e7BEtbq48DwHNatashRbdGx6E7NwxwzDXoU3PcHHM5ozFuc5Z8PktjHbD2ZGR9FgLyYLey6SZkEX17l5d+LfTf2jkbaSA52Rg0AaFvbObRqHOH5yRa0HvBAhTB2mbS40j5htvZxw+IfSaS5rD2TvLCAWzzgpMOO9eq9J6c4p8iIyN8GBYmIpBZOSujFtXRnsporaSIxl0y2EmKytCnCK8q7YURJWUl5LR1BP02odOmmGMWLexnBiJTR2UpCIKEKZMqLC0GJymISbHQm2VZWEjRDLU0xJscjses7BjTHJljki1yPTcrTM2jQY9FDkowozSuiEzNoYDl2ZDDlZq6YzJLSplcolaZhR+c6tJDYITHrAhkyV1LrYpO2FovTL3mEsxhRKj7KOxMFkupc0BSziqVXymkwDs2jUDQwO7I0kAwOE8FrNxTqtMlsMczKHhgAzyTDhN+Uclh0WStfZD8r8kDt9gE+673decKZLRpCTvZ6n0H2cM+d8vP8Ak4gdNAF9MpljAMohpsP6TwXkMFWZhaOeo8NIEkzp46lZOG9LPXVHMZmAIludpYSdxAISjpWbNW6PpD8TIcGm4BcI5ghvzhc+s02dfTs81iYAPcC4ab+6AB0/VY21Nt+pJeTvMTvvH0VylUUyVFWaXpJsfMwlkt45T7vMEHxleW2O3I91OXCe/TQxK9fszaTMVQLmPa+QQQ06HuXhNq4ksc4udD2GGki750uDciPJYytS15NFL2vIp6RVQK5gz2GSYiXZQL89FiYitKSdijJJJJJkkmSTzVBWLlS4t2zkk7dhxUVX4pCdUS733VSigRoUa8ptjyEjhGBOkQueb8FIdpYhPYZ4JWGyom6FSFhKJR6RtUQqOrjRY34vcrU6pKzxZSRr5wUekkaA5pymYWMkaIdbKltRUD1DRdZOJaHqb5TlELOplN0qsIJkjSaq50FtVQXrSMjPEba9Fa5JscjNetIzIcRnMolANRR6xV6osT88uV6DoRq9OEpeV7PZmN55Kq4ypo01ZtK6VCsKxlkUUQr0mQpqusqAERGi5jyHtI1DmkdQbKGAkpllC/8A2lVjPpG2qLKjXMe2Q7eBMDlZZvo/6HnPnGZ1xcz2RvPI9eC9VsWgajWPMCzTAiSCAddYXpMRiWUWF5hrWCToAs4RbNpSS/sphtnhjct76zHLh0XiPTH0YdUlzQRYxl3GZjzWw30zouf2Xt5AvF+h0XocLjmVmZmkEHmLHeLLaUdEKTR809FNleoc57nnO+A7tHtEcRAkrC9NJ/EOG5oETMmRJJ+XgvpW3MIGHM0Rmj2TE3i40PVfLNsVc9Z79xccs/yiw+QCxjbk7L5GsUkefe1VYCn6lNByLUwFHyFRjU46nK5lBZtDQXDGEy98pcNhFa5YSjuy0yrNVo0TZJsYmaaykh2EcQi4Z90AsKLRpFRJaKTNzDtlMPsErhH8U1UOay5pJ2WpEMem6b7LOFkVtRRKJaZptemKaxxUKdw2JWUkyqNIGFbMgsqSiFSmTQw1ylr0qHqWPVZCxGsy6UNrlHrEZCxPkVTCSgHAcl6EUlIoCV665jkMNuEhSzCmVvuwwUNwoWi5kKzJbRXPw8rZGGCq6in66oRitoQVqbEwJq1WMAFyBcZh3q/4cL6B6DbKayn64t7TpAJ0yg6gdyqHJk6KNhuHNBrWi5DYIba4/ZYfpDjG1sPUpuMFwLSN/cvSY95LSRrBXl8XhWPZDmh0+IPEHvVyk4vRa2fHP/z358gbys6x5yV9q9DWNw+EY3MCTcyZudYleMq+izS+c74J0zH74L0eB2eGtDZPQucfNJcl6Q6PRYl3rGPc33GOcAIkujQSvj+Kb2jA3ndHyX23Z2Ea1mWLEXi0k6wvnPpPsynTrllMEACTmJMkqn7VZEmeSFIon4daIwquKSzfKiDMZg1Jw0LWZSUVaFkvUQGK+mup0Fo/h0WnhVLmirE6OGB7k0zDDgm6VCDYIrKfJYSaKTAU8JKZpYWEzSajxZYuQWJOpwrNerV0uAUqLiwrrqzGKaTUy0LORopAhTV2NViiMas2jRSG8NZMOck2VIVm1JUuIWMNCI1iE16Ya9RQ7JldCG4qPWIoDxhYuhHySrMprrbOEq0KzWyVL6avRajJknerVHU0y4KrxZNy8DoNsfY7q7wyYbq4/wBO+F9Lc1rGBjBAaA0AbgF5v0MYMj37y7L3DcF6B9QL0eCNRv5KQnWqarLxNGJOidxBv4d5QMSA92X+XzAWslZSMGuztgyTG4bhxWzs1oJE7uKl2Ea36/omcIwRGiUY0xtmnQM9Ej6TbO9ZSLmgF7BwuWjmmqNTzKae60clo1aohnylrFb1SdxVANqPb/K5/gCSB4KTT3fp0XmS0yBIU1Pq5TQp/PpxVmM+nlP0WbkxoTGHCsKXJNsZ9+H6rnD7t+ijN0MinT7Nuc66845R81FRgn74n6QiMZy8uKnJ92Rk2gANarwiBv04cJ+iu1lv+uAP1SGKuYu9SmRTVsiWRSYpkhcJTXq1wpqMikwTGFGLEZjFcNUuRViTmFSxpCddTVW00nIpSB3VmPIRMiq5iVlZFDUKr6xTlXerRY8jIa2654upe5XZBC6H3SOMqGSFAbdWzwrc0mqJKgblGXcjUhdS8iUdMo9X6MMy0OrnFHrOM21+SJgKbqdBgdrEnvvCQr7RZMEmV68PbFL8FRRao85geHmdF2GoEkOG8+CWxmLhoABN9w0J0lCpbSykNJi9+Q4hUmr2VWjVrYc3JsB8+KFTa4W3klx/RDO0RlzTOaAAeElS7Edou5wOht9Cr0BoUXdycaMwWR69odDtTw3zotTCkHTRNEs8Tj2kVXzrnceO9c0ffh+ib2zhclV1rOJcOc3SrCvJ5U1N2ZkOZ8kPJ990Jhyq4WWDlQAnNQh96pprZVn0gErb2AKkjZZ7kNrESm66jKmUVyffdCs1GeBCXKLaAuWqqkOsqtKly2Mu1iIWBDc6FYOlJspMsqZoUgoTypaGmGzrg9CaFVwKVFDWdDc5UEwqEp0Oy4KtnQgV0oHZjUnZrIgMJeg8EERBFwuqVLgLsjTZzjFRlpXNdGi5xOisx4iE3FJ7JDtEiUbZzYrMmD2hrdBovlsK+z3/APvYTpnb5ohFZJlH0KpTlq8zj8Nlu0AESevJepLoEJXEUg4Qe5etVlJ0eGo7Rzlw0LTBB++qpiKgmQdDqFXbuEyPcWWO/msVuKOhWDlTplpnrGskMvE6Dg25J8gh4vH+rZ4gAXIvYfKUlWxwIaWn3IHUatQNl0XVqzA67QcxG632FeW6RNnq9i4dzwHvESIBPDlzXpKdMNCXpG0cIjomDUW9UJsw/SV4DRO820XmQ5bnpM4uLW9T1WE4xZeZ9XL30QypeVfOYRBTsqBi5JR0Imk5HN0NlkQvSSpAipO5cGIbuKI2pZTimAQmyoEF9Qk2UtJSeyg7GIZMFQ1xUPKlIArjKGXQqteq55RaGMAWQkVhhq5jUnoqwbyQFamZVsS7QIQfCaQWFe/cocEJ77rqj4QMoXQVXMh1Kl1V9S6KHYu+iReIlKvBDuKIa+ocZiR+hVGVIcCdItz4roa2ZBGVHCJ3n6FNMptLZm/BAfUDnh26bcymwyGzZC3bJKNYQ0EDUeJTGywPWMzW7Tb8LoeHxE5AbAE+BKex2Fa0NcCCCB3XTjK3a8UUesq4i4APP9Fwrg21WLSxQdYC7RPhuCphcUcwngR3gXXqR5E+i1tE7f2c49tsEe8NCOfNeOq7PL+2y8zIG6F9Fc7O0gGCNRyWZ6N7LyF4cQTJ6EHgE5cakwPGUsHUjKdOeq9N6JYMkuebBvZHN29KbQrRVcI9kkAdXAL1exWRRba5BPUyo4cZSf4JsOHEHkimpCk3J1hY/pFLA1w0B3LecsYuQC22cax0QBI37wN4KyaLcziUFtbO4mbo+Gflk8bdF5PLNTnb0QMtEhUa7coY+9vnvU5e1dZSbrQFjHBDDLowIH7oWa9ll7uwBuM2UOpFFaoa/tKotN7AFkIKNTGvcERr5Oi6vDe8fNKVLaKBEEuRxhgVdpBlCpVDeEouPkCrsIppYcAFFL49rhMIQqg9yWhlWU73R8QGtaIS9SpPQfNBMucJ0TyXwOwzGzdCfTunKdVrZCpUA1SaCxDEGIQmZnnotDE0WmI1hCwYiwGu/lOqK3sdiTmXShqFP+p7RE8lX8IhMLEa2GbnFyQ4S527VTULC7KWtEAgGXAW0ChtXKS2AbgiLzofNc4G5cwgR2joYm3T/pbWQUmAJaRB0DgYdPH91Y4l3sTof3jyQa7y42EDMIGktuZHyV6DSCXPECTl/mcbQQBqOaaAsyrF4mHdIlNfiXE30IJA8PklzSbmJJmTIAJtaO1xvuVnTlBPuviBBlpBFo1Fwk6bA3GY0Niwk3lFxtZsZ2EFup/pMGxHMrzz8Vl1IJEC2k304qjajnS8OAMRF4d16wtocjjoE6PTUNowMwMnKCZ3wB9IV6W04qOuAMgdbgvL4XE+zPvCNZEXuOmWO5UqYx0agESN2h0HRdnrpIttDT64qVZmIcbmYJJ17p819AwVVhY0tMtADRvsBv8AAr5ZVe7sta6LGSCBdxMr0eyPSMU2MZkGVtje5sdfAKfpuSKbvySj21WrEkbvL7C876S4vOzK0ggEaangsbF7cc9hLczACTkMSbWbI3CTbfZZeGx8+2CRc96f1HMscV5EzVwbGXJMRbqrPeRLiLHyQMI4uvAAEnobfqmHhxOW1xMngvOadUyS/rBMRuB8QuOaJbrwSD3nMbWgXHFMYSpJjQ7p0KiSbegCB5cfPkiI2PytGUHtZRcDfKTY4xpw6pY46Y2GExzVmaTvKG57uFipFQtb2hEXHNIYSs8jLAuh16k5ZF5UPqOMHSNeQQHvOoM5YmeJKlr5AbNSG6GdeoUMqX4SrVcRDBmFtZiCEnVqzEfuENJVQDOIBc7lAb1Kv6oNIbpO/khGoIEbpJ52lC9eSMzvhHeiToEzSa5uUCN5HehGnMt3oDqhERv+XP5LqdftmToJnjuCHIYPJBidN6Mx3YJ3X8YslX5nGQbAx1jVUqOtAPMg7uPmknsAjsQ4AkakQOUo/ruzDRZo+fErPyPy5RpOpgCDpquqVXgQNGzI4zxVLoAsEmeQPWVHrYtKhj9S0TLRF9DEXQajCDBueKaS8DsXw7YzdnNEElpAhxka9/yKNTpEtcSCC4A9qRbUG/HWeaawdEB4GoIAm0ZXCPouoveyGPGdjQRld7x+7LpjFSjvQkrMxmGzPlsOLYuTIDjI5A6b+fJNfhXu0b2wSC/Mx43ROUkjXwRmUGgueXN19m4EQ0dm/wAe7cqvpGWEiA42zA9qZIykDep6bTQmqFacatkwOGhnh4orzkDg0EOdlLnQCAdAN8funmAE3Eu/qkcbxvS1RntB7wHE5pkQOZnofBZKSUmkBlVSSSCILSMwAiZ0tvJj5qtYFpc0Hstgl2kwbA8IBmOJK1KmGMNl5e1l3P8AddFzroN081j1ajpcSCDBBa7dchru8gT1XTGroAgGSm2BJe6QYmGg7uH7JZ7ybxJtpw+48UfF0y6mHAGW5GgNmajnQYj4ilqLXkF4nQtJGjYcBr138kPv9AMZBDdZMySLgzy4ItCdBHfw3nogsowwHQgGJ4k2UYZvagPkESbPIgWPanj1QlasC5rScrHRDpAMFutxymN6PVw+Qui4u4gWLRMTf70U0GU87mgOzEOABLYdEOkCOQOqdxmDc17XNIh7STmzWAHvRusfFKTtAWw2KD+ybBzHO3G4bOo0s3emcTXMAgg2AFljNw4Bexji2QWtJFwHgCDaw7R6J+jQAY1+b3jDQRBI9oCee7cVDinEA7xZhG+Q8GwH7WKdZWAADQDnuNIad48Vj4atJIOjhHIGZlPUnPkQBIIA3DSRMcjuUOCaAe9XMZoJm+onouxFOIkGSD38B8kvXxYBtIywS6LuNtOCszESYdfUROknsnX7lSklqXYmUJcQDMR7uh5JrKXwCAPZ1960pGk90OblIaGyHGZmZhMVZDA4b4EyCYaBYDhzSVCOw9HOXDQF1+TWn9ZR62FGYhoJYwtN7ZtwnklDUIHxaEcQi0K73NIFib3GWeMndp80La2UTXYDZxLibkWaA1undoj7NFIlzXNGkgiQ4TxPDuS7HsziZvaNbzF4vHRUxLAx2VnaLnQ4zZnEc4SVp2gGcbhwyLjfoLRwPNLtLHGBYNMzGpgb+qarXDDNh2oN5MHf4rPe+CDuB+GXEwDfrqm6fYFcQWsJdm7QHZAvFjAvqd6FRrSG5tXSSdDvyjz8Vd9OSbA7pPuzcnw+qzsXiGkixaGnszvAEdwU42A7UxDQ6BF7mZ00JStWqDN7XIy79NTKWrUDcuJy2dYSTwt36Eozgxrc5Y8gGJlthaXRGmm/emopAdVdmAjUdqOUEwO+B3pp2JA7BOYunQaOj9UAMDX5JIyOkTB5a8ND3JKSw5zcME/G+YAnhZPFPQxqjissgHeOSIXh14ndPGN6z2uzFwMQHajUg3aAOdlNSXGfZ5Cbdear015A9NgvYd/h+dJVfbZ1d5rly6o/axxF2/7nxuWnV/gs6s8qq5co+QFMN7Y6u/OUtt7f8J/I9cuXLD+Unwa2G9l3wN8l57G/xGf2n/mC5cu1CH8P/t/3af5mrJwH+nb/AHD5hcuULv8A0fgthf4Tvid5uUbK1d1/4uXLk30xeA1D2x8b/JaeM9ju/wCTVy5Q+2ACl/Fd/bP52pnan8Wj/b+pXLkP7RAsJ7FPrV82LT2f7nxv8nLlyPgZT0h93/DzCXb7R+H6rlyz5PuGO4n2B1b5obvc/wAfylcuUEhP9p/Vv5wg1dT8LvIrlyGMUqf6gfCz6JzBfw2/e9y5cn4GG9xnwv8AqlsToOrPouXJeGAJ3sv+A+QWZiP4o7vyLlyEBNHVvd+ZyaxHsU/8/JcuSfYMjFe274T9FmYj2H9foFy5VHsEWo/8R/8AJDoe91H5Wrly2Qz/2Q=="
                      /> */}
                      <div className="contents_box_high_infobox_high_left_imgbox_img_center">
                        <span className="contents_box_high_infobox_high_left_imgbox_img_text">
                          이미지를 등록해 주세요
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="contents_box_high_infobox_high_left_tagbox">
                    <div className="content_lost_map">
                      <Link to={"/map"}>
                        <div className="contents_lost_map_div">
                          실종위치 등록 (Click me)
                        </div>
                      </Link>
                    </div>
                    <div className="contents_tag">
                      #Tags
                      <input
                        type="text"
                        className="inputbox_default"
                        id="tags_inputbox"
                        placeholder="#Tags"
                      ></input>
                    </div>
                    <div className="contents_box_low_describe">
                      피드 내용
                      <input
                        type="text"
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
                    <input className="contents_input"
                    ></input>
                  </div>
                  <div className="contents_box_high_infobox_high_middle_infobox">
                    <span className="contents_text">성별</span>
                    <input className="contents_input"
                    ></input>
                  </div>
                  <div className="contents_box_high_infobox_high_middle_infobox">
                    <span className="contents_text">나이</span>
                    <input className="contents_input"
                    ></input>
                  </div>
                  <div className="contents_box_high_infobox_high_middle_infobox">
                    <span className="contents_text">종류</span>
                    <input className="contents_input"
                    ></input>
                  </div>
                  <div className="contents_box_high_infobox_high_middle_infobox">
                    <span className="contents_text">잃어버린 위치</span>
                    <select className="contents_dropdown">
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
                    <input className="contents_input"
                    ></input>
                  </div>
                </div>
                <div className="contents_box_high_infobox_high_right"></div>
              </div>
              <div className="contents_box_high_infobox_low">
                <div className="contents_box_high_infobox_low_button">
                  <button 
                  className="contents_box_pushBtn"
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
