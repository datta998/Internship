import React from "react";
import { connect } from "react-redux";
import Page from "../Page/Page";
import { clearCustom } from "../../store/actions/custom.action";
import restartImage from "../../assets/refresh.svg";

export const CustomFinalPage = ({
  clearCustom,
  custom,
  defaultPrice,
  finalPrice,
  history
}) => {
  const handleClick = () => {
    clearCustom();
    history.push("/model-r/custom/1");
  };

  return (
    <div className="CustomFinalPage">
      <Page>
        <div className="main-content">
          <div className="image-container">
            <img src={`/assets/final-${custom[1].id}.png`} alt="Final model" />
          </div>
          <div className="final-model-details">
            <h2>
              Your <span>HEAVEN </span>
              <span className="r">RIDER</span>
            </h2>
            <div className="values-table">
              
              <hr />
              <div className="engine row">
                <span className="label">{`${custom[0].kwh} ${
                  custom[0].type
                } - ${custom[0].kwh} KWh - ${
                  custom[0].range
                } miles range`}</span>
                
              </div>
              <div className="color row">
                <span className="label">{custom[1].label}</span>
                
              </div>
              <div className="wheels row">
                <span className="label">{custom[2].label}</span>
                
              </div>
              <hr />
              
            </div>
            <button className="restart" onClick={handleClick}>
              Rebuild <img src={restartImage} alt="restart" />
            </button>
          </div>
        </div>
      </Page>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    custom: state.custom,
    defaultPrice: state.defaultPrice,
    finalPrice: state.custom.reduce(
      (acc, item) => (acc += item.price),
      state.defaultPrice
    )
  };
};

export default connect(
  mapStateToProps,
  { clearCustom }
)(CustomFinalPage);
