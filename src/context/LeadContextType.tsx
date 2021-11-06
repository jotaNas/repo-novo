import { Lead } from "../models/Lead";

export interface LeadContextType {
  leads: Lead[];
  addLead(
    name: string,
    phone: string,
    email: string,
    oportunitiesTitle: string,
    oportunitiesCheck: boolean
  ): void;
  toggle(leads: Lead): void;
}
