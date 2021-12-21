export interface ParticipantRes {
  id: number;
  body: string;
}

export interface ParticipantWithPlaceType extends ParticipantRes {
  place: number | false;
}
