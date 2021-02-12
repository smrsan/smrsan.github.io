import util from "util";

export default function formatStr(...strs: string[]): string {
  return strs.length > 1 ? util.format(...strs) : strs[0];
}
