import React, { createContext, useEffect, useState } from "react";
import { Lead } from "../models/Lead";
import { get, save } from "../services/LeadSevice";
import { OportunitiesContextType } from "./OportunitiesContextType";

export const OportunitiesContext = createContext<OportunitiesContextType>({
  leads: [],
  toggle: () => {},
});

const OportunitiesProvider = (props: any) => {
  const [leads, setLeads] = useState<Lead[]>(get);

  const toggle = (lead: Lead) => {
    const index = leads.indexOf(lead);
    leads[index].oportunitiesCheck = !lead.oportunitiesCheck;
    setLeads([...leads]);
  };

  return (
    <OportunitiesContext.Provider value={{ leads, toggle }}>
      {props.children}
    </OportunitiesContext.Provider>
  );
};

export default OportunitiesProvider;
