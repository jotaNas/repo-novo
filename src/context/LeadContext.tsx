import React, { createContext, useEffect, useState } from "react";
import { Lead } from "../models/Lead";
import { get, save } from "../services/LeadSevice";
import { LeadContextType } from "./LeadContextType";

export const LeadContext = createContext<LeadContextType>({
  leads: [],
  addLead: () => {},
  toggle: () => {},
});

const LeadProvider = (props: any) => {
  const [leads, setLeads] = useState<Lead[]>(get);

  useEffect(() => {
    save(leads);
  }, [leads]);

  const toggle = (lead: Lead) => {
    const index = leads.indexOf(lead);
    leads[index].oportunitiesCheck = !lead.oportunitiesCheck;
    setLeads([...leads]);
  };

  const addLead = (
    name: string,
    phone: string,
    email: string,
    oportunitiesTitle: string,
    oportunitiesCheck: boolean
  ) => {
    const lead: Lead = {
      id: leads.length + 1,
      name,
      phone,
      email,
      oportunitiesTitle,
      oportunitiesCheck,
    };
    setLeads([...leads, lead]);
  };

  return (
    <LeadContext.Provider value={{ leads, addLead, toggle }}>
      {props.children}
    </LeadContext.Provider>
  );
};

export default LeadProvider;
