export interface PointData {
  id: string;
  number: number;
  text: string;
  data: Data;
}

export interface Data {
  date: [number, number];
  dateContain: DateContain[];
}

export interface DateContain {
  yearDate: number;
  text: string;
}