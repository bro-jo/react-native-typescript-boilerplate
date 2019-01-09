export default class Regex {
  public static readonly emailRegex: RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  public static readonly phoneRegex: RegExp = /^(01[016789]|02|0[3-9]{1}[0-9])-?([0-9]{3,4})-?([0-9]{4})$/;
}
