export class FormatTimeService {
  // method to format a time string into xx:xx:xx format
  static formatTime(time: string): string {
    const date = new Date(time);
    return date.toLocaleTimeString();
  }
}
