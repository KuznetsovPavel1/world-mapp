import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getAllCountries } from "../../store/actions/countriesActions";
import CustomInput from "../common/CustomInput";
import List from "../list/List";
// import { Card } from "../card/Card";

export const Menu = ({ countries: { list, selected }, getAllCountries }) => {
  const [regions, setRegions] = useState({
    Africa: true,
    Americas: true,
    Asia: true,
    Europe: true,
    Oceania: true,
  });
  const [search, setSearch] = useState("");
  const [countriesArr, setCountries] = useState(list || []);

  useEffect(() => {
    getAllCountries();
  }, [getAllCountries]);

  useEffect(() => {
    setCountries(list || []);
  }, [list]);

  useEffect(() => {
    if (list !== "loading") {
      const str = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");

      const countriesFilter = list?.filter((country) => {
        const regexp = new RegExp("^.*" + str + ".*$", "i");

        return regexp.test(country.name);
      });

      setCountries(countriesFilter);
    }
  }, [search, list]);

  return (
    <div className="menu">
      {/* <div className="menu-block menu-control"> */}
      <div className="menu-control">
        <div className="menu-control__btns">
          {Object.keys(regions).map((region, i) => {
            const checked = regions[region];
            return (
              <CustomInput
                key={i}
                type="checkbox"
                className="custom-form-row-r"
                label={region}
                value={region}
                checked={checked}
                onChange={() => setRegions({ ...regions, [region]: !checked })}
              />
            );
          })}
        </div>
        <CustomInput
          label="Search country"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* area filter */}
        {/* population filter */}
      </div>
      {/* <div className="menu-block menu-view"> */}
      <div className="menu-view">
        <List countries={countriesArr} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  countries: state.countries,
});

export default connect(mapStateToProps, { getAllCountries })(Menu);
