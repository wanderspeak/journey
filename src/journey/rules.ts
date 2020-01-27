export interface IRuleSet {
  politics: boolean;
  religion: boolean;
  drugs: boolean;
  sexual: boolean;
  nudity: boolean;
  violence: boolean;
  promotion: boolean;
  commercial: boolean;
  offensive: boolean;

  /**
   * Array of ISO 3166 country codes for nations whose laws are
   * enforced on this server.
   */
  jurisdiction: string[] | null;
}

export const FreeSpeechRules = {
  politics: true,
  religion: true,
  drugs: true,
  sexual: true,
  nudity: true,
  violence: true,
  promotion: true,
  commercial: true,
  offensive: true,
  jurisdiction: ['us'],
};

export const FamilyFriendlyRules = {
  politics: false,
  religion: false,
  drugs: false,
  sexual: false,
  nudity: false,
  violence: false,
  promotion: false,
  commercial: false,
  offensive: false,
  jurisdiction: ['us'],
};
