import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { isEmpty } from "../../funcs/Functions";
import { getAllCountries } from "../../store/actions/countriesActions";
import CustomInput from "../common/CustomInput";
import CustomCheckbox from "../common/CustomCheckbox";
import List from "../list/List";
import Card from "../card/Card";
import Spinner from "../common/Spinner";

export const Menu = ({
  countries: { list, selected, loading },
  getAllCountries,
}) => {
  const [regions, setRegions] = useState({
    Africa: true,
    Americas: true,
    Asia: true,
    Europe: true,
    Oceania: true,
    Polar: true,
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
    if (!isEmpty(list) && list !== "loading") {
      const str = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");

      const countriesFilter = list?.filter((country) => {
        const regexp = new RegExp("^.*" + str + ".*$", "i");

        return regexp.test(country.name) && regions[country.region];
      });

      setCountries(countriesFilter);
    }
  }, [search, list, regions]);

  return (
    <div className="menu">
      {loading ? (
        <Spinner />
      ) : !isEmpty(selected) ? (
        <Card />
      ) : (
        <Fragment>
          <div className="menu-control">
            <div className="menu-control__btns">
              {Object.keys(regions).map((region, i) => {
                const checked = regions[region];
                return (
                  <CustomCheckbox
                    key={i}
                    value={region}
                    checked={checked}
                    onChange={() =>
                      setRegions({ ...regions, [region]: !checked })
                    }
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
          <List countries={countriesArr} />
        </Fragment>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  countries: state.countries,
});

export default connect(mapStateToProps, { getAllCountries })(Menu);
