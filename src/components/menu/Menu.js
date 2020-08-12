import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getAllCountries } from "../../store/actions/countriesActions";
import CustomInput from "../common/CustomInput";
import CustomCheckbox from "../common/CustomCheckbox";
import List from "../list/List";

export const Menu = ({ countries, getAllCountries }) => {
  const [regions, setRegions] = useState({
    Africa: true,
    Americas: true,
    Asia: true,
    Europe: true,
    Oceania: true,
  });
  const [search, setSearch] = useState("");
  const [countriesArr, setCountries] = useState(countries || []);

  useEffect(() => {
    getAllCountries();
  }, [getAllCountries]);

  useEffect(() => {
    setCountries(countries || []);
  }, [countries]);

  useEffect(() => {
    if (countries !== "loading") {
      const str = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");

      const countriesFilter = countries?.filter((country) => {
        const regexp = new RegExp("^.*" + str + ".*$", "i");

        return regexp.test(country.name);
      });

      setCountries(countriesFilter);
    }
  }, [search, countries]);

  return (
    <div className="menu">
      <div className="menu-control">
        <div className="menu-control__btns">
          {Object.keys(regions).map((region, i) => {
            const checked = regions[region];
            return (
              <CustomCheckbox
                key={i}
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
      <div className="menu-view">
        <List countries={countriesArr} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  countries: state.countries.list,
});

export default connect(mapStateToProps, { getAllCountries })(Menu);
