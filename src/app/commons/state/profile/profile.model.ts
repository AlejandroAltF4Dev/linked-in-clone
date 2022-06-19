export interface Profile {
  "id": number,
  "first_name": string,
  "last_name": string,
  "email": string,
  "avatar": string,
  "role": string,
  "company": string,
  "banner": string
}

export function createProfile(params: Partial<Profile>) {
  return {} as Profile;
}
