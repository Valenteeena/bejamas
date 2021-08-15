import React from "react";
import styles from "../styles/Home.module.css";

const SideFilter = () => {
  return (
    <aside className={styles.mainSide}>
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
  );
};

export default SideFilter;
