import React from "react";
import { FaTimes } from "react-icons/fa";
import styles from "../styles/Home.module.css";

const FilterModal = (props) => {
  const closeFrm = (e) => {
    props.closeFrm && props.closeFrm(e);
  };

  if (props.show) {
    return null;
  }
  return (
    <div className={styles.filterContainer}>
      <aside className={styles.filterModal}>
        <FaTimes
          style={{ float: "right", fontSize: "1.5rem" }}
          onClick={(e) => {
            closeFrm(e);
          }}
        />
        <div>
          <h4>Filter</h4>
          <ul>
            <li>
              <input type="checkbox" />
              People
            </li>
            <li>
              <input type="checkbox" />
              Premium
            </li>
            <li>
              <input type="checkbox" />
              Pets
            </li>
            <li>
              <input type="checkbox" />
              Food
            </li>
            <li>
              <input type="checkbox" />
              Landmarks
            </li>
            <li>
              <input type="checkbox" />
              Cities
            </li>
            <li>
              <input type="checkbox" />
              Nature
            </li>
          </ul>
        </div>
        <div>
          <h4>Price range</h4>
          <ul>
            <li>
              <input type="checkbox" />
              Lower than $20
            </li>
            <li>
              <input type="checkbox" />
              $20 - $100
            </li>
            <li>
              <input type="checkbox" />
              $100 - $200
            </li>
            <li>
              <input type="checkbox" />
              More than $200
            </li>
          </ul>
        </div>
      </aside>
      <div className={styles.filterBtn}>
        <button>Clear</button>
        <button>Save</button>
      </div>
    </div>
  );
};

export default FilterModal;
