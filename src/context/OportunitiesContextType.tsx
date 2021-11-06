import { Lead } from "../models/Lead";

export interface OportunitiesContextType {
  leads: Lead[];
  toggle(leads: Lead): void;
}
