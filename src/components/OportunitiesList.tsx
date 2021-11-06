import React, { useContext } from "react";
import { Lead } from "../models/Lead";

import { OportunitiesContextType } from "../context/OportunitiesContextType";
import { OportunitiesContext } from "../context/OportunitiesContext";

interface OportunitiesListItemProps {
  oportunities: Lead;
}

interface Oportunities {
  title: string;
  check: boolean;
}

const OportunitiesList = (props: OportunitiesListItemProps) => {
  const { toggle } = useContext<OportunitiesContextType>(OportunitiesContext);

  const handleChange = () => {
    toggle(props.oportunities);
  };

  const oportunities: Oportunities[] = [
    {
      title: "RPA",
      check: false,
    },
    { title: "Product Digital", check: false },
    { title: "Analytics", check: false },
    { title: "RPM", check: false },
  ];

  return (
    <div>
      <caption>Oportunities*</caption>
      <table className="uk-table uk-table-divider">
        <thead>
          <tr>
            <th className="uk-width-auto">
              <label>
                <input
                  className="uk-checkbox"
                  type="checkbox"
                  checked={props.oportunities.oportunitiesCheck}
                  onChange={handleChange}
                />
              </label>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr className="uk-animation-slide-bottom-medium">
            <td className="uk-width-auto">
              <label>
                <input
                  className="uk-checkbox"
                  type="checkbox"
                  checked={props.oportunities.oportunitiesCheck}
                  onChange={handleChange}
                />
              </label>
            </td>
            <td> {oportunities[0].title}</td>
          </tr>
          <tr className="uk-animation-slide-bottom-medium">
            <td className="uk-width-auto">
              <label>
                <input
                  className="uk-checkbox"
                  type="checkbox"
                  checked={props.oportunities.oportunitiesCheck}
                  onChange={handleChange}
                />
              </label>
            </td>
            <td> {oportunities[1].title}</td>
          </tr>
          <tr className="uk-animation-slide-bottom-medium">
            <td className="uk-width-auto">
              <label>
                <input
                  className="uk-checkbox"
                  type="checkbox"
                  checked={props.oportunities.oportunitiesCheck}
                  onChange={handleChange}
                />
              </label>
            </td>
            <td> {oportunities[2].title}</td>
          </tr>
          <tr className="uk-animation-slide-bottom-medium">
            <td className="uk-width-auto">
              <label>
                <input
                  className="uk-checkbox"
                  type="checkbox"
                  checked={props.oportunities.oportunitiesCheck}
                  onChange={handleChange}
                />
              </label>
            </td>
            <td> {oportunities[3].title}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OportunitiesList;
